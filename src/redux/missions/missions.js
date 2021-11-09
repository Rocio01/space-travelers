import axios from 'axios';
const SET_MISSIONS = 'space-travelers/missions/SET_MISSIONS';
const URL = 'https://api.spacexdata.com/v3/missions';
const initialState = [];

const missionsReducer = (state = initialState, action) => {
  switch(action.type){
    case SET_MISSIONS:
      return [...state, action.payload];
    default:
      return state;
  }
};

const setMissions = (payload) => ({
  type: SET_MISSIONS,
  payload,
})

export const fetchMissions = (dispatch) => {
  axios.get(URL)
  .then((response) => {
    dispatch(setMissions(response.data));
  })
}

export default missionsReducer;
