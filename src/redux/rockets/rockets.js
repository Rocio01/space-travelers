import axios from 'axios';

const SET_ROCKETS = 'space-travelers/rockets/SET_ROCKETS';
const URL = 'https://api.spacexdata.com/v3/rockets';
const initialState = {
  rockets: [],
};

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROCKETS:
      return { ...state, rockets: action.payload };
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
