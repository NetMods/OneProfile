import { httpServer } from "app";

const startServer = () => {
  httpServer.listen(process.env.X_PORT, () => {
    console.log(`⚙️ Server is running on port ${process.env.X_PORT}`);
  });
};

startServer();
