import { NextFunction, Request, Response } from "express";

type CustomError = Error & { status?: number };

export const notFoundHandler = async (req: Request, res: Response, next: NextFunction) => {
  const error: CustomError = new Error("Route not Found");
  error.status = 404;
  next(error);
};

