const Page = async () => {
  const fetchData = async () => {
    const res = await fetch(
      "https://68dd01ec7cd1948060ac09e9.mockapi.io/Movies/movies/51",
      { cache: "force-cache" }
    );
    const jsonData = res.json();
    console.log(jsonData);
    return jsonData;
  };

  const data = await fetchData();
  return (
    <div className="flex flex-row ml-100 justify-baseline items-center h-screen mt-10">
      <h1 className="mb-20 text-5xl font-bold text-[#7ccced] ">
        {data.title}
      </h1>
      <p className="w-100 text-xl ml-20 m-3 text-[#eef3ef]">
        {data.description}
      </p>
    </div>
  );
};

export default Page;
