import { Response, Request } from "express";

class AppController {
  helloWorld(req: Request, res: Response) {
    res.send("Hello world!");
  }
}

export { AppController };
