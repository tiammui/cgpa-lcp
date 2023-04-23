import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faShoppingCart,
  faUserAlt,
  faUserCircle,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";

import { InputCon,Spacer } from "./components";

export default function () {
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
        <InputCon inputType="text" placeholder="Choose dept" label="Lopuu" />
      </div>
    </div>
  );
}
