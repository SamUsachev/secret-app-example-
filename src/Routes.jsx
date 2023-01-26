import { Routes, Route } from 'react-router-dom';
import { ShoppingCard } from './components/Header/card/ShoppingCard';

export const RouterApp = () => (
  <Routes>
    <Route path="/shopping-card" element={<ShoppingCard />} />
  </Routes>
);
