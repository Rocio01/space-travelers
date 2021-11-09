import React from 'react';
import { Link } from 'react-router-dom';

import planet from '../assets/planet.png';

const Header = () => (
  <div className="panel-bg container">
    <nav className="nav row">
      <div className="col-8 row">
        <img src={planet} alt="planet-logo" className="planet-logo col-4" />
        <h1 className="title  col-8">Space Travelers Hub</h1>
      </div>
      <div className="col-4">
        <Link to="/">
          <span className="rockets-nav mx-3">Rockets</span>
        </Link>
        <Link to="/missions">
          <span className="missions-nav mx-3">Missions</span>
        </Link>
        <Link to="/profile">
          <span className="profile-nav mx-3">Profile</span>
        </Link>
      </div>
    </nav>
  </div>
);

export default Header;
