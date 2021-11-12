import React from 'react';
import { useSelector } from 'react-redux';

const RocketsProfile = () => {
  const rocketsStore = useSelector((store) => store.rocketsReducer.rockets);
  const reservedRockets = rocketsStore.filter((rocket) => rocket.reserved === true);
  return (
    <ul className="list-group">
      {reservedRockets.map((rockets) => (
        <li className="list-group-item" key={rockets.id}>
          {rockets.rocket_name}
        </li>
      ))}
    </ul>
  );
};

export default RocketsProfile;
