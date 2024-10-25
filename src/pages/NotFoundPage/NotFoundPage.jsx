import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={styles.notFound}>
      <h1>404</h1>
     
      <Link to="/" className={styles.link}>
        Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
