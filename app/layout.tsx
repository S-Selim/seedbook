import React, { ReactNode } from "react";
import Link from "next/link";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
          <Link href="/">
            <a className="text-2xl font-bold">Seedbook</a>
          </Link>
          <div className="flex space-x-4">
            <Link href="/marketplace">
              <a className="text-blue-500">Marketplace</a>
            </Link>
            <Link href="/signin">
              <a className="text-blue-500">Sign In</a>
            </Link>
            <Link href="/signup">
              <a className="text-blue-500">Sign Up</a>
            </Link>
            <Link href="/profile">
              <a className="text-blue-500">Profile</a>
            </Link>
          </div>
        </nav>
      </header>
      <main className="container mx-auto">{children}</main>
      <footer>{/* Add your footer content here */}</footer>
    </div>
  );
};

export default Layout;
