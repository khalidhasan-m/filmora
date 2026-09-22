import { useEffect } from "react";
import {
  X,
  Star,
  Calendar,
  Clock,
  Globe,
  Tv,
  Film,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { formatRating, formatYear, stripHtml } from "../lib/utils";

export default function MovieDetailsModal({ show, onClose }) {
  // Close modal on Escape key press and prevent background page scrolling
  useEffect(() => {
    if (!show) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [show, onClose]);

  if (!show) return null;

  const backdropUrl = show.image?.original || show.image?.medium;
  const rating = formatRating(show.rating?.average);
  const releaseYear = formatYear(show.premiered);
  const cleanSummary = stripHtml(show.summary);
  const genres = Array.isArray(show.genres) ? show.genres : [];
  const networkName = show.network?.name || show.webChannel?.name || "Independent";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto bg-slate-950/70 dark:bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-[#14161f] border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-2xl my-auto animate-scaleUp transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-44 sm:h-52 md:h-60 bg-slate-100 dark:bg-slate-900 overflow-hidden">
          {backdropUrl ? (
            <img
              src={backdropUrl}
              alt={show.name || "Movie backdrop"}
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-900 text-slate-400 dark:text-slate-500">
              <Film className="w-12 h-12 mb-1.5" />
              <p className="text-xs font-medium">No Backdrop Image</p>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#14161f] via-white/30 dark:via-[#14161f]/30 to-transparent" />

          <div className="absolute bottom-3 left-4 sm:left-6 flex flex-wrap items-center gap-2 z-10">
            {show.status && (
              <span className="px-2.5 py-0.5 rounded-md bg-slate-950/70 backdrop-blur-md border border-white/10 text-[11px] font-semibold uppercase tracking-wider text-amber-300">
                {show.status}
              </span>
            )}
            {show.type && (
              <span className="px-2.5 py-0.5 rounded-md bg-slate-900/60 backdrop-blur-md border border-white/10 text-[11px] font-semibold text-white">
                {show.type}
              </span>
            )}
          </div>
        </div>

        <div className="p-5 sm:p-6 md:p-7 space-y-4">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pr-8">
              <h2
                id="modal-title"
                className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight font-sans"
              >
                {show.name}
              </h2>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-400 font-semibold text-sm shrink-0 self-start sm:self-auto">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>Rating: {rating}</span>
                <span className="text-slate-400 text-xs font-normal">/ 10</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2.5 text-xs text-slate-600 dark:text-slate-400 font-medium">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>Release: {show.premiered || releaseYear}</span>
              </div>

              {show.averageRuntime || show.runtime ? (
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{show.averageRuntime || show.runtime} min</span>
                </div>
              ) : null}

              {networkName && (
                <div className="flex items-center gap-1.5">
                  <Tv className="w-3.5 h-3.5 text-slate-400" />
                  <span>{networkName}</span>
                </div>
              )}

              {genres.length > 0 && (
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-slate-300 dark:text-slate-700">•</span>
                  {genres.map((genre) => (
                    <span
                      key={genre}
                      className="text-[11px] font-semibold text-amber-700 dark:text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-3 border-t border-slate-200 dark:border-white/10">
            <div className="md:col-span-2 space-y-1.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                <span>Overview</span>
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line line-clamp-6 md:line-clamp-none">
                {cleanSummary}
              </p>
            </div>

            <div className="space-y-3 flex flex-col justify-between">
              <div className="space-y-2 p-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 text-xs">
                <div>
                  <span className="text-slate-400 dark:text-slate-500 block text-[11px]">Language</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{show.language || "English"}</span>
                </div>
                <div>
                  <span className="text-slate-400 dark:text-slate-500 block text-[11px]">Schedule</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {show.schedule?.days?.length ? show.schedule.days.join(", ") : "Standard"}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 dark:text-slate-500 block text-[11px]">Official Website</span>
                  {show.officialSite ? (
                    <a
                      href={show.officialSite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-amber-600 dark:text-amber-400 hover:underline inline-flex items-center gap-1 truncate max-w-full"
                    >
                      <Globe className="w-3 h-3 shrink-0" />
                      <span>Visit Site</span>
                      <ExternalLink className="w-3 h-3 shrink-0" />
                    </a>
                  ) : (
                    <span className="text-slate-400">N/A</span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                {show.officialSite && (
                  <a
                    href={show.officialSite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/15 border border-slate-200 dark:border-white/10 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Official</span>
                  </a>
                )}

                <button
                  type="button"
                  onClick={onClose}
                  id="modal-bottom-close-btn"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-800 dark:text-slate-100 bg-slate-200 dark:bg-white/10 border border-slate-300 dark:border-white/10 hover:bg-red-500 hover:text-white hover:border-red-500 dark:hover:bg-red-500 dark:hover:border-red-500 dark:hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Close</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
