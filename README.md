# FCC Manchester Website

A Webpack and React based project for the FCC Manchester website. The aim of this repo is to encourage members of the FCC Manc meetup to learn, contribute and pair programme to improve their skills, confidence and experimentation.

## Whats Included?

- [Autoprefixer](https://www.npmjs.com/package/autoprefixer) `^6.3.6`
- [node-sass](https://github.com/sass/node-sass) `^3.4.2`
- [Webpack](https://webpack.github.io/) `^1.12.15`
- [Webpack Dev Server](https://webpack.github.io/docs/webpack-dev-server.html) `^1.14.1`
- [sass-loader](https://github.com/webpack-contrib/sass-loader) `6.0.2`
- [css-loader](https://github.com/webpack-contrib/css-loader) `^0.26.2`
- [gh-pages](https://www.npmjs.com/package/gh-pages) `^0.12.0`
- [style Loader](https://github.com/webpack-contrib/style-loader) `^0.13.2`
- [postcss-loader](https://github.com/postcss/postcss-loader) `^1.3.3`
- [extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin) `^2.1.0`

## Prerequisites
- node `^4.2.0`
- npm `^3.0.0`

## Installation

```
$ git clone https://github.com/JD-aka-Techy/FCC-Mcr-website.git
$ cd FCC-Mcr-website
$ npm install
$ rm -rf .git && git init         # start a fresh git repo
```

## Project Structure

```
.
├── LICENSE.md
├── README.md
├── build                         # What we will deploy to gh-pages        
│   ├── bundle.js
│   ├── index.html
│   └── styles.css
├── index.html
├── package.json                  # Included list of dependencies and scripts
├── postcss.config.js
├── src
│   └── index.js                  # Entry point for Webpack. Require youre stylesheet here
├── styles                        # Webpack will work on .css, .sass or .scss files here
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

### Configuration Tips
The development setup and the build setup are maintained in `webpack.dev.js` and `webpack.prod.js` files. The `webpack.dev.js` config sets up the dev server for us and injects the CSS inline via the style loader. The `webpack.prod.js` config builds the website in the `/build` directory using the extract-text-webpack-plugin to create a `.css` file in the `/build` directory.

`watchContentBase: true` watches for any changes made to the styles and index.html and will automatically refresh the browser.

## Contributions
Open to pull requests from FreeCodeCamp Manchester users.

https://guides.github.com/activities/contributing-to-open-source/

Say hello on our slack channel https://fcc-mcr-invite.herokuapp.com/
