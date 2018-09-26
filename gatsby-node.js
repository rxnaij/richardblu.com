/*
const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require('path')

// Creates slug for new nodes (portfolio pages) whenver they're created
exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) { // checks for markdown pages
    const slug = createFilePath({ node, getNode, basePath: `data/portfolio` })
    console.log(slug)
    createNodeField(
      {
        node,
        name: `slug`,
        value: slug,
      }
    ) // creates "slug" field containing slug onto node
  }
};

// Tell Gatsby to create pages from the Markdown files
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => { // generate graphql query for portfolio pages
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => { // Create page files from GraphQL query
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            // Data passed to "context" is available in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })
}
*/
