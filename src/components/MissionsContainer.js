import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Mission from './Mission';
import { fetchMissions } from '../redux/missions/missions';

const MissionsContainer = () => {
  const dispatch = useDispatch();

  const missionsStore = useSelector((store) => store.missionsReducer.missions);

  useEffect(() => {
    if (!missionsStore.length) {
      fetchMissions(dispatch);
    }
  }, []);

  return (
    <div className="container mt-5">
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th className="col-1">mission</th>
            <th>Description</th>
            <th className="col-2">Status</th>
            <th className="col-2"> </th>
          </tr>
        </thead>
        <tbody>
          {
        missionsStore.map((mission) => (
          <Mission
            key={mission.mission_id}
            id={mission.mission_id}
            mission_id={mission.mission_id}
            mission_name={mission.mission_name}
            description={mission.description}
            status={mission.status}

          />
        ))
      }
        </tbody>
      </table>
    </div>
  );
};

export default MissionsContainer;
