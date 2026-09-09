interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "navy";
}

export function Card({ children, className = "", variant = "default" }: CardProps) {
  const bg = variant === "navy"
    ? "bg-navy-soft text-cream"
    : "bg-cream-dark text-navy";

  return (
    <div
      className={`rounded-lg p-8 ${bg} ${className}`}
    >
      {children}
    </div>
  );
}
