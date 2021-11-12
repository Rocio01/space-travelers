import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Mission from '../components/Mission';
import store from '../redux/configureStore';
import MissionMock from './mocks/MissionMock';

describe('missions component functionality', () => {
  test('matches Mission component snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Mission />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render Mission component correctly', () => {
    const component = render(
      <MissionMock
        mission_id="TestId"
        mission_name="Mission one"
        description="description one"
        status={false}
      />,
    );
    expect(component.container).toHaveTextContent('Mission one');
    expect(component.container).toHaveTextContent('description one');
  });

  test('If status = false innertext = NOT A MEMBER', () => {
    const component = render(
      <MissionMock
        mission_id="TestId"
        mission_name="Mission one"
        description="description one"
        status={false}
      />,
    );
    expect(component.container).toHaveTextContent('NOT A MEMBER');
  });

  test('If status = true innertext = Active member', () => {
    const component = render(
      <MissionMock
        mission_id="TestId"
        mission_name="Mission two"
        description="description two"
        status
      />,
    );
    expect(component.container).toHaveTextContent('Active member');
  });
});
