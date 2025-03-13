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
  const [loading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data.todos);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Error fecthing", err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="w-full mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-4">Todos</h1>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {todos.map((todo) => (
            // <div
            //   key={todo.id}
            //   className={`p-4 rounded-lg shadow-md border ${
            //     todo.completed
            //       ? "bg-green-100 border-green-400"
            //       : "bg-red-100 border-red-400"
            //   }`}
            // >
            //   <h2 className="text-lg font-semibold text-black">{todo.todo}</h2>
            //   <p
            //     className={`text-sm font-medium ${
            //       todo.completed ? "text-green-700" : "text-red-700"
            //     }`}
            //   >
            //     {todo.completed ? "Completed" : "Not Completed"}
            //   </p>
            // </div>
            <TodoCard key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </div>
  );
}
