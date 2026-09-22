export default function SkeletonCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-[#14161f] border border-slate-200 dark:border-white/5 shadow-xs animate-pulse flex flex-col">
      <div className="w-full aspect-[3/4] bg-gradient-to-b from-slate-200 to-slate-100 dark:from-white/10 dark:to-white/5" />

      <div className="p-3 flex flex-col flex-1 justify-between gap-2">
        <div className="space-y-2">
          <div className="h-4 w-16 rounded-full bg-slate-200 dark:bg-white/10" />
          <div className="h-4 w-4/5 rounded-md bg-slate-200 dark:bg-white/10" />
          <div className="flex items-center gap-3 pt-0.5">
            <div className="h-3 w-12 rounded-md bg-slate-200 dark:bg-white/10" />
            <div className="h-3 w-10 rounded-md bg-slate-200 dark:bg-white/10" />
          </div>
        </div>
        <div className="h-7 w-full rounded-xl bg-slate-200 dark:bg-white/10 mt-1" />
      </div>
    </div>
  );
}
