# Developer Icons

**`Developer Icons`** is a collection of ready-to-use high-quality customizable tech icons **for developers and designers**. Icon components are made **fully type-safe with typescript** and can be readily used in any React or Next.js projects with `developer-icons` npm package, or the icons can be manually downloaded in image formats to easily use in designs from the [official website](https://xandemon.github.io/developer-icons/ "Homepage | Developer Icons").

## Features

- **Highly optimized:** Icons are optimized for performance and size. They are designed to be as small as possible while maintaining the quality.
- **Customizable:** Cusomizations are available for all icons. You can change the size, color, stroke width, and much more.
- **Perfectly scalable:** Icons are designed to be properly scaled to any size without compromising the quality.
- **Consistent icons:** No more dealing with inconsistent styles and designs. All icons are designed with a pre-defined set of rules.
- **Various versions:** Icons come with their own set of families such as light and dark mode, wordmark, and other versions.
- **Free & open-source:** Completely free and open-source with license. No need to worry about privately hidden malicious code and be a contributor yourself.

## Installation

To use the icons in your project, run the following command:

```
npm i developer-icons
```

or

```
yarn add developer-icons
```

or

```
pnpm add developer-icons
```

## Usage

Import named icon components from the `developer-icons` package and use it as any other component with props/attributes similar to that of an svg:

```javascript
import { HtmlIcon, JavascriptIcon } from "developer-icons";

//inside your React component JSX
export const YourReactComponent = () => {
  return (
    <div>
      <HtmlIcon className="html-icon" />
      <JavascriptIcon size={52} style={{ marginLeft: 20 }} />
    </div>
  );
};
```

## Contributing

Contributions are welcome! `Developer Icons` is just getting started and there is a lot more to come, so be a part of it.

If you have an icon to add or an improvement to suggest, please open a pull request or an issue.

## License

Licensed under MIT License and copyrights reserved.
