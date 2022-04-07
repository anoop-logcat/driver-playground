import { Router } from "express";
import { AppController } from "./app.controller";
import { DropBoxRouter } from "./dropbox/dropbox.router";
import { GoogleDriveController } from "./google/google.controller";
import { GoogleDriveRouter } from "./google/google.router";
import { GlobalMiddleware } from "./libs/global.middleware";

const AppRouter = Router();

AppRouter.use(GlobalMiddleware);

AppRouter.use("/dropbox", DropBoxRouter);
AppRouter.use("/drive", GoogleDriveRouter);
AppRouter.get("/googledrive-auth", new GoogleDriveController().redirectUrl);

AppRouter.get("/", new AppController().helloWorld);

export { AppRouter };
