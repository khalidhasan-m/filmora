import { Star, Calendar, Info, Film } from "lucide-react";
import { formatYear, formatRating } from "../lib/utils";

export default function MovieCard({ show, onSelect }) {
  if (!show) return null;

  const posterUrl = show.image?.medium || show.image?.original;
  const year = formatYear(show.premiered);
  const rating = formatRating(show.rating?.average);
  const genres = Array.isArray(show.genres) ? show.genres.slice(0, 2) : [];

  return (
    <div
      className="group relative flex flex-col bg-white dark:bg-[#14161f] hover:bg-slate-50 dark:hover:bg-[#191c28] rounded-2xl overflow-hidden border border-slate-200 dark:border-white/5 hover:border-amber-400/60 dark:hover:border-amber-400/50 shadow-xs hover:shadow-md transition-all duration-250 cursor-pointer"
      onClick={() => onSelect(show)}
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
        {posterUrl ? (
          <img
            src={posterUrl}
            alt={show.name || "Movie poster"}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-400 ease-out"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-900 p-4 text-center">
            <Film className="w-10 h-10 text-slate-400 dark:text-slate-600 mb-2" />
            <span className="text-xs font-medium text-slate-600 dark:text-slate-400 line-clamp-2">
              {show.name}
            </span>
            <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 uppercase tracking-wider">
              No Poster
            </span>
          </div>
        )}

        <div className="absolute top-2.5 right-2.5 flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-xs font-semibold text-amber-300">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span>{rating}</span>
        </div>

        {show.status && (
          <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-slate-950/70 backdrop-blur-md text-[10px] uppercase font-bold tracking-wider text-slate-200 border border-white/10">
            {show.status}
          </div>
        )}

        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white dark:from-[#14161f] to-transparent opacity-90 dark:opacity-85" />
      </div>

      <div className="p-3 flex flex-col flex-1 justify-between gap-2">
        <div>
          {genres.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-1.5">
              {genres.map((g) => (
                <span
                  key={g}
                  className="text-[11px] font-semibold text-amber-700 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20"
                >
                  {g}
                </span>
              ))}
            </div>
          )}

          <h3
            title={show.name}
            className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors line-clamp-1"
          >
            {show.name}
          </h3>

          <div className="flex items-center gap-2 mt-1 text-xs text-slate-500 dark:text-slate-400 font-medium">
            <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400 font-semibold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{rating}</span>
            </span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{year}</span>
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(show);
          }}
          className="w-full mt-1 inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 hover:bg-amber-400 hover:text-slate-950 dark:bg-white/5 dark:hover:bg-amber-400 dark:hover:text-slate-950 border border-slate-200 dark:border-white/10 hover:border-amber-400 transition-all duration-200 group/btn cursor-pointer"
        >
          <Info className="w-3.5 h-3.5 text-amber-500 group-hover/btn:text-slate-950 group-hover/btn:rotate-12 transition-all duration-200" />
          <span>See Details</span>
        </button>
      </div>
    </div>
  );
}
