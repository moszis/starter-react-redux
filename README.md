# React Redux minimal starter kit (boilerplate)

Starter-React-Redux contains the bare minimum to develop a real world complex app.


# Getting started

1. Before you start working with Starter-React-Redux, you first need to setup your environment. Make sure you have the following installed:
    * [Git](https://git-scm.com/downloads)
    * [NodeJs and Npm](https://nodejs.org/en/download/current/)
    * an IDE to write js code in, for example [Webstorm](https://www.jetbrains.com/webstorm/download/) or [Visual Studio Code](https://code.visualstudio.com/)

2. Once your environment is prepared, open a command prompt (terminal) and type in the following:

    ```sh
    cd C:\js\node\apps
    git clone https://github.com/moszis/starter-react-redux.git app_name
    cd app_name
    npm install
    npm start
    ```

3. Then open your [http://localhost:8080/](http://localhost:8080/) to see the included small users app. 
Congratulations! You can now write react redux code.

4. For more productivity you can install Chrome's [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) and [Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)


# Video tutorial

[Let's learn React and Redux with Javascript's new ES6 syntax, from Beginner to Intermediate to Advanced](https://www.youtube.com/watch?v=d0oUGmSE6IY&list=PLJBrYU54JD2pTblB20OmV7GL6H5J-p2g8)

# Why use this?

Starter-React-Redux contains the minimum npm packages you need to have installed in order to build a react redux real-world app containing:
* a proper file/folder structure
* pages (routes)
* forms with validation
* real-world API asynchronous requests
* unit tests
* bootstrap react components
* sass
* hot loader for ease of development
* redux tools
* js and css bundle files built for development or production

The code and implementation are minimal, which lets you focus on the real app, not the webpack, babel, gulp etc boilerplate files, which honestly you shouldn't even bother with.


# Installed packages

Here are the npm packages that redux-minimal installs:

|Feature|Packages|Benefits|
|-------|--------|--------|
|React|[`react`](https://github.com/facebook/react)|A declarative, efficient, and flexible JavaScript library for building user interfaces|
||[`react-dom`](https://www.npmjs.com/package/react-dom)|Serves as the entry point of the DOM-related rendering paths|
||[`react-hot-loader`](https://github.com/gaearon/react-hot-loader)|Tweak React components in real time when developing|
|Redux|[`redux`](https://github.com/reactjs/redux)|A predictable state container for JavaScript apps|
||[`react-redux`](https://github.com/reactjs/react-redux)|React bindings for Redux|
||[`redux-freeze`](https://github.com/buunguyen/redux-freeze)|Redux middleware that prevents state from being mutated anywhere in the app|
|Router|[`react-router`](https://github.com/ReactTraining/react-router)|Declarative routing for React. Your app has pages now|
||[`react-router-redux`](https://github.com/reactjs/react-router-redux)|Simple bindings to keep react-router and redux in sync|
|Bootstrap|[`react-bootstrap`](https://github.com/react-bootstrap/react-bootstrap)|Bootstrap 3 components built with React|
||[`react-router-bootstrap`](https://github.com/react-bootstrap/react-router-bootstrap)|Integration between React Router and React-Bootstrap|
|Forms|[`redux-form`](https://github.com/erikras/redux-form)|A Higher Order Component using react-redux to keep form state in a Redux store|
|Asynchronous|[`redux-saga`](https://github.com/yelouafi/redux-saga)|Asynchronous API calls made easy with Saga|
|Unit tests|[`mocha`](https://github.com/mochajs/mocha)|Simple javascript test framework|
||[`enzyme`](https://github.com/airbnb/enzyme)|JavaScript Testing utilities for React components|
||[`react-addons-test-utils`](https://facebook.github.io/react/docs/test-utils.html)|Required by enzyme. Makes it easy to test React components|
||[`ignore-styles`](https://www.npmjs.com/package/ignore-styles)|Ignore imported style files when running in Node|
|Sass|[`node-sass`](https://github.com/sass/node-sass)|Mature, stable, and powerful CSS extension language|
|Webpack|[`webpack`](https://github.com/webpack/webpack)|A bundler for javascript, css and others|
||[`webpack-dev-server`](https://github.com/webpack/webpack-dev-server)|Serves the app at [http://localhost:8080/](http://localhost:8080/)|
||[`extract-text-webpack-plugin`](https://github.com/webpack/extract-text-webpack-plugin)|Webpack plugin that builds the css bundle file|
||[`style-loader`](https://github.com/webpack/style-loader)|Webpack module that loads styles|
||[`css-loader`](https://github.com/webpack/css-loader)|Webpack module that loads css styles|
||[`sass-loader`](https://github.com/jtangelder/sass-loader)|Webpack module that loads sass styles|
||[`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin)|Webpack module to remove previous build files|
|Babel|[`babel-core`](https://github.com/babel/babel/tree/master/packages/babel-core)|Compiler that helps node.js and the browser to understand the new js syntax|
||[`babel-runtime`](https://www.npmjs.com/package/babel-runtime)|Helps node.js to understand the new js syntax|
||[`babel-preset-es2015`](http://babeljs.io/docs/plugins/preset-es2015/)|Helps node.js to use [ES2015 Javascript syntax](http://www.ecma-international.org/ecma-262/6.0/ECMA-262.pdf)|
||[`babel-preset-react`](http://babeljs.io/docs/plugins/preset-react/)|Helps node.js to use React's [JSX syntax](https://facebook.github.io/jsx/)|
||[`babel-preset-stage-3`](https://babeljs.io/docs/plugins/preset-stage-0/)|Helps node.js to use the spread operator|
||[`babel-loader`](https://github.com/babel/babel-loader)|Helps webpack to compile the new javascript syntax|
||[`babel-polyfill`](https://babeljs.io/docs/usage/polyfill/)|Helps the browser to understand the new js syntax|
||[`whatwg-fetch`](https://github.com/github/fetch)|Helps the browser to use fetch|

new: 

||[`dotenv`](https://github.com/motdotla/dotenv)|Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.|
||[`fs-extra`](https://github.com/jprichardson/node-fs-extra)|fs-extra adds file system methods that aren't included in the native fs module and adds promise support to the fs methods. It should be a drop in replacement for fs. fs-extra is a drop in replacement for native fs. All methods in fs are attached to fs-extra. All fs methods return promises if the callback isn't passed.|
||[`react-dev-utils`](https://www.npmjs.com/package/react-dev-utils)|Variety of development utils developed by facebook.  Primarity used for build process and reporting. |






# Build your own app

1. Run `npm start`

2. Congratulations! You now have a blank `Hello world` starting app


# Scripts

Besides the `start` script, there are also other scripts

|`npm run <script>`|What it does|
|------------------|------------|
|`start`|Starts the app at [http://localhost:8080/](http://localhost:8080/). The bundle js/css files are stored in memory|
|`test`|Starts the unit testing using all the files found in the `test` folder|
|`test-watch`| Starts the unit testing and watches for changes to re-run the tests|
|`build-dev`|Builds the js/css bundle files in the `public` folder. Adds debugging code for development|
|`build-prod`|Builds the js/css bundle minified files in the `public` folder|

