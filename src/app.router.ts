import { Router } from "express";
import { AppController } from "./app.controller";
import { DropBoxRouter } from "./dropbox/dropbox.router";
import { GoogleDriveRouter } from "./google/google.router";
import { GlobalMiddleware } from "./libs/global.middleware";

const AppRouter = Router();

AppRouter.use(GlobalMiddleware);

AppRouter.use("/dropbox", DropBoxRouter);
AppRouter.use("/drive", GoogleDriveRouter);

AppRouter.get("/", new AppController().helloWorld);

export { AppRouter };
