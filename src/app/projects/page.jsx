const Page = async () => {
  const fetchData = async () => {
    const res = await fetch("https://68dd01ec7cd1948060ac09e9.mockapi.io/Movies/movies");
    const jsonData = res.json();
    console.log(jsonData);
    return jsonData;
  };

  const data = await fetchData();
  return (
    <div className="grid grid-cols-3">
      
      {data?.map((project) => (
        <div className="p-3 mt-5 h-[500] rounded-2xl flex flex-col justify-around items-center" key={project.id}>
          <h2 className="mb-2 text-3xl text-[#7ccced]">{project.title}</h2>
          <p className="mt-2 text-sm text-[#eef3ef]">{project.description}</p>
          <div>
            <button className="text-[#6051a4] border-1 p-2 mr-5" >Delete</button>
            <button className="text-[#6051a4] border-1 p-2 ml-5" >Update</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
