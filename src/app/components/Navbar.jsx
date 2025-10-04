import Link from "next/link";
import React from "react";
import { signOut, auth } from "@/auth.js"

const Navbar = async () => {
  const session = await auth();
  
  return (
    <nav
      className="fixed top-0 left-0 w-full bg-gray-800/50 p-3 
               after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 
               after:h-px after:bg-white/10 z-50"
    >
      <div className="hidden sm:ml-6 sm:block">
        <div className="flex space-x-4">
          <Link
            href="/"
            aria-current="page"
            className="text-[#6051a4] px-3 py-2 text-sm font-medium"
          >
            NEGM
          </Link>
          <Link
            href="/products"
            aria-current="page"
            className="rounded-md px-3 py-2 text-sm font-medium text-white"
          >
            Products
          </Link>
          <Link
            href="/projects"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
          >
            About
          </Link>
          <Link
            href="/contact-us"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
          >
            Contact Us
          </Link>
          
          {session ? (
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-300">
                Welcome, {session.user?.name || session.user?.email}
              </span>
              <form
                action={async () => {
                  "use server"
                  await signOut()
                }}
              >
                <button 
                  type="submit"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white transition-colors duration-200"
                >
                  Sign Out
                </button>
              </form>
            </div>
          ) : (
            <Link
              href="/sign-in"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
            >
              Log In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
