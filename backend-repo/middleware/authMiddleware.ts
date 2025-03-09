import { Request, Response, NextFunction } from "express";

export const authMiddleware = (req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>> | void => {
  const token = req?.headers?.authorization ?? "Basic INVALID_BASIC_TOKEN";
  const encoded = Buffer.from(`${process.env.APP_BASIC_USERNAME}:${process.env.APP_BASIC_PASSWORD}`, "utf-8").toString('base64');

  // Validate Token
  if (token !== `Basic ${encoded}`) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  
  next();
};