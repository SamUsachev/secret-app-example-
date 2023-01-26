import Header from './components/Header/Header';
import { ShoppingCard } from './components/Header/card/ShoppingCard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Header/Login';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/shopping-card" element={<ShoppingCard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
