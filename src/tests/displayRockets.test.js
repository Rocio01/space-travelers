import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import DisplayRockets from '../components/dislayRockets';
import store from '../redux/configureStore';

test('matches DisplayRockets component snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <DisplayRockets />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
