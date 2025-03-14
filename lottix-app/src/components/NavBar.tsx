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
  showHowItWorks = true
}) => {
  return (
    <nav className="bg-black text-white px-6 py-3 flex items-center w-full fixed top-0 left-0 z-50">
      {/* Left: Logo with link to home */}
      <Link to="/" className="text-white text-2xl font-bold mr-auto no-underline">
        LotTix
      </Link>
      
      {/* Navigation Links - all in one line */}
      {showSearch && (
        <Link to="/search-for-events" className="flex items-center space-x-1 bg-gray-800 text-white px-3 py-1 rounded-md mx-2 no-underline hover:bg-gray-700">
          🔍 <span>Search</span>
        </Link>
      )}
      
      {showHowItWorks && (
        <Link to="/how-it-works" className="text-white mx-2 no-underline hover:underline">
          How It Works
        </Link>
      )}
      
      {/* User Authentication */}
      {isSignedIn ? (
        <div className="flex items-center mx-2">
          <Link to="/user-dashboard" className="flex items-center no-underline">
            <span className="mr-2 text-white">{username}</span>
            <div className="bg-[#6610F2] text-white font-bold w-8 h-8 flex items-center justify-center rounded-full">
              {username?.charAt(0).toUpperCase() || "U"}
            </div>
          </Link>
        </div>
      ) : (
        <Link to="/sign-in" className="bg-[#6610F2] text-white px-4 py-1 rounded-md mx-2 no-underline hover:bg-[#5a0dd9]">
          Sign In
        </Link>
      )}
    </nav>
  );
};

export default NavBar;