import React, { useContext } from "react";
import MovieContext from "../../../context/MovieContext";
import MovieCarousel from "../../../components/MovieCarousel";

function Upcoming() {
  const { upcoming, loading, error } = useContext(MovieContext);

  if (loading) return <div className="text-center text-lg">Loading...</div>;
  if (error) return <div className="text-center text-red-500">Error: {error}</div>;

  return (
    <div>
      <MovieCarousel movies={upcoming} />
      {loading && (
        <div className="flex gap-4 justify-center px-4 py-4">
          {Array.from({ length: 6 }, (_, index) => (
            <div key={index} className="bg-gray-800 w-28 h-44 animate-pulse rounded-lg shadow-md"></div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Upcoming;
