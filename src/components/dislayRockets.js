import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rockets from './rockets';
import { fetchRockets } from '../redux/rockets/rockets';

const DisplayRockets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchRockets(dispatch);
  }, []);

  const rocketsStore = useSelector((store) => Object.values(store.rocketsReducer.rockets));

  return (
    <div className="container">

      {
        rocketsStore.map((rockets) => (
          <Rockets
            key={rockets.id}
            flickr_images={rockets.flickr_images}
            rocket_name={rockets.rocket_name}
            description={rockets.description}
          />
        ))
      }
    </div>
  );
};

export default DisplayRockets;
