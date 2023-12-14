import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold text-white-800">
          Welcome to Authy
        </h1>
        <div className="mt-4">
          <Link href="/login">
            <button className="px-4 py-2 text-white bg-blue-500 rounded-md">
              Login
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}