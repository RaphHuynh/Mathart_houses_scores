import HouseCard from "./components/HouseCard";

export default function App() {
  const houses = [
    { name: "Gryffondor", points: 550, color: "#ec7063" },
    { name: "Serpentard", points: 460, color: "#45b39d" },
    { name: "Poufsouffle", points: 735, color: "#f4d03f" },
    { name: "Serdaigle", points: 660, color: "#2471a3" },
  ];

  return (
    <>
      <section className="bg-amber-50 min-h-screen flex flex-col">
        <article className="p-10">
          <h1 className="text-9xl text-center">Mathart Houses Scores</h1>
          <div className="mt-6 text-3xl leading-relaxed text-gray-800 space-y-4">
            <p>
              Bienvenue sur le tableau des scores des maisons du serveur Discord de la chaîne <strong>Mathart</strong> !
            </p>
            <p>
              Chaque maison (Gryffondor, Serpentard, Poufsouffle, Serdaigle) cumule des points à travers différents
              événements communautaires organisés sur le serveur.
            </p>
            <p>
              Quiz, défis créatifs, jeux, participations et entraide sont autant de façons pour les membres de faire
              briller leur maison.
            </p>
            <p>
              Consulte ici les scores en temps réel et soutiens ta maison dans la course à la victoire !
            </p>
          </div>
        </article>

        <aside className="flex-grow p-10 flex flex-col">
          <h2 className="text-center text-5xl pb-6">Houses scores</h2>
          <div className="flex justify-between items-stretch gap-4 flex-grow">
            {houses.map((house) => (
              <HouseCard key={house.name} {...house} />
            ))}
          </div>
        </aside>
      </section>
    </>
  );
}