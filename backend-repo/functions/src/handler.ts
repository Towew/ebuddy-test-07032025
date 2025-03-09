import { Request, Response } from "express"

export const fetchData = async (req: Request, res: Response) => {
    res.json({
        message: "Test anda berhasil"
    })
}