import { useState, useEffect } from "react";
import { Link } from "react-router";
import {
  Sparkles, Compass, ArrowRight, Flame,
  Zap, Film, ShieldCheck,
  Theater, Swords, Smile, Rocket, Eye, Search, Clapperboard,
} from "lucide-react";
import PageLayout from "../components/PageLayout";
import HeroBanner from "../components/HeroBanner";
import MovieCard from "../components/MovieCard";
import SkeletonCard from "../components/SkeletonCard";
import SectionHeader from "../components/ui/SectionHeader";
import Button from "../components/ui/Button";
import { fetchShows } from "../lib/api";
import { useDocumentTitle } from "../lib/useDocumentTitle";
import { featureHighlights, popularGenres } from "../data/homeData";

const ICON_MAP = {
  Zap, Film, ShieldCheck, Theater, Swords, Smile, Rocket, Eye, Search, Clapperboard,
};
const getIcon = (name) => ICON_MAP[name] ?? Film;

export default function Home() {
  useDocumentTitle(
    "Filmora — Discover Movies & TV Shows",
    "Explore and discover your favorite movies and shows from around the world."
  );

  const [featuredShows, setFeaturedShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedShow, setSelectedShow] = useState(null);

  // Load top-rated shows on mount for the trending highlights section
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const data = await fetchShows();
        if (mounted) {
          setFeaturedShows(
            [...data]
              .sort((a, b) => (b.rating?.average || 0) - (a.rating?.average || 0))
              .slice(0, 8)
          );
        }
      } catch {
        if (mounted) setError("Failed to load trending shows. Please try again.");
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, []);

  return (
    <PageLayout selectedShow={selectedShow} onCloseModal={() => setSelectedShow(null)}>
      {/* Hero section */}
      <HeroBanner />

      {/* Trending highlights grid */}
      <section
        aria-labelledby="trending-heading"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">
              <Flame className="w-4 h-4 fill-amber-400" />
              <span>Critically Acclaimed</span>
            </div>
            <SectionHeader
              id="trending-heading"
              heading="Trending Highlights"
              subtitle="Handpicked top-rated titles from around the globe"
            />
          </div>
          <Link
            to="/movies"
            className="inline-flex items-center gap-1 text-sm font-semibold text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors group self-start sm:self-auto"
          >
            <span>View All Movies</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : error ? (
          <div className="text-center py-12 px-4 rounded-2xl bg-white dark:bg-[#14161f] border border-slate-200 dark:border-white/10 shadow-xs">
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{error}</p>
            <Button onClick={() => window.location.reload()} size="sm">Retry</Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredShows.map((show) => (
              <MovieCard key={show.id} show={show} onSelect={setSelectedShow} />
            ))}
          </div>
        )}
      </section>

      {/* Genre quick-navigation */}
      <section
        aria-labelledby="genres-heading"
        className="bg-slate-100/60 dark:bg-[#10121a] py-14 border-y border-slate-200 dark:border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            id="genres-heading"
            eyebrow="Diverse Categories"
            heading="Browse by Favorite Genre"
            subtitle="Click any category to jump straight into tailored titles."
            center
            className="mb-8"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
            {popularGenres.map((item) => {
              const Icon = getIcon(item.iconName);
              return (
                <Link
                  key={item.name}
                  to={`/movies?genre=${encodeURIComponent(item.name)}`}
                  className="group p-4 rounded-xl bg-white dark:bg-[#14161f] border border-slate-200 dark:border-white/5 hover:border-amber-400/50 transition-all text-center flex flex-col items-center justify-center shadow-xs hover:shadow-md"
                >
                  <Icon className="w-5 h-5 text-slate-400 dark:text-slate-500 group-hover:text-amber-500 transition-colors mb-2" />
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-100 group-hover:text-amber-500 transition-colors">
                    {item.name}
                  </span>
                  <span className="text-[11px] text-slate-400 dark:text-slate-500 mt-0.5">
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature highlights */}
      <section
        aria-labelledby="features-heading"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20"
      >
        <SectionHeader
          id="features-heading"
          eyebrow="Features"
          heading="Why Filmora Stands Out"
          subtitle="Engineered for movie lovers who value speed, accuracy, and clean design."
          center
          className="mb-10"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featureHighlights.map((feat) => {
            const Icon = getIcon(feat.iconName);
            return (
              <div
                key={feat.title}
                className="p-6 rounded-2xl bg-white dark:bg-[#14161f] border border-slate-200 dark:border-white/5 shadow-xs hover:shadow-md hover:border-amber-400/30 dark:hover:border-amber-400/20 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-amber-500 dark:text-amber-400" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">{feat.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-14 p-8 sm:p-10 rounded-2xl bg-white dark:bg-[#14161f] border border-slate-200 dark:border-amber-400/10 text-center shadow-xs relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
          <div className="max-w-xl mx-auto relative z-10">
            <Sparkles className="w-7 h-7 text-amber-500 dark:text-amber-400 mx-auto mb-3" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
              Ready to Find Your Next Favorite Movie?
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
              Explore the complete library, filter by categories, and read full synopses.
            </p>
            <Link
              to="/movies"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-sm"
            >
              <Compass className="w-4 h-4" />
              <span>Launch Movie Explorer</span>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
