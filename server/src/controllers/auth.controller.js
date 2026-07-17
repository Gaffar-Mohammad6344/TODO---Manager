// import User from "../models/User.js";
// import jwt from "jsonwebtoken";
// import { sendResponse } from "../utils/apiResponse.js";

// const generateToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
// };

// export const register = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     const userExists = await User.findOne({ email });
//     if (userExists) return sendResponse(res, 400, "Node already exists in database");

//     // Creating the user will now trigger the fixed pre-save hook
//     const user = await User.create({ name, email, password });

//     const token = generateToken(user._id);

//     sendResponse(res, 201, "Neural Uplink Established", {
//       user: { 
//         id: user._id, 
//         name: user.name, 
//         email: user.email,
//         sector: user.sector,
//         rank: user.rank 
//       },
//       token
//     });
//   } catch (error) {
//     console.error("REGISTER_ERROR:", error);
//     sendResponse(res, 500, "Protocol Initialization Failed", error.message);
//   }
// };

// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // 1. Fetch user and explicitly include password
//     const user = await User.findOne({ email }).select("+password");
    
//     if (!user) {
//       return sendResponse(res, 401, "Invalid Credentials / Access Denied");
//     }

//     // 2. Compare password (using the method in User.js)
//     const isMatch = await user.comparePassword(password, user.password);
//     if (!isMatch) {
//       return sendResponse(res, 401, "Invalid Credentials / Access Denied");
//     }

//     // 3. Generate token
//     const token = generateToken(user._id);

//     sendResponse(res, 200, "Welcome Back, Overseer", {
//       user: { 
//         id: user._id, 
//         name: user.name, 
//         email: user.email,
//         sector: user.sector,
//         rank: user.rank 
//       },
//       token
//     });
//   } catch (error) {
//     console.error("LOGIN_ERROR:", error);
//     sendResponse(res, 500, "Authentication Protocol Error", error.message);
//   }
// };

import User from "../models/User.js";
import jwt from "jsonwebtoken";
import { sendResponse } from "../utils/apiResponse.js";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 1. Validation check
    const userExists = await User.findOne({ email });
    if (userExists) {
      return sendResponse(res, 400, "Uplink Denied: This email node is already registered.");
    }

    // 2. Create User (triggers hashing in User model)
    const user = await User.create({ name, email, password });

    // 3. Generate Token
    const token = generateToken(user._id);

    // 4. Success Response
    sendResponse(res, 201, "Neural Identity Created Successfully", {
      user: { 
        id: user._id, 
        name: user.name, 
        email: user.email,
        sector: user.sector,
        rank: user.rank 
      },
      token
    });
  } catch (error) {
    console.error("REGISTER_ERROR:", error);
    sendResponse(res, 500, "System Error: Protocol Initialization Failed", error.message);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");
    
    if (!user) {
      return sendResponse(res, 401, "Access Denied: Invalid Credentials");
    }

    const isMatch = await user.comparePassword(password, user.password);
    if (!isMatch) {
      return sendResponse(res, 401, "Access Denied: Security Key Mismatch");
    }

    const token = generateToken(user._id);

    sendResponse(res, 200, "Welcome Back, Overseer", {
      user: { 
        id: user._id, 
        name: user.name, 
        email: user.email,
        sector: user.sector,
        rank: user.rank 
      },
      token
    });
  } catch (error) {
    console.error("LOGIN_ERROR:", error);
    sendResponse(res, 500, "Authentication Protocol Error", error.message);
  }
};

// src/controllers/auth.controller.js

export const getMe = async (req, res) => {
  try {
    // req.user is populated by the 'protect' middleware
    const user = await User.findById(req.user._id);
    
    sendResponse(res, 200, "Neural Profile Retrieved", {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        sector: user.sector,
        rank: user.rank
      }
    });
  } catch (error) {
    sendResponse(res, 500, "Profile Sync Failed", error.message);
  }
};