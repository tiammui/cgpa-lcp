import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faCalculator
} from '@fortawesome/free-solid-svg-icons';


export default function () {
  return (
    <div className="menu">
      <button
      className='menu-btn'
        ariaLabel="Open menu"
        onClick={() => {}}
      >
        <FontAwesomeIcon icon={faBars}/>
      </button>
      <div className="menu-body card">
        <button><FontAwesomeIcon className="menu-icon" icon={faCalculator}/>GPA Calculator</button>
        <button><FontAwesomeIcon className="menu-icon" icon={faCalculator}/>CGPA Calculator</button>
        <button><FontAwesomeIcon className="menu-icon" icon={faCalculator}/>About Project</button>
      </div>
    </div>
  );
}
