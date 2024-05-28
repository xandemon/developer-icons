export const capitalizeFirstletter = (str: string) =>
  `${str[0]}${str.slice(1).toLowerCase()}`;

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
