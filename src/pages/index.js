import React from "react"
import { Link } from "gatsby"
import Helmet from 'react-helmet';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Img from 'gatsby-image';
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/styles/index.scss";

export const queryImage = graphql`
query {
    photo: file(relativePath: { eq: "daniel.jpg" }) {
        childImageSharp {
            fixed(width: 128, height: 128) {
                ...GatsbyImageSharpFixed
            }
        }
    }
}
`;

const IndexPage = ({ data }) => (
<Layout>
<SEO title="Home" />
    <div class="photo">
        <figure className="image is-128x128 photo">
            <Img fixed={data.photo.childImageSharp.fixed} />
        </figure>
    </div>
<Helmet title="Daniel Major" />
    <script>
    var _ms = _ms || [];
    _ms.push(['_setProperty', '162097756285']);
    </script>
    <script src="https://cdn.metlycs.com/js/snippet/1.0.0/snippet.min.js"> </script>
    <h1 className="title has-text-centered has-text-light">Daniel Major</h1> 
    <h3 className="subtitle-job has-text-centered">Frontend Developer</h3> 
    <div className="has-text-centered">
        <a href="https://github.com/Seveshy">
            <span className="icon is-large">
                <FaGithub size={32} />
            </span>
        </a>
        <a href="https://www.instagram.com/daniel_alves46/">
            <span className="icon is-large">
                <FaInstagram size={32} />
            </span>
        </a>
        <a href="https://www.linkedin.com/in/daniel-major-1665b8117/">
            <span className="icon is-large">
                <FaLinkedin size={32} />
            </span>
        </a>
        <a href="https://twitter.com/Seveshy1">
            <span className="icon is-large">
                <FaTwitter size={32} />
            </span>
        </a>
    </div>
    <section className="section content is-size-4-desktop is-size-5-touch">
        <h4 className="title has-text-light">Olá, eu sou o Daniel</h4>
            <p>No momento estou no último semestre do curso de Ciências da Computação.</p>
            <p> Estou a dois anos atuando com desenvolvimento web, com foco em frontend, 
                e na maiorias das vezes com as melhores tecnologias do mercado, como Nodejs, 
                Laravel, Reactjs e React Native. </p>
            <p> Estou sempre aberto a novos desafios e solucionar problemas. </p>
        
        <p>
        Confira os meus
        {" "}
            <Link to="/projects">Projetos</Link>
        </p>    
    </section>
</Layout>
)

export default IndexPage

