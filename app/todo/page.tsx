"use client"

import { Nav } from "@/components/nav"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { CirclePlus, Trash2 } from "lucide-react"
import { useState } from "react"

const TodoPage = () => {
    const [todos, setTodos] = useState<String[]>([]);
    const [input, setInput] = useState('');
  
    const addTodo = (e: any) => {
        e.preventDefault();
        if (input.trim() === '') return;
        setTodos([...todos, input]);
        setInput('');
    };
  
    const removeTodo = (index: number) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };
    
    return (
        <>
            <Nav />
            <div className="container h-svh mx-auto max-w-2xl mt-20">
                <h1 className="text-2xl font-bold mb-4">To Do List</h1>
                <form className="flex mb-4">
                    <Input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Add a new task"
                        className="border border-gray-300 rounded-xl mr-2 p-5 py-6"
                    />
                    <Button
                        type="submit"
                        variant="default"
                        onClick={(e) => addTodo(e)}
                        className="bg-neon hover:bg-neon/80 text-black rounded-xl px-4 py-6"
                    >
                        <CirclePlus size={24} color="black" />
                        Add
                    </Button>
                </form>
                <ul className="flex flex-col items-center justify-center w-full list-disc gap-2">
                    {todos.map((todo, index) => (
                        <Card className="w-full flex-1" key={index}>
                            <li className="flex items-center justify-between px-5 py-2">
                                <span>{todo}</span>
                                <Button variant="destructive" className="text-red-500 rounded-lg" onClick={() => removeTodo(index)}>
                                    <Trash2 size={24} color="white"/>
                                </Button>
                            </li>
                        </Card>
                    ))}
                    
                </ul>
            </div>
        </>
    )
}

export default TodoPage