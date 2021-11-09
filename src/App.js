import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Header from './components/Header';
import Profile from './components/Profile';
import DisplayRockets from './components/dislayRockets';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<DisplayRockets />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </Router>

    </Provider>
  );
}

export default App;
