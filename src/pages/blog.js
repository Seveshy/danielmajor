import React from "react"
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
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
    <h1 className="title has-text-centered">Blog</h1>
        <hr />
        <p className="has-text-centered">
          Follow me on
          {' '}
          <a href="https://twitter.com/Seveshy1">
            Twitter
          {' '}
          </a>
          to read more topics of tech
        </p>
        <div className="columns">
            <div className="column is-half is-offset-one-quarter">
            <Card 
                title={"Gitcompare"}
                subtitle={"Projeto desenvolvido para estudos no bootcamp da Rocketseat"}
                link={"https://github.com/Seveshy/gitcompare"}
                tags={["create-react-app", "axios", "styled-components", "MomentJS", "font-awesome"]}
                image={<Img fixed={data.post1.childImageSharp.fixed} />}
                />

            <Card 
                title={"Gitcompare"}
                subtitle={"Projeto desenvolvido para estudos no bootcamp da Rocketseat"}
                link={"https://github.com/Seveshy/gitcompare"}
                tags={["create-react-app", "axios", "styled-components", "MomentJS", "font-awesome"]}
                image={<Img fixed={data.post1.childImageSharp.fixed} />}
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