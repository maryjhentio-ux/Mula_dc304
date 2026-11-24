
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold">
        Hello, my name is Mary Jhen!
      </h1>

      <p className="mt-4 text-lg">
        Welcome to my personal website.
        I am a BSIT student who enjoys learning
        about technology, programming, and web development.
      </p>

      <Link
        href="/projects"
        className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
      >
        See my projects
      </Link>
    </main>
  );
}
