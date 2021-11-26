import { NextFunction, Response, Request } from "express";

function GlobalMiddleware(req: Request, res: Response, next: NextFunction) {
  console.log(`METHOD : ${req.method} PATH : ${req.path}`);
  next();
}

export { GlobalMiddleware };
