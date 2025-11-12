import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="header text-gray-900">
        <div className="flex items-center  h-30">
          <Image src="/logo.png" alt="logo" width={250} height={50} />
        </div>
      </header>
      <main>
        <div className="w-7xl m-auto mt-15">
          <h1 className="text-8xl">
            <span>P</span>lan<span>E</span>d
          </h1>
        </div>
      </main>
    </>
  );
}
