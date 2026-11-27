
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mary Jhen | Personal Site",
  description: "A personal website built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <nav className="flex gap-6 border-b p-5">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>

          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>

          <Link href="/projects" className="hover:text-blue-600">
            Projects
          </Link>
        </nav>

        {children}
      </body>
      
    </html>
  );
}
