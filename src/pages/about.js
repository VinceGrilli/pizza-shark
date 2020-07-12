import React from 'react';

import Layout from '../components/Layout';

import cooler from '../assets/images/plgs-cooler.jpeg';
const IndexPage = () => (
  <Layout activeLink="about">
    <section className="page-section about-heading">
      <div className="container">
        <img
          className="img-fluid rounded about-heading-img mb-3 mb-lg-0"
          src={cooler}
          alt=""
        />
        <div className="about-heading-content">
          <div className="row">
            <div className="col-xl-9 col-lg-10 mx-auto">
              <div className="bg-faded rounded p-5">
                <h2 className="section-heading mb-4">
                  <span className="section-heading-upper">
                    Pizza with a passion
                  </span>
                  <span className="section-heading-lower">About Our Store</span>
                </h2>
                <p>
                  Founded in 2020 Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Officia necessitatibus nobis tempora,
                  reprehenderit quam, magni quo esse et ab itaque quas, labore
                  voluptate eos. Sit sed quas eligendi minus exercitationem?
                </p>
                <p className="mb-0">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
                  expedita ducimus mollitia asperiores assumenda qui quas
                  repellat eveniet quae soluta nam iure voluptatem, dolores
                  possimus odio consequatur iste ratione vero.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
