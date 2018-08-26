// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/richardlu/Documents/GitHub projects/richardblu.com/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-pages-index-js": preferDefault(require("/Users/richardlu/Documents/GitHub projects/richardblu.com/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/richardlu/Documents/GitHub projects/richardblu.com/.cache/json/layout-index.json"),
  "index.json": require("/Users/richardlu/Documents/GitHub projects/richardblu.com/.cache/json/index.json")
}