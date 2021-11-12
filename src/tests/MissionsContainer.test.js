import React from 'react';
//  import { screen, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import missionsReducer from '../redux/missions/missions';
import '@testing-library/jest-dom/extend-expect';
import MissionsContainer from '../components/MissionsContainer';
import store from '../redux/configureStore';

// describe('Missions tests', () => {
//   it('Missions page matches snapshot', async () => {
//     await store.dispatch(fetchMissions());
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
