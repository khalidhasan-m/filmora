import { Link } from "react-router";
import { Home, Compass, Film } from "lucide-react";
import { useDocumentTitle } from "../lib/useDocumentTitle";

export default function NotFound() {
  useDocumentTitle("404 — Page Not Found | Filmora", "The page you're looking for doesn't exist.");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-[#0b0c10] px-4 text-center transition-colors">
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-500/8 dark:bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative mb-6">
        <span className="text-[120px] sm:text-[160px] font-black leading-none text-slate-100 dark:text-white/5 select-none">
          404
        </span>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-2xl bg-amber-400 flex items-center justify-center shadow-xl shadow-amber-500/30">
            <Film className="w-10 h-10 text-slate-950" />
          </div>
        </div>
      </div>

      <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-3">
        Scene Not Found
      </h1>
      <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base max-w-md mb-8 leading-relaxed">
        Looks like this page got cut from the final edit. The URL might be wrong or the page no longer exists.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-sm"
        >
          <Home className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        <Link
          to="/movies"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10 transition-colors"
        >
          <Compass className="w-4 h-4 text-amber-500" />
          <span>Browse Movies</span>
        </Link>
      </div>

      <p className="mt-12 text-xs text-slate-400 dark:text-slate-600">
        Filmora · Movie & TV Explorer
      </p>
    </div>
  );
}
