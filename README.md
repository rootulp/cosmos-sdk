# cosmos-sdk

This repo is a fork of the [cosmos/cosmos-sdk](https://github.com/cosmos/cosmos-sdk) with the following changes:

## Changes

Rationale for the fork

1. Early adoption of `PrepareProposal` and `ProcessProposal`. This was added to the fork because at the time of development, a Cosmos SDK release was not available with these ABCI methods.
1. The addition of `chainID` to baseapp. (TODO: why?)
1. Overriding the consensus params version to the app version. (TODO: why?)

Smaller changes

1. The addition of a `SetTxDecoder` on tx config
1. `start_time` added to vesting MsgCreateVestingAccount
1. In server/util.go remove `conf.Consensus.TimeoutCommit = 5 * time.Second`
1. In genutil/client/cli/init.go ensure that the node starts with DefaultConsensusParams
    1. In server/util.go add DefaultConsensusParams on Context
1. In auth/tx/query.go disable the prove flag when querying transactions
1. Add a voter attribute to the EventTypeProposalVote event

Changes made that we may be able to revert

1. Override the default keyringBackend from `os` to `test`. Maybe move to celestia-app
1. Increase DefaultGasLimit from `200000` to `210000`. Why? If we needed, can we move this to celestia-app?
1. Remove `Evidence` from grpc/tmservice/types.pb.go. Why? seems residual and we can prob revert this.
1. `SignLedgerAminoJSON` in keyring b/c Ledger issue. Can potentially revert by downgrading to cosmos-ledger-go 0.12.4
1. Override simapp test helpers `DefaultGenTxGas` from 10000000 to 2600000

Changes made to make it easier to maintain this fork

1. Modify CODEOWNERS to Celestia maintainers
1. Modify Github CI workflows to include `release/**` branches
1. Modify Github CI workflows to not run some things
1. Disable staticcheck golangci lint
1. Delete cosmovisor

## Branches

1. [v0.46.x-celestia](https://github.com/celestiaorg/cosmos-sdk/tree/release/v0.46.x-celestia) is based on the `v0.46.x` release branch from upstream
2. [main](https://github.com/celestiaorg/cosmos-sdk/tree/main) contains breaking changes (TODO: elaborate on why?)

## Contributing

This repo intends on preserving the minimal possible diff with cometbft/cometbft to make fetching upstream changes easy. If the proposed contribution is

* specific to Celestia: consider if [celestia-app](https://github.com/celestiaorg/celestia-app) is a better target
* not specific to Celestia: consider making the contribution upstream in [cosmos/cosmos-sdk](https://github.com/cosmos/cosmos-sdk)
