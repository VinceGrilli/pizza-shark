import React from 'react';

import Layout from '../components/Layout';

import pizza from '../assets/img/rando-pizza.jpg';
import sandwich from '../assets/img/rando-sandwich.jpg';
import icecream from '../assets/img/rando-ice-cream.jpg';

const IndexPage = () => (
  <Layout activeLink="products">
    <section className="page-section">
      <div className="container">
        <div className="product-item">
          <div className="product-item-title d-flex">
            <div className="bg-faded p-5 d-flex ml-auto rounded">
              <h2 className="section-heading mb-0">
                <span className="section-heading-upper">Made with Love</span>
                <span className="section-heading-lower">
                  Cape Cod's Best Pizza
                </span>
              </h2>
            </div>
          </div>
          <img
            className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
            src={pizza}
            alt=""
          />
          <div className="product-item-description d-flex mr-auto">
            <div className="bg-faded p-5 rounded">
              <p className="mb-0">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
                totam quis distinctio ipsa labore ducimus dignissimos expedita
                dolore magnam consectetur quo, fugiat asperiores consequuntur
                veniam illum. Aliquam nihil voluptatum sapiente!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="page-section">
      <div className="container">
        <div className="product-item">
          <div className="product-item-title d-flex">
            <div className="bg-faded p-5 d-flex mr-auto rounded">
              <h2 className="section-heading mb-0">
                <span className="section-heading-upper">
                  Hot and Cold Subs made to order
                </span>
                <span className="section-heading-lower">Deli Sandwiches</span>
              </h2>
            </div>
          </div>
          <img
            className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
            src={sandwich}
            alt=""
          />
          <div className="product-item-description d-flex ml-auto">
            <div className="bg-faded p-5 rounded">
              <p className="mb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                sit enim perspiciatis totam illo pariatur facere aut velit
                cumque culpa deleniti minima voluptatibus architecto
                reprehenderit, et, cum quae. Iusto, non?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="page-section">
      <div className="container">
        <div className="product-item">
          <div className="product-item-title d-flex">
            <div className="bg-faded p-5 d-flex ml-auto rounded">
              <h2 className="section-heading mb-0">
                <span className="section-heading-lower">Ice Cream</span>
                <span className="section-heading-upper">
                  over one thousand flavors!
                </span>
              </h2>
            </div>
          </div>
          <img
            className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
            src={icecream}
            alt=""
          />
          <div className="product-item-description d-flex mr-auto">
            <div className="bg-faded p-5 rounded">
              <p className="mb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                dolores consequuntur alias? Quaerat cum dolor consequuntur,
                dignissimos quis nulla ea sunt animi quod quo dolores quia
                laborum perferendis cumque. Quia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
