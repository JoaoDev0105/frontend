import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import './App.css';

import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

function App() {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }

  return (
    <BrowserRouter>
      <div className="grid-container">

        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>
              &#9776;
            </button>
            
            <Link to= "/" >Seu E-Ecomerce</Link>
          </div>
          <div className="header-links">
            <Link to={"/cart.html"}>Cart</Link>
            <Link to={"/signin.html"}>Sign In</Link>
          </div>
        </header>

        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>x</button>
          <ul>
            <li>
              <Link to={"/index.html"}>Pants</Link>
            </li>
            <li>
              <a href="index.html">Shirts</a>
            </li>
          </ul>
        </aside>

        <main className="main">
          <div className="content">
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
        </main>

        <footer className="footer">
          All right reserved.
        </footer>

      </div>   
    </BrowserRouter>
  );
}

export default App;
