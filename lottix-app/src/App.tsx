import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import EventDetailsPage from "./pages/EventDetailsPage";
import SearchForEventsPage from "./pages/SearchForEventsPage";
import UserDashboardPage from "./pages/UserDashboardPage";
import SignInPage from "./pages/SignInPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import NavBar from "./components/NavBar";
import './App.css'
import { Link } from "react-router-dom";


const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isSignedIn = false;
  const username = isSignedIn ? "John Smith" : "";
  
  const showSearch = location.pathname !== "/search-for-events";
  const showHowItWorks = location.pathname !== "/how-it-works";
  const hideNavBar = location.pathname === "/sign-in";
  
  return (
    <>
      {!hideNavBar && (
        <NavBar
          isSignedIn={isSignedIn}
          username={username}
          showSearch={showSearch}
          showHowItWorks={showHowItWorks}
        />
      )}
      <div className="pt-16"> {/* Adds space for the fixed navbar */}
        {children}
      </div>
    </>
  );
};


function App() {
  return (
    <>
      <Router>
      <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/event-details" element={<EventDetailsPage />} />
        <Route path="/search-for-events" element={<SearchForEventsPage />} />
        <Route path="/user-dashboard" element={<UserDashboardPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
      </Routes>
      <div>
      <h1>Welcome to Lottix!</h1>
      <div>
      <Link to="/">Landing page</Link>
      </div>
      <Link to="/event-details">Go to Event Details</Link>
      </div>
      <div>
      <Link to="/search-for-events">Go to Search For Events</Link>
      </div>
      <div>
      <Link to="/user-dashboard">Go to User Dashboard</Link>
      </div>
      <div>
      <Link to="/sign-in">Go to sign in page</Link>
      </div>
      <div>
      <Link to="/how-it-works">Go to how it works page</Link>
      </div>
      </Layout>
    </Router>
    </>
  )
}

export default App
