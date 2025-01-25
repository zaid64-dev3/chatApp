import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import userRoute from "./routes/user.rout.js";
import messageRoute from "./routes/message.route.js";
import { app, server } from "./SoketIO/server.js";

dotenv.config();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

const PORT = process.env.PORT || 10000;
const URI = process.env.MONGODB_URI;

// MongoDB Connection
try {
    mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB");
} catch (error) {
    console.error("Error connecting to MongoDB:", error);
}

// Routes
app.use("/api/user", userRoute);
app.use("/api/message", messageRoute);

// Static Files
if (process.env.NODE_ENV !== "production") {
    const dirPath = path.resolve();
    app.use(express.static(path.join(dirPath, "frontend", "dist")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(dirPath, "frontend", "dist", "index.html"));
    });
}

// Server Listener
server.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT}`);
});
