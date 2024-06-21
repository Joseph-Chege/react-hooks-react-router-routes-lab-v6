import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/actors')
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network Response was not OK")
      }
      return response.json();
    })
    .then(data => setActors(data))
  })
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actors.map((actor) => (
          <article key={actor.id}>
            <h2>{actor.name}</h2>
            <ul>
              <li>{actor.movies}</li>
            </ul>
          </article>
        ))}
      </main>
    </>
  );
};

export default Actors;
