"use client"

import { Nav } from "@/components/nav"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CirclePlus, Trash2 } from "lucide-react"
import { useEffect, useState } from "react"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

type Todo = {
    title: string;
    description: string;
    completed: boolean;
    completedBy: string;
}

const TodoPage = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [completedBy, setCompletedBy] = useState('');
  
  // Load from localStorage on mount
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  // Save to localStorage on todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e: any) => {
    e.preventDefault();
    if (title.trim() === '' || description.trim() === '') return;

    const newTodo = {
      title,
      description,
      completed: false,
      completedBy,
    };

    setTodos([...todos, newTodo]);
    setTitle('');
    setDescription('');
  };

  const toggleComplete = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
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
                <form className="flex mb-4" onSubmit={(e) => addTodo(e)}>
                    <div className="flex flex-col gap-2 w-full mr-2">
                        <Input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Add a new task"
                            className="border border-gray-300 rounded-xl p-5 py-6"
                        />
                        <Textarea 
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Add a description for the task"
                            className="border border-gray-300 rounded-xl mr-2 p-5 py-6"
                        />
                        <Select value={completedBy} onValueChange={(value) => setCompletedBy(value)}>
                            <SelectTrigger className="py-6 rounded-xl">
                                <SelectValue placeholder="Select a person" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="ijon">Ijon</SelectItem>
                                <SelectItem value="ilsen">Ilsen</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <Button
                        type="submit"
                        variant="default"
                        className="bg-neon hover:bg-neon/80 text-black rounded-xl px-4 py-6"
                    >
                        <CirclePlus size={24} color="black" />
                        Add
                    </Button>
                </form>
                <ul className="flex flex-col items-center justify-center w-full list-disc gap-2">
                    {todos.map((todo, index) => (
                            <Card className="w-full flex flex-row items-center justify-between px-5 cursor-pointer" key={index}>
                                <li className="flex items-center justify-between py-3 w-full" onClick={() => toggleComplete(index)}>
                                    <div className="flex flex-col gap-1">
                                        <span className={`text-base font-semibold ${todo.completed ? 'line-through' : ''}`}>{todo.title}</span>
                                        <span className={`text-sm text-neutral-700 ${todo.completed ? 'line-through' : ''}`}>{todo.description}</span>
                                        {todo.completedBy && (
                                            <div className="mt-2 inline-block bg-red-500/50 text-red-600 text-xs font-medium px-3 py-1 rounded-full w-fit">
                                                {todo.completedBy.charAt(0).toUpperCase() + todo.completedBy.slice(1)}
                                            </div>
                                        )}
                                    </div>
                                </li>
                                <Button variant="destructive" className="p-3 rounded-lg" onClick={() => removeTodo(index)}>
                                    <Trash2 size={24} color="white"/>
                                </Button>
                            </Card>
                    ))}
                    
                </ul>
            </div>
        </>
    )
}

export default TodoPage