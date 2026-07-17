import express from "express";
import { 
  getTasks, 
  createTask, 
  deleteTask, 
  updateTask  // Import the new function
} from "../controllers/task.controller.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.use(protect);

router.route("/")
  .get(getTasks)
  .post(createTask);

router.route("/:id")
  .put(updateTask)    // Added this for full updates
  .patch(updateTask)  // Added this for partial updates (e.g., just marking complete)
  .delete(deleteTask);

export default router;