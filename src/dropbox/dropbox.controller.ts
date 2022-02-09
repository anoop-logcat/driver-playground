import { Response, Request } from "express";
import { DropBoxService } from "../libs/dropbox.service";

class DropBoxController {
  async redirectUrl(req: Request, res: Response) {
    const token = await new DropBoxService().getTokenByAuthCode(
      String(req.query.code)
    );
    res.status(200).send({
      status: "ok",
      token,
    });
  }

  async integrate(req: Request, res: Response) {
    res.redirect(new DropBoxService().authURL());
  }

  async filesListFolder(req: Request, res: Response) {
    const { access_token } = req.body;
    const dbx = new DropBoxService().initialize(access_token);
    const response = await dbx.filesListFolder({ path: "" });
    res.status(200).send(response.result);
  }

  async getUserDetails(req: Request, res: Response) {
    const { access_token } = req.body;
    const dbx = new DropBoxService().initialize(access_token);
    const response = await dbx.usersGetCurrentAccount();
    res.status(200).send(response.result);
  }
}

export { DropBoxController };
