import type { NextApiRequest, NextApiResponse } from "next"

export default async function apiResult(req: NextApiRequest, res: NextApiResponse) {

    const result = [
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
        },
        {
            "id": 2,
            "chainId": 83,
            "name": "Wrapped MTR",
            "symbol": "WMTR",
            "address": "0x55E22D0dDD17FDd3F5bB2A87E8bea1f81FAcBe63",
            "decimals": 18,
            "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png",
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
            "decimals": 18,
            "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x55d398326f99059fF775485246999027B3197955/logo.png",
            "isWhitelisted": true,
            "isDisplay": true,
            "whiteTime": "2022-04-01T09:48:00Z"
          },
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