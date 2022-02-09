import { Response, Request } from "express";

class DropBoxController {
  redirectUrl(req: Request, res: Response) {
    res.send("drop box redirect URL");
  }
}

export { DropBoxController };
