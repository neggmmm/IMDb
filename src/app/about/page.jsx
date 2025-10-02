const Page = async () => {
  const fetchData = async () => {
    const res = await fetch(
      "https://68dd01ec7cd1948060ac09e9.mockapi.io/Movies/movies/50",
      { cache: "force-cache" }
    );
    const jsonData = res.json();
    console.log(jsonData);
    return jsonData;
  };

  const data = await fetchData();
  return (
    <div className="grid grid-cols-4">
      {data.title}
      {data.description}
    </div>
  );
};

export default Page;
