import React, { useState } from 'react';
import './Nav.css';
import { useContext } from 'react';
import PixabayContext from '../../context/PixabayContext.jsx';
function Nav() {
  const { fetchBycat } = useContext(PixabayContext);
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
              <button className="nav-btn" onClick={()=>fetchBycat(category.toLowerCase())}>{category}</button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
