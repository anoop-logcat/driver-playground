import { Response, Request } from "express";
import { DriveService } from "../libs/drive.service";

class GoogleDriveController {
  async redirectUrl(req: Request, res: Response) {
    const token = await new DriveService().getTokenByAuthCode(
      String(req.query.code)
    );
    res.status(200).send({
      status: "ok",
      token,
    });
  }

  async logout(req: Request, res: Response) {
    await new DriveService().logOut();
    res.status(200).send({
      message: "Logged Out Successfully",
    });
  }

  async integrate(req: Request, res: Response) {
    res.redirect(new DriveService().authURL());
  }

  async getFiles(req: Request, res: Response) {
    const { token } = req.body;
    const response = await new DriveService().getDriveFiles(token);
    res.status(200).send(response);
  }
}

export { GoogleDriveController };
