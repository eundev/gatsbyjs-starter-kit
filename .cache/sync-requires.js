const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/eunleedev/Desktop/github-templates/gatsby-boilerplate/.cache/dev-404-page.js"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/eunleedev/Desktop/github-templates/gatsby-boilerplate/src/pages/index.tsx")))
}

