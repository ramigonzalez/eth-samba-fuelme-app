import { Wallet } from "fuels";

// The address of the contract deployed the Fuel testnet
export const CONTRACT_ID =
  "0xebbabac39a4e9856a96264e2adbe8ffab80d56fd3e8e475958f0e25f993e5fca";

//the private key from createWallet.js
export const WALLET_SECRET =
  " 0xfa2a27e8ddaadc0e6e72030ffb734c28b918c1c1b68eaddefe4cd81a00be8458";

// Create a Wallet from given secretKey in this case
// The one we configured at the chainConfig.json
export const wallet = Wallet.fromPrivateKey(
  WALLET_SECRET,
  "http://localhost:4000/graphql"
);
