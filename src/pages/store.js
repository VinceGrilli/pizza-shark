import React from 'react';

import Layout from '../components/Layout';
import Map from '../components/Map';

const IndexPage = () => {
  console.log(process.env);
  return (
    <Layout activeLink="store">
      <section className="page-section cta container">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <div className="cta-inner text-center rounded px-4">
                <h2 className="section-heading mb-5">
                  <span className="section-heading-upper mb-3">Come On In</span>
                  <span className="section-heading-lower">We're Open</span>
                </h2>
                <ul className="list-unstyled list-hours mb-5 text-left mx-auto">
                  <li className="list-unstyled-item list-hours-item d-flex">
                    Sunday
                    <span className="ml-auto">6:00 AM to 9:00 PM</span>
                  </li>
                  <li className="list-unstyled-item list-hours-item d-flex">
                    Monday
                    <span className="ml-auto">6:00 AM to 9:00 PM</span>
                  </li>
                  <li className="list-unstyled-item list-hours-item d-flex">
                    Tuesday
                    <span className="ml-auto">6:00 AM to 9:00 PM</span>
                  </li>
                  <li className="list-unstyled-item list-hours-item d-flex">
                    Wednesday
                    <span className="ml-auto">6:00 AM to 9:00 PM</span>
                  </li>
                  <li className="list-unstyled-item list-hours-item d-flex">
                    Thursday
                    <span className="ml-auto">6:00 AM to 9:00 PM</span>
                  </li>
                  <li className="list-unstyled-item list-hours-item d-flex">
                    Friday
                    <span className="ml-auto">6:00 AM to 9:00 PM</span>
                  </li>
                  <li className="list-unstyled-item list-hours-item d-flex">
                    Saturday
                    <span className="ml-auto">6:00 AM to 9:00 PM</span>
                  </li>
                  <li className="list-unstyled-item list-hours-item d-flex">
                    Late night takout
                    <br />
                    Friday & Saturday
                    <span className="ml-auto">9:00 PM to 12:00 AM</span>
                  </li>
                </ul>
                <p className="address mb-4">
                  <em>
                    <strong>403 Pleasant Lake Ave</strong>
                    <br />
                    Harwich, MA 02645
                  </em>
                </p>
                <div className="row">
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
                <p className="mb-0">
                  <small>
                    <em>Call Anytime</em>
                  </small>
                  <br />
                  (508) 432-6060
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mb-4">
        <Map
          isMarkerShown
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.GATSBY_GOOGLE_KEY}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </Layout>
  );
};

export default IndexPage;
