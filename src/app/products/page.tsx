import React from "react";
import { ProductCard } from "../components/card";

interface Product {
  id: number;
  title: string;
  description: string;
}

export default async function page() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  const products: Product[] = data.products;

  return (
    <div className="px-10">
      <h1 className="text-3xl font-bold py-5">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
