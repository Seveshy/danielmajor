import React from "react"
import Helmet from 'react-helmet';
import Layout from "components/layout"
import SEO from "components/seo";
import Img from 'gatsby-image';
import "../components/styles/index.scss";

export const queryImage = graphql`
query {
    photo: file(relativePath: { eq: "castanha.jpeg" }) {
        childImageSharp {
            fixed(width: 128, height: 128) {
                ...GatsbyImageSharpFixed
            }
        }
    }
}
`;

const Stack = ({ data }) => (
<Layout>
<SEO
    pageTitle="Stack"
    description="Frontend developer"
    keywords="React, Sass, Frontend, developer"
/>

<Helmet>
  <script async src="https://cdn1.stackshare.io/javascripts/client-code.js" charset="utf-8"></script>
</Helmet>

<section className="section is-size-4-desktop is-size-5-touch">
    <div class="photo">
        <figure className="image is-128x128 photo">
            <Img fixed={data.photo.childImageSharp.fixed} />
        </figure>
    </div>
    <h1 className="title has-text-centered has-text-light">Prof.Castanha</h1>
        <hr />
          <div className="has-text-centered">
          <p className="content">
            Professor da matéria de
          </p>
          <p className="content"> Pesquisa Operacional e Otimização. </p>
            <div className="columns is-centered"> 
              <div className="column is-full">
              <h1 className="title has-text-centered has-text-light">Aula - 01</h1>
              <iframe width="640" height="360" frameborder="0" src="https://mega.nz/embed/E0dVyQRS#jS5sz4sDMib50YuQF2KzroMT_rKMCQG1BgE6H0XjkTw" allowfullscreen ></iframe>

              <h1 className="title has-text-centered has-text-light">Aula - 02</h1>
              <iframe width="640" height="360" frameborder="0" src="https://mega.nz/embed/RkUzjaIY#suFzTNkE4IRe5A2cKf9kmR2m-XifIs2WihSkU1W0Qdo" allowfullscreen ></iframe>
              
              </div>
            </div>
          </div>
  </section>
</Layout>
);

export default Stack