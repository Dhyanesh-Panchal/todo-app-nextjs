import mongoose from "mongoose";


const todoSchema = new mongoose.Schema({
    title: String,
    createdOn: Date
});

const Todos = mongoose.model('Todos',todoSchema);

export default Todos;