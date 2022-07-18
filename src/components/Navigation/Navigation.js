import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/Navigation.css';

function Navigation() {
  return (
    <>
      <navbar className="navbar">
        <h1>Navigation</h1>
        {/* Links to slash route -- about me */}
        <Link to="/">Home</Link> 
        {/* Links to work */}
        <Link to="/">Home</Link> 
        {/* Links to contact */}
        <Link to="/">Home</Link> 
      </navbar>
    </>
  );
}

export default Navigation;