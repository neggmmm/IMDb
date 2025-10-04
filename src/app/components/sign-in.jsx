import { signIn } from "@/auth"
 
export default function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-12 lg:px-8 min-h-screen">
      <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
        <span className="text-[#7ccced]">Sign In </span>
        <br />
        Access your account
      </h2>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          action={async () => {
            "use server"
            await signIn("github")
          }}
          className="space-y-6"
        >
          <div className="text-center">
            <p className="text-sm/6 text-gray-100 mb-6">
              Sign in with your GitHub account to continue
            </p>
            <button
              type="submit"
              className="flex w-full justify-center items-center gap-3 rounded-md bg-[#7ccced] px-3 py-2.5 text-sm/6 font-semibold text-[#eef3ef] hover:bg-[#11579c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              Sign in with GitHub
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-[#eef3ef]">
          By signing in, you agree to our
          <span className="font-semibold ml-1 text-[#11579c] hover:text-[#7ccced] cursor-pointer">
            terms of service
          </span>
        </p>
      </div>
    </div>
  )
} 