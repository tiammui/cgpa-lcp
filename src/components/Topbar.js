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

export default function () {
  return (
    <div id="top-bar">
      <Link to="/" className="logo" title="Go to homepage">
        <img
          src="https://storage.cloud.google.com/glow-dab38.appspot.com/general/logo_topbar.png?alt=media"
          alt="logo"
        />
      </Link>

      <button
        className="icon-block"
        title="Open menu"
        onClick={() => {
          showMenuHnd(true);
        }}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  );
}
