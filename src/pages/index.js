import React from 'react';
import Layout from '../components/Layout';
import { useState } from 'react';
import Modal from "react-bootstrap/Modal"

import store from '../assets/images/store-inside.jpg';
import orpheum from '../assets/images/orpheum.jpg';
import dennisStore from '../assets/images/dennis-village.jpeg';


const IndexPage = () => {

  const [harwichConformationIsOpen, setHarwichConformationIsOpen] = useState(false);
  const [chathamConformationIsOpen, setChathamConformationIsOpen] = useState(false);
  const [dennisConformationIsOpen, setDennisConformationIsOpen] = useState(false);

  return (
  <Layout activeLink="home">
    <section className="page-section about-heading">
    <Modal size='sm' show={harwichConformationIsOpen} onHide={()=> setHarwichConformationIsOpen(false)} centered>
      <Modal.Body className='text-center'>
        Please confirm you've selected the correct location
        <br/>
        <a
          type="button"
          className="btn btn-link navbar-brand text-uppercase font-weight-bold mx-auto"
          href="https://www.toasttab.com/pizza-shark-403-pleasant-lake-ave"
        >
          Order Harwich
        </a>
      </Modal.Body>
    </Modal>
      <div className="container">
        <div className="about-heading-content mt-5 ">
          <div className="row">
            <div className="col-xl-9 col-lg-10 mx-auto">
              <div className="bg-faded rounded p-2">
                <h2 className="section-heading">
                  <span className="section-heading-lower text-center">
                    pizza shark harwich
                  </span>
                </h2>
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
    <Modal size='sm' show={dennisConformationIsOpen} onHide={()=> setDennisConformationIsOpen(false)} centered>
      <Modal.Body className='text-center'>
        Please confirm you've selected the correct location
        <br/>
        <a
          type="button"
          className="btn btn-link navbar-brand text-uppercase font-weight-bold mx-auto"
          href="https://www.toasttab.com/pizza-shark-dennis-614-main-street"
        >
          Order Dennis
        </a>
      </Modal.Body>
    </Modal>
      <div className="container">
        <div className="about-heading-content mt-5 mb-3 ">
          <div className="row">
            <div className="col-xl-9 col-lg-10 mx-auto">
              <div className="bg-faded rounded p-5">
                <h2 className="section-heading mb-4">
                  <span className="section-heading-lower text-center mb-3">
                    pizza shark at dennis village
                  </span>
                </h2>
                <p className="text-center">
                New Location now open in Dennis Village!
                </p>
                <div className="intro-button text-center mt-4">
                  <a
                    className="btn btn-primary btn-xl mb-4"
                    href="#"
                    onClick={()=> setDennisConformationIsOpen(true)}
                  >
                    Order Dennis
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="img-fluid rounded about-heading-img mb-3"
          src={dennisStore}
          alt="Dennis Village Pizza Shark Storefront"
        />
      </div>
    </section>
    <section className="page-section about-heading">
      <Modal size='sm' show={chathamConformationIsOpen} onHide={()=> setChathamConformationIsOpen(false)} centered>
        <Modal.Body className='text-center'>
          Please confirm you've selected the correct location
          <br/>
          <a
            type="button"
            className="btn btn-link navbar-brand text-uppercase font-weight-bold mx-auto"
            href="https://www.toasttab.com/pizza-shark-chatham-637-main-street"
          >
            Order Chatham
          </a>
        </Modal.Body>
      </Modal>
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
                Beverages and pizza slices available to take into the theater for your favorite movies, or order online for takeout and delivery from inside the historic Orpheum Theater in downtown Chatham. Convenient pick-up in the lobby. Stay tuned for updates and an exciting bar menu debuting in 2023! 
                </p>
                <div className="intro-button text-center mt-5 mx-auto">
                  <a
                    className="btn btn-primary btn-xl mb-4"
                    href="#"
                    onClick={()=> setChathamConformationIsOpen(true)}
                  >
                    Order Chatham
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="img-fluid rounded about-heading-img "
          src={orpheum}
          alt="Historic Chatham Orpheum"
        />
      </div>
    </section>
  </Layout>
  )
};

export default IndexPage;
