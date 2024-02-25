import React from 'react';

import orpheum from '../assets/images/orpheum.jpg';
import sharkbar from '../assets/images/sharkbar.jpg'
import Layout from '../components/Layout';

const IndexPage = () => {
  return (
    <Layout activeLink="chatham">
       <div className="container">
        <div className="about-heading-content mt-5 mb-3 ">
          <div className="embed-responsive embed-responsive-16by9 mb-3">
            <iframe 
              className="embed-responsive-item" 
              src="https://www.youtube.com/embed/7zuHQWuLd68?si=VLUgKntkIz5CH-zq" 
              title="Shark Bar Commercial" 
              allow="autoplay"
            />            
          </div>
          <div className=" mx-auto">
            <div className="bg-faded rounded p-1">
              <h2 className="section-heading mb-2">
                <span className="section-heading-lower text-center mb-1">
                  pizza shark chatham
                </span>
              </h2>
                <img
                    className="img-fluid rounded about-heading-img mb-3"
                    src={orpheum}
                    alt="Orpheum"
                />
              <p className="text-center">
                The Orpheum Theater, located on Main Street in downtown Chatham, began its revival about a decade
                ago. In 2021, Pizza Shark teamed up with the non-profit community theater to bring a unique dining
                experience to the area. Upstairs, you’ll find our lobby bar and Pizza Shark merchandise. Full liquor, beer
                & wine is available at the bar or to take into the theater. We sell slices all day in addition to our full
                menu, which can be ordered online, ordered before a movie for an after-movie pickup or taken into the
                theater to enjoy while watching a film. Downstairs, relax in one of our bright red booths while watching
                your favorite team on one of our 8 TVs. Same gig as upstairs: slices all day, full menu, full liquor license.
                You’ll find references to one of our favorite movies as well (hint: it’s that old movie about a big shark)!
                Looking to host a private event in a unique venue? We can host small groups in the downstairs space, so
                keep us in mind for birthday parties, wedding groups, etc. The Chatham location (lobby bar and takeout)
                is open 7 days a week, year-round, from 11am until 9pm. The bar downstairs opens at 4pm on weekdays
                and 11am on weekends.
              </p>
              <img
                    className="img-fluid rounded about-heading-img"
                    src={sharkbar}
                    alt="Shark Bar Interior"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
