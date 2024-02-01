import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import img from './Images/img.jpg';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a>
        <img src={img} alt="" width="70px" height="70px" />
      </a>
      <Link className="navbar-brand" to='/'>
        Home
      </Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="...">
              Bout
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Login
            </a>
          </li>
        </ul>
        <form class="d-flex ms-auto">
        <button class="btn btn-outline-success" type="submit">Blog</button>
        <button class="btn btn-outline-success mx-2" type="submit">Details</button>
      </form>
      </div>
    </nav>
  );
};

export default Nav;
