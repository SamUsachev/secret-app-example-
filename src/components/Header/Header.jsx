import React from 'react';
import card from '../../pic/card.png';
import login from '../../pic/login.png';

import './styles.scss';

const Header = () => {
  return (
    <header className="header">
      <h2 className="main">My site</h2>
      <form>
        <input type="text" placeholder="Искать здесь..." />
        <button type="submit"></button>
      </form>
      <div className="card">
        <a href="http://localhost:3000/shopping-card">
          <img src={card} alt="Logo" width={35} height={35} />
        </a>
      </div>
      <div className="login">
        <a href="http://localhost:3000/login">
          <img src={login} alt="Logo" width={35} height={35} />
        </a>
      </div>
    </header>
  );
};

export default Header;
