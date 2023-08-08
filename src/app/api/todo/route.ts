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
        let { title, completed, createdOn } = reqBody;
        createdOn = createdOn ? createdOn : new Date();
        // ? Check if todo already exist
        const todo = await Todos.findOne({ title });
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


export async function GET(request: NextRequest) {
    try {
        const todos = await Todos.find({});
        return NextResponse.json({ todos }, { status: 200 });
    } catch (error) {
        console.log("Error in getting the Data")
    }

}

export async function DELETE(request: NextRequest) {
    try {
        const { _id } = await request.json();
        const todo = await Todos.findOne({ _id });

        if (!todo) {
            // Todo not present
            return NextResponse.json({ error: "Todo not present" }, { status: 204 });
        }
        else {
            Todos.deleteOne({ _id });
            return NextResponse.json({ message: "Delete succesfull" }, { status: 202 });
        }
    } catch (error) {
        console.log("Error in deleting the data")
    }

}