const mongoose = require('mongoose');
const { Schema } = mongoose;

const TodoSchema = new Schema({
  task:{
    type: String,
    required: true
  },
  price: Number
});

module.exports = mongoose.model('Todo',TodoSchema);