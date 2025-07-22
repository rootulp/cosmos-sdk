package signing

import (
	"fmt"

	cryptotypes "github.com/cosmos/cosmos-sdk/crypto/types"
	"github.com/cosmos/cosmos-sdk/crypto/types/multisig"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/tx/signing"
)

// VerifySignature verifies a transaction signature contained in SignatureData abstracting over different signing modes
// and single vs multi-signatures.
func VerifySignature(pubKey cryptotypes.PubKey, signerData SignerData, sigData signing.SignatureData, handler SignModeHandler, tx sdk.Tx) error {
	fmt.Printf("Inside VerifySignature\n")
	switch data := sigData.(type) {
	case *signing.SingleSignatureData:
		fmt.Printf("SingleSignatureData: %v\n", data)
		fmt.Printf("handler: %v\n", handler)
		signBytes, err := handler.GetSignBytes(data.SignMode, signerData, tx)
		if err != nil {
			fmt.Printf("GetSignBytes error: %v\n", err)
			return err
		}
		fmt.Printf("signBytes: %v\n", signBytes)
		fmt.Printf("data.Signature: %v\n", data.Signature)
		if !pubKey.VerifySignature(signBytes, data.Signature) {
			fmt.Printf("pubkey.VerifySignature evaluated to false\n")
			return fmt.Errorf("unable to verify single signer signature")
		}
		return nil

	case *signing.MultiSignatureData:
		multiPK, ok := pubKey.(multisig.PubKey)
		if !ok {
			return fmt.Errorf("expected %T, got %T", (multisig.PubKey)(nil), pubKey)
		}
		err := multiPK.VerifyMultisignature(func(mode signing.SignMode) ([]byte, error) {
			return handler.GetSignBytes(mode, signerData, tx)
		}, data)
		if err != nil {
			return err
		}
		return nil
	default:
		return fmt.Errorf("unexpected SignatureData %T", sigData)
	}
}
