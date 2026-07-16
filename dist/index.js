"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const http_1 = __importDefault(require("http"));
const dbConnect_js_1 = require("./dbConnect.js");
const route_js_1 = __importDefault(require("./route.js"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const httpServer = http_1.default.createServer(app);
app.use(express_1.default.json());
app.get("/health", (req, res) => {
    res.json({ status: "ok" });
});
app.use("/api", route_js_1.default);
// Wrapped in an async function to support 'await'
async function startServer() {
    try {
        await (0, dbConnect_js_1.connectDb)();
        httpServer.listen(3000, () => {
            console.log("Server is running on http://localhost:3000");
        });
    }
    catch (error) {
        console.error("Error starting server:", error);
        process.exit(1);
    }
}
startServer();
