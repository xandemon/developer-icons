---
layout: ../../layouts/DocsLayout.astro
title: Usage Guide
order: 2
---

# Usage Guide

If you're a designer or just want to grab icons without any installations, simply head over to the [icons page](https://xandemon.github.io/developer-icons/icons) and download your desired icons.

For those with a React project, integrating `developer-icons` via our npm package is the best and easiest method.

## 📦 Installation

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

## 🛠️ Usage

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

<div style="margin-top: 12px" />

To explore all the available icons, visit our [icons page](https://xandemon.github.io/developer-icons/icons/All "Icons | Developer Icons").

<div style="margin-top: 20px">
Happy coding! 🚀
</div>
