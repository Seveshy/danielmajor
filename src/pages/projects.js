import React from "react"
import Helmet from 'react-helmet';

import Layout from "../components/layout"
import SEO from "../components/seo";

const Project = () => (
<Layout>
<SEO description="Frontend developer"
     keywords="React, Sass, Frontend, developer"
/>
<Helmet title="Projetos | Daniel Major" />

<section className="section is-size-4-desktop is-size-5-touch">
    <h1 className="title has-text-centered">Projetos</h1>
    <hr />
    <p className="has-text-centered">
        Some of my projects, see more on My
        {" "}
        <a href="https://github.com/seveshy">Github</a>
    </p>

    <div className="columns">
        <div className="column">
            <div className="dm-card">
                
            </div>
        
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
)

export default Project