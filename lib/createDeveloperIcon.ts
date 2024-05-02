export const createDeveloperIcon = (iconName: string, iconContent: string) => {
  return `export const ${iconName} = () => {
    return ${iconContent}
  }
  `;
};
