import express from "express";
import dotenv from "dotenv";
import http from "http";
import { connectDb } from "./dbConnect.js";
import mainRouter from "./route.js";

dotenv.config();

const app = express();

const httpServer = http.createServer(app);

await connectDb();

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.use("/api", mainRouter);


httpServer.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

