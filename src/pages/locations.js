import React from 'react';

import Layout from '../components/Layout';

import bog from '../assets/images/plgs-bog.jpg';
import oldtimey from '../assets/images/plgs-old-timey.jpg';
const IndexPage = () => (
  <Layout activeLink="locations">
    <section className="page-section about-heading">
      <div className="container">
        <img
          className="img-fluid rounded about-heading-img mb-3 mb-lg-5"
          src={oldtimey}
          alt="Old timey post card of the pleasant lake general store"
        />
        <div className="about-heading-content mb-3">
          <div className="row">
            <div className="col-xl-9 col-lg-10 mx-auto">
              <div className="bg-faded rounded p-5">
                <h2 className="section-heading mb-4">
                  <span className="section-heading-lower mb-3">
                    About Our Store
                  </span>
                  <span className="section-heading-upper">
                    Part of Cape Cod history
                  </span>
                </h2>
                <p>
                  Pleasant Lake is a village of Harwich. Way back in 1858 this
                  building was not only a country store but also a post office
                  and railroad station. It remained a post office until 1972.
                  Cranberries from the nearby bogs were shipped by rail until
                  the bike trail replaced the tracks.
                </p>
                <p className="mb-0">
                  In 2020 Pizza Shark took over the Pleasant Lake General Store.
                  Our location is old-school but we're not but old-fashioned.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          className="img-fluid rounded about-heading-img mb-3 mb-lg-5"
          src={bog}
          alt="Cranberry bog harvest time"
        />
      </div>
    </section>
  </Layout>
);

export default IndexPage;
