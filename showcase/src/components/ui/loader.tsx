import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export const Loader = ({
  loading,
  children,
  className = "",
  style,
}: {
  loading: boolean;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => {
  if (loading) {
    return (
      <div
        className={cn(
          `w-5 h-5 border-[3px] border-zinc-200 dark:border-zinc-800 border-t-zinc-400 dark:border-t-zinc-600 rounded-full animate-spin`,
          { [className]: !!className }
        )}
        style={style}
      />
    );
  } else {
    return children;
  }
};
