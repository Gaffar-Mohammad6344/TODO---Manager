const catchAsync = require('../utils/catchAsync');
const apiResponse = require('../utils/apiResponse');

exports.getStats = catchAsync(async (req, res) => {
  res.status(200).json(apiResponse(true, 'Stats endpoint placeholder', { stats: {} }));
});
