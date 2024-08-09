import express from "express";
import connectDB from "./utils/db";
import { app } from "./app"; // Assuming app is exported from app.ts
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is connected with port ${process.env.PORT}`);
  connectDB();
});
