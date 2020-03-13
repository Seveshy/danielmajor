import React from "react"
import Helmet from 'react-helmet';
import Layout from "components/layout"
import SEO from "components/seo";

const Stack = () => (
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
    <h1 className="title has-text-centered">Stack</h1>
        <hr />
          <div className="has-text-centered">
          <p className="content">
            I have experience with many modern tools,
            I select them for my projects depending on the usage.
          </p>
          <p className="content"> Here is my stack on StackShare: </p>
            <div className="columns is-centered"> 
              <div className="column is-half">
                <a frameborder="0" data-theme="light" data-layers="1,2,3,4" data-stack-embed="true" href="https://embed.stackshare.io/stacks/embed/18109910a51b99b5c1a9f82399277f">
                  Stacksare
                </a>
              </div>
            </div>
          </div>
  </section>
</Layout>
);

export default Stack