import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import EventPage from './pages/EventPage';
import ExplorePage from './pages/ExplorePage';
import WinningPage from './pages/WinningPage';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';
import './App.css'

function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/congradulations" element={<WinningPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
