import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const contact = () => {
  return (
    <Layout>
      <SEO
        title="Contato"
        description="Página Contato - Entrar em contato comigo"
      />
      <section className="contact-page">
        <article className="contact-form">
          <h3>Contato</h3>
          <form action="https://formspree.io/xnqgeqbo" method="POST">
            <div className="form-group">
              <input
                type="text"
                placeholder="Nome"
                name="name"
                className="form-control"
              />
              <input
                type="email"
                placeholder="Endereço de E-mail"
                name="email"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Mensagem"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              Enviar mensagem
            </button>
          </form>
        </article>
      </section>
    </Layout>
  );
};

export default contact;
