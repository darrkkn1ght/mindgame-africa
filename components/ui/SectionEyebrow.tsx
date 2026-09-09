interface SectionEyebrowProps {
  number?: string;
  label: string;
  className?: string;
}

export function SectionEyebrow({ number, label, className = "" }: SectionEyebrowProps) {
  return (
    <div
      className={`flex items-center gap-2.5 font-[family-name:var(--font-jetbrains-mono)] text-[0.8125rem] font-medium uppercase tracking-[0.08em] text-navy/60 ${className}`}
    >
      {number && (
        <span className="text-orange font-semibold">{number}</span>
      )}
      {number && (
        <span className="text-navy/25">—</span>
      )}
      <span>{label}</span>
    </div>
  );
}
