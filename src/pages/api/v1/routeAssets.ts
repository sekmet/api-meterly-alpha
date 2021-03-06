//NextApiRequest,
import type { NextApiResponse } from "next"

export default async function apiResult(/*req: NextApiRequest,*/ res: NextApiResponse) {

    const result = [
        /*{
          "id": 27,
          "chainId": 83,
          "name": "Dai Token",
          "symbol": "DAI",
          "address": "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
          "decimals": 18,
          "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3/logo.png",
          "isWhitelisted": true,
          "isDisplay": true,
          "whiteTime": "2022-04-01T09:48:00Z"
        },
        {
          "id": 16,
          "chainId": 83,
          "name": "USD Coin",
          "symbol": "USDC",
          "address": "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
          "decimals": 18,
          "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d/logo.png",
          "isWhitelisted": true,
          "isDisplay": true,
          "whiteTime": "2022-04-01T09:48:00Z"
        },*/
        {
          "id": 2,
          "chainId": 83,
          "name": "Wrapped MTR",
          "symbol": "WMTR",
          "address": "0x55E22D0dDD17FDd3F5bB2A87E8bea1f81FAcBe63",
          "decimals": 18,
          "logoURI": "https://raw.githubusercontent.com/meterio/token-list/master/data/MTR/logo.png",
          "isWhitelisted": true,
          "isDisplay": true,
          "whiteTime": "2022-04-01T09:48:00Z"
        },
        {
          "id": 1,
          "chainId": 83,
          "name": "Tether USD",
          "symbol": "USDT",
          "address": "0x9651B11A024954B713C03b8E8DeB0CdFa5291CE9",
          "decimals": 6,
          "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x55d398326f99059fF775485246999027B3197955/logo.png",
          "isWhitelisted": true,
          "isDisplay": true,
          "whiteTime": "2022-04-01T09:48:00Z"
        },
        {
          "id": 7,
          "chainId": 83,
          "name": "BUSD Token",
          "symbol": "BUSD",
          "address": "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
          "decimals": 6,
          "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/logo.png",
          "isWhitelisted": true,
          "isDisplay": true,
          "whiteTime": "2022-04-01T09:48:00Z"
        }
      ]

    res.status(200).json({
        result: "ok",
        success: true,
        status: 200,
        data: result,
        message: "ok"
    });

    return res;
}