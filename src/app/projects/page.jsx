const Page = async () => {
  const fetchData = async () => {
    const res = await fetch(
      "https://68dd01ec7cd1948060ac09e9.mockapi.io/Movies/movies"
     
    );
    const jsonData = res.json();
    console.log(jsonData);
    return jsonData;
  };

  const data = await fetchData();
  return (
    <div className="grid grid-cols-4">
      {data?.map((movie) => (
        <div className="bg-red-200 p-3 m-2 rounded-2xl" key={movie.id}>
          {movie.description}
        </div>
      ))}
    </div>
  );
};

export default Page;
