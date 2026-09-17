import Image, { StaticImageData } from "next/image";
import { Camera } from "lucide-react";
import React from "react";

export type AspectRatio = "16/9" | "4/3" | "3/2" | "21/9" | "1/1" | "4/5";

export interface AppImageProps {
  /** Source path for the image (e.g. '/images/performance-data/sample.png'). If omitted or null, renders documentary placeholder frame. */
  src?: string | StaticImageData | null;
  /** Required alt text describing the image content. No default permitted. */
  alt: string;
  /** Visual aspect ratio constraint. Defaults to '16/9'. */
  aspectRatio?: AspectRatio;
  /** Explicit width in pixels (required if not using fill) */
  width?: number;
  /** Explicit height in pixels (required if not using fill) */
  height?: number;
  /** Fill the parent container (responsive). Defaults to true if width/height are omitted. */
  fill?: boolean;
  /** Responsive image sizes attribute for optimization */
  sizes?: string;
  /** Priority escape hatch for above-the-fold images (disables lazy loading). Defaults to false. */
  priority?: boolean;
  /** Optional caption rendered below the image */
  caption?: React.ReactNode;
  /** Subject category tag matching §17.1 */
  subject?: string;
  /** Subject title / identifier for documentary metadata */
  name?: string;
  /** Styling theme variant */
  variant?: "navy" | "cream";
  /** Optional additional CSS classes */
  className?: string;
}

const aspectRatioClasses: Record<AspectRatio, string> = {
  "16/9": "aspect-[16/9]",
  "4/3": "aspect-[4/3]",
  "3/2": "aspect-[3/2]",
  "21/9": "aspect-[21/9]",
  "1/1": "aspect-square",
  "4/5": "aspect-[4/5]",
};

export function AppImage({
  src,
  alt,
  aspectRatio = "16/9",
  width,
  height,
  fill,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  priority = false,
  caption,
  subject,
  name,
  variant = "navy",
  className = "",
}: AppImageProps) {
  const isNavy = variant === "navy";
  const shouldFill = fill !== undefined ? fill : !width && !height;
  const ratioClass = aspectRatioClasses[aspectRatio];

  return (
    <figure className={`group relative w-full overflow-hidden rounded-xl ${className}`}>
      <div
        className={`relative w-full ${ratioClass} overflow-hidden rounded-xl border ${
          isNavy
            ? "bg-navy-soft text-cream border-white/10"
            : "bg-cream-dark text-navy border-navy/10"
        }`}
      >
        {src ? (
          <>
            <Image
              src={src}
              alt={alt}
              fill={shouldFill}
              width={shouldFill ? undefined : width}
              height={shouldFill ? undefined : height}
              sizes={shouldFill ? sizes : undefined}
              priority={priority}
              loading={priority ? "eager" : "lazy"}
              className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
            />
            {/* Subtle brand overlay gradient */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent pointer-events-none opacity-40 group-hover:opacity-20 transition-opacity"
              aria-hidden="true"
            />
          </>
        ) : (
          /* Editorial Documentary Placeholder Frame (§17 & §19) */
          <div
            className="relative w-full h-full flex flex-col justify-between p-6 sm:p-8 select-none"
            role="img"
            aria-label={alt}
          >
            {/* Technical grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
              aria-hidden="true"
            />

            {/* Top Bar: Subject & Ratio */}
            <div className="relative z-10 flex items-center justify-between text-[0.6875rem] font-semibold uppercase tracking-wider font-[family-name:var(--font-inter)] opacity-75">
              <span className="flex items-center gap-1.5">
                <Camera size={13} className={isNavy ? "text-gold" : "text-green"} />
                <span>{name || "DOCUMENTARY PHOTOGRAPHY"}</span>
              </span>
              <span className="rounded px-1.5 py-0.5 border border-current/20">
                {aspectRatio}
              </span>
            </div>

            {/* Center: Subject Tag & Accessible Alt Description */}
            <div className="relative z-10 my-auto py-4 text-center max-w-[480px] mx-auto">
              {subject && (
                <p
                  className={`text-xs font-semibold uppercase tracking-wider font-[family-name:var(--font-inter)] mb-2 ${
                    isNavy ? "text-gold" : "text-green"
                  }`}
                >
                  {subject}
                </p>
              )}
              <p
                className={`text-sm sm:text-base leading-relaxed ${
                  isNavy ? "text-cream/85" : "text-navy/85"
                }`}
              >
                {alt}
              </p>
            </div>

            {/* Bottom Bar: Metadata */}
            <div className="relative z-10 flex items-center justify-between pt-3 border-t border-current/10 text-[0.6875rem] font-[family-name:var(--font-inter)] opacity-60">
              <span>DOCUMENTARY ARCHIVE</span>
              <span>FIELD OBSERVATION</span>
            </div>
          </div>
        )}
      </div>

      {caption && (
        <figcaption className="mt-2.5 text-xs text-navy/60 font-[family-name:var(--font-inter)]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
