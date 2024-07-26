# Developer Icons

Welcome to **`developer-icons`**, a collection of high-quality, customizable tech icons designed for developers and designers. With full TypeScript support, these icons are perfect for use in any React or Next.js project. Alternatively, download the icons in image formats for your design needs directly from our [official website](https://xandemon.github.io/developer-icons/ "Homepage | Developer Icons").

![Developer Icons Cover Image](/public/cover-image.webp "Developer Icons")

## Features

- ⚡**Highly optimized:** Icons are optimized for performance and size. They are designed to be as small as possible while maintaining the quality.
- 🎨**Customizable:** Cusomizations are available for all icons. You can change the size, color, stroke width, and much more.
- 🔍**Perfectly scalable:** Icons are designed to be properly scaled to any size without compromising the quality.
- 🔄**Consistent icons:** No more dealing with inconsistent styles and designs. All icons are designed with a pre-defined set of rules.
- 🌗**Various variants:** Icons come with their own set of families such as light and dark mode, wordmark, and other variants.
- ⭐**Free & open-source:** Completely free and open-source with license. No need to worry about privately hidden malicious code and be a contributor yourself.

Explore more and start using `developer-icons` today to enhance your projects with stunning, customizable icons!

## Installation

To add the icons to your project, run one of the following commands:

```bash
npm i developer-icons
```

or

```bash
yarn add developer-icons
```

or

```bash
pnpm add developer-icons
```

## Usage

Import named icon components from the `developer-icons` package and use them just like any other React component, with props/attributes similar to those of an SVG:

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

In this example, we import `HtmlIcon` and `JavascriptIcon` from the `developer-icons` package and use them within a React component. You can customize the icons by adjusting their `size`, `color`, `style`, and other properties.

## Contributing

We welcome contributions of all kinds, whether you're looking to add new icons, improve existing ones, or enhance the overall project. To get started, refer to our [Contributing Guidelines](https://xandemon.github.io/developer-icons/docs/contributing).

## License

Licensed under MIT License and copyrights reserved.

For complete documentation, visit our [official documentation](https://xandemon.github.io/developer-icons/docs).
