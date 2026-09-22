import { Search, X, SlidersHorizontal } from "lucide-react";

export default function SearchBar({
  value,
  onChange,
  onClear,
  selectedGenre,
  onSelectGenre,
  genres = [],
  sortBy,
  onChangeSort,
  totalResults,
}) {
  return (
    <div className="w-full space-y-4">
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 pl-4 sm:pl-5 flex items-center pointer-events-none">
          <Search className="w-5 h-5 text-amber-500 dark:text-amber-400" />
        </div>

        <input
          id="movie-search-input"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search for a movie or TV show (e.g. Girls, Breaking Bad, Batman)..."
          className="w-full pl-12 sm:pl-14 pr-28 sm:pr-32 py-3.5 sm:py-4 bg-white dark:bg-[#12141e]/90 hover:bg-slate-50 dark:hover:bg-[#151824] focus:bg-white dark:focus:bg-[#161a28] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-400 rounded-2xl border border-slate-300 dark:border-white/10 focus:border-amber-500 dark:focus:border-amber-400/80 focus:outline-none focus:ring-2 focus:ring-amber-500/20 text-sm sm:text-base shadow-sm dark:shadow-xl transition-all duration-200"
        />

        <div className="absolute inset-y-0 right-0 pr-3 sm:pr-4 flex items-center gap-2">
          {value && (
            <button
              type="button"
              onClick={onClear}
              id="clear-search-btn"
              aria-label="Clear search query"
              className="p-1.5 rounded-lg text-slate-400 dark:text-gray-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}

          {typeof totalResults === "number" && (
            <span className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-gray-300">
              {totalResults} {totalResults === 1 ? "title" : "titles"}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pt-1">
        <div className="flex items-center gap-2 overflow-x-auto pb-1.5 sm:pb-0 scrollbar-none">
          <button
            type="button"
            onClick={() => onSelectGenre("All")}
            className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
              selectedGenre === "All"
                ? "bg-amber-400 text-slate-950 font-semibold shadow-md shadow-amber-500/20"
                : "bg-white dark:bg-white/5 text-slate-700 dark:text-gray-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/5 shadow-xs"
            }`}
          >
            All Genres
          </button>

          {genres.map((genre) => {
            const isSelected = selectedGenre === genre;
            return (
              <button
                key={genre}
                type="button"
                onClick={() => onSelectGenre(genre)}
                className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-amber-400 text-slate-950 font-semibold shadow-md shadow-amber-500/20"
                    : "bg-white dark:bg-white/5 text-slate-700 dark:text-gray-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/5 shadow-xs"
                }`}
              >
                {genre}
              </button>
            );
          })}
        </div>

        {onChangeSort && (
          <div className="flex items-center gap-2 self-end md:self-auto shrink-0">
            <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-gray-400 font-medium">
              <SlidersHorizontal className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
              <span>Sort:</span>
            </div>
            <select
              value={sortBy}
              onChange={(e) => onChangeSort(e.target.value)}
              id="sort-select"
              className="bg-white dark:bg-[#12141e] text-xs sm:text-sm text-slate-800 dark:text-gray-200 border border-slate-300 dark:border-white/10 rounded-xl px-2.5 py-1.5 focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 cursor-pointer shadow-xs"
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Top Rated</option>
              <option value="newest">Newest First</option>
              <option value="title">Title (A-Z)</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
}
