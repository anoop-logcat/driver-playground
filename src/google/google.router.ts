import { Router } from "express";
import { GoogleDriveController } from "./google.controller";

const GoogleDriveRouter = Router();

GoogleDriveRouter.get("/redirect", new GoogleDriveController().redirectUrl);
GoogleDriveRouter.get("/integrate", new GoogleDriveController().integrate);

export { GoogleDriveRouter };