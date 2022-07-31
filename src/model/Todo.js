const { Schema, model } = require('mongoose');

const todoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      mainlength: 10,
      maxlength: 50,
    },
    description: {
      type: String,
      required: true,
      mainlength: 10,
      maxlength: 50,
    },
  },
  { timestamp: true }
);

const todoModel = model('todos', todoSchema);
module.exports = todoModel;
