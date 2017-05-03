# FCC Manchester Website

A Webpack and React based project for the FCC Manchester website. The aim of this repo is to encourage members of the FCC Manc meetup to learn, contribute and pair programme to improve their skills, confidence and experimentation.

## Whats Included?

- [Webpack](https://webpack.github.io/)
- [node-sass](https://github.com/sass/node-sass)
- [Webpack Dev Server](https://webpack.github.io/docs/webpack-dev-server.html)
- [sass-loader](https://github.com/webpack-contrib/sass-loader)
- [css-loader](https://github.com/webpack-contrib/css-loader)
- [file-loader](https://github.com/webpack-contrib/file-loader)
- [gh-pages](https://www.npmjs.com/package/gh-pages)
- [style Loader](https://github.com/webpack-contrib/style-loader)
- [postcss-loader](https://github.com/postcss/postcss-loader)
- [extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin)

## Prerequisites
- node `^4.7.0`
- npm `^2.0.0`

## Installation

Enter the following commands in your shell / terminal.  If you're on Windows, you'll need to use [Git BASH](https://git-for-windows.github.io/) or similar.

```
$ git clone https://github.com/JD-aka-Techy/FCC-Mcr-website.git
$ cd FCC-Mcr-website
$ npm install
```

## Usage

If contributing, be sure to read the Contribution Tips at the bottom of this README!

Enter the following command to start the development server:

```
$ npm run dev
```

You can now browse your local copy of the site from `http://localhost:8080`. Any changes you save to index.html or files kept in `/src` will be detected by the server and the browser will refresh to show your changes (unless your code cannot compile - check your terminal output or console for errors!).

## Project Structure

```
.
├── LICENSE.md
├── README.md
├── build                         # Output from the build process - ready for deployment to gh-pages        
│   ├── bundle.js
│   ├── index.html
│   └── styles.css
├── index.html
├── package.json                  # Included list of dependencies and scripts
├── postcss.config.js
├── src
│   └── index.js                  # Entry point for Webpack.  You can also require / import static assets (such as stylesheets and images) here.
├── styles                        # Edit any .css, .sass or .scss files here
│   └── main.scss
├── webpack.dev.js                # Webpack config for our dev server
└── webpack.prod.js               # Webpack config that builds our site
```


## Included Scripts
```
$ npm run dev             # Start the Development Server at localhost:8080
$ npm run build           # Generates minified bundle.js, styles.css and index.html to /build
$ npm run deploy          # Publish the files in /build to a gh-pages branch
```

### Wepack Configuration
The development setup and the build setup are maintained in `webpack.dev.js` and `webpack.prod.js` files. The `webpack.dev.js` config sets up the dev server for us and injects the CSS inline via the style loader. The `webpack.prod.js` config builds the website in the `/build` directory using the extract-text-webpack-plugin to create a `.css` file in the `/build` directory.

`watchContentBase: true` watches for any changes made to static files in the root directory eg. (index.html) and will automatically refresh the browser.

## Contributions
Open to pull requests from FreeCodeCamp Manchester users.

https://guides.github.com/activities/contributing-to-open-source/

## Contribution tips
- When adding a stylesheet, make sure you `@import` it in `styles/app.scss`
- When using an image, make sure you `require()` it in the entry point `index.js` (or any other file that is part of the dependnecy tree)
- Make sure the `npm run build` step completes without errors, and produces the results you expect!

Say hello on our slack channel https://fcc-mcr-invite.herokuapp.com/
