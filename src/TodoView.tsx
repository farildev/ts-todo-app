import React, {useState} from 'react';
import {FaRegTrashAlt, FaCheck} from "react-icons/fa";

interface Item {
    id: number;
    text : string;
    completed: boolean;
}


const TodoView : React.FC = () => {
    const [input , setInput] = useState<string>("");
    const [todos, setTodos] = useState<Item[]>([]);

    const addTodo = () => {
        const newTodo : Item = {id: Date.now(), text:input, completed: false}
        setTodos([...todos,newTodo])
    }

    const handleCheck = (id: number) => {
        setTodos(
            todos.map((todo) => {
                if(todo.id === id){
                    return {...todo, completed : !todo.completed}
                }
                return todo;
            })
        )
    }

    const handleDelete = (id : number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }


  return (
    <div className='w-[700px] border border-gray-400/20 text-white p-5 rounded-md'>
        <h1 className='text-xl font-medium px-2'>
            Hello Faril 👋
        </h1>
        <div className='flex justify-between items-center gap-5 mt-10'>
            <input onChange={(e) => setInput(e.target.value)} className='w-full p-3 bg-transparent rounded-md text-white text-sm outline-none border border-gray-400/20' type="text" placeholder='Add daily Mission' />
            <button onClick={() => addTodo()} className='bg-white text-black py-2 px-5 rounded-md outline-none border-none'>Add</button>
        </div>
        <div className='w-full flex flex-col gap-5'>
            <h3 className='mt-10 font-medium text-md px-2'>Daily Missions</h3>
            <div id='todos-area' className='flex flex-col gap-3 h-[300px] overflow-y-scroll'>
                {
                    todos.map((todo) => (
                        <div key={todo.id} className={`p-3 flex items-center justify-between border border-gray-400/20 text-sm rounded-md outline-none ${todo.completed ? "bg-green-700/50" : "bg-transparent"}`}>
                            <li>{todo.text}</li>
                            <div className='flex items-center gap-3'>
                                <button onClick={() => handleDelete(todo.id)} className='p-3 bg-red-500 outline-none border-none rounded-md'><FaRegTrashAlt /></button>
                                <button onClick={() => handleCheck(todo.id)} className='p-3 bg-green-400 outline-none border-none rounded-md'><FaCheck /></button>
                            </div>
                    </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default TodoView