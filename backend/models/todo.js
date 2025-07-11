import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    text: { type: String },
    completed: { type: Boolean, default: false }
})

const Todo = mongoose.model('todo', todoSchema)

export default Todo