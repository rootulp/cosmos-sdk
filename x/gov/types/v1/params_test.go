package v1

import (
	"testing"
	time "time"

	"github.com/stretchr/testify/require"
)

func TestValidateBasic(t *testing.T) {
	t.Run("default params should pass", func(t *testing.T) {
		params := DefaultParams()
		err := params.ValidateBasic()
		require.NoError(t, err)
	})

	t.Run("params with voting period == expedited voting period should pass", func(t *testing.T) {
		params := DefaultParams()
		params.ExpeditedVotingPeriod = params.VotingPeriod
		err := params.ValidateBasic()
		require.NoError(t, err)
	})

	t.Run("params with voting period less than expedited voting period should fail", func(t *testing.T) {
		params := DefaultParams()

		oneHour := time.Hour
		params.VotingPeriod = &oneHour

		twoHours := 2 * time.Hour
		params.ExpeditedVotingPeriod = &twoHours

		err := params.ValidateBasic()
		require.Error(t, err)
	})
}
