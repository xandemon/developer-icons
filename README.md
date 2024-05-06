# Developer Icons

## About

`Developer Icons` is a collection of ready-to-use high-quality vector icons for developers and designers. Fully customizable options with props, className, inline styles, etc. and completely typescript-supported components.

## Features

- **High-Quality Icons**: A curated set of icons suitable for various development projects.
- **Easy to Use**: Icons are organized and can be easily integrated into projects.
- **Open Source**: Freely available for personal and commercial use, adhering to specified licenses.

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

Import named icon components from the `developer-icons` package and use it as any other component with props similar to that of an svg:

```javascript
import { HtmlIcon, JavascriptIcon } from "developer-icons";

//inside your React component JSX
export const ReactComponent = () => {
  return (
    <div>
      <HtmlIcon className="html-icon" />
      <JavascriptIcon height={52} width={52} />
    </div>
  );
};
```

## Contributing

Contributions are welcome! `Developer Icons` is just getting started and there is a lot more to come, so be a part of it.

If you have an icon to add or an improvement to suggest, please open a pull request or an issue.

## License

Licensed under MIT License and copyrights reserved.
