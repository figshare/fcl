<h1 id="readme">

[![alt text][logo]](#readme)

</h1>

[![][node]][node-url]
[![][lerna]][lerna-url]
[![][storybook]][storybook-url]
[![][react]][react-url]


<div align="right">

[![][duduta]][duduta-url]

</div>


<details>
  <summary><b> TABLE OF CONTENTS </b></summary>

*   [About](#about)
*   [Usage](#usage)
    *   [Prerequisites](#prerequisites)
    *   [Installing dependencies](#installing-dependencies)
    *   [Building Storybook](#building-storybook)
*   [Development](#development)
    *   [Coding standards](#coding-standards)
    *   [Useful commands](#useful-commands)

</details>

----
## About

`fcl` is an open source library for some of the React UI components used across figshare. This is the main repo that hosts the documentation and open source library. Deployment and monorepo management is done using `lerna`.

**Packages:**
*   [![][ui]][ui-url]
---

## Usage

### Installation

Install the components package to your project's `node_modules`:
```
npm install --save @figshare/fcl
```

The sources are provided as is, and the components need to be passed through your projects `build/transpilation pipeline` as a transpiled distribution is not provided.

If you're using webpack, you can configure your babel loader rules to `include` `node_modules/@figshare` in the transpilation process. Our components are provided as class components with `es6` class features such as `statics` and `class properties`, so you may need to allow these features in your babelrc. See `@babel/proposal-class-properties`.

Stylesheets are imported using `css-modules` so you might have to configure your pipeline to support them, if you do not support them already. The library exposes rules and variables through an `index.css` file available in `@figshare/fcl/styles/`. Import it in your project entry point:

```
import "@figshare/fcl/styles/index.css"
```

We recommend, if possible, setting a custom `css-module` name generation rule for class names defined for files inside `node_modules/@figshare/fcl` to `fcl-[name]-[local]`

```js
// webpack loader example:
{
    test: "**/@figshare/fcl/**.css"
    use: [{
    loader: "css-loader",
    options: {
        importLoaders: 1,
        modules: {
            localIdentName: "fcl-[name]-[local]" 
        },
        sourceMap: true,
    },
    }]
```

This will allow you to easily reference and target our component classnames in your stylesheets and add custom style and layout rules as required, without having to provide `className` to exported components.

### Importing and using components
To use components simply import them from the package. You can find examples in the stories folder or on the documentation site.

```jsx
import { Button, IconButton } "@figshare/fcl/button"
import Calendar "@figshare/fcl/icons/calendar";

// render
<Button onClick={...}>A Button</Button>
<IconButton icon={Calendar} onClick={...}>An Icon Button</IconButton>
```

---
### Documentation

Each component is documented and showcased using `storybook`. To build the documentation locally, you can follow these steps:
- clone or fork fcl repo
- install dev dependencies
```
npm install
```
- build stories in watch mode
```
npm run storybook
```
After the build is finished, the documentation will be available at [http://localhost:9001](http://localhost:9001).

You can also build a static version of the documentation and `serve` it later by running:
```
npm run storybook:build
```

[logo]: https://raw.githubusercontent.com/figshare/fcl/main/assets/logo.png "fcl - figshare frontend component library"

[node]: https://img.shields.io/badge/node-12.x.x-darkorange?logo=node.js "node"
[node-url]: https://nodejs.org/en/

[jira]: https://img.shields.io/badge/JIRA-dashboard-blue?logo=jira "jira"
[jira-url]: https://digital-science.atlassian.net/secure/RapidBoard.jspa?rapidView=78

[react]: https://img.shields.io/badge/react-16.x.x-darkorange?logo=react "react"
[react-url]: https://reactjs.org/

[storybook]: https://img.shields.io/badge/storybook-6.x.x-darkgreen?logo=storybook "storybook"
[storybook-url]: https://storybook.js.org/

[lerna]: https://img.shields.io/badge/lerna-4.x.x-darkgreen?logo=lerna "lerna"
[lerna-url]: https://lerna.js.org/

[ui]: https://img.shields.io/badge/-%40figshare%2Ffcl-blue?logo=npm "@figshare/fcl"
[ui-url]: https://github.com/figshare/fcl/packages/1

[duduta]: https://avatars0.githubusercontent.com/u/1036398?s=32&v=4 "Daniel Gavrila"
[duduta-url]: https://github.com/danielduduta
