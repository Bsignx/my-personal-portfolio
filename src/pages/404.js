import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <main className="error-page">
        <div className="error-container">
          <h1>Opa! Não encontrei o que procurastes :(</h1>
          <Link to="/" className="btn">
            Voltar para Home
          </Link>
        </div>
      </main>
    </Layout>
  );
}

export default Error
