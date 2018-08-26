// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/richardlu/Documents/GitHub projects/richardblu.com/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/richardlu/Documents/GitHub projects/richardblu.com/.cache/dev-404-page.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/richardlu/Documents/GitHub projects/richardblu.com/src/pages/about.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/richardlu/Documents/GitHub projects/richardblu.com/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/richardlu/Documents/GitHub projects/richardblu.com/src/pages/index.js")),
  "component---src-pages-portfolio-js": preferDefault(require("/Users/richardlu/Documents/GitHub projects/richardblu.com/src/pages/portfolio.js")),
  "component---src-pages-portfolio-nycaasc-website-js": preferDefault(require("/Users/richardlu/Documents/GitHub projects/richardblu.com/src/pages/portfolio/nycaasc-website.js"))
}

exports.json = {
  "layout-index.json": require("/Users/richardlu/Documents/GitHub projects/richardblu.com/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/richardlu/Documents/GitHub projects/richardblu.com/.cache/json/dev-404-page.json"),
  "about.json": require("/Users/richardlu/Documents/GitHub projects/richardblu.com/.cache/json/about.json"),
  "contact.json": require("/Users/richardlu/Documents/GitHub projects/richardblu.com/.cache/json/contact.json"),
  "index.json": require("/Users/richardlu/Documents/GitHub projects/richardblu.com/.cache/json/index.json"),
  "portfolio.json": require("/Users/richardlu/Documents/GitHub projects/richardblu.com/.cache/json/portfolio.json"),
  "portfolio-nycaasc-website.json": require("/Users/richardlu/Documents/GitHub projects/richardblu.com/.cache/json/portfolio-nycaasc-website.json")
}