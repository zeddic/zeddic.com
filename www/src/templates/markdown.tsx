import React from 'react';
import {graphql} from 'gatsby';
import {Layout} from '../components/layout';

/**
 * A page template for rendering regular markdown pages.
 */
export default function MarkdownTemplate({data}) {
  const {markdownRemark} = data;
  const {frontmatter, html} = markdownRemark;

  return (
    <Layout>
      <article className="post">
        {!frontmatter.hide_title && (
          <header className="post-header">
            <h1>{frontmatter.title}</h1>
          </header>
        )}
        <div
          className="post-content"
          dangerouslySetInnerHTML={{__html: html}}
        />
      </article>
    </Layout>
  );
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        hide_title
      }
      fields {
        slug
      }
    }
  }
`;
