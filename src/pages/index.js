import React from "react"
import { Link } from "gatsby"
import Helmet from 'react-helmet';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
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
    <h1 className="title has-text-centered">Daniel Major</h1> 
    <h3 className="subtitle has-text-centered">Frontend Developer. </h3> 
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
    </div>
    <section className="section content is-size-4-desktop is-size-5-touch">
        <h4 className="title">Olá eu sou o Daniel</h4>
            <p>Vivência de 01 ano com desenvolvimento web, atuando em projetos, e aplicando manutenção em sistemas.
        Experiência com desenvolvimento em equipe, e metodologias ágeis.</p>
        <p>
        Check out my
        {" "}
            <Link to="/projects">Projects</Link>
        </p>    
    </section>
</Layout>
)

export default IndexPage

