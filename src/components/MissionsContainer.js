import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Mission from './Mission';
import { fetchMissions } from '../redux/missions/missions';


const MissionsContainer = () => {
const dispatch = useDispatch();

useEffect(() => {
  fetchMissions(dispatch)
}, []);

  const missionsStore = useSelector((store) => Object.values(store.missionsReducer.missions));

  return (
    <div>
      <table class="table table-bordered">
    <thead>
      <tr>
        <th>mission</th>
        <th>Description</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {
        missionsStore.map((mission)=>(
          <Mission 
          key={mission.mission_id}
          id={mission.mission_id}
          mission_name ={ mission.mission_name}
          description = {mission.description}
          status={mission.status}
          
          />
        ))
      }
    </tbody>
    </table>
    </div>
  )
}

export default MissionsContainer;