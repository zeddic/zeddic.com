const {createFilePath} = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.onCreateNode = ({node, getNode, actions}) => {
  // Append the property 'slug' on every markdown node.
  if (node.internal.type === `MarkdownRemark` || node.internal.type === 'Mdx') {
    const {createNodeField} = actions;
    const slug = createFilePath({node, getNode, basePath: `pages`});

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async options => {
  createMarkdownPages(options);
  createMdxPages(options);
};

async function createMarkdownPages({actions, graphql}) {
  const {createPage} = actions;
  const template = require.resolve(`./src/templates/markdown.tsx`);
  const result = await graphql(`
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
  `);

  result.data.allMarkdownRemark.edges.forEach(({node}) => {
    createPage({
      path: node.fields.slug,
      component: template,
      context: {
        slug: node.fields.slug,
      },
    });
  });
}

async function createMdxPages({actions, graphql, reporter}) {
  const {createPage} = actions;
  const template = require.resolve(`./src/templates/mdx.tsx`);
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
    }
  `);

  result.data.allMdx.edges.forEach(({node}) => {
    createPage({
      path: node.fields.slug,
      component: template,
      context: {
        slug: node.fields.slug,
      },
    });
  });
}
