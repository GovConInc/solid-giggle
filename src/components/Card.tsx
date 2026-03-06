import type { ReactNode, HTMLAttributes } from "react";
import { cn } from "./cn";

export default function Card({
  children,
  className,
  hover = true,
  variant = "default",
  ...rest
}: HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  variant?: "default" | "elevated" | "outlined" | "glass" | "dark";
}) {
  const variants: Record<string, string> = {
    default: "border border-slate-200/80 bg-white shadow-soft",
    elevated: "bg-white shadow-card-lg",
    outlined: "border-2 border-slate-200 bg-white",
    glass: "glass-card",
    dark: "bg-gov-navy border border-white/10 text-white shadow-inner-glow",
  };

  return (
    <div
      className={cn(
        "rounded-2xl",
        variants[variant],
        hover && "card-hover-glow",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
