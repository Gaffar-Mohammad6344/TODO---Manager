const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.registerUser = async ({ name, email, password }) => {
  const existing = await User.findOne({ email });
  if (existing) throw new Error('Email already in use');
  const user = await User.create({ name, email, password });
  return { id: user._id, name: user.name, email: user.email };
};

exports.loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('Invalid credentials');
  const valid = await user.comparePassword(password);
  if (!valid) throw new Error('Invalid credentials');
  return jwt.sign({ id: user._id, email: user.email, name: user.name }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
};
