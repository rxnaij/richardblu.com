// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-about-js": require("gatsby-module-loader?name=component---src-pages-about-js!/Users/richardlu/Documents/GitHub projects/richardblu.com/src/pages/about.js"),
  "component---src-pages-contact-js": require("gatsby-module-loader?name=component---src-pages-contact-js!/Users/richardlu/Documents/GitHub projects/richardblu.com/src/pages/contact.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/richardlu/Documents/GitHub projects/richardblu.com/src/pages/index.js"),
  "component---src-pages-portfolio-js": require("gatsby-module-loader?name=component---src-pages-portfolio-js!/Users/richardlu/Documents/GitHub projects/richardblu.com/src/pages/portfolio.js"),
  "component---src-pages-portfolio-nycaasc-website-js": require("gatsby-module-loader?name=component---src-pages-portfolio-nycaasc-website-js!/Users/richardlu/Documents/GitHub projects/richardblu.com/src/pages/portfolio/nycaasc-website.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/richardlu/Documents/GitHub projects/richardblu.com/.cache/json/layout-index.json"),
  "about.json": require("gatsby-module-loader?name=path---about!/Users/richardlu/Documents/GitHub projects/richardblu.com/.cache/json/about.json"),
  "contact.json": require("gatsby-module-loader?name=path---contact!/Users/richardlu/Documents/GitHub projects/richardblu.com/.cache/json/contact.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/richardlu/Documents/GitHub projects/richardblu.com/.cache/json/index.json"),
  "portfolio.json": require("gatsby-module-loader?name=path---portfolio!/Users/richardlu/Documents/GitHub projects/richardblu.com/.cache/json/portfolio.json"),
  "portfolio-nycaasc-website.json": require("gatsby-module-loader?name=path---portfolio-nycaasc-website!/Users/richardlu/Documents/GitHub projects/richardblu.com/.cache/json/portfolio-nycaasc-website.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Users/richardlu/Documents/GitHub projects/richardblu.com/.cache/layouts/index.js")
}