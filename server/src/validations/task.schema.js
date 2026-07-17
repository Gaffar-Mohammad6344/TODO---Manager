const Joi = require('joi');

module.exports = Joi.object({
  title: Joi.string().min(1).max(100).required(),
  description: Joi.string().allow('').max(1000),
  priority: Joi.string().valid('High', 'Medium', 'Low').default('Medium'),
  dueDate: Joi.date().optional(),
  completed: Joi.boolean().optional(),
});
