import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-home bg-cover  bg- bg-center">
      <main className="flex flex-col items-center justify-center max-w-5xl mx-auto h-dvh text-white">

        <h1 className="text-4xl font-bold">Welcome to RepairShop</h1>
        <p className="mt-4 text-lg">The best place to get your devices fixed</p>
        <Link href="/home" className="hover:underline">
          {/* <a className="mt-8 px-4 py-2 text-lg font-semibold text-white bg-primary rounded-md"> */}
            Get Started
          {/* </a> */}
        </Link>
      </main>
    </div>
  );
}
