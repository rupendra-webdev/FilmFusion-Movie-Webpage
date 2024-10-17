// src/components/MovieCarousel.js
import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Img from "./Img";
import CircleRating from "./CircleRating";
import dayjs from "dayjs";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MovieCarousel.css"; // Import custom styles

function MovieCarousel({ movies }) {
  const chunkedMovies = [];
  for (let i = 0; i < movies.length; i += 4) {
    chunkedMovies.push(movies.slice(i, i + 4));
  }

  return (
    <Carousel
      className="movie-carousel position-relative"
      interval={5000}
      indicators={false}
      controls={false}
      pause="hover"
      touch={true}
    >
      {chunkedMovies.map((chunk, index) => (
        <Carousel.Item key={index}>
          <div className="movie-slide d-flex gap-4 justify-content-center flex-wrap">
            {chunk.map((movie) => {
              const imageUrl = movie?.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "/path/to/no-poster.jpg";

              return (
                <div
                  key={movie.id}
                  className="movie-card position-relative transition-transform transform hover:scale-105 hover:shadow-2xl rounded-lg overflow-hidden"
                  style={{ width: "22%", minWidth: "150px" }}
                >
                  <Link
                    to={`/movie/${movie.id}`}
                    aria-label={`View details for ${movie.title || movie.name}`}
                  >
                    <div className="movie-img-container relative w-full bg-cover bg-center mb-4 rounded-lg overflow-hidden shadow-lg">
                      <Img
                        src={imageUrl}
                        alt={movie.title || movie.name}
                        className="w-full h-full object-cover object-center rounded-lg transition-transform transform hover:scale-110"
                        loading="lazy"
                      />
                      <CircleRating
                        rating={movie.vote_average?.toFixed(1)}
                        className="rating-circle position-absolute top-2 right-2 bg-white rounded-full shadow-md"
                        fillColor="#04152d"
                      />
                    </div>
                  </Link>
                  <div className="movie-info text-center text-white">
                    <span className="movie-title text-sm md:text-lg mb-1 font-semibold truncate">
                      {movie.title || movie.name}
                    </span>
                    <span className="movie-release-date text-xs md:text-sm opacity-80">
                      {dayjs(movie.release_date).format("MMM D, YYYY")}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Carousel.Item>
      ))}

      {/* Custom navigation controls */}
      <button
        className="carousel-control-prev custom-control"
        onClick={() => document.querySelector('.carousel-control-prev').click()}
        aria-label="Previous"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button
        className="carousel-control-next custom-control"
        onClick={() => document.querySelector('.carousel-control-next').click()}
        aria-label="Next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </Carousel>
  );
}

export default MovieCarousel;