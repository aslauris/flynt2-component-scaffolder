# Flynt2 Component Scaffolder

## Introduction

Flynt2 Component Scaffolder is a CLI tool developed to streamline the creation of Flynt 2.x component files. [Flynt](https://github.com/flyntwp/flynt) is component based WordPress starter theme, powered by ACF Pro and Timber, optimized for a11y and fast page load results. This scaffolder helps you quickly set up new components.

## Motivation

In the [Flynt](https://github.com/flyntwp/flynt) ecosystem, there was a components generator available for Flynt v1, which significantly simplified the process of creating new components. However, with the release of Flynt 2, a similar tool was lacking. The Flynt2 Component Scaffolder aims to fill this gap by providing developers with a convenient and efficient way to generate component files.

## Installation

To install the Flynt2 Component Scaffolder globally, use the following npm command:

```bash
npm install -g flynt2-component-scaffolder
```

## Usage

To create a new Flynt component, run the following command:

```bash
create-flynt2-component
```

You will be prompted to provide various details about the new component, such as the path to the components folder, the component category, the component name, and other options.

## Generated Component File Structure

After running the CLI tool, the following file structure will be generated for your new component (assuming SliderImage as the component name and Block as the category):

```markdown
Components/
└── BlockSliderImage/
    ├── index.twig
    ├── functions.php
    ├── _style.scss
    ├── script.js
    ├── README.md
    └── screenshot.png
```

### Generated Component Files

- index.twig: Twig template file for the component.
- functions.php: PHP file for registering component options and hooks.
- _style.scss: SCSS file for component styles.
- script.js: Component JavaScript code.
- README.md: Markdown file with component documentation.
- screenshot.png: Screenshot placeholder image for the component.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
