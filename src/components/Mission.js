import React from 'react';
// import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';

const Mission = (props) => {

  const  {
    mission_id, mission_name, description, status,
  } = props;

  return (
    <tr key={mission_id}>
      <td>{mission_name}</td>
      <td>{description}</td>
      <td>{status}</td>
    </tr>
  )
}

export default  Mission;