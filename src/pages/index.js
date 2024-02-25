import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';

import store from '../assets/images/store-inside.jpg';
import orpheum from '../assets/images/orpheum.jpg';
import dennisStore from '../assets/images/dennisshark.jpg';


const IndexPage = () => {
  return (
  <Layout activeLink="home">
    <section className='page-section'>
      <div className='container'>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/Yc4Xgn411Y0?si=YmkbgosEoxyVs5BA" title="Pizza Shark Commercial" allowFullScreen></iframe>
        </div>
      </div>
    </section>
    <section className="page-section about-heading">
      <div className="container">
        <div className="about-heading-content mt-5 ">
          <Link className="row" to='/harwich'>
            <div className="col-xl-9 col-lg-10 mx-auto">
              <div className="bg-faded rounded ">
                <h2 className="section-heading">
                  <span className="section-heading-lower text-center pt-1">
                    pizza shark harwich
                  </span>
                </h2>
                <img
                  className="img-fluid rounded about-heading-img"
                  src={store}
                  alt="Old timey post card of the pleasant lake general store"
                />
              </div>
            </div>
          </Link> 
        </div>
      </div>
    </section>

    <section className="page-section about-heading">
      <div className="container">
        <div className="about-heading-content mt-5 ">
          <Link className="row" to='/chatham'>
            <div className="col-xl-9 col-lg-10 mx-auto">
              <div className="bg-faded rounded ">
                <h2 className="section-heading">
                  <span className="section-heading-lower text-center pt-1">
                    pizza shark chatham
                  </span>
                </h2>
                <img
                  className="img-fluid rounded about-heading-img"
                  src={orpheum}
                  alt="Old timey post card of the pleasant lake general store"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>

    <section className="page-section about-heading">
      <div className="container">
        <div className="about-heading-content mt-5 ">
          <Link className="row" to='/dennis'>
            <div className="col-xl-9 col-lg-10 mx-auto">
              <div className="bg-faded rounded ">
                <h2 className="section-heading">
                  <span className="section-heading-lower text-center pt-1">
                    pizza shark dennis
                  </span>
                </h2>
                <img
                  className="img-fluid rounded about-heading-img"
                  src={dennisStore}
                  alt="Old timey post card of the pleasant lake general store"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  </Layout>
  )
};

export default IndexPage;
