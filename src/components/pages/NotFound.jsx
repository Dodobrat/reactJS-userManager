import React from 'react';
import Footer from '../layout/Footer';

const NotFound = () => (
  <div className="not-found-container">
    <div className="page-not-found">
      <p>
        <span>404</span>
        {' '}
Page Not Found
      </p>
    </div>
    <Footer />
  </div>
);

export default NotFound;
