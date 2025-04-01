import { Link } from "react-router-dom";

interface NavBarProps {
  isSignedIn: boolean;
  username?: string;
  showSearch?: boolean;
  showHowItWorks?: boolean;
}

const NavBar: React.FC<NavBarProps> = ({
  isSignedIn,
  username = "",
  showSearch = true,
  showHowItWorks = true,
}) => {
  return (
    <>
      <nav className="navbar">
        {/* Left: Logo with link to home */}
        <div className="navbar-left">
          <Link to="/">LotTix</Link>
        </div>

        {/* Right: nav links */}
        <div className="navbar-right">
          {showSearch && (
            <Link to="/search-for-events" className="search-link">
              🔍 <span>Search</span>
            </Link>
          )}

          {showHowItWorks && (
            <Link to="/how-it-works">How It Works</Link>
          )}

          {isSignedIn ? (
            <Link to="/user-dashboard" className="user-info">
              <span>{username}</span>
              <div className="avatar">
                {username?.charAt(0).toUpperCase() || "U"}
              </div>
            </Link>
          ) : (
            <Link to="/sign-in" className="sign-in">
              Sign In
            </Link>
          )}
        </div>
      </nav>

      <style>{`
        .navbar {
          background-color: black;
          color: white;
          padding: 12px 32px;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;

          display: flex;
          justify-content: space-between;
          align-items: center;

          max-width: 1400px;
            margin: 0 auto;
            right: 0;
            left: 0;
        }

        .navbar-left a {
          color: white;
          font-size: 24px;
          font-weight: bold;
          text-decoration: none;
        }

        .navbar-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .navbar-right a {
          color: white;
          text-decoration: none;
        }

        .navbar-right a:hover {
          text-decoration: underline;
        }

        .search-link {
          background-color: #333;
          padding: 4px 12px;
          border-radius: 6px;
        }

        .sign-in {
          background-color: #6610F2;
          padding: 6px 16px;
          border-radius: 6px;
          color: white;
          font-weight: bold;
        }

        .sign-in:hover {
          background-color: #5a0dd9;
        }

        .avatar {
          background-color: #6610F2;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          margin-left: 8px;
        }
      `}</style>
    </>
  );
};

export default NavBar;
