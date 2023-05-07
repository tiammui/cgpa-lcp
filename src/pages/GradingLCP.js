import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faShoppingCart,
  faUserAlt,
  faUserCircle,
  faSignOut,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

import {
  InputCon,
  Spacer,
  TermNote,
  InfoNote,
  Button,
  ResultBar,
  CloseButton,
  CourseInputCon,
  CourseCard,
} from './../components/components';

export default function () {
  return (
    <div id="">
      <div className="title-bar bar">
        <div className="title">LCP GPA Calculation</div>
        <div className="subtitle">
          Computer Science Part-time ND Fourth Semester
        </div>
      </div>
      <div className="page-container">
        <div className="pad-1">
          <InfoNote
            text={
              'For LCP student, the GPA calculation is done using LCP grading system.'
            }
            link=""
          />
          <div className="pad-1">
            <p>
              If you're not a student of LCP <a href=""> click here</a>
            </p>
            <Spacer axis="y" spaceRatio={3}></Spacer>

            {[0, 0, 0].map(() => (
              <CourseCard />
            ))}
          </div>
        </div>
        <ResultBar
          titleLeft="GPA"
          titleRight="Grades"
          valueLeft={3.7}
          valueRight="Upper Credit"
        />
        <ResultBar
          titleLeft="Total GP"
          titleRight="Total Units"
          valueLeft={3.7}
          valueRight="Upper Credit"
        />
      </div>
    </div>
  );
}

// ANY ERROR ON GETTING THE APPROPRIATE SEMESTER DOC WILL TAKE USER TO "/"(homepage - gpa)
