import { Link } from "react-router";
import { Compass, Sparkles, Star, Film, PlayCircle } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 dark:opacity-20 scale-105 transform filter blur-[1px] transition-all duration-700"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=2000&q=80')`,
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-gradient-to-b from-amber-500/10 dark:from-amber-500/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/70 to-slate-50 dark:via-[#0b0c10]/70 dark:to-[#0b0c10]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 backdrop-blur-md mb-6">
          <Sparkles className="w-4 h-4 text-amber-500 dark:text-amber-400" />
          <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200">
            TVMaze Database Integration
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 uppercase">
          <span className="block font-display tracking-wider text-5xl sm:text-7xl md:text-8xl">
            Discover Movies
          </span>
          <span className="text-amber-500 dark:text-amber-400 text-3xl sm:text-5xl md:text-6xl font-sans normal-case font-bold block mt-1">
            & Stories That Move You
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-normal">
          Explore and discover your favorite movies and shows from around the world.
          Search by title, inspect ratings, release dates, and dive deep into plot overviews in seconds.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/movies"
            id="hero-explore-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-sm cursor-pointer"
          >
            <Compass className="w-4 h-4" />
            <span>Explore Now</span>
          </Link>

          <Link
            to="/movies?q=action"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 transition-colors"
          >
            <PlayCircle className="w-4 h-4 text-amber-500 dark:text-amber-400" />
            <span>Popular Action</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl mx-auto mt-14 pt-8 border-t border-slate-200 dark:border-white/10">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1.5 text-amber-500 dark:text-amber-400 font-bold text-xl sm:text-2xl">
              <Film className="w-4 h-4" />
              <span>10,000+</span>
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Shows & Movies</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1.5 text-amber-500 dark:text-amber-400 font-bold text-xl sm:text-2xl">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>Real-Time</span>
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Critic Ratings</span>
          </div>

          <div className="col-span-2 sm:col-span-1 flex flex-col items-center">
            <div className="flex items-center gap-1.5 text-amber-500 dark:text-amber-400 font-bold text-xl sm:text-2xl">
              <Sparkles className="w-4 h-4" />
              <span>Instant</span>
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Interactive Details</span>
          </div>
        </div>
      </div>
    </section>
  );
}
