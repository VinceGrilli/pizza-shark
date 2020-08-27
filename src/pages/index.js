import React from 'react';

import Layout from '../components/Layout';

import empty from '../assets/images/plgs-empty.jpeg';
const IndexPage = () => (
  <Layout activeLink="home">
    <section className="page-section clearfix">
      <div className="container">
        <div className="intro">
          <div className="intro-text left-0 text-center bg-faded p-5 rounded">
            <h2 className="section-heading mb-4">
              <span className="section-heading-lower">pizza & ice cream</span>
              <span className="section-heading-upper">
                at the pleasent lake general store
              </span>
            </h2>
            <p className="mb-3">
              Located on the Brewster-Harwich line, directly on the Cape Cod
              Rail Trail. Now scooping Giford's famous ice cream at our take out
              window. Pizza, Subs, Sides, Beer & Wine, and General Store
              essentials coming soon! Please use our hassle-free online ordering
              system for the quickest and easiest service. We Deliver to all of
              Brewster and Harwich!
            </p>
            <div className="intro-button mx-auto">
              <a className="btn btn-primary btn-xl" href="/#">
                Order Online!
              </a>
            </div>
          </div>
          <img
            className="intro-img img-fluid mb-3 mb-lg-0 rounded"
            src={empty}
            alt=""
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
                <span className="section-heading-upper">The Best Stop</span>
                <span className="section-heading-lower">
                  on the cape cod rail trail
                </span>
              </h2>
              <p className="mb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                rem deserunt minima molestiae deleniti dolorum, ipsum eligendi
                provident aperiam, officiis soluta aut similique placeat? Ipsam
                voluptas quidem nostrum quis repellendus, voluptate doloribus
                reiciendis. A reprehenderit delectus impedit cum, quas ratione
                nemo pariatur, dolorum explicabo quia atque esse rem
                praesentium, natus placeat voluptatum at eaque soluta fuga ea
                culpa temporibus optio.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto pt-5 row justify-content-center">
          <a className="btn btn-white absolute btn-xl" href="/#">
            Order Online Now!
          </a>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
