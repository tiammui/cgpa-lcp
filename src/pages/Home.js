import React, { useRef, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';

import NotFound from './NotFound';
import CalcTypeGPA from './../components/CalcTypeGPA';
import CalcTypeCGPA from './../components/CalcTypeCGPA';

export default function () {
  const navigate = useNavigate();
  let { calcType } = useParams();

  useState(() => {}, []);

  function calcTypeHnd(targetCalcType){
    if(targetCalcType==calcType)return;// do nothing

    navigate()
  }

  return (
    <div id="home-screen">
      <div className="tab">
        <div className="tab-head">
          <div>
            <button
              onClick={}
            >
              GPA
            </button>
          </div>
          <div>
            <button>
              CGPA
            </button>
          </div>
        </div>
        <div className="tab-body">
          {((!calcType || calcType == 'gpa') && <CalcTypeGPA />) ||
            (calcType == 'cgpa' && <CalcTypeCGPA />) || <NotFound />}{' '}
        </div>
      </div>
    </div>
  );
}
