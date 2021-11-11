import axios from 'axios';

const SET_ROCKETS = 'space-travelers/rockets/SET_ROCKETS';
const SET_RESERVED = 'space-travelers/rockets/SET_RESERVED';
const SET_CANCELLATION = 'space-travelers/rockets/SET_RESERVED';
const URL = 'https://api.spacexdata.com/v3/rockets';
const initialState = {
  rockets: [],
};

export const setReserved = (payload) => ({
  type: SET_RESERVED,
  payload,
});

export const setCancellation = (payload) => ({
  type: SET_CANCELLATION,
  payload,
});

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
    case SET_CANCELLATION: {
      const newState = state.rockets.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, reserved: false };
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

export const fetchRockets = (dispatch) => {
  axios.get(URL)
    .then((response) => {
      dispatch(setRockets(response.data));
    });
};

export default rocketsReducer;
