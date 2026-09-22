import { Link, isRouteErrorResponse } from "react-router";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { useDocumentTitle } from "../lib/useDocumentTitle";

export default function ErrorPage({ error }) {
  useDocumentTitle("Error | Filmora", "Something went wrong.");

  const is404 = error && isRouteErrorResponse(error) && error.status === 404;

  const title = is404 ? "Scene Not Found" : "Something Went Wrong";
  const message = is404
    ? "This page was cut from the final edit. The URL might be wrong or the page no longer exists."
    : "An unexpected error occurred. Try refreshing the page or go back home.";

  const statusText = error
    ? (isRouteErrorResponse(error) ? `${error.status} — ${error.statusText}` : (error?.message || "Runtime Error"))
    : "500 — Application Error";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-[#0b0c10] px-4 text-center transition-colors">
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-red-500/5 dark:bg-red-500/8 rounded-full blur-3xl" />
      </div>

      <div className="w-20 h-20 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6 text-red-400">
        <AlertTriangle className="w-10 h-10" />
      </div>

      <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 dark:text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
        {statusText}
      </span>

      <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-3">
        {title}
      </h1>
      <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base max-w-md mb-8 leading-relaxed">
        {message}
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-3">
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-sm cursor-pointer"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Reload Page</span>
        </button>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10 transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Go Home</span>
        </Link>
      </div>

      <p className="mt-12 text-xs text-slate-400 dark:text-slate-600">
        Filmora · Movie & TV Explorer
      </p>
    </div>
  );
}
