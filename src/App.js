import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import WebFont from 'webfontloader';

import './styles/style.scss';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import GradingLCP from './pages/GradingLCP';
import GradingNBTE from './pages/GradingNBTE';
import Topbar from './components/Topbar';
// import Footer from './components/Footer';
// import { SnackBar } from './components/bigComponents';

export default function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Catamaran', 'Blogger Sans'],
      },
    });
  }, []);
  return (
    <>
      <Topbar />

      <div id="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:calcType" element={<Home />} />
          <Route path="/gpa/nbte" element={<GradingNBTE />} />
          <Route path="/gpa/lcp/:semesterId" element={<GradingLCP />} />
          <Route
            path="/gpa/lcp/:department/:program/:semester"
            element={<GradingLCP />}
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}
