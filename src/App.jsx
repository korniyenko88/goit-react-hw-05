import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import HomePage from './pages/HomePage/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';


const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        
      </Routes>
    </div>
  );
};

export default App;
