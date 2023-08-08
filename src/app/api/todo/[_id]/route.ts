import Todos from "@/models/todosModel";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest, { params }: { params: { _id: string } }) {
    try {
        const _id = params._id;
        const todo = await Todos.findOne({ _id });
        console.log(todo);

        if (!todo) {
            // Todo not present
            return NextResponse.json({ error: "Todo not present" }, { status: 204 });
        }
        else {
            await Todos.deleteOne({ _id });
            return NextResponse.json({ message: "Delete succesfull" }, { status: 202 });
        }
    } catch (error) {
        console.error("Error in deleting the data");
        console.error(error);
        return NextResponse.json({ error: "Todo not present" }, { status: 204 });
    }

}