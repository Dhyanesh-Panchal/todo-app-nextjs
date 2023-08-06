"use client"
import Link from "next/link";
import axios from 'axios';
import React, { Suspense } from "react";
import TodoList from "./todo-list/todoList";

// type todoType = {
//   _id: string,
//   title: string,
//   createdOn: Date,
//   completed: boolean,
//   _v: string
// }

export default function Home() {



  const [todos, setTodos] = React.useState<any[]>([{}]);

  return (
    <>
      <div className="flex justify-between text-2xl font-serif bg-gray-800 p-5 text-center">
        <h1 className="">MyTodos</h1>
        <Link href={"/add-todo"}>Add</Link>
      </div>
      <Suspense fallback={<Loading />}>
        <TodoList />
      </Suspense>

    </>
  )
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}
