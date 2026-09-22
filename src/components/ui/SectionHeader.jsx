export default function SectionHeader({
  eyebrow,
  heading,
  subtitle,
  id,
  center = false,
  size = "md",
  className = "",
}) {
  const align = center ? "text-center mx-auto" : "";

  const headingSizes = {
    sm: "text-xl sm:text-2xl",
    md: "text-2xl sm:text-3xl",
    lg: "text-3xl sm:text-4xl md:text-5xl",
  };

  return (
    <div className={`${align} max-w-2xl ${className}`}>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
          {eyebrow}
        </span>
      )}
      <h2
        id={id}
        className={`${headingSizes[size] ?? headingSizes.md} font-extrabold text-slate-900 dark:text-white tracking-tight mt-1`}
      >
        {heading}
      </h2>
      {subtitle && (
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
