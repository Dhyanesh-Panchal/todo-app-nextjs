import mongoose from "mongoose";


const todoSchema = new mongoose.Schema({
    title: String,
    completed: Boolean,
    createdOn: Date
});

const Todos = mongoose.model('Todos', todoSchema);

export default Todos;