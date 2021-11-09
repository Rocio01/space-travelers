import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Profile from './components/Profile';
import DisplayRockets from './components/dislayRockets';
import MissionsContainer from './components/MissionsContainer';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<DisplayRockets />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/missions" element={<MissionsContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
