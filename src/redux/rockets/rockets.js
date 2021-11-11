import axios from 'axios';

const SET_ROCKETS = 'space-travelers/rockets/SET_ROCKETS';
const SET_RESERVED = 'space-travelers/rockets/SET_RESERVED';
const SET_CANCELLATION = 'space-travelers/rockets/SET_CANCELLATION';
const URL = 'https://api.spacexdata.com/v3/rockets';
const initialState = {
  rockets: [],
};

export const setReserved = (id) => ({
  type: SET_RESERVED,
  payload: id,
});

export const setCancellation = (id) => ({
  type: SET_CANCELLATION,
  payload: id,
});

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROCKETS:
      return { ...state, rockets: action.payload };
    case SET_RESERVED:
      return {
        ...state,
        rockets: state.rockets.map(
          (rocket) => (
            rocket.id === action.payload ? { ...rocket, reserved: true } : rocket
          ),
        ),
      };
    case SET_CANCELLATION:
      return {
        ...state,
        rockets: state.rockets.map(
          (rocket) => (
            rocket.id === action.payload ? { ...rocket, reserved: false } : rocket
          ),
        ),
      };

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
