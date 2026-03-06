import { forwardRef } from "react";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import { cn } from "./cn";

type BtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "gradient";
  size?: "sm" | "md" | "lg";
};

export const Button = forwardRef<HTMLButtonElement, BtnProps>(function Button(
  { className, variant = "primary", size = "md", ...props },
  ref
) {
  const base =
    "focus-ring inline-flex items-center justify-center font-semibold transition-all duration-200 " +
    "disabled:opacity-60 disabled:cursor-not-allowed";

  const sizes: Record<string, string> = {
    sm: "rounded-lg px-3.5 py-1.5 text-xs",
    md: "rounded-xl px-5 py-2.5 text-sm",
    lg: "rounded-xl px-7 py-3.5 text-base",
  };

  const styles: Record<string, string> = {
    primary:
      "bg-gov-crimson text-white hover:bg-gov-crimson/90 active:scale-[0.98] shadow-sm hover:shadow-md",
    secondary:
      "bg-white text-gov-navy border-2 border-slate-200 hover:border-gov-blue hover:text-gov-blue active:bg-slate-50 shadow-sm",
    ghost:
      "bg-transparent text-gov-navy hover:bg-slate-100 active:bg-slate-200",
    gradient:
      "bg-gradient-to-r from-gov-crimson to-gov-blue text-white hover:opacity-90 active:scale-[0.98] shadow-md hover:shadow-lg",
  };

  return (
    <button
      ref={ref}
      className={cn(base, sizes[size], styles[variant], className)}
      {...props}
    />
  );
});

type LinkBtnProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "ghost" | "gradient";
  size?: "sm" | "md" | "lg";
};

export function LinkButton({ className, variant = "primary", size = "md", ...props }: LinkBtnProps) {
  const base =
    "focus-ring inline-flex items-center justify-center font-semibold transition-all duration-200";

  const sizes: Record<string, string> = {
    sm: "rounded-lg px-3.5 py-1.5 text-xs",
    md: "rounded-xl px-5 py-2.5 text-sm",
    lg: "rounded-xl px-7 py-3.5 text-base",
  };

  const styles: Record<string, string> = {
    primary:
      "bg-gov-crimson text-white hover:bg-gov-crimson/90 active:scale-[0.98] shadow-sm hover:shadow-md",
    secondary:
      "bg-white text-gov-navy border-2 border-slate-200 hover:border-gov-blue hover:text-gov-blue active:bg-slate-50 shadow-sm",
    ghost:
      "bg-transparent text-gov-navy hover:bg-slate-100 active:bg-slate-200",
    gradient:
      "bg-gradient-to-r from-gov-crimson to-gov-blue text-white hover:opacity-90 active:scale-[0.98] shadow-md hover:shadow-lg",
  };

  return <a className={cn(base, sizes[size], styles[variant], className)} {...props} />;
}
