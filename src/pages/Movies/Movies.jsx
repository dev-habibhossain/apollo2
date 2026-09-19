import { useState } from "react";
import MovieCard from "../../components/Movies/MovieCard";

const Movies = () => {
    const [movies, setMovies] = useState([]);
     fetch("https://api.tvmaze.com/shows")
       .then((response) => response.json())
       .then((data) => setMovies(data));

  return (
    <div className="bg-gray-200 overflow-hidden">
      <section className="bg-linear-to-r from-gray-600 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to MovieHub</h1>
            <p className="text-xl mb-8">Discover the latest movies and TV shows</p>
            <div className="max-w-md mx-auto relative">
                <input 
                    type="text" 
                    placeholder="Search for movies..." 
                    className="w-full bg-amber-50 px-4 py-3 rounded-full text-gray-800 focus:outline-none"
                />
                <button className="absolute right-2 top-2 bg-yellow-500 text-black px-4 py-1 rounded-full">
                    Search
                </button>
            </div>
        </div>
    </section>
    <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">All Movies & TV Shows.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    </section>

      {/* TODO: Page heading, Search bar, Movie/show grid, Loading state, Error state,
      Empty state, Movie Details Modal */}
    </div>
  );
};

export default Movies;
