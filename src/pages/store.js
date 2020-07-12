import React from 'react';

import Layout from '../components/Layout';
import cooler from '../assets/img/plgs-cooler.jpeg';

const IndexPage = () => (
  <Layout activeLink="store">
    <section className="page-section cta">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <div className="cta-inner text-center rounded">
              <h2 className="section-heading mb-5">
                <span className="section-heading-upper">Come On In</span>
                <span className="section-heading-lower">We're Open</span>
              </h2>
              <ul className="list-unstyled list-hours mb-5 text-left mx-auto">
                <li className="list-unstyled-item list-hours-item d-flex">
                  Sunday
                  <span className="ml-auto">Closed</span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Monday
                  <span className="ml-auto">7:00 AM to 8:00 PM</span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Tuesday
                  <span className="ml-auto">7:00 AM to 8:00 PM</span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Wednesday
                  <span className="ml-auto">7:00 AM to 8:00 PM</span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Thursday
                  <span className="ml-auto">7:00 AM to 8:00 PM</span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Friday
                  <span className="ml-auto">7:00 AM to 8:00 PM</span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Saturday
                  <span className="ml-auto">9:00 AM to 5:00 PM</span>
                </li>
              </ul>
              <p className="address mb-4">
                <em>
                  <strong>403 Pleasant Lake Ave</strong>
                  <br />
                  Harwich, MA 02645
                </em>
              </p>
              <div className="intro-button mx-auto">
                <a className="btn btn-primary btn-xl mb-4" href="/#">
                  Order Online!
                </a>
              </div>
              <p className="mb-0">
                <small>
                  <em>Call Anytime</em>
                </small>
                <br />
                (508) 555-5555
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

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
                    pizza with a passion
                  </span>
                  <span className="section-heading-lower">About Our Store</span>
                </h2>
                <p>
                  Founded in 2020 Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Ipsa, ut. Veniam quasi, consequatur hic
                  mollitia sint ullam. Incidunt nesciunt facere dolorem
                  obcaecati sapiente? Quaerat suscipit unde beatae, nobis sunt
                  possimus.
                </p>
                <p className="mb-0">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi perspiciatis magni sit dolorem voluptatem. Aliquam
                  minima minus exercitationem voluptatem, in provident quam
                  dolor sunt maiores culpa optio obcaecati libero sit.
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
