import { Router } from "express";
import { AppController } from "./app.controller";
import { GlobalMiddleware } from "./libs/global.middleware";

const AppRouter = Router();
AppRouter.use(GlobalMiddleware);
AppRouter.get("/", new AppController().helloWorld);

export { AppRouter };
