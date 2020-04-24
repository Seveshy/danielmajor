import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
      <section className="section">
        <h1 className="title has-text-centered has-text-light">404: Not found</h1>
        <hr />
        <p className="has-text-centered">You just hit a route that doesn&#39;t exist... the sadness.</p>
      </section>
  </Layout>
)

export default NotFoundPage
