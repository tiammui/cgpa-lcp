import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { DB_PATH, ROUTE_PATHS } from './../utils/enums';
import { useStoreWrapper } from './../utils/stateStore';
import { useQueryWrapper } from './../services/api/apiHelper';
import axiosInstance from './../services/api/.';
import {
  Spacer,
  InfoNote,
  ResultBar,
  CourseCard,
} from './../components/components';

export default function () {
  const { department, program, semester, semesterId } = useParams();
  const { lcpCourses: courses, setLcpCourses: setCourses } =
    useStoreWrapper('lcpCourses');
  const { setIsLcpGpaCalc } = useStoreWrapper('isLcpGpaCalc');
  let semesterDoc;
  // const semesterDoc = useStoreWrapper("semesterDoc");
  // const setSemesterDoc = useStoreWrapper("setSemesterDoc");

  const { data: semesterRes, isLoading } = useQueryWrapper(
    ['getsemesterDoc', semesterId],
    `${DB_PATH.SEMESTERS}/${semesterId}`,
    {
      onSuccess: (response) => {
        console.log(response);
      },
    }
  );

  semesterDoc = semesterRes?.data;

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLcpGpaCalc(true);
  }, []);

  // const { data: courses } = useQueriesWrapper(
  //   ['courses'],
  //   semesterDoc?.courses?.map((id) => `${DB_PATH.COURSES}/${id}`),
  //   {
  //     onSuccess: (response) => {
  //       console.log(response);
  //     },
  //   }
  // );
  useEffect(() => {
    if (semesterDoc) {
      Promise.all(
        semesterDoc.courses.map((id) =>
          axiosInstance.get(`${DB_PATH.COURSES}/${id}`)
        )
      ).then((res) => setCourses(res, semesterDoc.department));
    }
  }, [semesterDoc]);

  return (
    <div id="">
      <div className="title-bar bar">
        <div className="title">LCP GPA Calculation</div>
        <div className="subtitle">
          Computer Science Part-time ND Fourth Semester {semesterDoc?.shortName}
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
              If you're not a student of LCP{' '}
              <Link to={ROUTE_PATHS.GRADING_NBTE}> click here</Link>
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
        <Spacer axis="y" spaceRatio={2} />
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
