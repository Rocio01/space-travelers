import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Profile from './components/Profile';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
