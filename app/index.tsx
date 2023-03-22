import Head from "next/head";
import Link from "next/link";
import Layout from "../app/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Seedbook - Home</title>
        <meta
          name="description"
          content="Seedbook - Connect and collaborate on startup ideas"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold">Welcome to Seedbook</h1>
        <p className="mt-4 text-xl text-center">
          Seedbook is a platform that connects individuals with startup ideas to
          those who have free time and expertise in areas such as finance,
          marketing, and software engineering.
        </p>
        <div className="mt-8 flex space-x-4">
          <Link href="/signup">
            <a className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Get Started
            </a>
          </Link>
          <Link href="/marketplace">
            <a className="text-blue-500">Browse the Marketplace</a>
          </Link>
        </div>
      </main>
    </Layout>
  );
}
