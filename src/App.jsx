import { useState } from 'react';
import clsx from 'clsx';
import './App.css';

import styles from './App.module.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';

const App = () => {
  // const buildStylesClass = ({ isActive }) =>
  //   clsx(styles.link, isActive && styles.active);
  return (
    // <div>
    //   <NavLink className={buildStylesClass} to="/">
    //     Home
    //   </NavLink>
    //   <NavLink className={buildStylesClass} to="/muvies">
    //     Movies
    //   </NavLink>
    //   {/* <NavLink to="/movie">Movies details</NavLink> */}
    // </div>

    <div>
      <Navigation />
      <Routes>
        {/* <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} /> */}
      </Routes>
    </div>
  );
};

export default App;
