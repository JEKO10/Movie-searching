import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const SingleMovie = () => {
  const [singleMovie, setSingleMovie] = useState([]);
  const { isLoading, setIsLoading } = useGlobalContext();
  const { id } = useParams();

  const fetchMovie = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=a931948e&i=${id}`
      );
      const data = await response.json();
      setSingleMovie(data);
      setIsLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    fetchMovie();
  }, [id]);

  if (isLoading) {
    return <div className="loading"></div>;
  }
  if (singleMovie.Response === "False") {
    return (
      <div className="errorPage">
        <h1>{singleMovie.Error}</h1>
        <Link to="/" id="btn">
          back to movies
        </Link>
      </div>
    );
  }
  const {
    Poster: poster,
    Title: title,
    Plot: plot,
    Year: year,
    Director: director,
    Runtime: runtime,
  } = singleMovie;
  return (
    <section className="singleMovie">
      <img src={poster === "N/A" ? url : poster} alt={title} />
      <div className="singleMovieInfo">
        <h1>{title}</h1>
        <h2>{year}</h2>
        <p>{plot}</p>
        <h3>Directed by: {director}</h3>
        <h3>Runtime: {runtime}</h3>
        <Link to="/" id="btn">
          Back to movies
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
