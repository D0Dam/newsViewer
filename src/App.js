import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NewsPage from './Pages/NewsPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NewsPage />} />
      <Route exact path="/:category" element={<NewsPage />} />
    </Routes>
  );
};

export default App;
