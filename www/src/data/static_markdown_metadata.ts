import {useStaticQuery, graphql} from 'gatsby';

/**
 * Returns basic file metadata about all markdown AND mdx files.
 */
export function useMarkdownFileMetadata(): MarkdownNode[] {
  const raw = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              title_nav
              hide
            }
          }
        }
      }
      allMdx {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              title_nav
              hide
            }
          }
        }
      }
    }
  `);

  const markdownNodes = raw.allMarkdownRemark.edges.map(e => e.node);
  const mdxNodes = raw.allMdx.edges.map(e => e.node);
  return [...markdownNodes, ...mdxNodes];
}

export interface MarkdownNode {
  fields: {slug: string};
  frontmatter: {
    title: string;
    title_nav?: string;
    hide?: boolean;
  };
}
