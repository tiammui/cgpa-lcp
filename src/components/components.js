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

export function Spacer({ axis, space }) {
  return (
    <div
      style={{
        display: !axis || axis == 'x' ? 'inline-block' : 'block',
        height: !axis || axis == 'x' ? '0px' : space + 'px',
        width: !axis || axis == 'x' ? space + 'px' : '0px',
      }}
    ></div>
  );
}
