// src/utils/apiResponse.js
export const sendResponse = (res, statusCode, message, data = null) => {
  res.status(statusCode).json({
    status: statusCode >= 400 ? "interrupted" : "synchronized",
    node: "Alpha-01",
    message,
    data,
    timestamp: new Date().toISOString(),
  });
};