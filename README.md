# cosmos-sdk

This repo is a fork of [cosmos/cosmos-sdk](https://github.com/cosmos/cosmos-sdk) with a few modifications.

## Modifications

Larger modifications include:

1. Early adoption of `PrepareProposal` and `ProcessProposal`. This was added to the fork because at the time of development, a Cosmos SDK release was not available with these ABCI methods.
1. The addition of `chainID` to baseapp.
1. Overriding the consensus params version to the app version.

Smaller modifications include:

1. The addition of a `SetTxDecoder` on tx config so that celestia-app can override the default tx decoder with one that supports decoding `BlobTx`s.
1. The addition of a `start_time` to the vesting module's `MsgCreateVestingAccount` so that vesting accounts can be created with a delayed start time.
1. The addition of a voter attribute to the `EventTypeProposalVote` event

Modifications that need to be investigated:

1. In server/util.go remove `conf.Consensus.TimeoutCommit = 5 * time.Second`
1. In genutil/client/cli/init.go ensure that the node starts with DefaultConsensusParams
    1. In server/util.go add DefaultConsensusParams on Context

Modifications that make it easier to maintain this fork:

1. Modify CODEOWNERS to Celestia maintainers
1. Modify Github CI workflows to include `release/**` branches
1. Modify Github CI workflows to not run some things
1. Delete cosmovisor

Modifications that may be revertable:

1. Override the default keyringBackend from `os` to `test`. Maybe move to celestia-app
1. Increase `DefaultGasLimit` from 200000 to 210000.
1. Remove `Evidence` from grpc/tmservice/types.pb.go.
1. The addition of `SignLedgerAminoJSON` in keyring b/c Ledger issue.
1. Override simapp test helpers `DefaultGenTxGas` from 10000000 to 2600000.
1. Disable staticcheck golangci lint after fixing lint errors.
1. In auth/tx/query.go disable the prove flag when querying transactions

## Branches

1. [v0.46.x-celestia](https://github.com/celestiaorg/cosmos-sdk/tree/release/v0.46.x-celestia) is based on the `v0.46.x` release branch from upstream
2. [main](https://github.com/celestiaorg/cosmos-sdk/tree/main) contains breaking changes (TODO: elaborate on why?)

## Contributing

This repo intends on preserving the minimal possible diff with cometbft/cometbft to make fetching upstream changes easy. If the proposed contribution is

* specific to Celestia: consider if [celestia-app](https://github.com/celestiaorg/celestia-app) is a better target
* not specific to Celestia: consider making the contribution upstream in [cosmos/cosmos-sdk](https://github.com/cosmos/cosmos-sdk)
