import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NumericFormat } from 'react-number-format';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faCaretLeft,
  faCaretRight,
  faEllipsisH,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { nanoid } from 'nanoid';

import { capFirstLetter, toCamelCase, fromCamelCase } from './../utils/helpers';

export function Spacer({ axis, spaceRatio }) {
  /**
   *
   * @param {number} ratio relative to standard-spacing
   */
  function cssVar(ratio) {
    switch (ratio) {
      case 1:
        return 'var(--space)';
      case 2:
        return 'var(--space2)';
      case 3:
        return 'var(--space3)';
      case 4:
        return 'var(--space4)';
      default:
        return '0px';
    }
  }

  return (
    <div
      style={{
        display: !axis || axis == 'x' ? 'inline-block' : 'block',
        height: !axis || axis == 'x' ? '0px' : cssVar(spaceRatio),
        width: !axis || axis == 'x' ? cssVar(spaceRatio) : '0px',
      }}
    ></div>
  );
}

const departmentOptions = [
  { value: '', text: 'Choose department' },
  { value: 'cs', text: 'Computer Science' },
  { value: 'cs', text: 'Computer Science' },
];
const programOptions = [
  { value: '', text: 'Choose program' },
  { value: 'nd-pt', text: 'ND Part-time' },
  { value: 'nd-pt', text: 'ND Part-time' },
];
const semesterOptions = [
  { value: '', text: 'Choose semester' },
  { value: '4', text: '4th Semester (Year II 1st semester)' },
  { value: '4', text: '4th Semester (Year II 1st semester)' },
];

export function InputCon({
  formName,
  label,
  placeholder,
  inputType,
  selectType,
  defaultValue,
  changeHnd,
}) {
  const inputName = `${formName}-${toCamelCase(label)}`;
  return (
    <div class="input-con">
      <label for={inputName}>{capFirstLetter(label)}</label>
      {/* {(inputType == 'select' && (
        <SelectInput selectType={selectType} defaultValue={defaultValue} inputName={inputName} />
      )) || <TextInput placeholder={placeholder} defaultValue={defaultValue} inputName={inputName} />} */}
      {(inputType == 'select' && (
        <SelectInput {...{ selectType, defaultValue, inputName, changeHnd }} />
      )) || (
        <TextInput {...{ placeholder, defaultValue, inputName, changeHnd }} />
      )}
      <ul id={`${inputName}-error`} class="error">
        <li>Only alphabets are allowed</li>
        <li>Minimum of 3 characters, Maximum of 20 character</li>
      </ul>
    </div>
  );
}

function TextInput({ placeholder, defaultValue, inputName, changeHnd }) {
  return (
    <input
      type="text"
      id={inputName}
      name={inputName}
      placeholder={placeholder}
      value={defaultValue || ""}
      aria-invalid="false"
      aria-errormessage={`${inputName}-error`}
      onChange={changeHnd.bind(null, inputName)}
    />
  );
}
function SelectInput({ selectType, defaultValue, inputName, changeHnd }) {
  return (
    <select
      id={inputName}
      name={inputName}
      value={defaultValue || ""}
      aria-invalid="false"
      aria-errormessage={`${inputName}-error`}
      onChange={changeHnd.bind(null, inputName)}
    >
      {renderOptions(selectType)}
    </select>
  );
}

function renderOptions(selectType) {
  switch (selectType) {
    case 'department':
      return departmentOptions.map((option) => (
        <option value={option.value}>{option.text}</option>
      ));
    case 'program':
      return programOptions.map((option) => (
        <option value={option.value}>{option.text}</option>
      ));
    case 'semester':
      return semesterOptions.map((option) => (
        <option value={option.value}>{option.text}</option>
      ));
    default:
      return <option value="">Nothing</option>;
  }
}
