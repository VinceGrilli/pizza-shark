import React from 'react';

import Layout from '../components/Layout';

import empty from '../assets/images/plgs-empty.jpeg';
const IndexPage = () => (
  <Layout activeLink="home">
    <section className="page-section clearfix">
      <div className="container">
        <div className="intro">
          <img
            className="intro-img img-fluid mb-3 mb-lg-0 rounded"
            src={empty}
            alt=""
          />
          <div className="intro-text left-0 text-center bg-faded p-5 rounded">
            <h2 className="section-heading mb-4">
              <span className="section-heading-lower">pizza and ice cream</span>
              <span className="section-heading-upper">
                at the pleasent lake general store
              </span>
            </h2>
            <p className="mb-3">
              Located on the Brewster-Harwich line, directly on the Cape Cod
              Rail Trail. Now scooping Ice Cream at our take out window. Pizza,
              Subs, Sides, Beer & Wine, and General Store Essentials coming
              soon! Please use our hassle-free online ordering system for the
              the quickest and easiest service. We Deliver to all of Brewster
              and Harwich!
            </p>
            <div className="intro-button mx-auto">
              <a className="btn btn-primary btn-xl" href="/#">
                Order Online!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="page-section cta">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <div className="cta-inner text-center rounded">
              <h2 className="section-heading mb-4">
                <span className="section-heading-upper">Our Promise</span>
                <span className="section-heading-lower">To You</span>
              </h2>
              <p className="mb-0">
                Food truck yr poke hexagon, prism listicle fixie plaid twee
                biodiesel salvia everyday carry godard cred blog. Hot chicken
                pok pok seitan occupy, portland actually tofu mumblecore.
                Brooklyn franzen adaptogen, pitchfork glossier microdosing prism
                normcore butcher tumblr trust fund seitan put a bird on it. Hot
                chicken organic 8-bit, celiac narwhal tbh chicharrones
                shoreditch. Single-origin coffee craft beer drinking vinegar
                pork belly four dollar toast small batch retro hashtag schlitz
                bushwick air plant, post-ironic man braid food truck butcher.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
