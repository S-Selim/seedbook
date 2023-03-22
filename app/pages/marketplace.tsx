import Head from "next/head";
import { useState, useEffect } from "react";

export default function Marketplace() {
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    // Fetch experts data here and set it to the experts state
  }, []);

  return (
    <div>
      <Head>
        <title>Marketplace - Seedbook</title>
        <meta
          name="description"
          content="Browse and connect with experts on Seedbook"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold">Marketplace</h1>
        <div className="mt-4 w-1/2">
          {experts.map((expert, index) => (
            <div key={index} className="bg-white shadow p-4 mb-4 rounded-md">
              <h2 className="text-2xl font-semibold">{expert.name}</h2>
              <p className="mt-2">Skills: {expert.skills.join(", ")}</p>
              <p className="mt-2">
                Available hours per week: {expert.availableHours}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
