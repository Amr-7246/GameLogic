import React from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainPage from '../layouts/MainPage';
import Profile from '../layouts/Profile';
import Login from '../layouts/Login';
import NotFound from '../layouts/NotFound';
import Home from '../pages/Home';
import MemoryBlocks from '../pages/MemoryBlocks';
import GuessWord from '../pages/GuessWord';
import HangMan from '../pages/HangMan';

const AppRoutes = () => {
  const location = useLocation(); 

  return (
    <AnimatePresence mode="wait"> 
      <Routes location={location} key={location.pathname} >
        <Route path="/" element={<MainPage />}>
          <Route index element={<Navigate to="HangMan" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="memoryBlocks" element={<MemoryBlocks />} />
          <Route path="guessWord" element={<GuessWord />} />
          <Route path="hangMan" element={<HangMan />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
