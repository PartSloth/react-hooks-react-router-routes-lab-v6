import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const params = useParams();
  const movieId = params.id;

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then(res => res.json())
    .then(movie => {
      setMovie(movie)
      setGenres(movie.genres)
    })
  }, [movieId]);
  
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>Movie Length: {movie.time} minutes</p>
        <span>Genres:</span>
        {genres.map(genre => <span>{genre}</span>)}
      </main>
    </>
  );
};

export default Movie;
