import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router";
import { Film, AlertCircle, RefreshCw, Sparkles, FilterX } from "lucide-react";
import PageLayout from "../components/PageLayout";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import SkeletonCard from "../components/SkeletonCard";
import SectionHeader from "../components/ui/SectionHeader";
import EmptyState from "../components/ui/EmptyState";
import Button from "../components/ui/Button";
import { fetchShows, searchShows } from "../lib/api";
import { useDocumentTitle } from "../lib/useDocumentTitle";

const COMMON_GENRES = [
  "Drama", "Comedy", "Action", "Science-Fiction",
  "Thriller", "Crime", "Horror", "Romance", "Adventure", "Mystery",
];

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get("q") || "";
  const selectedGenre = searchParams.get("genre") || "All";

  const pageTitle = useMemo(() => {
    if (queryParam.trim()) return `"${queryParam.trim()}" — Movie Search | Filmora`;
    if (selectedGenre && selectedGenre !== "All") return `${selectedGenre} Movies & TV Series — Filmora`;
    return "Explore Movies & TV Series — Filmora";
  }, [queryParam, selectedGenre]);

  const pageDescription = useMemo(() => {
    if (queryParam.trim())
      return `Search results for "${queryParam.trim()}" on Filmora. Browse posters, critic ratings, and show synopses.`;
    if (selectedGenre && selectedGenre !== "All")
      return `Browse the best ${selectedGenre} shows and movies on Filmora with comprehensive cast and overview details.`;
    return "Discover and browse thousands of movies and TV series with real-time ratings, release dates, and plot summaries.";
  }, [queryParam, selectedGenre]);

  useDocumentTitle(pageTitle, pageDescription);

  const [searchInput, setSearchInput] = useState(queryParam);
  const [sortBy, setSortBy] = useState("popular");
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedShow, setSelectedShow] = useState(null);
  const [displayCount, setDisplayCount] = useState(24);

  // Debounce search input to avoid syncing URL on every keystroke
  useEffect(() => {
    const t = setTimeout(() => {
      setSearchParams((prev) => {
        const next = new URLSearchParams(prev);
        const q = searchInput.trim();
        if (q) {
          next.set("q", q);
        } else {
          next.delete("q");
        }
        return next;
      }, { replace: true });
    }, 350);
    return () => clearTimeout(t);
  }, [searchInput, setSearchParams]);

  // Fetch shows whenever query parameter changes
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const results = queryParam.trim()
          ? await searchShows(queryParam.trim())
          : await fetchShows();
        if (!cancelled) {
          setShows(results);
          setDisplayCount(24);
          setError(null);
        }
      } catch {
        if (!cancelled) {
          setError("Unable to retrieve movie catalog. Please check your connection.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [queryParam]);

  const handleSearchChange = (val) => {
    setSearchInput(val);
    setLoading(true);
  };

  const handleClearSearch = () => {
    setSearchInput("");
    setLoading(true);
    setSearchParams((prev) => {
      const n = new URLSearchParams(prev);
      n.delete("q");
      return n;
    });
  };

  // Sync genre filter with URL search params
  const handleGenreChange = (genre) => {
    setSearchParams((prev) => {
      const n = new URLSearchParams(prev);
      if (genre && genre !== "All") {
        n.set("genre", genre);
      } else {
        n.delete("genre");
      }
      return n;
    });
  };

  const handleRetry = () => {
    setError(null);
    setLoading(true);
    fetchShows()
      .then(setShows)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  };

  const handleReset = () => {
    handleClearSearch();
    handleGenreChange("All");
  };

  // Client-side filtering by genre and sorting
  const filteredAndSortedShows = useMemo(() => {
    let list = [...shows];
    if (selectedGenre && selectedGenre !== "All") {
      list = list.filter((s) =>
        Array.isArray(s.genres) &&
        s.genres.some((g) => g.toLowerCase() === selectedGenre.toLowerCase())
      );
    }
    list.sort((a, b) => {
      if (sortBy === "rating") return (b.rating?.average || 0) - (a.rating?.average || 0);
      if (sortBy === "newest") return (b.premiered ? new Date(b.premiered) : 0) - (a.premiered ? new Date(a.premiered) : 0);
      if (sortBy === "title") return (a.name || "").localeCompare(b.name || "");
      return (b.weight || 0) - (a.weight || 0);
    });
    return list;
  }, [shows, selectedGenre, sortBy]);

  const visibleShows = filteredAndSortedShows.slice(0, displayCount);
  const hasMore = displayCount < filteredAndSortedShows.length;

  return (
    <PageLayout selectedShow={selectedShow} onCloseModal={() => setSelectedShow(null)}>
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <header className="mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs font-semibold border border-amber-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Movie &amp; TV Catalog</span>
          </div>
          <SectionHeader
            heading="Explore All Titles"
            subtitle="Search our comprehensive database by title or refine by genre to find your next binge-worthy story."
            size="lg"
          />
        </header>

        <section aria-label="Search and filter movies" className="mb-8">
          <SearchBar
            value={searchInput}
            onChange={handleSearchChange}
            onClear={handleClearSearch}
            selectedGenre={selectedGenre}
            onSelectGenre={handleGenreChange}
            genres={COMMON_GENRES}
            sortBy={sortBy}
            onChangeSort={setSortBy}
            totalResults={loading ? undefined : filteredAndSortedShows.length}
          />
        </section>

        {(searchInput.trim() || selectedGenre !== "All") && (
          <div className="flex items-center gap-2 mb-6 flex-wrap text-xs text-slate-600 dark:text-slate-400">
            <span>Filtering by:</span>
            {searchInput.trim() && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-400 font-semibold">
                Title: &ldquo;{searchInput}&rdquo;
                <button type="button" onClick={handleClearSearch} className="hover:opacity-70 cursor-pointer">&times;</button>
              </span>
            )}
            {selectedGenre !== "All" && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 dark:bg-white/10 border border-slate-300 dark:border-white/10 text-slate-800 dark:text-slate-200 font-medium">
                Genre: {selectedGenre}
                <button type="button" onClick={() => handleGenreChange("All")} className="hover:opacity-70 cursor-pointer">&times;</button>
              </span>
            )}
            <button type="button" onClick={handleReset} className="text-amber-600 dark:text-amber-400 hover:underline ml-2 cursor-pointer">
              Reset all
            </button>
          </div>
        )}

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 12 }).map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : error ? (
          <EmptyState
            variant="error"
            icon={<AlertCircle className="w-6 h-6" />}
            title="Connection Error"
            message={error}
            action={
              <Button leftIcon={<RefreshCw className="w-3.5 h-3.5" />} size="sm" onClick={handleRetry}>
                Retry Fetching
              </Button>
            }
          />
        ) : filteredAndSortedShows.length === 0 ? (
          <EmptyState
            icon={<FilterX className="w-6 h-6" />}
            title="No Titles Found"
            message={`We couldn't find any movies or TV shows matching${searchInput ? ` "${searchInput}"` : ""}${selectedGenre !== "All" ? ` in ${selectedGenre}` : ""}.`}
            action={
              <Button leftIcon={<RefreshCw className="w-3.5 h-3.5" />} size="sm" onClick={handleReset}>
                Reset Search &amp; Filters
              </Button>
            }
          />
        ) : (
          <section aria-labelledby="catalog-results-heading">
            <h2 id="catalog-results-heading" className="sr-only">Movie Search Results</h2>
            <div id="movies-grid" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {visibleShows.map((show) => (
                <MovieCard key={show.id} show={show} onSelect={setSelectedShow} />
              ))}
            </div>

            {hasMore && (
              <div className="text-center mt-12 mb-6">
                <Button
                  id="load-more-btn"
                  variant="secondary"
                  leftIcon={<Film className="w-4 h-4 text-amber-500" />}
                  onClick={() => setDisplayCount((c) => c + 24)}
                >
                  Load More Titles ({filteredAndSortedShows.length - displayCount} remaining)
                </Button>
              </div>
            )}
          </section>
        )}
      </div>
    </PageLayout>
  );
}
