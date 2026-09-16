import { AppImage, AspectRatio } from "./AppImage";
import React from "react";

export interface SectionImageProps {
  name: string;
  alt: string;
  aspectRatio?: AspectRatio;
  caption?: string;
  subject?: string;
  variant?: "navy" | "cream";
  className?: string;
  src?: string | null;
  priority?: boolean;
}

export function SectionImage({
  name,
  alt,
  aspectRatio = "16/9",
  caption,
  subject,
  variant = "navy",
  className = "",
  src = null,
  priority = false,
}: SectionImageProps) {
  return (
    <AppImage
      src={src}
      name={name}
      alt={alt}
      aspectRatio={aspectRatio}
      caption={caption}
      subject={subject}
      variant={variant}
      className={className}
      priority={priority}
    />
  );
}
