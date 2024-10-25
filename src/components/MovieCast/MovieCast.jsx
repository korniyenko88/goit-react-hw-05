
import { defaultImg, fetchMoviesCredits } from '../API/Request';
import { React, useEffect, useState } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessege';
import { useParams } from 'react-router-dom';
import styles from './MovieCast.module.css'

const MovieCast = () => {
  const { movieId } = useParams();
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState(false);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const addCastDetails = async () => {
      // Виправлено
      try {
        setError(false);
        const castData = await fetchMoviesCredits(movieId);
        setCast(castData.cast);
      } catch (error) {
        setError(true);
        setErrorMessage(error.message);
      } finally {
        setTimeout(() => {
          window.scrollBy({
            top: 400,
            behavior: 'smooth',
          });
        }, 300);
      }
    };
    addCastDetails();
  }, [movieId]);

  return (
    <div>
      {error ? (
        <ErrorMessage errorMessage={errorMessage} />
      ) : cast.length > 0 ? (
        <ul>
          {cast.map(i => (
            <li key={i.id}>
              {' '}
              {/* Переконайтесь, що i.id унікальне */}
              <img
                src={
                  i.profile_path
                    ? `https://image.tmdb.org/t/p/w500${i.profile_path}`
                    : defaultImg // Слід переконатись, що defaultImg доступний
                }
                alt={i.name}
                style={{ width: 170 }}
              />
              <h4>{i.name}</h4>
              <p>{i.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No cast information available.</p> // Додано повідомлення для пустого cast
      )}
    </div>
  );
};

export default MovieCast;