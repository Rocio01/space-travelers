import React from 'react';
import { NavLink } from 'react-router-dom';

import planet from '../assets/planet.png';

const Header = () => (
  <div className="panel-bg container">
    <nav className="nav row">
      <div className="col-8 row">
        <img src={planet} alt="planet-logo" className="planet-logo col-4" />
        <h1 className="title  col-8">Space Travelers Hub</h1>
      </div>
      <div className="col-4 pt-3">
        <NavLink to="/" activeClassName="active-link ">
          <span className="rockets-nav px-3 mx-3">Rockets</span>
        </NavLink>
        <NavLink to="/missions" activeClassName="active-link">
          <span className="missions-nav px-3 mx-3">Missions</span>
        </NavLink>
        <NavLink to="/Profile" activeClassName="active-link">
          <span className="profile-nav px-5 ">Profile</span>
        </NavLink>
      </div>
    </nav>
  </div>
);

export default Header;
