import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
    text: { type: String, required: true },
    completed: { type: Boolean, default: false },
    userId: { type: String, required: true }
})

const Todo = mongoose.model('todos', todoSchema)

export default Todo
