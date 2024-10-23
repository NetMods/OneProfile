import "dotenv/config";
import { Express } from "express"
import { createServer } from "http";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import morganMiddleware from "morgan.logger";
import router from "./router";
import rateLimit from "express-rate-limit";
import { notFoundHandler } from "middlewares/errorhandler";

const limiter = rateLimit({
  windowMs: 1000,
  max: 3,
})

const app: Express = express();

app.use(
  cors({
    origin: process.env.X_CORS_ORIGIN === "*" ? "*" : process.env.X_CORS_ORIGIN?.split(","),
    credentials: true,
  }),
);
app.use(limiter)

app.use(morganMiddleware);

app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());

app.use("/api/v1", router)

app.use(notFoundHandler)

export const httpServer = createServer(app);
