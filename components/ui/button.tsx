import * as React from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "secondary" | "outline" | "ghost";
type ButtonSize = "default" | "lg" | "icon";

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
}) {
  const buttonClassName = cn(
    "inline-flex items-center justify-center rounded-[calc(var(--radius)-1px)] text-[1rem] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    variant === "default" &&
      "bg-primary text-primary-foreground hover:bg-deep-violet",
    variant === "secondary" && "bg-linen text-near-black hover:bg-parchment",
    variant === "outline" &&
      "border border-border bg-transparent text-foreground hover:bg-linen",
    variant === "ghost" && "text-foreground hover:bg-linen",
    size === "default" && "h-10 px-4 py-2",
    size === "lg" && "h-12 px-6 text-[1rem]",
    size === "icon" && "size-10",
    className,
  );

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<{ className?: string }>;

    return React.cloneElement(child, {
      className: cn(buttonClassName, child.props.className),
    });
  }

  return (
    <button className={buttonClassName} {...props}>
      {children}
    </button>
  );
}

export { Button };
