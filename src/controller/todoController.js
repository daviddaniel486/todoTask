const Todo = require('../model/Todo');

// Add a Todo task to a Todo collection
exports.addTodo = async (req, res) => {
  try {
    let todo = await req.body;
    let newTodo = await Todo.create(todo);
    if (!newTodo) {
      return res.status(400).json({
        success: false,
        messsage: 'User Creation failed.',
      });
    }
    return res.status(201).json({
      success: true,
      message: 'User Created Successfully!',
      newTodo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

// Update a particular Todo task
exports.updateTodo = async (req, res) => {
  try {
    let id = { _id: req.params.id };
    let todo = await req.body;
    let updated = await Todo.findOneAndUpdate(id, todo, { new: true });
    if (!updated) {
      return res.status(400).json({
        success: false,
        messsage: 'User not updated.',
      });
    }
    return res.status(200).json({
      success: true,
      message: 'User updated Successfully!',
      updated,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

// Delete Todo task
exports.deleteTodo = async (req, res) => {
  try {
    let id = { _id: req.params.id };
    let deleted = await Todo.findOneAndRemove(id);
    if (!deleted) {
      return res.status(400).json({
        success: false,
        messsage: 'User not deleted.',
      });
    }
    return res.status(200).json({
      success: true,
      message: 'User deleted Successfully!',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};
// Retrieve all Todo tasks
exports.getAllTodos = async (res, req) => {
  try {
    let todos = await Todo.find();
    if (todos.length == 0)
      return res.status(404).json({
        success: false,
        message: 'No Users found',
      });
    res.status(200).json({
      success: true,
      message: 'Your Todo Tasks',
      todos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};
