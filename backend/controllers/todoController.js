import Todo from '../models/TodoModel.js'

export const getTodos = async (req, res) => {
    try {
        //get all toods that have an id that matches the autenticatedUser 
        const todos = await Todo.find({userId:req.params.id})
        res.status(200).json(todos)
    } catch(err) {
        console.log(err.message)
        res.status(400).json(err)
    }
}

export const createTodo = async (req, res) => {
    try {
        console.log(req.body)
        const todo = await Todo.create(req.body)
        res.status(200).json(todo)
    } catch(err) {
        console.log(err.message)
        res.status(400).json(err)
    }
}

export const deleteTodo = async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: 'successfully deleted' })
    } catch (err) {
        console.log(err.message)
        res.status(400).json(err)
    }
}

