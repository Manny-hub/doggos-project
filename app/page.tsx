import Image from "next/image";

export default function Home() {

  const dogs = [
    {
      name: "Gary",
    },
    {
      name: "Hall",
    },
    {
      name: "Marrty",
    },
    {
      name: "Cinge",
    },
    {
      name: "Gerr",
    },
    {
      name: "Marty",
    },
  ];
  return (
    <main className="px-10 py-20 p-16 mx-auto max-w-screen-xl">
      <h1 className="font-serif">Hey Doggos 🐶!</h1>
      <h2 className="my-12 font-serif">The best doggos in town</h2>
      <div>
        {dogs.map(({ name }, idx) => {
          return (
            <div key={name}>
              <div>
                <h2>{name}</h2>
              </div>
              <div>
                <Image
                  src={`/images/${idx + 1}. png`}
                  width={200}
                  height={160}
                  alt={name}
                />
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
