import React from 'react'
import Mission from './Mission';

const MissionsContainer = () => {
  const missions = [{
    mission_id: 1,
    mission_name: "first mission",
    description: "moon", 
    status: false
  },{
    mission_id: 2,
    mission_name: "second mission",
    description: "mars", 
    status: true,
  },];

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
        missions.map((mission)=>(
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