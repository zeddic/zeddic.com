import React from 'react';
import {graphql} from 'gatsby';
import {Layout} from '../components/layout';

export default function Template({data}) {
  const {markdownRemark} = data; // data.markdownRemark holds your post data
  const {frontmatter, html} = markdownRemark;

  return (
    <Layout>
      <div dangerouslySetInnerHTML={{__html: html}} />
    </Layout>
  );
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
`;
