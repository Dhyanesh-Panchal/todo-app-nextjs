"use client"
import Link from "next/link";

export default function Home() {
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
