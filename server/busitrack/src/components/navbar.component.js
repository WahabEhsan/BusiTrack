import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Busitrack</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Boop 1</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Boop 2</Link>
          </li>
          <li className="navbar-item">
          <Link to="/edit/:id" className="nav-link">Boop 3</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}