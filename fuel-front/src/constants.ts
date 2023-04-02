import { Wallet } from "fuels";

// The address of the contract deployed the Fuel testnet
export const CONTRACT_ID =
  "0xebbabac39a4e9856a96264e2adbe8ffab80d56fd3e8e475958f0e25f993e5fca";

//the private key from createWallet.js
export const WALLET_SECRET =
  "0x8d83c3cc2e06e07dcefe9b34a9b9e64aea954de9ef3837173b6df24845392edc";

// Create a Wallet from given secretKey in this case
// The one we configured at the chainConfig.json
// export const wallet = Wallet.fromPrivateKey(
//   WALLET_SECRET,
//   "http://localhost:4000/graphql"
// );
