import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <NavLink to="/math-magicians/calculator" className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6">
        Math Magicians
      </NavLink>
      <button
        className="navbar-toggler position-absolute d-md-none collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="navbar-nav">
        <div className="nav-item text-nowrap">
          <NavLink to="/math-magicians/calculator" className="nav-link px-3">
            Try Now
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
