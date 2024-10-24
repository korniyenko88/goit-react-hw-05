import React from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const buildStylesClass = ({ isActive }) =>
    clsx(styles.link, isActive && styles.active);

const Navigation = () => {
  return (
    <div>
      <NavLink to="/" className={buildStylesClass}>
        Home
      </NavLink>
      <NavLink to="/movies" className={buildStylesClass}>
        Movies
      </NavLink>
    </div>
  );
};

export default Navigation;