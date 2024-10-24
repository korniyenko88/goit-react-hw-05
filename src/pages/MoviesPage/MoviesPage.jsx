
// import React, { useState, useEffect } from 'react';
// import { fetchTrendingMovies } from '../path/to/Request';
// import MovieList from '../../components/MovieList/MovieList';
// import Loader from '../../components/Loader/Loader';
// import ErrorMessage from '../../components/ErrorMessage/ErrorMessege';
// import styles from './MoviesPage.module.css';

// const MoviesPage = () => {
//   const [loading, setLoading] = useState(false);
//   const [moviesList, setMoviesList] = useState([]);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     const getMovies = async () => {
//       try {
//         setError(false);
//         setLoading(true);
//         const data = await fetchTrendingMovies(1); 
//         setMoviesList(data.results); 
//       } catch (error) {
//         setError(true);
//         setErrorMessage(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };
    
//     getMovies();
//   }, []);

//   return (
//     <div className={styles.moviesPage}>
//       {loading && <Loader />}
//       {error ? (
//         <ErrorMessage errorMessage={errorMessage} />
//       ) : (
//         <MovieList movies={moviesList} />
//       )}
//     </div>
//   );
// };

// export default MoviesPage;