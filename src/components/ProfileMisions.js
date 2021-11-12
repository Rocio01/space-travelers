import React from 'react';
import { useSelector } from 'react-redux';

const ProfileMisions = () => {
  const missionsStore = useSelector((store) => store.missionsReducer.missions);
  const joinedMissions = missionsStore.filter((mission) => mission.status === true);
  return (
    <ul className="list-group">
      {joinedMissions.map((mission) => (
        <li className="list-group-item" key={mission.misssion_id}>
          {mission.mission_name}
        </li>
      ))}
    </ul>
  );
};

export default ProfileMisions;
