import * as React from "react";

import { cn } from "@/lib/utils";

function Badge({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"span"> & {
  variant?: "default" | "outline";
}) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.14em]",
        variant === "default" &&
          "bg-primary text-primary-foreground",
        variant === "outline" &&
          "border border-border bg-transparent text-foreground",
        className,
      )}
      {...props}
    />
  );
}

export { Badge };
