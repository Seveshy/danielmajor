import React from "react"
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Helmet from 'react-helmet';

import Card from 'components/Card/Card';
import Layout from "components/layout"
import SEO from "components/seo";

export const queryImage = graphql`
query {
  post1: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
            fixed(width: 128, height: 128) {
                ...GatsbyImageSharpFixed
            }
        }
    }
}


`;

const Blog = ({ data }) => (
<Layout>
<SEO
    pageTitle="Blog"
    description="Frontend developer"
    keywords="React, Sass, Frontend, developer"
/>
<Helmet title="Projetos | Daniel Major" />

<section className="section is-size-4-desktop is-size-5-touch">
    <h1 className="title has-text-centered has-text-light">Blog</h1>
        <hr />
        <p className="has-text-centered">
          Siga me no
          {' '}
          <a href="https://twitter.com/Seveshy1">
            Twitter
            
          {' '}
          </a>
          para ler mais tópicos de tecnologia
        </p>
        <div className="columns">
            <div className="column is-half is-offset-one-quarter">
            <Card 
                title={"Artigo em andamento"}
                />

            <Card 
                title={"Artigo em andamento"}
                />
            </div> 
        </div>
        <p className="has-text-centered">
        Check out my
        {" "}
            <Link to="/stack">Stack</Link>
        </p>  
       
</section>
</Layout>
);

Blog.propTypes = {
    data: PropTypes.object.isRequired,
}

export default Blog