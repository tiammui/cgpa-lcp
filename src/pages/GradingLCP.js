import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// import { useStore } from './../utils/stateStore';
import { DB_PATH } from './../utils/enums';
import { useQueryWrapper } from './../services/api/apiHelper';
import axiosInstance from './../services/api/.';
import {
  Spacer,
  InfoNote,
  ResultBar,
  CourseCard,
} from './../components/components';
import { useStore } from './../utils/stateStore';

export default function () {
  const { department, program, semester, semesterId } = useParams();
  const courses = useStore((state) => state.lcpCourses);
  const setCourses = useStore((state) => state.setLcpCourses);
  let semesterDoc;
  // const semesterDoc = useStore((state) => state.semesterDoc);
  // const setSemesterDoc = useStore((state) => state.setSemesterDoc);

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
      ).then((res) => setCourses(res));
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
              If you're not a student of LCP <a href=""> click here</a>
            </p>
            <Spacer axis="y" spaceRatio={3}></Spacer>

            {courses.map((t, i, a) => (
              <CourseCard key={i} position={`${i + 1}/${a.length}`} />
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
