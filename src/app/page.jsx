import Jobs from "./components/Jobs";
import Image from "next/image";
export default function Home() {

  return (
    <>
      <header className="bg-cyan">
        <img src="/assets/bg-header-desktop.svg" alt="Banner" className="w-full h-48"/>
      </header>
      <Jobs/>
    </>
  )
}
