import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import Rockets from '../components/rockets';
import '@testing-library/jest-dom/extend-expect';
import store from '../redux/configureStore';
import RocketsMock from './mocks/RocketsMock';

describe('rocket component functionality', () => {
  test('matches Rockets component snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render Rockets component correctly', () => {
    const component = render(
      <RocketsMock
        id="TestId"
        rocket_name="rocket one"
        description="description one"
        reserved={false}
      />,
    );
    expect(component.container).toHaveTextContent('rocket one');
    expect(component.container).toHaveTextContent('description one');
  });

  test('If reserved = true innertext = Cancel Booking', () => {
    const component = render(
      <RocketsMock
        id="TestId"
        rocket_name="rocket two"
        description="description one"
        reserved
      />,
    );
    expect(component.container).toHaveTextContent('Cancel Booking');
  });

  test('If reserved = false innertext = reserved rocket', () => {
    const component = render(
      <RocketsMock
        id="TestId"
        rocket_name="rocket two"
        description="description one"
        reserved={false}
      />,
    );
    expect(component.container).toHaveTextContent('reserved rocket');
  });
});
