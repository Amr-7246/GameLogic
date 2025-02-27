import React from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainPage from '../layouts/MainPage';
import NotFound from '../layouts/NotFound';
import MemoryBlocks from '../pages/MemoryBlocks';
import HangMan from '../pages/HangMan';
// import Home from '../pages/Home';
// import GuessWord from '../pages/GuessWord';

const AppRoutes = () => {
  const location = useLocation(); 

  return (
    <AnimatePresence mode="wait"> 
      <Routes location={location} key={location.pathname} >
        <Route path="/" element={<MainPage />}>
          <Route index element={<Navigate to="HangMan" replace />} />
          {/* <Route path="home" element={<Home />} /> */}
          <Route path="memoryBlocks" element={<MemoryBlocks />} />
          {/* <Route path="guessWord" element={<GuessWord />} /> */}
          <Route path="hangMan" element={<HangMan />} />
        </Route>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
