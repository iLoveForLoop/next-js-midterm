import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./style.css";

export default function Navbar() {
  return (
    <div>
      <nav className="bg-white flex justify-between items-center h-15 gap-10 text-md uppercase font-regular px-10">
        <div className="flex gap-4">
          <Image
            className="dark"
            src="/next.svg"
            alt="Next.js logo"
            width={115}
            height={18}
            priority
          />

          <Link href={"/"} className="text-black text-xl font-bold">
            Midterm
          </Link>
        </div>

        <div className="flex items-center gap-5 font-bold">
          <Link className="text-black hover:text-gray-700" href={"/products"}>
            Products
          </Link>
          <Link className="text-black hover:text-gray-700" href={"/todos"}>
            Todos
          </Link>
        </div>
      </nav>
    </div>
  );
}
