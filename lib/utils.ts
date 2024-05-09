export const capitalizeFirstletter = (str: string) =>
  `${str[0]}${str.slice(1).toLowerCase()}`;

export const mergeClassNames = (defaultClass: string, className?: string) =>
  `${defaultClass} ${className ?? ""}`;
