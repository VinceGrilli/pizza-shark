import React from 'react';

import store from '../assets/images/store-inside.jpg';
import Layout from '../components/Layout';

const IndexPage = () => {
  return (
    <Layout activeLink="harwich">
       <div className="container">
        <div className="about-heading-content mt-5 mb-3 ">
          <div className="row">
            <div className="col-xl-9 col-lg-10 mx-auto">
              <div className="bg-faded rounded p-1">
                <h2 className="section-heading mb-2">
                  <span className="section-heading-lower text-center mb-1">
                    pizza shark harwich
                  </span>
                </h2>
                  <img
                      className="img-fluid rounded about-heading-img mb-3"
                      src={store}
                      alt="Old timey post card of the pleasant lake general store"
                    />
                <p className="text-center">
                  Located on the Cape Cod Rail Trail (right off old exit 10), our first location opened in July of 2020. We
                  operate out of a historic general store that was built in the late 1800’s (and was once an old post office)!
                  In addition to pizzas, salads and sandwiches, we hand scoop pints of Gifford’s ice cream and serve cups
                  and cones out our little ice cream window. Visited by thousands of cyclists every summer, our shop also
                  sells snacks, beverages and pre-bagged penny candy. We have a takeout beer & wine license so you can
                  grab a nice bottle of Italian wine to take home with your pies. We have tees, sweatshirts and
                  embroidered beanies for sale as well. The Little Red Store on 124 will always be our home base and the
                  historic nature of the building makes it even more special. The Harwich location is open 7 days a week,
                  year-round, from 10am until 9pm.
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
