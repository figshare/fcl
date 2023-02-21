<h1 id="readme">

[![alt text][logo]](#readme)

</h1>

[![][jira]][jira-url]
[![][node]][node-url]
[![][lerna]][lerna-url]
[![][storybook]][storybook-url]
[![][react]][react-url]
![][coverage]


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


## About

`fcl` is a monorepo for managing the UI components used across figshare. All the components have a showcase page in [storybook](https://storybook.figshare.network/). The monorepo is maintained using [lerna][lerna-url].

**Packages:**
*   [![][ui]][ui-url]

## Usage

### Prerequisites

*   [:link: nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

    In order to be able to install and maintain multiple `node.js` versions you need to install `nvm`.

    :warning: If you do not have `node v12` set as default in `nvm` you will always need to run `nvm use || nvm install` before executing any `make` or `npm` commands.


*   [:link: authenticate to GitHub packages](https://docs.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages#authenticating-to-github-packages)

    Most of the figshare npm packages are published in the github package registry privately.

    In order to be able to install these packages you need to create a new [:link: personal acess token](https://github.com/settings/tokens) from github and select `repo` and `read:packages` scopes. If you are a publisher you will **also need to select** `write:packages` scope.

    After you've generated the personal access token you can authenticate by logging in to `npm` via `npm login` command.

    ```bash
    $ npm login --registry=https://npm.pkg.github.com
    > Username: USERNAME
    > Password: TOKEN
    > Email: PUBLIC-EMAIL-ADDRESS
    ```

    Replace `USERNAME` with your github username.

    Replace `TOKEN` with your newly generated personal access token.

    Replace `PUBLIC-EMAIL-ADDRESS` with your figshare e-mail.


### Installing dependencies

Run the following commands in order:
*   `npm ci`

    Install the dependencies.


### Building Storybook

Run one of the following commands:
*   `npm run storybook:build`

    Build storybook and save the transpiled code in the `build` folder. You can open `build/index.html` to view the generated application.

    :memo: This is used for stage/production deploys.


*   `npm run storybook`

    Build storybook in watch mode.



## Development

### first time setup
 add `nvmrc` with v12
 add a `npmrc` file with `@figshare` as a namespace:   

 `@figshare:registry=https://npm.pkg.github.com/`

### Coding standards

:memo: Please review [`ECMAScript style guide`](https://github.com/figshare/fig-style-guide/blob/master/ES_STYLE_GUIDE.md) and [`contributing guidelines`](CONTRIBUTING.md) before submitting any **pull request**.


### Useful commands

*   `npx lerna bootstrap --hoist`

    Bootstrap and link the packages in the monorepo


*   `npx lerna publish -m ":rocket: Deploy - DD Mon YYYY"`

    Publish to github registry


*   `npm run storybook`

    Run storybook in watch mode


*   `npm run storybook:build`

    Build storybook into a static website ( ready for stage deploy )


*   `npm run lint`

    Executes ESlint and StyleLint against all `.js`, `.jsx` and `.css` files and outputs the code smells as errors or warnings.


*   `npm run test`

    Run all the tests within all the packages. You can pass extra jest arguments like so `npm run test -- --coverage`.



<div align="center">

**_PS:_**
**If you have further questions you can contact the CODE OWNERS for help.**

</div>

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

[ui]: https://img.shields.io/badge/-%40figshare%2Fcomponents-blue?logo=npm "@figshare/ui"
[ui-url]: https://github.com/figshare/fcl/packages/1

[coverage]: https://img.shields.io/badge/code_coverage-100%25-brightgreen?logo=jest "jest code coverage"

[duduta]: https://avatars0.githubusercontent.com/u/1036398?s=32&v=4 "Daniel Gavrila"
[duduta-url]: https://github.com/danielduduta
