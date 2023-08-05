"use server"

import mongoose from "mongoose";
import connect from "@/dbConfig/dbconfig";
import Todos from "@/models/todosModel";
import { NextRequest, NextResponse } from "next/server"; //--> This is use to handle req,res in NextJS



connect();


export async function POST(request: NextRequest) {
    try {
        // --> we get the body of the request
        const reqBody = await request.json();
        const { title, completed, createdOn } = reqBody;

        // ? Check if todo already exist
        const todo = await Todos.findOne({ title, createdOn });
        if (todo) {
            return NextResponse.json({ error: "Todo Already Exist" }, { status: 500 });
        }

        const newTodo = new Todos({
            title,
            completed,
            createdOn
        });

        newTodo.save();
        return NextResponse.json({ message: "Todo created Succesfully", todo: newTodo }, { status: 201 })

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}