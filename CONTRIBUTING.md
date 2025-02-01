# Contributing Guide

We appreciate your thought of contributing to **Developer-Icons**. We welcome contributions of all kinds, from bug fixes to new features and icons. Your efforts help make this project better for everyone.

## 🔖 Table of Contents

1. [Getting Started](#-getting-started)
2. [Development Setup](#-development-setup)
3. [Submitting Changes](#-submitting-changes)
4. [Coding Conventions](#-coding-conventions)
5. [Adding New Icons](#-adding-new-icons)

## 🚀 Getting Started

Before you begin:

- Make sure you have a clear understanding of the project structure for which you can check out the [walkthrough](https://xandemon.github.io/developer-icons/docs/walkthrough/) doc
- Submit an issue/discussion for your proposed changes, assuming one does not already exist
- Clearly describe the issue including steps to reproduce when it is a bug
- And lastly, don't forget to have fun cuz we're having fun too.

## 💻 Development Setup

1. Star and fork the [developer-icons](https://github.com/xandemon/developer-icons) repository
2. Clone your fork of the repository:
   ```bash
   git clone https://github.com/<your-github-username>/developer-icons.git
   ```
3. Install dependencies
   - For the package: `npm install` in `root`
   - For the showcase website: `npm install` in `/showcase`
4. Set up your development environment:
   - For the playground: `npm run dev:playground`
   - For the documentation: `npm run dev:showcase`

## 📝 Submitting Changes

1. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b <your-branch-name>
   ```
2. Make your changes and commit them with a clear commit message
3. Push your branch to your fork:
   ```bash
   git push origin <your-branch-name>
   ```
4. Submit a pull request to the main repository

## 📏 Coding Conventions

- Write clear, readable, and well-documented code
- Follow the existing code style and structure
- To make commits better, you can take a look at this [wonderful commit guide](https://github.com/xandemon/Xandemon-Docs/blob/main/git-commit-styleguide.md)
- Make sure to test that the changes you've made works and nothing else is broken

## 🎨 Adding New Icons

1. Firstly crop the SVG icon you want to add using [SVGCrop.com](https://svgcrop.com/) to ensure that there is no unnecessary space around the icon
2. Place your SVG files in the `/icons/raw` directory and rename them in a consistent way according to other pre-existing icons
3. Run the optimization script which automatically moves the icons from `/icons/raw` folder to `/icons` folder after optimization:
   ```bash
   npm run optimize-svgs
   ```
4. Update the icons data for every icon in the `/lib/iconsData.ts` file in a consistent way according to rest of the data and arrange them in alphabetical order
5. Build the project to generate the new icon components:
   ```bash
   npm run build
   ```
6. Run the playground environment to add and test the newly added/changed icon components
   ```bash
   npm run dev:playground
   ```
7. If everything looks good, push the changes and create a Pull Request

## ❓ Questions

Open discussions in this repository to ask with the community or you can directly reach out to @xandemon for any kinds of queries.

Thank you for your contributions ❤️!
