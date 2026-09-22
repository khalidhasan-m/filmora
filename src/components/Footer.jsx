import { Link } from "react-router";
import { Clapperboard, Globe, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#07080d] mt-auto transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-400 flex items-center justify-center text-slate-950 font-black shadow-sm">
                <Clapperboard className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Filmora</span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-md leading-relaxed">
              Your ultimate gateway to discover captivating movies and television shows. Search across thousands of titles, inspect ratings, release dates, and comprehensive synopses — all in one place.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-gray-200 mb-4">
              Navigation
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/movies" className="text-slate-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  Movie Listing
                </Link>
              </li>
              <li>
                <Link to="/movies?q=thriller" className="text-slate-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  Top Thrillers
                </Link>
              </li>
              <li>
                <Link to="/movies?q=comedy" className="text-slate-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  Comedy Series
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-gray-200 mb-4">
              Connect
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://github.com/khalidhasan-m"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 flex items-center gap-1.5 transition-colors"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/>
                  </svg>
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://portfolio-nextjs-virid-sigma.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 flex items-center gap-1.5 transition-colors"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Website</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/khalidhasanmeskat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 flex items-center gap-1.5 transition-colors"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Filmora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
