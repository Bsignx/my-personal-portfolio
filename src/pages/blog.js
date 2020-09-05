import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import Blogs from '../components/Blogs';
import SEO from '../components/SEO';

const Blog = ({
  data: {
    allStrapiBlogs: { nodes: blogs },
  },
}) => {
  return (
    <Layout>
      <SEO
        title="Blog"
        description="Página Blog - Todos blogs e artigos escritos e traduzidos por Bruno Mariano"
      />
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
