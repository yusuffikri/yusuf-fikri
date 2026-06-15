import * as React from "react";
import { cn } from "@/lib/utils";

function Badge({ className, ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 font-mono text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary",
        className
      )}
      {...props}
    />
  );
}

export { Badge };
