import axios from 'axios';

const SET_ROCKETS = 'space-travelers/rockets/SET_ROCKETS';
const SET_RESERVED = 'SET_RESERVED';
const URL = 'https://api.spacexdata.com/v3/rockets';
const initialState = {
  rockets: [],
};

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROCKETS:
      return { ...state, rockets: action.payload };
    case SET_RESERVED: {
      const newState = state.rockets.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, reserved: true };
      });
      return newState;
    }

    default:
      return state;
  }
};

const setRockets = (payload) => ({
  type: SET_ROCKETS,
  payload,
});

export const setReserved = (id) => ({
  type: SET_RESERVED,
  id,
});

export const fetchRockets = (dispatch) => {
  axios.get(URL)
    .then((response) => {
      dispatch(setRockets(response.data));
    });
};

export default rocketsReducer;
