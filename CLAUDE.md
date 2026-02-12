# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is Celestia's fork of the Cosmos SDK (`release/v0.46.x-celestia` branch), a framework for building application-specific blockchains in Go. It uses CometBFT (v0.38.5) for consensus and Go 1.21+.

## Build Commands

```bash
make build              # Build simapp binary to ./build/
make install            # Install simd to $GOPATH/bin
make build-linux-amd64  # Cross-compile for Linux
```

Build options via `COSMOS_BUILD_OPTIONS`: `secp`, `legacy`, `rocksdb`, `badgerdb`, `cleveldb`, `boltdb`, `nostrip`, `debug`.

## Testing

```bash
make test               # Run all unit tests across all modules
make test-unit          # Unit tests with ledger mock tags
make test-race          # Unit tests with race detector
make test-integration   # Integration tests (in tests/ dir)
make test-e2e           # End-to-end tests (in tests/ dir)
make test-all           # Unit + E2E + integration + race

# Run a single test in a specific module
cd x/bank && go test -run TestSpecificName -mod=readonly ./...

# Run tests for a specific package
go test -mod=readonly -race -timeout 30m -tags='cgo ledger test_ledger_mock' ./x/bank/...
```

The `make test` target iterates over every `go.mod` submodule and runs `go test` in each. Tests use tags: `cgo`, `ledger`, `test_ledger_mock`, `norace`, `e2e`.

## Linting

```bash
make lint               # Run golangci-lint (installs v1.56.2 if needed)
make lint-fix           # Run with auto-fix
make setup-pre-commit   # Install git pre-commit hook (formatting + linting)
```

The linter config is in `.golangci.yml`. Import ordering enforced by `gci`: standard lib, third-party, `cosmossdk.io`, `github.com/cosmos/cosmos-sdk`. Code must be formatted with `gofumpt` (extra rules enabled).

## Protobuf

```bash
make proto-all          # Format, lint, and generate proto code (requires Docker)
make proto-gen          # Generate Go code from .proto files
make proto-lint         # Lint proto files with buf
```

## Architecture

### Monorepo with Multiple Go Modules

The repo contains many independent Go modules coordinated via `go.work`:
- Root module (`github.com/cosmos/cosmos-sdk`) — core SDK
- `cosmossdk.io/core`, `cosmossdk.io/store`, `cosmossdk.io/math`, `cosmossdk.io/log`, etc. — foundation libraries
- `x/{module}` — each SDK module has its own `go.mod`
- `simapp/` — test/reference application
- `tests/` — integration and E2E tests (separate module)

### Key Packages

- **`baseapp/`** — ABCI application implementation, message routing, state management
- **`types/`** — Core types (addresses, coins, context, events, errors, handlers)
- **`codec/`** — Amino and Protobuf serialization
- **`server/`** — CometBFT integration, gRPC server, app configuration
- **`runtime/`** — Module execution wiring
- **`crypto/`** — Key types (secp256k1, ed25519, multisig), Ledger support
- **`client/`** — CLI and gRPC client utilities
- **`depinject/`** — Dependency injection framework for module initialization
- **`collections/`** — Type-safe data structure abstractions over KV store

### Module Pattern (x/{module}/)

Each module follows a consistent structure:
- `keeper/` — Business logic and state access
- `types/` — Message types, storage keys, errors, params
- `module.go` — `AppModule` interface implementation (lifecycle hooks)
- `genesis.go` — Genesis import/export
- `simulation/` — Randomized simulation testing

Modules communicate through **keepers** (direct method calls) and **hooks** (event-driven callbacks). Messages (`Msg` types) are routed to handlers via the module's message server.

### Application Wiring (simapp/)

`simapp/` is the reference app. `NewSimApp()` initializes all keepers, registers modules with the module manager, and configures `BeginBlocker`/`EndBlocker` ordering. New modules must be registered here for integration testing.

## Code Conventions

- Determinism is critical — all state machine code must produce identical results given identical inputs
- Use `require`/`assert` from testify in tests (not `t.Skip` or `t.Fail`)
- Thread safety must be explicitly documented where relevant
- Generated protobuf files (`*.pb.go`, `*.pb.gw.go`, `*.pulsar.go`) should not be edited manually
