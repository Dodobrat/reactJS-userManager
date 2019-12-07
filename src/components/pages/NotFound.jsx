import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../layout/Footer';

const NotFound = () => (
  <div className="not-found-container">
    <div className="page-not-found">
      <p>
        <span>404</span>
Page Not Found
      </p>
    </div>
    <Link to="/" className="return-to-site">Back to site</Link>
    <Footer />
  </div>
);

export default NotFound;
