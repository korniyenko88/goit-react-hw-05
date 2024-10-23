import React from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const navigationActive = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  return (
    <div>
      <NavLink to="/" className={navigationActive}>Home</NavLink>
      <NavLink to="/movies" className={navigationActive}>Movies</NavLink>
    </div>
  );
};

export default Navigation;