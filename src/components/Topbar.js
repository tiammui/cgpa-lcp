import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faShoppingCart,
  faUserAlt,
  faUserCircle,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';

import logo from "./../images/logo.png";

export default function () {
  return (
    <div id="top-bar" className="card">
      <Link to="/" className="logo" title="Go to homepage">
        <img
          src={logo}
          height="30px"
          alt="logo"
        />
      </Link>

      <button
      className='menu-btn'
        title="Open menu"
        onClick={() => {}}
      >
        <FontAwesomeIcon icon={faBars}/>
      </button>
    </div>
  );
}
