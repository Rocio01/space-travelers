/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

const Rockets = (props) => {
  const {
    id, rocket_name, description, flickr_images,
  } = props;

  return (
    <div key={id} className="row m-4">
      <div className="col-3">
        <img src={flickr_images} alt="flickr_images" className="rockets-images" />
      </div>
      <div className="col-9">
        <h5>{rocket_name}</h5>
        <p>{description}</p>
      </div>

    </div>
  );
};

Rockets.propTypes = {
  id: PropTypes.string.isRequired,
  rocket_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickr_images: PropTypes.string.isRequired,
};

export default Rockets;
