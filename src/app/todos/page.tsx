"use client";
import React, { useEffect, useState } from "react";
import { TodoCard } from "../components/card";

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
}

export default function page() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data.todos);
      })
      .catch((err) => {
        console.log("Error fecthing", err);
      });
  }, []);

  return (
    <div>
      <div className="w-full mx-auto px-10">
        <h1 className="text-3xl font-bold py-5">Todos</h1>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {todos.map((todo) => (
            <TodoCard key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </div>
  );
}
