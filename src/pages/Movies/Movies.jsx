import { useEffect, useState } from "react";
import MovieCard from "../../components/Movies/MovieCard";
import MovieModal from "../../components/Movies/MovieModal";

const Movies = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }

        return response.json();
      })
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

 const handleSearch = () => {
   if (!search.trim()) return;

   setLoading(true);
   setError("");

   fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(search)}`)
     .then((response) => {
       if (!response.ok) {
         throw new Error("Failed to search movies");
       }

       return response.json();
     })
     .then((data) => {
       setMovies(data.map((item) => item.show));
       setLoading(false);
     })
     .catch((error) => {
       setError(error.message);
       setLoading(false);
     });
 };

  return (
    <div className="bg-gray-200 overflow-hidden">
      <section className="bg-linear-to-r from-gray-600 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to MovieHub
          </h1>

          <p className="text-xl mb-8">
            Discover the latest movies and TV shows
          </p>

          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Search for movies..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-amber-50 px-4 py-3 rounded-full text-gray-800 focus:outline-none"
            />

            <button
              onClick={handleSearch}
              className="absolute right-2 top-2 bg-yellow-500 text-black px-4 py-1 rounded-full"
            >
              Search
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          All Movies & TV Shows.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading && (
            <p className="col-span-full text-center text-gray-600">
              Loading movies...
            </p>
          )}

          {error && (
            <p className="col-span-full text-center text-red-500">{error}</p>
          )}

          {!loading &&
            !error &&
            movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onDetails={setSelectedMovie}
              />
            ))}
        </div>

        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      </section>
    </div>
  );
};

export default Movies;
