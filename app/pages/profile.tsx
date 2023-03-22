import Head from "next/head";
import { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data here and set it to the user state
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>Profile - Seedbook</title>
        <meta name="description" content="User profile on Seedbook" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold">User Profile</h1>
        <div className="mt-4 w-1/2">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold">Name</h2>
            <p>{user.name}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-2xl font-semibold">Email</h2>
            <p>{user.email}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-2xl font-semibold">Skills</h2>
            <ul>
              {user.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
