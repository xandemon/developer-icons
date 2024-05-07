export const mergeClassNames = (defaultClass: string, className?: string) =>
  `${defaultClass} ${className ?? ""}`;
