import React from 'react';
import Layout from '../components/Layout';
import store from '../assets/images/store-inside.jpg';
import plgs from '../assets/images/plgs5.jpg';
import psic from '../assets/images/pizza-shark-ice-cream2.png';

const Harwich = () => (
  <Layout activeLink="locations">
    <section className="page-section about-heading">
      <div className="container">
        <img
          className="img-fluid rounded about-heading-img"
          src={plgs}
          alt="Outside the pleasant lake general store"
          />
        <div className="about-heading-content ">
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
                      Order Online in Harwich
                    </a>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="img-fluid rounded about-heading-img mb-3"
          src={plgs}
          alt="Outside the pleasant lake general store"
          />
        <img
          className="img-fluid rounded about-heading-img mb-3"
          src={store}
          alt="Inside the pleasant lake general store"
        />
      </div>
      <div className="text-center d-block">
        <img className="logo-img img-fluid" src={psic} alt="logo2" />
      </div>
    </section>
    
  </Layout>
);

export default Harwich;
