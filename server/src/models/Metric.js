const mongoose = require('mongoose');

const metricSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  key: { type: String, required: true },
  value: { type: Number, required: true },
  recordedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Metric', metricSchema);
