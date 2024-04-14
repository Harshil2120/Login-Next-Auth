

import { signIn } from 'next-auth/react';

const SignInPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Sign In</h1>
        <button
          onClick={() => signIn('google',{callbackUrl:"http://localhost:3000"})} // Google authentication
          className="bg-blue-500 text-white px-4 py-2 rounded-md mb-2 w-full"
        >
          Sign in with Google
        </button>
        <button
          onClick={() => signIn('github',{callbackUrl:"http://localhost:3000"})} // GitHub authentication
          className="bg-gray-800 text-white px-4 py-2 rounded-md w-full"
        >
          Sign in with GitHub
        </button>
      </div>
    </div>
  );
};

export default SignInPage;

