import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable camelcase */
const Mission = (props) => {
  const {
    mission_id, mission_name, description, status = false,
  } = props;

  return (
    <tr key={mission_id}>
      <td>{mission_id}</td>
      <td>{mission_name}</td>
      <td>{description}</td>
      <td>{status}</td>
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
