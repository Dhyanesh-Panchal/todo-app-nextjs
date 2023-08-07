"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function TodoList() {
    const [todos, setTodos] = useState<any[]>([{}]);

    useEffect(() => {
        const getTodos: any = async () => {
            try {
                const resp = await axios.get('/api/todo');

                console.log("Got the responce");
                console.log(resp.data);
                setTodos(resp.data.todos);
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
                        <div key={indx} className='m-5 font-serif'>
                            <div >{todo.title}</div>
                        </div>
                    )
                })
            }
        </>
    )
}