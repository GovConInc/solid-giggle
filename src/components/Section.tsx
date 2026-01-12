import type { ReactNode } from "react";
import { cn } from "./cn";

export default function Section({
  title,
  kicker,
  children,
  id,
  actions,
  className,
  dark = false,
  center = false,
}: {
  title: string;
  kicker?: string;
  id?: string;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <section 
      id={id} 
      className={cn(
        "py-16 sm:py-20",
        dark ? "bg-gov-navy text-white" : "bg-white",
        className
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <div className={cn(
          center ? "flex flex-col gap-3 items-center text-center" : "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
        )}>
          <div>
            {kicker && (
              <p className={cn(
                "text-sm font-bold uppercase tracking-wider",
                dark ? "text-gov-crimson" : "text-gov-blue"
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
          </div>
          {actions && <div className={cn("mt-4 sm:mt-0", center && "mt-4")} >{actions}</div>}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
