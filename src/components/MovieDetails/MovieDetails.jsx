import { React, useEffect, useState } from 'react';
import clsx from 'clsx';
import css from './MovieDetails.module.css';
import { defaultImg } from '../API/Request';

const MovieDetails = ({ movieData }) => {
  return (
    <div>
      {movieData && (
        <div>
          <img
            src={
              movieData.poster_path
                ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}`
                : defaultImg
            }
            alt={movieData.title}
            style={{ width: 300 }}
          />
          <div>
            <h2>{movieData.title}</h2>
            <p>Popularity: {movieData.popularity}</p>
            <h2>Overview</h2>
            <p>{movieData.overview}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
