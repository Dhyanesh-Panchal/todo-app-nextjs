"use client"
import Link from "next/link";
import { useState } from "react";

export default function AddTodo() {

    const [currentTitle, setCurrentTitle] = useState<string>("");

    const addTodo = () => {
        const title = currentTitle;

    }

    return (
        <>
            <div className="flex justify-between text-2xl font-serif bg-gray-800 p-5 text-center">
                <h1 className="">Add Todo</h1>
                <Link href={"/"}>Back</Link>
            </div>
            <div className="my-5 p-5">
                <label htmlFor="todo-title" className="font-serif my-3 block text-2xl">Title</label>
                <input type="text" id="todo-title" value={currentTitle} onChange={e => setCurrentTitle(e.target.value)} className="block w-80 p-1 bg-gray-400 text-black" />
                <button onClick={addTodo} className="my-8 px-3 py-1 border-gray-500 border-solid border-2 rounded-md">Add</button>
            </div>
        </>
    )
}