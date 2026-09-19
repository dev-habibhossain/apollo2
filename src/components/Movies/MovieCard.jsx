import { Star } from "lucide-react";

const MovieCard = ({ movie, onDetails }) => {
  const {  name, type, language, genres, rating, image, premiered } = movie;

  return (
    <div>
      <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-orange-500/50 transition">
        <img
          src={image?.medium || "https://via.placeholder.com/300x450"}
          alt={name}
          className="w-full h-64 object-cover"
        />

        <div className="p-4">
          <h3 className="font-bold text-lg text-zinc-100 mb-1">{name}</h3>

          <p className="text-zinc-400 text-sm mb-2">
            {type} · {language || "N/A"} ·{" "}
            {premiered ? premiered.slice(0, 4) : "N/A"}
          </p>

          <p className="text-zinc-500 text-sm mb-4">
            {genres?.slice(0, 2).join(" · ") || "No genre"}
          </p>

          <div className="flex justify-between items-center">
            <span className="font-semibold text-zinc-200 flex items-center gap-1">
              <Star size={18} className="text-yellow-400 fill-yellow-400" />
              {rating?.average?.toFixed(1) || "N/A"}
            </span>

            <button
              onClick={() => onDetails(movie)}
              className="bg-orange-500 text-white font-semibold hover:bg-orange-600 px-3 py-2 rounded-md text-sm transition"
            >
              See Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
