import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import App from '../App';
import Header from '../components/Header';
import MissionsContainer from '../components/MissionsContainer';
import DisplayRockets from '../components/dislayRockets';
import Profile from '../components/Profile';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../components/Header');
jest.mock('../components/MissionsContainer');
jest.mock('../components/dislayRockets');
jest.mock('../components/Profile');

describe('Correct render of the routes', () => {
  test('Should render missions container for missions route', () => {
    MissionsContainer.mockImplementation(() => <div>MissionsContainerPageMock</div>);
    render(
      <MemoryRouter initialEntries={['/missions']} initialIndex={0}>
        <MissionsContainer />
      </MemoryRouter>,
    );
    expect(screen.getByText('MissionsContainerPageMock')).toBeInTheDocument();
  });

  test('Should render Profile for Profile route', () => {
    Profile.mockImplementation(() => <div>ProfilePageMock</div>);

    render(
      <MemoryRouter initialEntries={['/Profile']}>
        <Profile />
      </MemoryRouter>,
    );
    expect(screen.getByText('ProfilePageMock')).toBeInTheDocument();
  });

  test('Should render page header and displayRockets on default route', () => {
    Header.mockImplementation(() => <div>PageHeaderMock</div>);
    DisplayRockets.mockImplementation(() => <div>HomePageMock</div>);

    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByText('PageHeaderMock')).toBeInTheDocument();
    expect(screen.getByText('HomePageMock')).toBeInTheDocument();
  });
});
