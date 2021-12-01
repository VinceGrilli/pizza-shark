import React from 'react';
import Layout from '../components/Layout';
import orpheum from '../assets/images/orpheum.jpg';

const Chatham = () => (
  <Layout activeLink="locations">
    <section className="page-section about-heading">
      <div className="container">
        <img
          className="img-fluid rounded about-heading-img"
          src={orpheum}
          alt="The Historic Chatham Orpheum"
        />
        <div className="about-heading-content mb-3 ">
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
                    Order Online In Chatham
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

export default Chatham;
