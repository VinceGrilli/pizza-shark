import React from 'react';
import Layout from '../components/Layout';
import orpheum from '../assets/images/orpheum.jpg';
import store from '../assets/images/store-inside.jpg';


const Locations = () => (
  <Layout activeLink="locations">
    <section className="page-section about-heading">
      <div className="container">
        <div className="about-heading-content mt-5 mb-3 ">
          <div className="row">
            <div className="col-xl-9 col-lg-10 mx-auto">
              <div className="bg-faded rounded p-5">
                <h2 className="section-heading mb-4">
                  <span className="section-heading-lower text-center mb-3">
                    pizza shark at the pleasent lake general store
                  </span>
                </h2>
                <p className="text-center">
                Located on the Brewster-Harwich line, directly on the Cape Cod Rail Trail. Pizza, salads, sandwiches & ice cream year-round. Excellent location for a quick & easy lunch. Grocery essentials, snacks, beverages, beer & wine available in the General Store. Please use our hassle-free online ordering system to earn rewards points. We offer delivery 7 nights a week to all of Brewster and Harwich and you can order everything from the general store along with your pizzas. One-stop shopping! 
                </p>
                <div className="intro-button text-center mt-4">
                    <a
                      className="btn btn-primary btn-xl mb-4"
                      href="https://www.toasttab.com/pizza-shark-403-pleasant-lake-ave"
                    >
                      Order Harwich
                    </a>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="img-fluid rounded about-heading-img mb-3"
          src={store}
          alt="Old timey post card of the pleasant lake general store"
        />
      </div>
    </section>
    <section className="page-section about-heading">
      <div className="container">
        <div className="about-heading-content mt-5 mb-3 ">
          <div className="row">
            <div className="col-xl-9 col-lg-10 mx-auto">
              <div className="bg-faded rounded p-5">
                <h2 className="section-heading mb-4">
                  <span className="section-heading-lower text-center mb-3">
                    pizza shark at the chatham orpheum
                  </span>
                </h2>
                <p className="text-center">
                Beverages and pizza slices available to take into the theater for your favorite movies, or order online for takeout and delivery from inside the historic Orpheum Theater in downtown Chatham. Convenient pick-up in the lobby. Stay tuned for updates and an exciting bar menu debuting in 2022! 
                </p>
                <div className="intro-button text-center mt-5 mx-auto">
                  <a
                    className="btn btn-primary btn-xl mb-4"
                    href="https://www.toasttab.com/pizza-shark-chatham-637-main-street"
                  >
                    Order Chatham
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="img-fluid rounded about-heading-img mb-3"
          src={orpheum}
          alt="Old timey post card of the pleasant lake general store"
        />
      </div>
    </section>
  </Layout>
);

export default Locations;