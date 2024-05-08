import { parseSync, stringify } from "svgson";
import { optimize } from "svgo";

export const createDeveloperIcon = (
  iconName: string,
  iconContent: string,
  path: string
) => {
  const optimizedSvg = optimize(iconContent, { path }).data;
  const svgObject = parseSync(optimizedSvg, { camelcase: true });
  const children = [...svgObject.children.map((child) => stringify(child))];

  return `import { createElement } from 'react';\nimport {Icon, DeveloperIconProps} from '../main';\nexport const ${iconName} = (props: DeveloperIconProps) => createElement(Icon, {...${JSON.stringify(
    svgObject.attributes
  )}, ...props, children: [${children}]
  })`;
};
