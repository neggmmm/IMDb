"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [userData, setUserData] = useState({ email: "", message: "" });

  const fetchUserData = async () => {
    await fetch("https://68dd01ec7cd1948060ac09e9.mockapi.io/Movies/movies/", {
      method: "POST",
      body: JSON.stringify({
        title: userData.email,
        description: userData.message,
      }),
      headers: { "Content-Type": "application/json" },
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchUserData();
    userData.email = ""
    userData.message =""
  };

  return (
    <div className="flex  flex-col items-center justify-center px-6 py-12 lg:px-8">
      <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
        <span className="text-[#7ccced]">Contact Me </span>
        <br />
        Send your message
      </h2>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-gray-100"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                placeholder="negm@example.com"
                required
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm/6 font-medium mb-2 text-[#eef3ef]"
            >
              Message
            </label>
            <textarea
              name="message"
              placeholder="send your message"
              required
              rows="4"
              value={userData.message}
              onChange={(e) =>
                setUserData({ ...userData, message: e.target.value })
              }
              className="block w-full resize-none rounded-md bg-white/5 px-3 py-1.5 text-base text-[#eef3ef] outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            />
          </div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md  bg-[#7ccced] px-3 py-1.5 text-sm/6 font-semibold text-[#eef3ef] hover:bg-[#11579c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Contact Me
            </button>
        </form>

        <p className="mt-10 text-center text-sm/6 text-[#eef3ef]">
          normally the response is in
          <span className="font-semibold ml-1  text-[#11579c] hover:text-[#7ccced]">
            the same day
          </span>
        </p>
      </div>
    </div>
  );
}
