import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { DB_PATH, ROUTE_PATHS } from './../utils/enums';
import { searchCourse } from './../utils/helpers';
import { useStoreWrapper } from './../utils/stateStore';

import {
  Spacer,
  InfoNote,
  ResultBar,
  CourseCard,
  Button,
} from './../components/components';

export default function () {
  const {
    nbteCourses: courses,
    addNbteCourse,
    removeNbteCourse,
  } = useStoreWrapper('nbteCourses');
  const { setIsLcpGpaCalc } = useStoreWrapper('isLcpGpaCalc');

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLcpGpaCalc(false);
  }, []);

  return (
    <div id="">
      <div className="title-bar bar">
        <div className="title">NBTE GPA Calculation</div>
        <div className="subtitle">(National Board for Technical Education)</div>
      </div>
      <div className="page-container">
        <div className="pad-1">
          <InfoNote
            text={
              'For student not in LCP, the GPA calculation is done using NBTE grading system.'
            }
            link=""
          />
          <div className="pad-1">
            <p>
              If you're a student of LCP{' '}
              <Link to={ROUTE_PATHS.CALC_TYPE_GPA}> click here</Link>
            </p>
            <Spacer axis="y" spaceRatio={3}></Spacer>

            {courses.map((course, i, a) => {
              return (
                <CourseCard
                  key={i}
                  position={`${i + 1}/${a.length}`}
                  code={course.code}
                  units={course.units}
                  score={course.score}
                />
              );
            })}
          </div>
        </div>

        <Button
          actionHnd={addNbteCourse}
          styleType="b"
          text={`add course ${courses.length + 1}`}
        />

        <Spacer axis="y" spaceRatio={4} />
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
