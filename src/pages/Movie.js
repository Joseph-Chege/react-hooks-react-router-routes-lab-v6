import { useEffect, useState } from "react";
import { useParams  } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const [movie, setMovie] = useState({})
  const params = useParams();
  const movieId = params.id;


  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then((response) => {
      if (!response.ok){
        throw new Error("Network response was not OK")
      }
      return response.json();
    })
    .then(data => setMovie(data))
    .catch((error) => {
      console.error("There was a problem fetching the data", error)
    })
  }, [movieId])

  if (!movie.title) {
    return <h1>Loading...</h1>
  };

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>Runtime: {movie.time} minutes</p>
      </main>
      
    </>
  );
};

export default Movie;
