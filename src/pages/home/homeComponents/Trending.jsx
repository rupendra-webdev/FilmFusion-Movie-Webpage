import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MovieContext from "../../../context/MovieContext";

// MovieCard Component
function MovieCard({ movie }) {
  return (
    <div className="col-md-3 mb-4">
      <div className="card">
        <Link to={`/movie/${movie.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title || movie.name}
            className="card-img-top"
          />
        </Link>
        <div className="card-body">
          <h5>{movie.title || movie.name}</h5>
        </div>
      </div>
    </div>
  );
}

// Trending Component
function Trending() {
  const { trending, loading, error } = useContext(MovieContext);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  if (!trending || trending.length === 0) {
    return <div>No trending movies available.</div>;
  }

  const chunkedMovies = [];
  for (let i = 0; i < trending.length; i += 4) {
    chunkedMovies.push(trending.slice(i, i + 4));
  }

  return (
    <div
      id="trendingMoviesCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {chunkedMovies.map((chunk, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <div className="row">
              {chunk.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Carousel controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#trendingMoviesCarousel"
        data-bs-slide="prev"
        aria-label="Previous Slide"
      >
        Prev
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#trendingMoviesCarousel"
        data-bs-slide="next"
        aria-label="Next Slide"
      >
        Next
      </button>
    </div>
  );
}

export default Trending;
