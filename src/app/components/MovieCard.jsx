import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MovieCard({title,description,id,limit}) {
  return (
    <div
      className="flex flex-col justify-between rounded-2xl h-90  
             bg-gradient-to-br from-gray-800 to-gray-900 text-white 
             p-5 m-3 shadow-md hover:shadow-xl 
             transform hover:scale-105 transition-all duration-300"
    >
      <Image
        className="h-80 w-50"
        src="/ad.jpg"
        height={1}
        width={1}
        alt={title}
      />
      <h1 className="text-xl font-bold mb-2">{title}</h1>
      <div>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
      <div className="mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-lg 
                 text-white font-semibold shadow 
                 transition-all duration-300 ease-in-out 
                 hover:shadow-blue-500/50"
        >
          <Link href={`/products/${id}`}>Movie Details</Link>
        </button>
      </div>
    </div>
  );
}
