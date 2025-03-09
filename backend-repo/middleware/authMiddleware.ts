import { Request, Response, NextFunction } from "express";
import { Request as RequestFirebase } from "firebase-functions/v2/https";

const coreAuth = (req: any, res: any) => {
  console.log(req?.headers, 'teststtt')
  console.log(process.env, 'get all env')
  const token = req?.headers?.authorization ?? "Basic INVALID_BASIC_TOKEN";
  const encoded = Buffer.from(`${process.env.APP_BASIC_USERNAME}:${process.env.APP_BASIC_PASSWORD}`, "utf-8").toString('base64');

  // Validate Token
  if (token !== `Basic ${encoded}`) {
    return res.status(401).json({ error: "Unauthorized" });
  }
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>> | void => {
  coreAuth(req, res);
  next();
};

export const authFirebaseMiddleware = (req: RequestFirebase, res: Response, handler: any) => {
  coreAuth(req, res);
  return handler(req, res);
}