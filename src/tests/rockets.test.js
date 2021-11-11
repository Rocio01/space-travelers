import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Rockets from '../components/rockets';
import store from '../redux/configureStore';

test('matches Rockets component snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Rockets />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});