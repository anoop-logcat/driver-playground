import { Router } from "express";
import { DropBoxController } from "./dropbox.controller";

const DropBoxRouter = Router();

DropBoxRouter.get("/auth/redirect", new DropBoxController().redirectUrl);

export { DropBoxRouter };
