import React from "react"
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Helmet from 'react-helmet';

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
        <a href="https://github.com/seveshy">Github</a>
    </p>

    <div className="columns">
        <div className="column">
            <div className="dm-card">
                
            </div>
        
        </div>
    </div>

    <div className="columns">
        <div className="column is-half is-offset-one-quarter">
            <a href="https://github.com/Seveshy/gitcompare">
                <div className="card">
                        <div className="card-content">
                            <div className="media">
                                <div className="media-left">  
                                    <Img fixed={data.propject1.childImageSharp.fixed} /> 
                                </div>
                                <div className="media-content">
                                    <p className="title is-size-5-desktop is-size-6-touch">Gatsby Course</p>
                                    <p className="subtitle is-5-desktop is-size-6-touch">@johnsmith</p>
                                    <div className="tags">
                                        <span className="tag">Gatsby</span>
                                        <span className="tag">React</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </a>
        </div> 
    </div>

    <div className="columns">
        <div className="column is-half is-offset-one-quarter">
            <a href="https://github.com/Seveshy/gitcompare">
                <div className="card">
                        <div className="card-content">
                            <div className="media">
                                <div className="media-left">  
                                    <Img fixed={data.propject1.childImageSharp.fixed} /> 
                                </div>
                                <div className="media-content">
                                    <p className="title is-size-5-desktop is-size-6-touch">Gatsby Course</p>
                                    <p className="subtitle is-5-desktop is-size-6-touch">@johnsmith</p>
                                    <div className="tags">
                                        <span className="tag">Gatsby</span>
                                        <span className="tag">React</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </a>
        </div> 
    </div>

    <div className="columns">
        <div className="column is-half is-offset-one-quarter">
            <a href="https://github.com/Seveshy/gitcompare">
                <div className="card">
                        <div className="card-content">
                            <div className="media">
                                <div className="media-left">  
                                    <Img fixed={data.propject1.childImageSharp.fixed} /> 
                                </div>
                                <div className="media-content">
                                    <p className="title is-size-5-desktop is-size-6-touch">Gatsby Course</p>
                                    <p className="subtitle is-5-desktop is-size-6-touch">@johnsmith</p>
                                    <div className="tags">
                                        <span className="tag">Gatsby</span>
                                        <span className="tag">React</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </a>
        </div> 
    </div>

    <div className="columns">
        <div className="column is-half is-offset-one-quarter">
            <a href="https://github.com/Seveshy/gitcompare">
                <div className="card">
                        <div className="card-content">
                            <div className="media">
                                <div className="media-left">  
                                    <Img fixed={data.propject1.childImageSharp.fixed} /> 
                                </div>
                                <div className="media-content">
                                    <p className="title is-size-5-desktop is-size-6-touch">Gatsby Course</p>
                                    <p className="subtitle is-5-desktop is-size-6-touch">@johnsmith</p>
                                    <div className="tags">
                                        <span className="tag">Gatsby</span>
                                        <span className="tag">React</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </a>
        </div> 
    </div>





    <ul className="has-text-centered">
            <li>
                <a href="https://github.com/Seveshy/gitcompare">
                Github Compare
            </a>
        </li>
    </ul>
</section>

</Layout>
);

Projects.propTypes = {
    data: PropTypes.object.isRequired,
}

export default Projects