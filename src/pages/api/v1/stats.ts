//NextApiRequest,
import type { NextApiResponse } from "next"

export default async function apiResult(/*req: NextApiRequest,*/ res: NextApiResponse) {

    const result = {
        "total_value_locked": "3053358.84966793253745727328352184554737",
        "total_trading_volume": "47895041.8509414949115092949256804",
        "locked_ratio": "0.3924879660340893",
        "wmtr_price": "1.1070087410623041"
    }

    res.status(200).json({
        result: "ok",
        success: true,
        status: 200,
        data: result,
        message: "ok"
    });

    return res;
}