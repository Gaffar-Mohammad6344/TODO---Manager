const Task = require('../models/Task');

exports.createTask = async (user, payload) => {
  const task = await Task.create({ ...payload, user: user.id });
  return task;
};

exports.getTasks = async (user) => {
  return Task.find({ user: user.id }).sort({ createdAt: -1 });
};

exports.updateTask = async (id, user, payload) => {
  const task = await Task.findOneAndUpdate({ _id: id, user: user.id }, payload, { new: true });
  if (!task) throw new Error('Task not found');
  return task;
};

exports.deleteTask = async (id, user) => {
  const task = await Task.findOneAndDelete({ _id: id, user: user.id });
  if (!task) throw new Error('Task not found');
};
