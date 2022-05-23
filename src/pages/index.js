import React from 'react';
import Layout from '../components/Layout';
import { useState } from 'react';
import Modal from "react-bootstrap/Modal"

import store from '../assets/images/store-inside.jpg';
import orpheum from '../assets/images/orpheum.jpg';


const IndexPage = () => {

  const [harwichConformationIsOpen, setHarwichConformationIsOpen] = useState(false);
  const [chathamConformationIsOpen, setChathamConformationIsOpen] = useState(false);

  return (
  <Layout activeLink="home">
    
    <section className="page-section about-heading">
      <div className="container">
        <div className="about-heading-content mt-5 mb-3 ">
          <div className="row">
            <div className="col-xl-9 col-lg-10 mx-auto">
              <div className="bg-faded rounded p-5">
                <h2 className="section-heading mb-4">
                  <span className="section-heading-lower text-center mb-3">
                    just voted top 5 pizza places on cape by cape cod times readers!
                  </span>
                </h2>
                <div className="intro-button text-center mt-4">
                  <a
                    className="btn btn-primary btn-xl mb-2"
                    href="https://amp.capecodtimes.com/amp/9289846002"
                  >
                    Click here to read the article
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
        <div className="about-heading-content mt-5 mb-3 ">
          <div className="row">
            <div className="col-xl-9 col-lg-10 mx-auto">
              <div className="bg-faded rounded p-5">
                <h2 className="section-heading mb-4">
                  <span className="section-heading-lower text-center mb-3">
                    pizza shark at the pleasant lake general store
                  </span>
                </h2>
                <p className="text-center">
                Located on the Brewster-Harwich line, directly on the Cape Cod Rail Trail. Pizza, salads, sandwiches & ice cream year-round. Excellent location for a quick & easy lunch. Grocery essentials, snacks, beverages, beer & wine available in the General Store. Please use our hassle-free online ordering system to earn rewards points. We offer delivery 7 nights a week to all of Brewster and Harwich and you can order everything from the general store along with your pizzas. One-stop shopping! 
                </p>
                <div className="intro-button text-center mt-4">
                  <a
                    className="btn btn-primary btn-xl mb-4"
                    href="#"
                    onClick={()=> setHarwichConformationIsOpen(true)}
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
                Beverages and pizza slices available to take into the theater for your favorite movies, or order online for takeout and delivery from inside the historic Orpheum Theater in downtown Chatham. Convenient pick-up in the lobby. Stay tuned for updates and an exciting bar menu debuting in 2022! 
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
    <br />
    <section className="page-section cta container rounded">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <div className="cta-inner px-3 px-lg-5 text-center rounded">
              <h2 className="section-heading mb-4">
                <span className="section-heading-upper mb-3">
                  pizza shark newsletter
                </span>
                <span className="section-heading-lower">
                  stay up to date with everything pizza shark!
                </span>
              </h2>
              <ul className="list-unstyled list-hours mb-5 text-center mx-auto">
                <li className="list-unstyled-item list-hours-item d-flex">
                  <a className="text-center" href="https://mailchi.mp/54529d672fc8/updates-from-harwich-and-chatham">
                    Updates from Harwich AND Chatham
                  </a>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  <a className="text-center" href="https://mailchi.mp/5524968395ae/the-holidays-are-coming-and-we-are-ready?e=[UNIQID]">
                    The holidays are coming and we are READY!
                  </a>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  <a className="" href="https://mailchi.mp/ff11e35637fe/fall-is-here-wings-are-back?e=[UNIQID]">
                    Fall is here & wings are BACK!
                  </a>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  <a className="text-center" href="https://mailchi.mp/68c966f7d50b/hark-hark-its-pizza-shark-wines?e=[UNIQID]">
                    Hark! Hark! It's Pizza Shark... wines?!
                  </a>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  <a className="text-center" href="https://mailchi.mp/56947d0915bc/swimming-into-summer-2021?e=[UNIQID]">
                    Swimming into Summer 2021!
                  </a>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  <a className="text-center" href="https://mailchi.mp/940c7993220d/pizza-shark-the-little-red-store-is-now-open?e=[UNIQID]">
                    PIZZA SHARK! The little red store is now OPEN!
                  </a>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  <a className="text-center" href="https://mailchi.mp/70be2e1da639/welcome-to-the-shark-squad?e=[UNIQID]">
                    Welcome to the Shark Squad! 
                  </a>
                </li>
              </ul>
              <div className="row px-5 mt-5">
                <div className="intro-button mx-auto">
                  <a
                    className="btn btn-primary btn-xl mb-4"
                    href="https://pleasantlakepizzashark.us2.list-manage.com/subscribe?u=0a81ea01ad8dcdc85a675834a&id=c0089ef062"
                  >
                    Subscribe
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
                <div className="intro-button mx-auto">
                  <a
                    className="btn btn-primary btn-xl mb-4"
                    href="https://www.toasttab.com/pizza-shark-403-pleasant-lake-ave/giftcards"
                  >
                    Gift Cards
                  </a>
                </div>                
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
