"use client";

import React, { useState } from "react";

export default function ProjectCard({ title, description, id }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [newTitle,setNewTitle] = useState(title);
  const [newDescription,setNewDescription] = useState(description)
  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      const res = await fetch(`/api/projects?id=${encodeURIComponent(id)}`, { method: "DELETE" });
      if (res.ok) {
        setDeleted(true);
      } else {
        console.error("Failed to delete");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleUpdate = async () => {
    try {
      const updatedData = { title: "New Title", description: "Updated Desc" };
      const res = await fetch(`/api/projects?id=${encodeURIComponent(id)}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedData),
        });
      if (res.ok) {
        const json = await res.json();
        console.log("Updated:", json);
      }
      setUpdated(!updated);

    } catch (err) {
      console.error(err);
    }
  };

  if (deleted) return null;

  return (
    <div className="relative max-w-2xl mx-auto mt-10 group rounded-md overflow-hidden">
      <img
        className="h-64 w-full object-cover rounded-md"
        src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
        alt="Random image"
      />

      <div className="absolute inset-0 opacity-60 rounded-md transition duration-300 group-hover:opacity-80"></div>

      <div
        className="
          absolute inset-0 flex flex-col items-center justify-center 
          opacity-0 group-hover:opacity-100
          transition duration-500 ease-in-out
          transform translate-y-4 group-hover:translate-y-0 group-hover:bg-gray-700/40 
        "
      >
        {updated ? (
          <div>
            <input className="mb-2 text-3xl text-[#7ccced]" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)}/>
            <input className="mt-2 text-sm text-[#eef3ef]"  value={newDescription} onChange={(e)=>setNewDescription(e.target.value)}/>
          </div>
        ) : (
          <div>
            <h2 className="mb-2 text-3xl text-[#7ccced]">{newTitle}</h2>
            <p className="mt-2 text-sm text-[#eef3ef]">{newDescription}</p>
          </div>
        )}
        <div className="mt-4 flex">
          <button
            onClick={handleDelete}
            disabled={isDeleting}
            className="text-[#6051a4] border p-2 mr-5 rounded-md bg-white/70 hover:bg-white transition disabled:opacity-50"
          >
            {isDeleting ? "Deleting..." : "Delete"}
          </button>
          <button
            onClick={handleUpdate}
            className="text-[#6051a4] border p-2 ml-5 rounded-md bg-white/70 hover:bg-white transition"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
