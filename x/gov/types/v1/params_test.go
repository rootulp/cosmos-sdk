package v1

import (
	"testing"

	"github.com/stretchr/testify/require"
)

func TestValidateBasic(t *testing.T) {
	t.Run("default params should pass ValidateBasic", func(t *testing.T) {
		params := DefaultParams()
		err := params.ValidateBasic()
		require.NoError(t, err)
	})

	t.Run("params with expedited voting period equal to voting period should pass ValidateBasic", func(t *testing.T) {
		params := DefaultParams()
		params.ExpeditedVotingPeriod = params.VotingPeriod
		err := params.ValidateBasic()
		require.NoError(t, err)
	})
}
