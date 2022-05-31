import React from 'react';
import FeatherIcon from 'feather-icons-react';
import { NavLink } from 'react-router-dom';

function SideNav() {
  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block sidebar collapse">
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink to="/react-math-magicians" className="nav-link" aria-current="page">
              <FeatherIcon className="align-text-bottom" icon="user" />
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/react-math-magicians/calculator" className="nav-link active" aria-current="page">
              <FeatherIcon className="align-text-bottom" icon="percent" />
              Calculator
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/react-math-magicians/quotes" className="nav-link active" aria-current="page">
              <FeatherIcon className="align-text-bottom" icon="align-left" />
              Quotes
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default SideNav;
