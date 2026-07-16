"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDb = connectDb;
const mongoose_1 = __importDefault(require("mongoose"));
/**
 * Connect to MongoDB using the MONGODB_URI env var.
 * Call once at startup before the server begins listening.
 */
async function connectDb() {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
        throw new Error("MONGODB_URI is not set. Add it to backend/.env");
    }
    mongoose_1.default.connection.on("error", (err) => {
        console.error("MongoDB connection error:", err.message);
    });
    await mongoose_1.default.connect(uri);
    console.log(`Connected to MongoDB (db: ${mongoose_1.default.connection.name})`);
}
