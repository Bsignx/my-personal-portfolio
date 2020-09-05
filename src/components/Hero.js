import React from 'react';
import Image from 'gatsby-image';
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';
import SocialLinks from '../constants/socialLinks';

const query = graphql`
  {
    file(relativePath: { eq: "main-home.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query);
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline" />
            <h4>BRUNO MARIANO</h4>
            <h1>Desenvolvedor Frontend e UI/UX Designer</h1>
            <div className="btn-hero-container">
              <Link to="/projects" className="btn">
                Ver meu Portfolio
              </Link>
              <Link to="/contact" className="btn second-btn">
                Entrar em contato
              </Link>
            </div>

            <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} style={{ maxHeight: 600 }} className="hero-img" />
      </div>
    </header>
  );
};

export default Hero;
