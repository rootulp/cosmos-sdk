package keys

import (
	"fmt"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/spf13/cobra"
)

func DebugCommand() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "debug",
		Short: "debug",
		Long:  `debug`,
		Args:  cobra.ExactArgs(0),
		RunE:  runDebugCmd,
	}
	return cmd
}

func runDebugCmd(cmd *cobra.Command, args []string) error {
	clientCtx, err := client.GetClientQueryContext(cmd)
	if err != nil {
		return err
	}
	backend := clientCtx.Keyring.Backend()
	fmt.Printf("keyring backend %v", backend)
	return nil
}
