import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border border-zinc-200 p-1 px-3 text-base font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:focus:ring-zinc-300 w-fit",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-zinc-200 text-zinc-800 hover:bg-zinc-300/80 dark:hover:bg-zinc-300/80 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800/80 pl-3 pr-5",
        secondary:
          "border-zinc-200 dark:border-zinc-800 bg-zinc-200 dark:bg-zinc-800 bg-opacity-25 text-zinc-950 dark:text-zinc-50 hover:bg-zinc-200/80 dark:hover:bg-zinc-800/80",
        destructive:
          "border-transparent bg-red-900 text-zinc-50 hover:bg-red-900/80 dark:bg-red-500 dark:text-zinc-50 dark:hover:bg-red-500/80",
        outline: "text-zinc-50 dark:text-zinc-950",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
