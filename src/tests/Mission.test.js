import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Mission from '../components/Mission';
import store from '../redux/configureStore';

test('matches Mission component snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Mission />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
