import React, { useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';

import NotFound from './NotFound';
import CalcTypeGPA from './../components/CalcTypeGPA';
import CalcTypeCGPA from './../components/CalcTypeCGPA';

export default function () {
  let { calcType } = useParams();

  useState(() => {}, []);

  return (
    <div id="home-screen">
      {((!calcType || calcType == 'gpa') && <CalcTypeGPA />) ||
        (calcType == 'cgpa' && <CalcTypeCGPA />) || <NotFound />}{' '}
      Home
    </div>
  );
}
