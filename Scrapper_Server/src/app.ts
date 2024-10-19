import "dotenv/config";
import { createServer } from "http";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import morganMiddleware from "morgan.logger";

const app = express();

app.use(
  cors({
    origin: process.env.X_CORS_ORIGIN === "*" ? "*" : process.env.X_CORS_ORIGIN?.split(","),
    credentials: true,
  }),
);
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(morganMiddleware);

export const httpServer = createServer(app);
