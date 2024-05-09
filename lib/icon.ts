import { SVGProps, createElement } from "react";
import { mergeClassNames } from "./utils";
import { defaultAttributes } from "./constants";

export interface DeveloperIconProps extends Partial<SVGProps<SVGElement>> {
  size?: number;
}

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
