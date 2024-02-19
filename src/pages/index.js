import React from 'react';
import Layout from '../components/Layout';

import { Container } from 'react-bootstrap';
import store from '../assets/images/store-inside.jpg';
import orpheum from '../assets/images/orpheum.jpg';
import dennisStore from '../assets/images/dennis-village.jpeg';


const IndexPage = () => {
  return (
  <Layout activeLink="home">
    <section className='page-section'>
      <Container>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/sWQTVIuzUcI?si=iQiKI5WUARDWJtso" title="Pizza Shark Commercial" allowFullScreen></iframe>
        </div>
      </Container>
    </section>
    <section className="page-section about-heading">
      <div className="container">
        <div className="about-heading-content mt-5 ">
          <div className="row">
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
          </div> 
        </div>
      </div>
    </section>

    <section className="page-section about-heading">
      <div className="container">
        <div className="about-heading-content mt-5 ">
          <div className="row">
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
          </div>
        </div>
      </div>
    </section>

    <section className="page-section about-heading">
      <div className="container">
        <div className="about-heading-content mt-5 ">
          <div className="row">
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
          </div>
        </div>
      </div>
    </section>
  </Layout>
  )
};

export default IndexPage;
