import { Router } from "express";
import { DropBoxController } from "./dropbox.controller";

const DropBoxRouter = Router();

DropBoxRouter.get("/redirect", new DropBoxController().redirectUrl);
DropBoxRouter.get("/integrate", new DropBoxController().integrate);
DropBoxRouter.get("/files", new DropBoxController().filesListFolder);
DropBoxRouter.get("/user", new DropBoxController().getUserDetails);

export { DropBoxRouter };
