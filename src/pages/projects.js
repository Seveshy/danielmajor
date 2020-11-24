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
    },
    pipefy: file(relativePath: { eq: "pipefy.png" }) {
        childImageSharp {
            fixed(width: 128, height: 128) {
                ...GatsbyImageSharpFixed
            }
        }
    }
    blog: file(relativePath: { eq: "blog.png" }) {
        childImageSharp {
            fixed(width: 128, height: 128) {
                ...GatsbyImageSharpFixed
            }
        }
    }
    robo: file(relativePath: { eq: "robo.png" }) {
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
<Helmet title="Projetos" />

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
                <Link to="robo" target="_blank">
                    <Card
                    title={"Robo Instagram"}
                    subtitle={"Projeto desenvolvido dentro da Universidade Ibirapuera"}
                    tags={["gatsby", "bulma"]}
                    image={<Img fixed={data.robo.childImageSharp.fixed} />}
                    />
                </Link>

                <a href="https://github.com/Seveshy/danielmajor-gatsby" target="_blank">
                    <Card
                    title={"Blog pessoal"}
                    subtitle={"Projeto desenvolvido para apresentar meu portfolio, ideias, e tecnologias que estou estudando"}
                    tags={["gatsby", "bulma"]}
                    image={<Img fixed={data.blog.childImageSharp.fixed} />}
                    />
                </a>

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

                <a href="https://github.com/Seveshy/pipefy" target="_blank">
                    <Card
                    title={"Pipefy Clone"}
                    subtitle={"Clone do layout do Pipefy + funcionalidade de scrum"}
                    tags={["create-react-app", "styled-components", "react-icons"]}
                    image={<Img fixed={data.pipefy.childImageSharp.fixed} />}
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