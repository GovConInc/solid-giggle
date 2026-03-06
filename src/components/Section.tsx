import type { ReactNode } from "react";
import { cn } from "./cn";

export default function Section({
  title,
  kicker,
  subtitle,
  children,
  id,
  actions,
  className,
  dark = false,
  center = false,
  pattern,
}: {
  title: string;
  kicker?: string;
  subtitle?: string;
  id?: string;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
  dark?: boolean;
  center?: boolean;
  pattern?: "grid" | "dots" | "mesh" | "none";
}) {
  const patternClass = pattern
    ? dark
      ? { grid: "bg-grid-dark", dots: "bg-dots-dark", mesh: "bg-mesh-dark", none: "" }[pattern]
      : { grid: "bg-grid", dots: "bg-dots", mesh: "bg-mesh", none: "" }[pattern]
    : "";

  return (
    <section
      id={id}
      className={cn(
        "relative py-16 sm:py-20",
        dark ? "bg-navy-gradient text-white" : "bg-white",
        patternClass,
        className
      )}
    >
      <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-8">
        <div className={cn(
          center ? "flex flex-col gap-3 items-center text-center" : "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
        )}>
          <div>
            {kicker && (
              <p className={cn(
                "text-sm font-bold uppercase tracking-wider",
                dark ? "text-gov-gold" : "text-gov-blue"
              )}>
                {kicker}
              </p>
            )}
            <h2 className={cn(
              "mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl",
              dark ? "text-white" : "text-gov-navy"
            )}>
              {title}
            </h2>
            {subtitle && (
              <p className={cn(
                "mt-3 max-w-2xl text-base",
                dark ? "text-slate-300" : "text-slate-600",
                center && "mx-auto"
              )}>
                {subtitle}
              </p>
            )}
          </div>
          {actions && <div className={cn("mt-4 sm:mt-0", center && "mt-4")}>{actions}</div>}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
