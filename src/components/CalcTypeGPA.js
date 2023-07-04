import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faExclamationCircle,
  faChevronRight,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';

import { InputCon, Spacer, TermNote, InfoNote, Button } from './components';
import { ROUTE_PATHS } from './../utils/enums';

export default function () {
  let [lcpGpaForm, setLcpGpaForm] = useState({});

  const navigate = useNavigate();

  function lcpGpaFormChangeHnd(e) {
    const elem = e.target;
    setLcpGpaForm((prev) => ({ ...prev, [elem.name]: elem.value }));
  }
  function lcpGpaFormSubmitHnd(e) {
    e.preventDefault();
    console.log(lcpGpaForm);
  }
  return (
    <div className="pad-1">
      <TermNote
        heading="GPA - Grade Point Average"
        texts={[
          'GPA calculation only take one semester into consideration.',
          'CGPA calculation takes multiple semester into consideration.',
        ]}
      />
      <form onSubmit={lcpGpaFormSubmitHnd}>
        <div className="pad-1">
          <h3>FOR LCP STUDENTS</h3>
          <p>
            If you're not a student of LCP <a href=""> click here</a>
          </p>
          <Spacer axis="y" spaceRatio={3}></Spacer>
          {/* <InputCon label="Lopuu"  inputType="text" placeholder="Choose dept" /> */}
          <InputCon
            inputName="lcp-gpa-department"
            labelText="department"
            inputType="select"
            selectType={'department'}
            defaultValue={lcpGpaForm['lcp-gpa-department']}
            changeHnd={lcpGpaFormChangeHnd}
          />
          <InputCon
            inputName="lcp-gpa-program"
            labelText="program"
            inputType="select"
            selectType={'program'}
            defaultValue={lcpGpaForm['lcp-gpa-program']}
            changeHnd={lcpGpaFormChangeHnd}
          />
          <InputCon
            inputName="lcp-gpa-semester"
            labelText="semester"
            inputType="select"
            selectType={'semester'}
            defaultValue={lcpGpaForm['lcp-gpa-semester']}
            changeHnd={lcpGpaFormChangeHnd}
          />
          <Spacer axis="y" spaceRatio={2}></Spacer>
        </div>
        <InfoNote
          text={
            'For LCP student, the GPA calculation is done using LCP grading system.'
          }
          link=""
        />
        <Button
          styleType="a"
          text="proceed"
          actionHnd={() => navigate('/gpa/lcp/semester-id1')}
        />
      </form>
    </div>
  );
}
