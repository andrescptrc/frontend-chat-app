import Image from "next/image";

const HomePage = () => {
  return (
    <div>
      <Image src="/vercel.svg" alt="Prop image" height={300} width={300} />
      <h1 className="text-red-300">Hello</h1>
    </div>
  );
};

export default HomePage;
