import React from "react"
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Helmet from 'react-helmet';

import Card from '../components/Card/Card';
import Layout from "../components/layout"
import SEO from "../components/seo";

export const queryImage = graphql`
query {
    propject1: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
            fixed(width: 128, height: 128) {
                ...GatsbyImageSharpFixed
            }
        }
    }
}
`;

const Projects = ({ data }) => (
<Layout>
<SEO description="Frontend developer"
     keywords="React, Sass, Frontend, developer"
/>
<Helmet title="Projetos | Daniel Major" />

<section className="section is-size-4-desktop is-size-5-touch">
    <h1 className="title has-text-centered">Projects</h1>
    <p className="has-text-centered">
        Some of my projects, see more on My
        {' '}
        <a href="https://github.com/seveshy">Github</a>
    </p>
        <div className="columns">
            <div className="column is-half is-offset-one-quarter">
            <Card 
                title={"Gitcompare"}
                subtitle={"Projeto desenvolvido para estudos no bootcamp da Rocketseat"}
                link={"https://github.com/Seveshy/gitcompare"}
                tags={["create-react-app", "axios", "styled-components", "MomentJS", "font-awesome"]}
                image={<Img fixed={data.propject1.childImageSharp.fixed} />}
                />
            </div> 
        </div>
</section>
</Layout>
);

Projects.propTypes = {
    data: PropTypes.object.isRequired,
}

export default Projects