import React from 'react';
import './preloader.scss';

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader__spinner">
        <div className="preloader__bounce1"></div>
        <div className="preloader__bounce2"></div>
        <div className="preloader__bounce3"></div>
      </div>
    </div>
  );
};

export default Preloader;   