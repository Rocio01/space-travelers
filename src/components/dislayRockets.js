import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rockets from './rockets';
import { fetchRockets } from '../redux/rockets/rockets';

const DisplayRockets = () => {
  const dispatch = useDispatch();

  const rocketsStore = useSelector((store) => store.rocketsReducer.rockets);

  useEffect(() => {
    if (!rocketsStore.length) {
      fetchRockets(dispatch);
    }
  }, []);
  console.log(rocketsStore);

  return (
    <div className="container">

      {
        rocketsStore.map((rockets) => (
          <Rockets
            key={rockets.id}
            id={rockets.id}
            flickr_images={rockets.flickr_images}
            rocket_name={rockets.rocket_name}
            description={rockets.description}
            reserved={rockets.reserved}
          />
        ))
      }
    </div>
  );
};

export default DisplayRockets;
