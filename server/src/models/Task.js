import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: [true, "Protocol title is required"],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    category: {
      type: String,
      default: "General",
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
    // CHANGED: From String to Date for dynamic countdown logic
    deadline: {
      type: Date, 
      default: null,
    },
    status: {
      type: String,
      enum: ["active", "upcoming", "archived"],
      default: "active",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Task", taskSchema);