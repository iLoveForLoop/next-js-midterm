import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav className="bg-amber-300 flex justify-center items-center">
        <Link className="text-black" href={"/products"}>
          Products
        </Link>
        <Link className="text-black" href={"/todos"}>
          To-dos
        </Link>
      </nav>
    </div>
  );
}
