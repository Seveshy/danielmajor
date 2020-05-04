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
    gitcompare: file(relativePath: { eq: "gitcompare.png" }) {
        childImageSharp {
            fixed(width: 128, height: 128) {
                ...GatsbyImageSharpFixed
            }
        }
    },
    twitter: file(relativePath: { eq: "twitter.png" }) {
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
<SEO
    pageTitle="Projects"
    description="Frontend developer"
    keywords="React, Sass, Frontend, developer"
/>
<Helmet title="Projetos | Daniel Major" />

<section className="section is-size-4-desktop is-size-5-touch">
    <h1 className="title has-text-centered has-text-light">Projetos</h1>
    <hr />
    <p className="has-text-centered">
        Alguns dos meus projetos, veja mais em
        {' '}
        <a href="https://github.com/seveshy">Github</a>
    </p>
        <div className="columns">
            <div className="column is-half is-offset-one-quarter ">
                <a href="https://github.com/Seveshy/gitcompare" target="_blank">
                    <Card
                    title={"Gitcompare"}
                    subtitle={"Projeto desenvolvido para estudos no bootcamp da Rocketseat"}
                    tags={["create-react-app", "axios", "styled-components", "MomentJS", "font-awesome"]}
                    image={<Img fixed={data.gitcompare.childImageSharp.fixed} />}
                    />
                </a>

                <a href="https://github.com/Seveshy/twitter" target="_blank">
                    <Card
                    title={"Twitter Clone"}
                    subtitle={"Um clone básico do layout do twitter, desenvolvido com flexbox"}
                    tags={["HTML", "CSS", "flex-box"]}
                    image={<Img fixed={data.twitter.childImageSharp.fixed} />}
                    />
                </a>
              
            
            </div> 
        </div>
        <p className="has-text-centered">
         Confira o meu
        {" "}
            <Link to="/blog">Blog</Link>
        </p>  
</section>
</Layout>
);

Projects.propTypes = {
    data: PropTypes.object.isRequired,
}

export default Projects