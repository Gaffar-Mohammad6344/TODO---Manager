import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./src/routes/auth.routes.js";
import taskRoutes from "./src/routes/task.routes.js"; // Import task routes

const app = express();

// --- DEBUG: PROVE THE UPLINK IS WORKING ---
console.log("------------------------------------------");
console.log("SYSTEM: Checking Environment Variables...");
console.log("DATABASE_URI:", process.env.MONGO_URI ? "READY" : "MISSING");
console.log("PORT_CONFIG:", process.env.PORT || "DEFAULT (5000)");
console.log("------------------------------------------");

// --- MIDDLEWARE ---
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());

// --- DATABASE UPLINK ---
const connectDB = async () => {
  try {
    // Note: No need to check for undefined here anymore if the log above says READY
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`--- Neural Core Active: ${conn.connection.host} ---`);
  } catch (err) {
    console.error(`--- Uplink Failed: ${err.message} ---`);
    // If it still fails here, ensure your local MongoDB Compass is actually running!
  }
};
connectDB();

app.use("/api/auth", authRoutes);
// ... existing imports


// ... middle of file
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes); // Add this line

// ... rest of server code

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`--- Server Orbiting on Port ${PORT} ---`);
});