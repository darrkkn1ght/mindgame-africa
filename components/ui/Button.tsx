"use client";

import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
}

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    "bg-gold text-navy",
    "hover:bg-[#c99435]",
    "active:bg-[#b8862e]",
    "shadow-[0_1px_2px_rgba(16,35,63,0.08)]",
  ].join(" "),
  secondary: [
    "bg-transparent text-navy border-2 border-navy",
    "hover:bg-navy hover:text-cream",
    "active:bg-navy-soft active:text-cream",
  ].join(" "),
};

const baseStyles = [
  "inline-flex items-center justify-center",
  "px-7 py-3.5",
  "text-[0.9375rem] font-semibold leading-none tracking-wide",
  "rounded-md",
  "transition-all duration-200 ease-out",
  "cursor-pointer select-none",
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
  "font-[family-name:var(--font-inter)]",
].join(" ");

export function Button({ variant = "primary", children, className = "", ...props }: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`.trim();

  if ("href" in props && props.href) {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}
