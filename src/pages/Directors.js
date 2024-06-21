import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/directors`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network Response was not OK");
        }
        return response.json();
      })
      .then((data) => setDirectors(data));
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <h1>Directors Page</h1>
      <main>
        {directors.map((director) => (
          <article key={director.id}>
            <h2>{director.name}</h2>
            <li>
              {director.movies}
            </li>
          </article>
        ))};
      </main>
    </>
  );
}

export default Directors;
