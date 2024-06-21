import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/movies')
    .then((response) => {
      if (!response.ok){
        throw new Error ("Network Response was not OK");
      }
      return response.json();
    })
    .then(moviedata => setMovies(moviedata))
    .catch((error) => {
      console.error("There was a problem fetching the data", error)
    });
  },[])


  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
       <h1>Home Page</h1>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie}/>
        ))}

        
      </main>
    </>
  );
};

export default Home;
