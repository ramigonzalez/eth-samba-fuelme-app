import { Wallet } from "fuels";

// The address of the contract deployed the Fuel testnet
export const CONTRACT_ID =
  "0x2c38161e42ce14abdaa7950c04b13aa340eb67cf196c94b971d5f0175417f4f4";

//the private key from createWallet.js
export const WALLET_SECRET =
  "0x07960a5124cd6e52b595aed727d640aed2e32cc587a34c09f1b48615378df752";

// Create a Wallet from given secretKey in this case
// The one we configured at the chainConfig.json
export const wallet = Wallet.fromPrivateKey(
  WALLET_SECRET,
  "https://beta-3.fuel.network/graphql"
);
