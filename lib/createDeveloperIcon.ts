import { createElement } from "react";
import { parseSync, stringify } from "svgson";

export const createDeveloperIcon = (iconName: string, iconContent: string) => {
  const svgObject = parseSync(iconContent, { camelcase: true });
  const children = [...svgObject.children.map((child) => stringify(child))];

  return `import { createElement } from 'react';
  import {Icon} from '../createDeveloperIcon';
  export const ${iconName} = (props) => createElement(Icon, {...${JSON.stringify(
    svgObject.attributes
  )}, ...props, children: [${children}]})`;
};

export const Icon = (props) => {
  const svgString = createElement("svg", props);
  return svgString;
};
