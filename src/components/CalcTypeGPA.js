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

import { InputCon, Spacer } from './components';

export default function () {
  let { lcpGpaForm, setLcpGpaForm } = useState({});

  function lcpGpaFormChangeHnd(name, e) {
    const elem = e.target;
    console.log(name, e);
    setLcpGpaForm((prev) => ({ ...prev, [name]: elem.value }));
  }
  return (
    <div id="">
      <div className="term-note note-card">
        <h3>GPA - Grade Point Average</h3>
        <p>GPA calculation only take one semester into consideration.</p>
        <p>CGPA calculation takes multiple semester into consideration.</p>
      </div>
      <div className="pad-1">
        <h3>FOR LCP STUDENTS</h3>
        <p>If you're not a student of LCP click here</p>
        <Spacer axis="y" spaceRatio={3}></Spacer>
        {/* <InputCon label="Lopuu"  inputType="text" placeholder="Choose dept" /> */}
        <InputCon
          formName="lcp-gpa"
          label="department"
          inputType="select"
          selectType={'department'}
          defaultValue={lcpGpaForm}
          changeHnd={lcpGpaFormChangeHnd}
        />
        <InputCon
          formName="lcp-gpa"
          label="program"
          inputType="select"
          selectType={'program'}
          changeHnd={lcpGpaFormChangeHnd}
        />
        <InputCon
          formName="lcp-gpa"
          label="semester"
          inputType="select"
          selectType={'semester'}
          changeHnd={lcpGpaFormChangeHnd}
        />
        <Spacer axis="y" spaceRatio={2}></Spacer>
      </div>
    </div>
  );
}
