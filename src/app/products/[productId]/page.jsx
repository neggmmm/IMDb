
export default async function ProductPage({ params }) {
  const res = await fetch(
    `https://68dd01ec7cd1948060ac09e9.mockapi.io/Movies/movies/${params.productId}`
  );
  const movie = await res.json();

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold">{movie.title}</h1>
      <p className="mt-4">{movie.description}</p>
    </div>
  );
}
