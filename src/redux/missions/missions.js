import axios from 'axios';

const SET_MISSIONS = 'space-travelers/missions/SET_MISSIONS';
const JOIN_MISSION = 'space-travelers/missions/JOIN_MISSIONS';
const LEAVE_MISSION = 'space-travelers/missions/LEAVE_MISSIONS';
const URL = 'https://api.spacexdata.com/v3/missions';
const initialState = {
  missions: [],
};

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

export const leaveMission = (payload) => ({
  type: LEAVE_MISSION,
  payload,
});

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MISSIONS:
      return { ...state, missions: action.payload };
    case JOIN_MISSION:
      return {
        ...state,
        missions: state.missions.map(
          (mission) => (
            mission.mission_id === action.payload ? { ...mission, status: true } : mission
          ),
        ),
      };
    case LEAVE_MISSION:
      return {
        ...state,
        missions: state.missions.map(
          (mission) => (
            mission.mission_id === action.payload ? { ...mission, status: false } : mission
          ),
        ),
      };
    default:
      return state;
  }
};

const setMissions = (payload) => ({
  type: SET_MISSIONS,
  payload,
});

export const fetchMissions = (dispatch) => {
  axios.get(URL)
    .then((response) => {
      dispatch(setMissions(response.data));
    });
};

export default missionsReducer;
