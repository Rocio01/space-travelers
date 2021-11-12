import React from 'react';
import ProfileMisions from './ProfileMisions';
import RocketsProfile from './rocketsProfile';

function Profile() {
  return (
    <div className="row m-5 p-3">
      <div className="missions-div col-5 m-1 p-3">
        <h2> My Missions</h2>
        <ProfileMisions />
      </div>
      <div className="rockets-div col-5 m-1 p-3">
        <h2> My Rockets </h2>
        <RocketsProfile />
      </div>
    </div>
  );
}

export default Profile;
