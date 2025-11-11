import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="main-h-screen bg-black text-gray-900">
        <div className="flex items-center  w-20 h-20">
          <Image src="/logo.png" alt="logo" width={80} height={80} />
        </div>
      </header>
      <main>
        <div className="w-7xl m-auto mt-15">
          <h1 className="text-8xl text-red-700 ">PlanEd</h1>
        </div>
      </main>
    </>
  );
}
