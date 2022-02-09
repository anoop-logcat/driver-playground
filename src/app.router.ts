import { Router } from "express";
import { AppController } from "./app.controller";
import { DropBoxRouter } from "./dropbox/dropbox.router";
import { GlobalMiddleware } from "./libs/global.middleware";

const AppRouter = Router();

AppRouter.use(GlobalMiddleware);

AppRouter.use("/dropbox", DropBoxRouter);

AppRouter.get("/", new AppController().helloWorld);

export { AppRouter };
