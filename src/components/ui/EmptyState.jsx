export default function EmptyState({
  icon,
  title,
  message,
  action,
  variant = "default",
}) {
  const iconBg =
    variant === "error"
      ? "bg-red-500/10 border-red-500/20 text-red-400"
      : "bg-amber-500/10 border-amber-500/20 text-amber-500";

  return (
    <section
      aria-label={title}
      className="text-center py-16 px-4 rounded-2xl bg-white dark:bg-[#14161f] border border-slate-200 dark:border-white/10 shadow-xs max-w-lg mx-auto my-8"
    >
      {icon && (
        <div
          className={`w-12 h-12 rounded-xl border flex items-center justify-center mx-auto mb-4 ${iconBg}`}
        >
          {icon}
        </div>
      )}
      <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{title}</h2>
      {message && (
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 max-w-sm mx-auto leading-relaxed">
          {message}
        </p>
      )}
      {action && <div>{action}</div>}
    </section>
  );
}
