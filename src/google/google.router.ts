import { Router } from "express";
import { GoogleDriveController } from "./google.controller";

const GoogleDriveRouter = Router();

GoogleDriveRouter.get("/integrate", new GoogleDriveController().integrate);
GoogleDriveRouter.get("/logout", new GoogleDriveController().logout);
GoogleDriveRouter.get("/files", new GoogleDriveController().getFiles);

export { GoogleDriveRouter };
