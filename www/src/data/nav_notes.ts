import {useStaticQuery, graphql} from 'gatsby';

export function useNotesToShowInLeftNav(): NoteInfo[] {
  const raw = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: {fields: frontmatter___title_nav, order: ASC}
        filter: {fields: {slug: {regex: "^/notes/"}}}
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              layout
              title
              title_nav
              hide
            }
          }
        }
      }
    }
  `);

  const nodes = raw.allMarkdownRemark.edges.map(e => e.node);

  const data: NoteInfo[] = nodes.map(n => {
    return {
      url: n.fields.slug,
      title: n.frontmatter.title_nav || n.frontmatter.title,
      hide: !!n.frontmatter.hide,
    };
  });

  return data;
}

export interface NoteInfo {
  url: string;
  title: string;
  hide: boolean;
}
