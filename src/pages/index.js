import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Jobs from '../components/Jobs';
import Projects from '../components/Projects';
import Blogs from '../components/Blogs';
export default ({
  data: {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs },
  },
}) => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title="Projetos em destaque" showLink />
      <Blogs blogs={blogs} title="Posts mais recentes" showLink />
    </Layout>
  );
};

export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        description
        id
        github
        title
        # Add url data
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
    allStrapiBlogs(limit: 3, sort: { fields: date, order: DESC }) {
      nodes {
        id
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
