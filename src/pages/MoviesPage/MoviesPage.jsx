import styles from './MoviesPage.module.css'


import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesSearch } from '../../components/API/Request';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessege';
import MovieSearch from '../../components/MovieSearch/MovieSearch';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieList, setMovieList] = useState([]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [searched, setSearched] = useState(false);

  const onSearch = searchWord => {
    setSearchParams({ query: searchWord });
    setSearched(true);
  };

  const searchQuery = searchParams.get('query');
  const title = `Here's what we found`;

  useEffect(() => {
    const searchMovies = async () => {
      if (!searchQuery) {
        setMovieList([]);
        return; 
      }
      try {
        setError(false);
        setLoading(true);
        const data = await fetchMoviesSearch(searchQuery, page);
        const trend = data.results || [];
        setMovieList(trend);
      } catch (error) {
        setError(true);
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    };
    searchMovies();
  }, [searchQuery, page]);

  return (
    <div>
      <MovieSearch onSearch={onSearch} />
      <div className={styles.loader}>
      {loading && <Loader />}
      </div>
      {error ? (
        <ErrorMessage errorMessage={errorMessage} />
      ) : (
        <>
          {searched && movieList.length === 0 ? ( 
            <p>No movies found.</p>
          ) : (
            movieList.length > 0 && <MovieList movies={movieList} title={title} />
          )}
        </>
      )}
    </div>
  );
}

export default MoviesPage;