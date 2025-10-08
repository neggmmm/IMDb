import ProjectCard from "../components/ProjectCard";


const Page = async () => {
  const fetchData = async () => {
    const res = await fetch("https://68dd01ec7cd1948060ac09e9.mockapi.io/Movies/movies");
    const jsonData = await res.json();
    return jsonData;
  };

  const data = await fetchData();
  return (
    <>
    
    <div className="grid grid-cols-2 p-6 mt-20">
     
      {data?.map((project) => (
        <ProjectCard id={project.id} title={project.title} description={project.description} key={project.id}/>
      ))}
    </div>
    </>
  );
};

export default Page;
