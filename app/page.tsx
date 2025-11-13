import TypewriterText from "../components/typewriter";
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
        <div className="w-7xl m-auto mt-15 flex justify-between">
          <h1 className="text-8xl">
            <span className="underline">
              <span className="letter">P</span>lan
              <span className="letter">E</span>d
            </span>
          </h1>
          <TypewriterText />
        </div>
        <div className="w-7xl m-auto flex mt-8 justify-between items-end">
          <a
            href="/PlanEd.apk"
            className="button-download text-3xl py-4 px-12 h-20"
          >
            <span>გ</span>ადმო<span>წ</span>ერა
          </a>
          <div className="lap-img">
            <Image
              className="laptop"
              src="/laptop.png"
              alt="laptop"
              width={350}
              height={200}
            />
          </div>
        </div>
      </main>
    </>
  );
}
