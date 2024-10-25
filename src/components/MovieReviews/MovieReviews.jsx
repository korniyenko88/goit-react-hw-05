

import { React, useEffect, useState } from 'react';
import { defaultImg, fetchMoviesReviews } from '../API/Request';
import ErrorMessage from '../ErrorMessage/ErrorMessege';
import {  useParams, useLocation } from 'react-router-dom';
import styles from './MovieReviews.module.css';



const MovieReviews = () => {
  const { movieId } = useParams();
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const addReviewsDetails = async () => {
      try {
        setError(false);
        const reviewsData = await fetchMoviesReviews(movieId);

        // Перевірка, чи існує поле 'results'
        if (reviewsData.results) {
          setReviews(reviewsData.results);
        } else {
          setError(true);
          setErrorMessage('No reviews found.');
        }
      } catch (error) {
        setError(true);
        setErrorMessage(error.toString()); // Безпечніше виводити помилку
      } finally {setTimeout(() => {
        window.scrollBy({
          top: 400,
          behavior: 'smooth',
        });
      }, 300);}

    };

    addReviewsDetails();
  }, [movieId]);

  return (
    <div>
      {error ? (
        <ErrorMessage errorMessage={errorMessage} />
      ) : reviews.length > 0 ? (
        <ul className={styles.reviewsList}>
          {reviews.map(review => (
            <li key={review.id}>
              <h3 className={styles.reviewsTitle}>{review.author}:</h3>
              <p className={styles.reviewsText}>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h3>No reviews for this movie.</h3>
      )}
    </div>
  );
};

export default MovieReviews;
