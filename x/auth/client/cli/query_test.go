package cli

import (
	"testing"

	"github.com/stretchr/testify/require"
)

func TestParseSigs(t *testing.T) {
	cases := []struct {
		name       string
		args       []string
		expErr     bool
		expNumSigs int
	}{
		{"no args", []string{}, true, 0},
		{"empty args", []string{""}, true, 0},
		{"too many args", []string{"foo", "bar"}, true, 0},
		{"1 sig", []string{"foo"}, false, 1},
		{"3 sigs", []string{"foo,bar,baz"}, false, 3},
	}

	for _, tc := range cases {
		sigs, err := parseSigArgs(tc.args)
		if tc.expErr {
			require.Error(t, err)
		} else {
			require.NoError(t, err)
			require.Equal(t, tc.expNumSigs, len(sigs))
		}
	}
}

func TestQueryTxCmd(t *testing.T) {
	cmd := QueryTxCmd()
	cmd.SetArgs([]string{"8C4DCF4490560A3AD5C1B0D22B656FA444292CB0CF35F6EA30100F050244069A"})
	cmd.Execute()
}
