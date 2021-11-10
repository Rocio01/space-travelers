/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setReserved } from '../redux/rockets/rockets';

const Rockets = (props) => {
  const {
    id, rocket_name, description, flickr_images, reserved = false,
  } = props;

  const dispatch = useDispatch();

  const newReservetion = () => {
    dispatch(setReserved(id));
  };

  return (
    <div key={id} className="row m-4">
      <div className="col-3">
        <img src={flickr_images} alt="flickr_images" className="rockets-images" />
      </div>
      <div className="col-9">
        <h5>{rocket_name}</h5>
        <span>{reserved}</span>
        <p>{description}</p>
        <button type="button" onClick={newReservetion} className="btn btn-primary">Reserved Rocket</button>
      </div>

    </div>
  );
};

Rockets.propTypes = {
  id: PropTypes.string.isRequired,
  rocket_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickr_images: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Rockets;
