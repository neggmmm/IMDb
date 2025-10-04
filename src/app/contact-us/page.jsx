import ContactForm from "../components/ContactForm";

const Page = async () => {
  const fetchData = async () => {
    const res = await fetch(
      "https://68dd01ec7cd1948060ac09e9.mockapi.io/Movies/movies",
      {
        next: {
          revalidate: 10,
        },
      }
    );
    const jsonData = res.json();
    console.log(jsonData);
    return jsonData;
  };

  const data = await fetchData();
  return (
    <div className="">
     <ContactForm />
    </div>
  );
};

export default Page;
