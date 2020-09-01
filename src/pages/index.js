import React from 'react';

import Layout from '../components/Layout';

import bog from '../assets/images/plgs-bog.jpg';
const IndexPage = () => (
  <Layout activeLink="home">
    <section className="page-section clearfix">
      <div className="container">
        <div className="intro">
          <div className="intro-text left-0 text-center bg-faded p-5 rounded">
            <h2 className="section-heading mb-4">
              <span className="section-heading-lower mb-3">
                pizza & ice cream
              </span>
              <span className="section-heading-upper">
                at the pleasent lake general store
              </span>
            </h2>
            <p className="mb-3">
              Located on the Brewster-Harwich line, directly on the Cape Cod
              Rail Trail. Now scooping Giford's famous ice cream at our take out
              window. Pizza, Salad, & Sandwiches now avalible! Breakfast, Beer &
              Wine, and General Store essentials coming soon! Please use our
              hassle-free online ordering system for the quickest and easiest
              service. Delivery to all of Brewster and Harwich coming soon!
            </p>
            <div className="intro-button mx-auto">
              <a className="btn btn-primary btn-xl" href="/#">
                Order Online!
              </a>
            </div>
          </div>
          <img
            className="intro-img img-fluid mb-3 mb-lg-0 rounded"
            src={bog}
            alt="Cranberry Bog"
          />
        </div>
      </div>
    </section>

    <section className="page-section cta container">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <div className="cta-inner text-center rounded">
              <h2 className="section-heading mb-4">
                <span className="section-heading-upper mb-3">
                  The Best Stop
                </span>
                <span className="section-heading-lower">
                  on the cape cod rail trail
                </span>
              </h2>
              <p className="mb-0">
                Stop by our convenient take out window adjacent to the Cape Cod
                Rail Trail or try our new easy-to-use Online Ordering system.
                Sign up for our rewards program to get $15 off for every 150
                point you earn! Gift cards now avalible online!
              </p>
              <div className="row mt-5">
                <div className="intro-button mx-auto">
                  <a
                    className="btn btn-primary btn-xl mb-4"
                    href="https://www.toasttab.com/pizza-shark-403-pleasant-lake-ave"
                  >
                    Order Online!
                  </a>
                </div>
                <div className="intro-button mx-auto">
                  <a
                    className="btn btn-primary btn-xl mb-4"
                    href="https://www.toasttab.com/pizza-shark-403-pleasant-lake-ave/giftcards"
                  >
                    Gift Cards
                  </a>
                </div>
                <div className="intro-button mx-auto">
                  <a
                    className="btn btn-primary btn-xl mb-4"
                    href="https://www.toasttab.com/pizza-shark-403-pleasant-lake-ave/rewardsSignup"
                  >
                    Rewards Signup
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
