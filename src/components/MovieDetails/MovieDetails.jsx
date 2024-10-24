import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import Loader from '../Loader/Loader'
import ErrorMessage from '../ErrorMessage/ErrorMessege';
import { fetchMoviesId } from '../API/Request';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

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

    getMovieData();
  }, [movieId]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage errorMessage={error} />;
  }

  if (!movieData) {
    return <ErrorMessage errorMessage="Movie data not found." />; 
  }

  return <MovieDetails movieData={movieData} />;
};

export default MovieDetailsPage;