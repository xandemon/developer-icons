import { INode, parseSync } from "svgson";
import { PluginConfig, optimize } from "svgo";
import { capitalizeFirstletter } from "./utils";
import svgoConfig from "../svgo.config.mjs";

export const createDeveloperIcon = (
  iconName: string,
  iconContent: string,
  path: string
) => {
  const optimizedSvg = optimize(iconContent, {
    path,
    plugins: [
      ...svgoConfig.plugins,
      {
        name: "prefixIds",
        params: {
          prefix: capitalizeFirstletter(iconName, true),
        },
      },
    ] as PluginConfig[],
  }).data;

  const svgObject = parseSync(optimizedSvg, { camelcase: true });
  const sanitizedSvgObject = sanitizeStyles(svgObject);
  const children = sanitizedSvgObject.children.map(stringifyWithStyles);

  return `import { createElement } from 'react';\nimport {Icon, DeveloperIconProps} from '../icon';\nexport const ${iconName} = (props: DeveloperIconProps) => createElement(Icon, {...${JSON.stringify(
    sanitizedSvgObject.attributes
  )}, ...props, children: [${children}]
  })`;
};

const sanitizeStyles = (svgObject: INode) => {
  const modifiedSvgObject = { ...svgObject };
  if (modifiedSvgObject.attributes.style) {
    const styleString = modifiedSvgObject.attributes.style
      .replace(/[{}]/g, "")
      .trim();

    if (styleString) {
      const styleObject = styleString.split(";").reduce((acc, style) => {
        const [key, value] = style.split(":").map((s) => s.trim());
        if (key && value) {
          // Convert kebab-case to camelCase
          const camelKey = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
          acc[camelKey] = value;
        }
        return acc;
      }, {} as Record<string, string>);

      //@ts-expect-error string style is converted into object style
      modifiedSvgObject.attributes.style = styleObject;
    } else {
      delete modifiedSvgObject.attributes.style;
    }
  }
  if (modifiedSvgObject.children && modifiedSvgObject.children.length) {
    modifiedSvgObject.children = modifiedSvgObject.children.map(sanitizeStyles);
  }
  return modifiedSvgObject;
};

const stringifyWithStyles = (node: INode): string => {
  const attrs = Object.entries(node.attributes).reduce((acc, [key, value]) => {
    if (key === "style" && typeof value === "object") {
      acc[key] = `{${JSON.stringify(value)}}`;
    } else {
      acc[key] = JSON.stringify(value);
    }
    return acc;
  }, {} as Record<string, string>);

  const attrString = Object.entries(attrs)
    .map(([key, value]) => `${key}=${value}`)
    .join(" ");

  if (node.children && node.children.length) {
    const childrenString = node.children.map(stringifyWithStyles).join(",");
    return `<${node.name} ${attrString}>${childrenString}</${node.name}>`;
  } else {
    return `<${node.name} ${attrString}/>`;
  }
};
