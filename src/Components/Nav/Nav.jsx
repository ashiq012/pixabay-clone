import React, { useState } from 'react';
import './Nav.css';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const categories = [
    "Backgrounds", "Fashion", "Nature", "Science", "Education",
    "Feelings", "Health", "People", "Religion", "Places",
    "Animals", "Industry", "Computer", "Food", "Sports",
    "Transportation", "Travel", "Buildings", "Business", "Music",
  ];

  return (
    <div>
      <nav className="navbar">
        <button className="icon">Pixabay</button>

        {/* Hamburger Button */}
        <button 
          className="hamburger" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Categories List */}
        <ul className={`nav-list ${menuOpen ? 'active' : ''}`}>
          {categories.map((category, index) => (
            <li key={index}>
              <button className="nav-btn">{category}</button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
