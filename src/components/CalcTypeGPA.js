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
    <div id="">
      <div className="term-note note-card">
        <h3>GPA - Grade Point Average</h3>
        <p>GPA calculation only take one semester into consideration.</p>
        <p>CGPA calculation takes multiple semester into consideration.</p>
      </div>
    </div>
  );
}
