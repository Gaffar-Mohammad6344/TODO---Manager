import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { sendResponse } from "../utils/apiResponse.js";

export const protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization?.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      sendResponse(res, 401, "Authorization Revoked / Token Invalid");
    }
  }

  if (!token) sendResponse(res, 401, "No Security Token Found");
};