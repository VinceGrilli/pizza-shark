import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/sass/business-casual.scss';
import Footer from './Footer';
import SiteHeader from './SiteHeader';
import Header from './Header';

class Layout extends Component {
  render() {
    const {
      children,
      noHeader,
      noFooter,
      noSiteHeader,
      activeLink,
    } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'Pizza Shark', content: 'Pizza Shark Cape Cod' },
                {
                  name: 'keywords',
                  content:
                    'pizza shark, pizza, shark, brewster, harwich, chatham, orpheum, ice cream, icecream, cape, cape cod, take out, takeout, pick up, pickup, pick-up, delivery, beer, wine, general store, sandwiches, subs, hero, sandwich',
                },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <div className={'page-top'}>
              {!noSiteHeader ? <SiteHeader /> : null}
              {!noHeader ? <Header activeLink={activeLink} /> : null}
              {children}
              {!noFooter ? <Footer /> : null}
            </div>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  noFooter: PropTypes.bool,
  noHeader: PropTypes.bool,
  noSiteHeader: PropTypes.bool,
  activeLink: PropTypes.string,
};

export default Layout;
