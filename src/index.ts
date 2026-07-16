import express, { Request, Response } from "express";
import dotenv from "dotenv";
import http from "http";
import { connectDb } from "./dbConnect.js";
import mainRouter from "./route.js";

dotenv.config();

const app = express();

const httpServer = http.createServer(app);

app.use(express.json());

app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "ok" });
});

app.use("/api", mainRouter);

// Wrapped in an async function to support 'await'
async function startServer(): Promise<void> {
  try {
    await connectDb();

    httpServer.listen(3000, () => {
      console.log("Server is running on http://localhost:3000");
    });
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
}

startServer();
