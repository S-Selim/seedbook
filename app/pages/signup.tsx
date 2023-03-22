import Head from "next/head";
import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement sign-up logic here
  };

  return (
    <div>
      <Head>
        <title>Sign Up - Seedbook</title>
        <meta name="description" content="Sign up for Seedbook" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold">Sign Up</h1>
        <form onSubmit={handleSubmit} className="mt-4 w-1/2">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-3 py-2 bg-blue-500 text-white font-semibold rounded-md"
          >
            Sign Up
          </button>
        </form>
      </main>
    </div>
  );
}
