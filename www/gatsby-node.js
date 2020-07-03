const {createFilePath} = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.onCreateNode = ({node, getNode, actions}) => {
  // Append the property 'slug' on every markdown node.
  if (node.internal.type === `MarkdownRemark` || node.internal.type === 'Mdx') {
    const {createNodeField} = actions;
    // const fileNode = getNode(node.parent);
    const slug = createFilePath({node, getNode, basePath: `pages`});

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({actions, graphql, reporter}) => {
  const {createPage} = actions;

  // Dynamically create a page for every markdown file found.
  const markdownTemplate = require.resolve(`./src/templates/markdown.tsx`);
  const result = await graphql(`
    {
      allMdx {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
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
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const edges = [
    ...result.data.allMarkdownRemark.edges,
    ...result.data.allMdx.edges,
  ];

  edges.forEach(({node}) => {
    console.log(`Creating page for ${node.fields.slug}`);
    createPage({
      path: node.fields.slug,
      component: markdownTemplate,
      context: {
        // additional data can be passed via context
        slug: node.fields.slug,
      },
    });
  });
};
