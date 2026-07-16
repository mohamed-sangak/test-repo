const express = require("express");
const dotenv = require("dotenv");
const http = require("http");
const { connectDb } = require("./dbConnect.js");
const mainRouter = require("./route.js");

dotenv.config();

const app = express();

const httpServer = http.createServer(app);

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.use("/api", mainRouter);

// Wrapped in an async function to support 'await' in CommonJS
async function startServer() {
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