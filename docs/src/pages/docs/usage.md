---
layout: ../../layouts/DocsLayout.astro
title: Usage
---

# Usage

If you are a designer or just want to get icons without having to install anything, then you can simply go to the [icons page](https://xandemon.github.io/developer-icons/icons) and download from there.

But if you have a React project set up and want to have icons in it, then using our `developer-icons` npm package is the best and the easiest way.

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
