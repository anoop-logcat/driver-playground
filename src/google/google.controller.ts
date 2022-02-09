import { Response, Request } from "express";

class GoogleDriveController {
  async redirectUrl(req: Request, res: Response) {
    res.status(200).send({
      status: "ok",
      message: "redirect",
    });
  }

  async integrate(req: Request, res: Response) {
    res.status(200).send({
      status: "ok",
      message: "integrate",
    });
  }
}

export { GoogleDriveController };
