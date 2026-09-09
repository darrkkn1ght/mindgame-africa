interface SectionEyebrowProps {
  number?: string;
  label: string;
  className?: string;
  variant?: "default" | "gold" | "gold-dark";
}

export function SectionEyebrow({
  number,
  label,
  className = "",
  variant = "default",
}: SectionEyebrowProps) {
  const textColor =
    variant === "gold"
      ? "text-gold"
      : variant === "gold-dark"
      ? "text-[#B8862E]"
      : "text-navy/60";

  return (
    <div
      className={`flex items-center gap-2.5 font-[family-name:var(--font-jetbrains-mono)] text-[0.8125rem] font-semibold uppercase tracking-[0.12em] ${textColor} ${className}`}
    >
      {number && (
        <span
          className={
            variant === "gold"
              ? "text-gold"
              : variant === "gold-dark"
              ? "text-[#B8862E]"
              : "text-orange font-semibold"
          }
        >
          {number}
        </span>
      )}
      {number && (
        <span
          className={
            variant === "gold"
              ? "text-gold/40"
              : variant === "gold-dark"
              ? "text-[#B8862E]/40"
              : "text-navy/25"
          }
        >
          —
        </span>
      )}
      <span>{label}</span>
    </div>
  );
}
