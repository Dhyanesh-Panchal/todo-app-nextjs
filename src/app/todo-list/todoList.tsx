"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function TodoList() {
    const [todos, setTodos] = useState<any[]>([{}]);

    const deleteTodo = (_id: string, indx: number) => {

    }

    useEffect(() => {
        const getTodos: any = async () => {
            try {
                const resp = await axios.get('/api/todo');

                console.log("Got the responce");
                console.log(resp.data);
                setTodos(resp.data.todos.reverse());
            }
            catch (error) {
                console.log(error);
            }
        }
        getTodos();

    }, []);


    return (
        <>
            {
                todos.map((todo, indx) => {
                    return (
                        <div key={todo._id} className='m-5 p-5 min-w-0 font-serif bg-slate-700 flex justify-between'>
                            <div className='text-xl'>{todo.title}</div>
                            <button onClick={e => deleteTodo(todo._id, indx)} className=' mx-2 px-3 py-1 border-gray-500 border-solid border-2 rounded-md'>Done</button>
                        </div>
                    )
                })
            }
        </>
    )
}