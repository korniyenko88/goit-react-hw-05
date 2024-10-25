import { React, useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './MovieDetails.module.css';
import { defaultImg } from '../API/Request';

const MovieDetails = ({ movieData }) => {
  return (
    <div>
      {movieData && (
        <div className={styles.detailsWraper}>
          <img
            src={
              movieData.poster_path
                ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}`
                : defaultImg
            }
            alt={movieData.title}
            style={{ width: 300 }}
          />
          <div className={styles.detailsText}>
            <h2 className={styles.detailsTitle}>{movieData.title}</h2>
            <p className={styles.text}>Popularity: {movieData.popularity}</p>
            <h2 className={styles.detailsTitle}>Overview</h2>
            <p className={styles.text}>{movieData.overview}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
