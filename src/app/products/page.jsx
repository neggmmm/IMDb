import Image from "next/image"
import ProjectGrid from "../components/ProjectGrid";
import Link from "next/link";

const Page = () => {
  
  return (
    <div >
      <div className="grid grid-cols-3">
        <h1>Hello, It's Negm</h1>
      </div>
     <ProjectGrid limit={3}/>
     <div className="flex justify-center">
     <button className=" m-5">
      <Link href={"/projects"}>
      All projects
      </Link>
      </button>
     </div>
     </div>
  );
};

export default Page;
