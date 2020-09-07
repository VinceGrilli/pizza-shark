import React from 'react';

import Layout from '../components/Layout';
import psic from '../assets/images/pizza-shark-ice-cream2.png';
import plgs from '../assets/images/plgs5.jpg';
const IndexPage = () => (
  <Layout activeLink="home">
    <section className="page-section clearfix">
      <div className="container">
        <div className="intro">
          <div className="intro-text left-0 text-center bg-faded p-5 rounded">
            <h2 className="section-heading mb-4">
              <span className="section-heading-lower mb-3">the best stop</span>
              <span className="section-heading-upper">
                on the cape cod rail trail
              </span>
            </h2>
            <p className="mb-3">
              Stop by our convenient takeout window adjacent to the Cape Cod
              Rail Trail or try our new easy-to-use Online Ordering system. Sign
              up for our rewards program to get $15 off for every 150 points you
              earn! Gift cards now available online!
            </p>
            <div className="row mt-5">
              <div className="intro-button mx-auto">
                <a
                  className="btn btn-primary btn-lg mb-4"
                  href="https://www.toasttab.com/pizza-shark-403-pleasant-lake-ave/giftcards"
                >
                  Gift Cards
                </a>
              </div>
              <div className="intro-button mx-auto">
                <a
                  className="btn btn-primary btn-lg mb-4"
                  href="https://www.toasttab.com/pizza-shark-403-pleasant-lake-ave/rewardsSignup"
                >
                  Rewards Signup
                </a>
              </div>
              <div className="intro-button mx-auto">
                <a
                  className="btn btn-primary btn-lg mb-4"
                  href="https://www.toasttab.com/pizza-shark-403-pleasant-lake-ave"
                >
                  Order Online
                </a>
              </div>
            </div>
          </div>
          <img
            className="intro-img img-fluid mb-3 mb-lg-0 rounded"
            src={plgs}
            alt="Old Store Front"
          />
        </div>
      </div>
    </section>
    <section>
      <h1 className="site-heading text-center text-white d-block">
        <img className="logo-img img-fluid mt-4 mb-0" src={psic} alt="logo2" />
      </h1>
    </section>
    <section className="page-section cta container rounded">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <div className="cta-inner text-center rounded">
              <h2 className="section-heading mb-4">
                <span className="section-heading-upper mb-3">
                  pizza & ice cream
                </span>
                <span className="section-heading-lower">
                  at the pleasant lake general store
                </span>
              </h2>
              <p className="mb-0">
                Located on the Brewster-Harwich line, directly on the Cape Cod
                Rail Trail. Now scooping Gifford's famous ice cream at our
                takeout window. Pizza, Salad, & Sandwiches now available!
                Breakfast, Beer & Wine, and General Store essentials coming
                soon! Please use our hassle-free online ordering system for the
                quickest and easiest service. Delivery to all of Brewster and
                Harwich coming soon!
              </p>
              <div className="row mt-5">
                <div className="intro-button mx-auto">
                  <a
                    className="btn btn-primary btn-xl mb-4"
                    href="https://www.toasttab.com/pizza-shark-403-pleasant-lake-ave/rewardsSignup"
                  >
                    Rewards Signup
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
                    href="https://www.toasttab.com/pizza-shark-403-pleasant-lake-ave"
                  >
                    Order Online
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
