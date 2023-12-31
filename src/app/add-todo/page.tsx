"use client"
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function AddTodo() {

    const router = useRouter();
    const [currentTitle, setCurrentTitle] = useState<string>("");

    const addTodo = async () => {
        const title = currentTitle || "empty";
        const createdOn = new Date();
        try {
            const todo = {
                title,
                createdOn,
                completed: false
            }

            const resp = await axios.post("/api/todo", todo);

            if (resp.status == 500) {
                console.log("User already exist");
                router.push('/');

            }
            else {
                console.log(resp);
                router.push('/');
            }

        } catch (error: any) {
            if (error.request.status == 500) {
                console.log("Already exist");
                router.push("/");
            }
            else {
                console.log("Error creating the todo => addTodo()");
                console.log(error.request.status);
            }
        }
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