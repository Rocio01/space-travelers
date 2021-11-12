import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import ProfileMisions from '../components/ProfileMisions';
import store from '../redux/configureStore';

test('matches ProfileMisions component snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <ProfileMisions />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
