import React from "react";

interface Product {
  id: number;
  title: string;
  description: string;
}

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="border p-4 rounded shadow-md">
      <h2 className="text-xl font-semibold">{product.title}</h2>
      <p className="text-gray-600">{product.description}</p>
    </div>
  );
};

const TodoCard = ({ todo }: { todo: Todo }) => {
  return (
    <div
      className={`border p-4 rounded shadow-md ${
        todo.completed ? "border-green-500" : "border-red-500"
      }`}
    >
      <h2 className="text-xl font-semibold">
        {todo.completed ? "Completed" : "Not Completed"}
      </h2>
      <p className="text-gray-600">{todo.todo}</p>
    </div>
  );
};

export { ProductCard, TodoCard };
