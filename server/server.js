// import express from "express";
// import cors from "cors";
// import mongoose from "mongoose";
// import authRoutes from "./src/routes/auth.routes.js";
// import taskRoutes from "./src/routes/task.routes.js"; // Import task routes

// const app = express();

// // --- DEBUG: PROVE THE UPLINK IS WORKING ---
// console.log("------------------------------------------");
// console.log("SYSTEM: Checking Environment Variables...");
// console.log("DATABASE_URI:", process.env.MONGO_URI ? "READY" : "MISSING");
// console.log("PORT_CONFIG:", process.env.PORT || "DEFAULT (5000)");
// console.log("------------------------------------------");

// // --- MIDDLEWARE ---


// const allowedOrigins = [
//    "http://localhost:5173",
//       "https://todo-manager-33sg8idt0-gaffar-s-projects.vercel.app",
// ];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin || allowedOrigins.includes(origin)) {
//         return callback(null, true);
//       }
//       callback(new Error("Not allowed by CORS"));
//     },
//     credentials: true,
//   })
// );

// // --- DATABASE UPLINK ---
// const connectDB = async () => {
//   try {
//     // Note: No need to check for undefined here anymore if the log above says READY
//     const conn = await mongoose.connect(process.env.MONGO_URI);
//     console.log(`--- Neural Core Active: ${conn.connection.host} ---`);
//   } catch (err) {
//     console.error(`--- Uplink Failed: ${err.message} ---`);
//     // If it still fails here, ensure your local MongoDB Compass is actually running!
//   }
// };
// connectDB();

// app.use("/api/auth", authRoutes);
// // ... existing imports


// // ... middle of file
// app.use("/api/auth", authRoutes);
// app.use("/api/tasks", taskRoutes); // Add this line

// // ... rest of server code

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`--- Server Orbiting on Port ${PORT} ---`);
// });



import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import authRoutes from "./src/routes/auth.routes.js";
import taskRoutes from "./src/routes/task.routes.js";

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://todo-manager-theta-beryl.vercel.app",
];

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

// ✅ These were missing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
  }
};

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});