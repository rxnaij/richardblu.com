// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/richardlu/Documents/GitHub projects/richardblu.com/src/pages/index.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/richardlu/Documents/GitHub projects/richardblu.com/.cache/json/layout-index.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/richardlu/Documents/GitHub projects/richardblu.com/.cache/json/index.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Users/richardlu/Documents/GitHub projects/richardblu.com/.cache/layouts/index.js")
}