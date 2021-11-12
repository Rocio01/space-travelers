import React from 'react';
import { screen, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider, useDispatch } from 'react-redux';
import missionsReducer, { fetchMissions } from '../redux/missions/missions';
import '@testing-library/jest-dom/extend-expect';
import MissionsContainer from '../components/MissionsContainer';
import store from '../redux/configureStore';

jest.mock('./mocks/api.js');


// const dispatch = useDispatch();
// describe('Missions tests', () => {
//   it('Missions page matches snapshot', async () => {
//     await fetchMissions(dispatch);
//     const missionsPage = renderer
//       .create(<Provider store={store}><MissionsContainer /></Provider>)
//       .toJSON();
//     expect(missionsPage).toMatchSnapshot();
//   });
// });

describe('missions', () => {
  test('matches MissionsContainer component snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <MissionsContainer />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should return the initial state', () => {
    expect(missionsReducer(undefined, {})).toEqual({ missions: [] });
  });
});
