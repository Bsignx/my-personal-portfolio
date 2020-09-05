import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  {
    site(siteMetadata: {}) {
      siteMetadata {
        author
        sitDesc: description
        image
        siteUrl
        siteTitle: title
      }
    }
  }
`;

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query);

  const { siteDesc, siteTitle, image, author, siteUrl } = site.siteMetadata;

  return (
    <Helmet
      title={`${title} | ${siteTitle}`}
      htmlAttributes={{ lang: 'pt-br' }}
    >
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content={image} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta
        property="og:description"
        content={description}
      />
    </Helmet>
  );
};

export default SEO;
