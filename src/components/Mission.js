import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missions';

/* eslint-disable camelcase */
const Mission = (props) => {
  const {
    mission_id, mission_name, description, status,
  } = props;

  const dispatch = useDispatch();

  const join = () => {
    dispatch(joinMission(mission_id));
  };

  const leave = () => {
    dispatch(leaveMission(mission_id));
  };

  return (
    <tr key={mission_id}>
      <td>{mission_name}</td>
      <td>{description}</td>
      <td className="align-middle text-center">
        <span className={status === true ? 'btn-info span-mission' : 'btn-secondary span-mission'}>
          { status === true ? 'Active member' : 'NOT A MEMBER'}
        </span>
      </td>
      <td className="align-middle text-center">
        <button type="button" className={status === true ? 'btn btn-outline-danger mission-button' : 'btn btn-outline-dark mission-button'} onClick={status === true ? leave : join}>
          {status === true ? 'Leave Misssion' : 'Join Mission'}
        </button>
      </td>
    </tr>
  );
};

Mission.propTypes = {
  mission_id: PropTypes.string.isRequired,
  mission_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};

export default Mission;
