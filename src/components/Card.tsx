import type { ReactNode } from "react";
import { cn } from "./cn";

export default function Card({
  children,
  className,
  hover = true,
  variant = "default",
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  variant?: "default" | "elevated" | "outlined";
}) {
  const variants: Record<string, string> = {
    default: "border border-slate-200/80 bg-white shadow-soft",
    elevated: "bg-white shadow-xl shadow-slate-200/50",
    outlined: "border-2 border-slate-200 bg-white",
  };

  return (
    <div
      className={cn(
        "rounded-2xl",
        variants[variant],
        hover && "card-hover",
        className
      )}
    >
      {children}
    </div>
  );
}
