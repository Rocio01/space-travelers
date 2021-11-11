import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import MissionsContainer from '../components/MissionsContainer';
import store from '../redux/configureStore';

test('matches MissionsContainer component snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <MissionsContainer />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
