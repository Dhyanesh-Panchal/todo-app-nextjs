"use server"
import mongoose from "mongoose";


const todoSchema = new mongoose.Schema({
    title: String,
    completed: Boolean,
    createdOn: Date
});

const Todos = mongoose.models.Todos || mongoose.model('Todos', todoSchema);

export default Todos;