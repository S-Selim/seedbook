import Head from "next/head";
import { useState } from "react";

export default function Fundraising() {
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    goal: "",
    resources: "",
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div>
      <Head>
        <title>Fundraising - Seedbook</title>
        <meta
          name="description"
          content="Create a fundraising campaign for your startup idea on Seedbook"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold">Create a Fundraising Campaign</h1>
        <form onSubmit={handleSubmit} className="mt-4 w-1/2">
          <div className="mb-4">
            <label htmlFor="title" className="block mb-2">
              Campaign Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={formValues.title}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block mb-2">
              Campaign Description
            </label>
            <textarea
              name="description"
              id="description"
              value={formValues.description}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="goal" className="block mb-2">
              Funding Goal
            </label>
            <input
              type="text"
              name="goal"
              id="goal"
              value={formValues.goal}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="resources" className="block mb-2">
              Requested Resources
            </label>
            <input
              type="text"
              name="resources"
              id="resources"
              value={formValues.resources}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Create Campaign
          </button>
        </form>
      </main>
    </div>
  );
}
