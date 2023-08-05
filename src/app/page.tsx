"use client"
import Link from "next/link";
import axios from 'axios';

export default function Home() {

  const getTodos: any = async () => {
    try {
      const todos = await axios.get('/api/todo');

      console.log("Got the Todos");
      console.log(todos);
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  return (
    <>
      <div className="flex justify-between text-2xl font-serif bg-gray-800 p-5 text-center">
        <h1 className="">MyTodos</h1>
        <Link href={"/add-todo"}>Add</Link>
      </div>
      <div className="flex flex-col gap-2">

      </div>
    </>



  )
}
