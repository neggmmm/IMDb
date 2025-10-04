import Link from "next/link";
import PrismaticBurst from "./components/PrismaticBurst";

export default function Home() {
  return (
    <div className="relative w-screen overflow-hidden bg-black h-screen">
      <PrismaticBurst
        animationType="rotate3d"
        intensity={3}
        speed={0.6}
        distort={1.2}
        paused={false}
        offset={{ x: 0, y: 0 }}
        hoverDampness={0.25}
        rayCount={24}
        mixBlendMode="lighten"
        colors={[
          "#ff007a",
          "#ffae00",
          "#00ff9f",
          "#00cfff",
          "#4d3dff",
          "#ffffff",
        ]}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center font-semibold">
        <h1 className="text-6xl text-[#eef3ef]">Hello, It's<span className="text-[#6051a4] font-bold"> Negm</span> </h1>
        <p className="text-3xl text-[#eef3ef]">A software Engineer</p>
        <div className="mt-5">
        <button
          type="button"
          class="text-black bg-[#6051a4] hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5  dark:hover:bg-gray-400 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          <Link href="/contact-us">
          Contact
          </Link>
        </button>
        <button
          type="button"
          class="text-[#eef3ef] bg-transparent border-2 hover:bg-gray-900 focus:outline-none focus:ring-4 ml-5 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 dark:hover:bg-gray-400 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          <Link href="/projects">
          Projects
          </Link>
        </button>
        </div>
      </div>
    </div>
  );
}
