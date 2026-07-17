import Task from "../models/Task.js";
import { sendResponse } from "../utils/apiResponse.js";

/**
 * @desc    Initialize a new task protocol with live deadline
 * @route   POST /api/tasks
 */
export const createTask = async (req, res) => {
  try {
    const { title, description, category, priority, deadline } = req.body;

    if (!title) {
      return sendResponse(res, 400, "Protocol Error: Title required for initialization");
    }

    const task = await Task.create({
      user: req.user._id, // Injected by protect middleware
      title,
      description,
      category: category || "General",
      priority: priority || "medium",
      deadline: deadline || null, // Stores ISO Date string as Date object
    });

    sendResponse(res, 201, "Protocol Committed to Matrix", task);
  } catch (error) {
    console.error("CREATE_TASK_ERROR:", error);
    sendResponse(res, 500, "Node Initialization Failed", error.message);
  }
};

/**
 * @desc    Synchronize all neural stacks (Sorted by Urgency)
 * @route   GET /api/tasks
 */
export const getTasks = async (req, res) => {
  try {
    // Sort logic: 1. Tasks with deadlines soonest first, 2. Then by newest created
    const tasks = await Task.find({ user: req.user._id })
      .sort({ deadline: 1, createdAt: -1 });
    
    sendResponse(res, 200, "Neural Stacks Synchronized", tasks);
  } catch (error) {
    console.error("GET_TASKS_ERROR:", error);
    sendResponse(res, 500, "Matrix Retrieval Failed", error.message);
  }
};

/**
 * @desc    Recalibrate an existing protocol (Update title, deadline, status, etc.)
 * @route   PATCH /api/tasks/:id
 */
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;

    // 1. Verify existence and clearance
    let task = await Task.findById(id);

    if (!task) {
      return sendResponse(res, 404, "Protocol Node Not Found");
    }

    // 2. Security Check
    if (task.user.toString() !== req.user._id.toString()) {
      return sendResponse(res, 401, "Unauthorized Recalibration Attempt");
    }

    // 3. Apply updates (including new deadline if provided)
    task = await Task.findByIdAndUpdate(
      id,
      req.body,
      { 
        returnDocument: 'after', // Fixed modern Mongoose syntax
        runValidators: true 
      }
    );

    sendResponse(res, 200, "Neural Matrix Recalibrated", task);
  } catch (error) {
    console.error("UPDATE_TASK_ERROR:", error);
    sendResponse(res, 500, "Protocol Recalibration Failed", error.message);
  }
};

/**
 * @desc    Terminate a task protocol (Delete)
 * @route   DELETE /api/tasks/:id
 */
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);

    if (!task) {
      return sendResponse(res, 404, "Protocol Node Not Found");
    }

    // Security Check
    if (task.user.toString() !== req.user._id.toString()) {
      return sendResponse(res, 401, "Unauthorized Termination Attempt");
    }

    await task.deleteOne();
    sendResponse(res, 200, "Node Successfully Terminated from Matrix");
  } catch (error) {
    console.error("DELETE_TASK_ERROR:", error);
    sendResponse(res, 500, "Termination Sequence Failed", error.message);
  }
};