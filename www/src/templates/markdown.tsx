import React from 'react';
import {graphql} from 'gatsby';
import {Layout} from '../components/layout';

export default function Template({data}) {
  return <div></div>;
  // const {markdownRemark, mdx} = data;
  // const markdown = mdx || markdownRemark;

  // console.log(data);
  // const {frontmatter, html} = markdown;
  // console.log('here!');

  // return (
  //   <Layout>
  //     <article className="post">
  //       {!frontmatter.hide_title && (
  //         <header className="post-header">
  //           <h1>{frontmatter.title}</h1>
  //         </header>
  //       )}
  //       <div
  //         className="post-content"
  //         dangerouslySetInnerHTML={{__html: html}}
  //       />
  //     </article>
  //   </Layout>
  // );
}
export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: {slug: {eq: $slug}}) {
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
