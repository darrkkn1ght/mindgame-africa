interface SectionEyebrowProps {
  number?: string;
  label: string;
  className?: string;
  variant?: "default" | "gold";
}

export function SectionEyebrow({
  number,
  label,
  className = "",
  variant = "default",
}: SectionEyebrowProps) {
  const isGold = variant === "gold";

  return (
    <div
      className={`flex items-center gap-2.5 font-[family-name:var(--font-jetbrains-mono)] text-[0.8125rem] font-semibold uppercase tracking-[0.12em] ${
        isGold ? "text-gold" : "text-navy/60"
      } ${className}`}
    >
      {number && (
        <span className={isGold ? "text-gold" : "text-orange font-semibold"}>{number}</span>
      )}
      {number && (
        <span className={isGold ? "text-gold/40" : "text-navy/25"}>—</span>
      )}
      <span>{label}</span>
    </div>
  );
}
