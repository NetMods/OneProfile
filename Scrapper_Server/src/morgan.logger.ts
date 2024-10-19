import morgan from "morgan";

const skip = () => {
  const env = process.env.NODE_ENV || "development";
  return env !== "development";
};

const morganMiddleware = morgan(":remote-addr :method :url :status - :response-time ms", { skip });

export default morganMiddleware;
