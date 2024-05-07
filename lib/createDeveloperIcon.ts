import { SVGProps, createElement } from "react";
import { parseSync, stringify } from "svgson";
import defaultAttributes from "./defaultAttributes";
import { mergeClassNames } from "./utils/mergeClassNames";

export interface DeveloperIconProps extends Partial<SVGProps<SVGElement>> {
  size?: number;
}

export const createDeveloperIcon = (iconName: string, iconContent: string) => {
  const svgObject = parseSync(iconContent, { camelcase: true });
  const children = [...svgObject.children.map((child) => stringify(child))];

  return `import { createElement } from 'react';\nimport {Icon, DeveloperIconProps} from '../createDeveloperIcon';\nexport const ${iconName} = (props: DeveloperIconProps) => createElement(Icon, {...${JSON.stringify(
    svgObject.attributes
  )}, ...props, children: [${children}]
  })`;
};

export const Icon = ({
  size = 80,
  className,
  color,
  ...rest
}: DeveloperIconProps) => {
  const svgString = createElement("svg", {
    ...defaultAttributes,
    stroke: color,
    className: mergeClassNames("developer-icons", className),
    ...rest,
    width: size,
    height: size,
  });
  return svgString;
};
