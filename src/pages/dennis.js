import React from 'react';

import store from '../assets/images/store-inside.jpg';
import Layout from '../components/Layout';
import dennisStore from '../assets/images/dennis-village.jpeg';


const IndexPage = () => {
  return (
    <Layout activeLink="dennis">
       <div className="container">
        <div className="about-heading-content mt-5 mb-3 ">
          <div className="row">
            <div className="col-xl-9 col-lg-10 mx-auto">
              <div className="bg-faded rounded p-1">
                <h2 className="section-heading mb-2">
                  <span className="section-heading-lower text-center mb-1">
                    pizza shark dennis
                  </span>
                </h2>
                  <img
                      className="img-fluid rounded about-heading-img mb-3"
                      src={dennisStore}
                      alt="Old timey post card of the pleasant lake general store"
                    />
                <p className="text-center">
                  Our third (and final!) location opened on the charming stretch of 6A known as Dennis Village in August
                  of 2023. A scaled down version of our Harwich store, we offer our full menu for takeout, as well as
                  snacks, beverages and Pizza Shark merchandise. Take a pint of Gifford’s for the road! Located minutes
                  from Mayflower and Corporation beaches, this area is a bustling stretch of the historic district and we
                  are surrounded by an incredible number of small local businesses. The building was formerly occupied
                  by Showtime Pizza and we are thrilled to continue the tradition of great pizza in the Village. The Dennis
                  location is open 7 days a week, year round, from 11am until 9pm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
