import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faShoppingCart,
  faUserAlt,
  faUserCircle,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { InputCon, Spacer, TermNote, InfoNote, Button } from './components';
import { averageScore } from './../utils/helpers';

export default function () {
  let [cgpaScores, setCgpaScores] = useState([0,0]);
  let [cgpaAverage, setCgpaAverage] = useState(0);

  useEffect(() => {
    setCgpaAverage(averageScore(cgpaScores));
  }, [cgpaScores]);

  function cgpaScoresChangeHnd(e) {
    const elem = e.target;
    setCgpaScores((prev) => {
      let newScores = [...prev];
      let i = elem.name.split('-')[2] - 1;

      newScores[i] = elem.value;

      return newScores;
    });
  }

  function cgpaScoresSubmitHnd(e) {
    e.preventDefault();
    console.log(averageScore(cgpaScores));
  }

  function addScore() {
    setCgpaScores((prev) => {
      let newScores = [...prev];

      newScores.push(0);

      return newScores;
    });
  }

  return (
    <div id="">
      <div className="pad-1">
        <TermNote
          heading="CGPA - Cumulative Grade Point Average"
          texts={[
            'To calculate the CGPA, get the GPA for each semester you’ve been through in the program then continue below.',
          ]}
        />
        <form onSubmit={cgpaScoresSubmitHnd}>
          {cgpaScores.map((score, i) => (
            <InputCon
              inputName={`cgpa-score-${i + 1}`}
              labelText={`semester ${i + 1} GPA`}
              placeholder={`Semester ${i + 1} GPA Score`}
              inputType="number"
              defaultValue={score}
              changeHnd={cgpaScoresChangeHnd}
              key={i}
            />
          ))}
          <Spacer axis="y" spaceRatio={2}></Spacer>
          {cgpaAverage}
        </form>
        <Button
          actionHnd={addScore}
          styleType="b"
          text={`add semester ${cgpaScores.length + 1} GPA`}
        />
      </div>
    </div>
  );
}
