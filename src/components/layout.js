import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from './header';
import Footer from './footer';

import '../../sass/style.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>richard b. lu</title>
      <meta name="author" content="Richard Lu" />
      <meta name="description" content="I'm Richard Lu, an aspiring UX designer based in NYC!" />
    </Helmet>
    <Header />
    <div className="container">
      {children}
    </div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
