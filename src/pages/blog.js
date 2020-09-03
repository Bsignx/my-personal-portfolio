import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import Blogs from '../components/Blogs';

const Blog = ({
  data: {
    allStrapiBlogs: { nodes: blogs },
  },
}) => {
  return (
    <Layout>
      <section className="blog-page">
        <Blogs blogs={blogs} title="Blog" />
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        category
        content
        date(formatString: "DD/MM/YYYY")
        description
        slug
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default Blog;
