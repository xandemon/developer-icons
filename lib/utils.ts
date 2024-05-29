export const capitalizeFirstletter = (str: string, invert?: boolean) =>
  invert
    ? `${str[0].toLowerCase()}${str.slice(1)}`
    : `${str[0].toUpperCase()}${str.slice(1)}`;

export const mergeClassNames = (defaultClass: string, className?: string) =>
  `${defaultClass} ${className ?? ""}`;

export const generateIconCompName = (initialName: string) => {
  const rawIconName = initialName
    .replace(/#/g, "-sharp")
    .replace(/\+/g, "-plus")
    .split(/[-. ]+/)
    .map((item) => capitalizeFirstletter(item))
    .join("");
  const iconCompName = rawIconName.includes("Wordmark")
    ? rawIconName
    : `${rawIconName}Icon`;
  return iconCompName;
};
