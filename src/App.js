import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import WebFont from 'webfontloader';

// import './fonts/fonts.css';
import './styles/style.scss';
import { ROUTE_PATHS } from './utils/enums';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import GradingLCP from './pages/GradingLCP';
import GradingNBTE from './pages/GradingNBTE';
import Topbar from './components/Topbar';
import Footer from './components/Footer';
// import { SnackBar } from './components/bigComponents';

export default function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Catamaran', 'Blogger Sans'],
      },
      // custom: {
      //   families: ['Blogger Sans'],
      //   urls:['./fonts/fonts.scss']
      // },
    });
  }, []);
  return (
    <>
      <Topbar />

      <div id="main-container">
        <Routes>
          <Route path={ROUTE_PATHS.HOME} element={<Home />} />
          <Route path={ROUTE_PATHS.CALC_TYPE} element={<Home />} />
          <Route path={ROUTE_PATHS.GRADING_NBTE} element={<GradingNBTE />} />
          <Route
            path={ROUTE_PATHS.GRADING_LCP_SEMESTER_ID}
            element={<GradingLCP />}
          />
          <Route path={ROUTE_PATHS.GRADING_LCP} element={<GradingLCP />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}
