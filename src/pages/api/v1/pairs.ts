//NextApiRequest,
import type { NextApiResponse } from "next"

export default async function apiResult(/*req: NextApiRequest,*/ res: NextApiResponse) {

    const result = [
        {
            "address": "0x7dB9c49611c2D749146234eCdA163E83F33Abea1",
            "symbol": "sAMM-USDT/BUSD",
            "decimals": 18,
            "isStable": true,
            "totalSupply": "148026.1384916143664855",
            "reserve0": "160223.8577236312693094",
            "reserve1": "135832.1300565505558811",
            "token0": {
              "id": 1,
              "chainId": 56,
              "name": "Tether USD",
              "symbol": "USDT",
              "address": "0x55d398326f99059fF775485246999027B3197955",
              "decimals": 18,
              "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x55d398326f99059fF775485246999027B3197955/logo.png",
              "isWhitelisted": true,
              "isDisplay": true,
              "whiteTime": "2022-04-01T09:48:00Z"
            },
            "token1": {
              "id": 7,
              "chainId": 56,
              "name": "BUSD Token",
              "symbol": "BUSD",
              "address": "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
              "decimals": 18,
              "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/logo.png",
              "isWhitelisted": true,
              "isDisplay": true,
              "whiteTime": "2022-04-01T09:48:00Z"
            },
            "gauge": {
              "address": "0x864a4bF69b1d58a7772f68C32fFD0Bfc9d9C0e00",
              "bribeAddress": "0x36cDab74F5Fc9af034BB5FAb303F332bbc6f4620",
              "decimals": 18,
              "totalSupply": "148026.1384916143664845",
              "reserve0": "160223.8577236312693083",
              "reserve1": "135832.1300565505558802",
              "weight": "544893.9503319071124062",
              "weightPercent": "0.1099895997614302",
              "apr": "19.9456213474573",
              "bribeApr": "0",
              "feeApr": "1090.5692659600937",
              "bribes": [
                {
                  "rewardRate": "0.0000000661375661",
                  "rewardAmount": "0.002205583941202",
                  "token": {
                    "id": 29,
                    "chainId": 56,
                    "name": "DDDX",
                    "symbol": "DDDX",
                    "address": "0x4B6ee8188d6Df169E1071a7c96929640D61f144f",
                    "decimals": 18,
                    "logoURI": "https://dddx.io/tokens/govToken.png",
                    "isWhitelisted": true,
                    "isDisplay": true,
                    "whiteTime": "2022-04-01T09:48:01Z"
                  }
                },
                {
                  "rewardRate": "0.0007031846634463",
                  "rewardAmount": "0.0012942760715584",
                  "token": {
                    "id": 1,
                    "chainId": 56,
                    "name": "Tether USD",
                    "symbol": "USDT",
                    "address": "0x55d398326f99059fF775485246999027B3197955",
                    "decimals": 18,
                    "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x55d398326f99059fF775485246999027B3197955/logo.png",
                    "isWhitelisted": true,
                    "isDisplay": true,
                    "whiteTime": "2022-04-01T09:48:00Z"
                  }
                },
                {
                  "rewardRate": "0.0006174985231054",
                  "rewardAmount": "0.0016296439834295",
                  "token": {
                    "id": 7,
                    "chainId": 56,
                    "name": "BUSD Token",
                    "symbol": "BUSD",
                    "address": "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
                    "decimals": 18,
                    "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/logo.png",
                    "isWhitelisted": true,
                    "isDisplay": true,
                    "whiteTime": "2022-04-01T09:48:00Z"
                  }
                },
                {
                  "rewardRate": "0.0000016534391534",
                  "rewardAmount": "0.0000078776266353",
                  "token": {
                    "id": 16,
                    "chainId": 56,
                    "name": "USD Coin",
                    "symbol": "USDC",
                    "address": "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
                    "decimals": 18,
                    "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d/logo.png",
                    "isWhitelisted": true,
                    "isDisplay": true,
                    "whiteTime": "2022-04-01T09:48:00Z"
                  }
                },
                {
                  "rewardRate": "0.0008267195767196",
                  "rewardAmount": "0.0019536365219418",
                  "token": {
                    "id": 26,
                    "chainId": 56,
                    "name": "dForce",
                    "symbol": "DF",
                    "address": "0x4A9A2b2b04549C3927dd2c9668A5eF3fCA473623",
                    "decimals": 18,
                    "logoURI": "https://s2.coinmarketcap.com/static/img/coins/64x64/4758.png",
                    "isWhitelisted": true,
                    "isDisplay": true,
                    "whiteTime": "2022-04-06T14:03:00Z"
                  }
                }
              ]
            }
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