export default function Button({
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  className = "",
  children,
  ...rest
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-bold rounded-xl transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60";

  const variants = {
    primary:
      "bg-amber-400 text-slate-950 hover:bg-amber-300 shadow-sm",
    secondary:
      "bg-white dark:bg-white/5 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10 shadow-xs",
    ghost:
      "text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-sm",
  };

  return (
    <button
      type="button"
      className={`${base} ${variants[variant] ?? variants.primary} ${sizes[size] ?? sizes.md} ${className}`}
      {...rest}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
}
