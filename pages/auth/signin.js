import Link from "next/link";
import { signIn } from "next-auth/react";

const SignInPage = () => {
  return (
    <>
    <nav className="fixed top-0 z-50 w-full border-b-2 border-gray-100 border-dashed bg-white dark:border-gray-700 dark:bg-gray-800">
        <div className="px-2 py-3">
          <div className="flex items-center justify-start rtl:justify-end">
            <div className="flex space-x-3">
              <div className="text-3xl p-1 pt-2">🔒</div>             
            <span className="text-2xl font-mono font-semibold pt-3 text-white">
                Next-Auth
              </span>
            </div>
          </div>
        </div>
      </nav>
      <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col min-h-screen w-full items-center justify-center bg-gray-800 text-center">
        <div className="bg-white md:py-14 py-10 md:px-8 px-3 rounded-md">
          <div className=" text-4xl">🔒</div>
          <h1 className="md:text-4xl text-3xl font-medium">
            Next-Auth Login
          </h1>
          <p className="mt-4 text-lg text-slate-500">
            Log in with your account to continue
          </p>
        <div className="flex flex-col space-y-4 p-2 mt-5">
        <button className="group h-12 px-6 border-2 border-gray-300 rounded-xl transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100" onClick={() =>
                  signIn("google", { callbackUrl: "http://localhost:3000/chat" })
                }>
            <div className="relative flex items-center space-x-4 justify-center">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                className="absolute left-0 w-5"
                alt="google logo"
              />
              <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                Continue with Google
              </span>
            </div>
          </button>
          <button className="group h-12 px-6 border-2 border-gray-300 rounded-xl transition duration-300 hover:border-gray-400 focus:bg-blue-50 active:bg-blue-100" onClick={() =>
                  signIn("github", { callbackUrl: "http://localhost:3000/chat" })
                }>
            <div className="relative flex items-center space-x-4 justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="absolute left-0 w-5 text-gray-700"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
              <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-gray-600 sm:text-base">
                Continue with Github
              </span>
            </div>
          </button>
        </div>
        
        </div>
      </div>
    </div>
    </>
    
  );
};

export default SignInPage;


