import { X, Star } from "lucide-react";

const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null;

  const {
    name,
    type,
    language,
    genres,
    rating,
    image,
    premiered,
    summary,
    runtime,
    status,
  } = movie;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
      <div className="relative bg-zinc-900 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-zinc-800">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/60 text-white p-2 rounded-full hover:bg-orange-500 transition"
        >
          <X size={20} />
        </button>

        <div className="grid md:grid-cols-[220px_1fr] gap-6 p-6">
          <img
            src={image?.original || image?.medium}
            alt={name}
            className="w-full rounded-lg object-cover"
          />

          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{name}</h2>

            <div className="flex items-center gap-3 text-sm text-zinc-400 mb-4">
              <span>{type}</span>
              <span>•</span>
              <span>{language || "N/A"}</span>
              <span>•</span>
              <span>{premiered ? premiered.slice(0, 4) : "N/A"}</span>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <Star size={18} className="text-yellow-400 fill-yellow-400" />

              <span className="text-white font-semibold">
                {rating?.average?.toFixed(1) || "N/A"}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-5">
              {genres?.map((genre) => (
                <span
                  key={genre}
                  className="bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full text-xs"
                >
                  {genre}
                </span>
              ))}
            </div>

            <div className="text-sm text-zinc-400 space-y-2 mb-5">
              <p>
                <span className="text-zinc-200 font-medium">Status:</span>{" "}
                {status || "N/A"}
              </p>

              <p>
                <span className="text-zinc-200 font-medium">Runtime:</span>{" "}
                {runtime ? `${runtime} min` : "N/A"}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Overview
              </h3>

              <div
                className="text-zinc-400 text-sm leading-6"
                dangerouslySetInnerHTML={{
                  __html: summary || "No description available.",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
