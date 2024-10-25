import React, { useEffect, useState } from 'react';
import {
  NavLink,
  Outlet,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessege';
import { fetchMoviesId } from '../../components/API/Request';
import styles from './MovieDetailsPage.module.css';
import clsx from 'clsx';

const buildStylesClass = ({ isActive }) =>
  clsx(styles.link, isActive && styles.active);

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const getMovieData = async () => {
      try {
        const data = await fetchMoviesId(movieId);
        setMovieData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (movieId) {
      getMovieData();
    }
  }, [movieId]);

  const backUrl = location.state?.from || '/movies';
  const goBack = () => {
    navigate(backUrl);
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage errorMessage={error} />;
  }

  if (!movieData) {
    return <ErrorMessage errorMessage="Movie not found." />;
  }

  return (
    <>
      <button onClick={goBack} className={styles.backBtn} >Go back</button>
      <MovieDetails movieData={movieData} />
      <nav className={styles.castReviewsBtn}>
        <NavLink
          state={{ from: backUrl }}
          to="cast"
          className={buildStylesClass}
        >
          Cast
        </NavLink>
        <NavLink
          state={{ from: backUrl }}
          to="reviews"
          className={buildStylesClass}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
