import React from 'react';
import {graphql} from 'gatsby';
import {Layout} from '../components/layout';

import {MDXProvider} from '@mdx-js/react';
import {MDXRenderer} from 'gatsby-plugin-mdx';

export default function Template({data}) {
  const {mdx} = data;
  const {frontmatter, html} = mdx;

  return (
    <Layout>
      <article className="post">
        {!frontmatter.hide_title && (
          <header className="post-header">
            <h1>{frontmatter.title}</h1>
          </header>
        )}
        <div className="post-content">
          <MDXProvider>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </div>
      </article>
    </Layout>
  );
}
export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: {slug: {eq: $slug}}) {
      body
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
