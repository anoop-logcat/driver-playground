import express, { Application } from "express";
import { urlencoded, json } from "body-parser";
import helmet from "helmet";
import cors from "cors";
require("dotenv").config();
import { AppRouter } from "./app.router";

const app: Application = express();

app.use(helmet());
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());
app.use("/", AppRouter);

app.listen(process.env.PORT, () => {
  console.log("Server is running at " + process.env.PORT);
});
