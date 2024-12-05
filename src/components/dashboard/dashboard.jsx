import { BsFillArrowRightCircleFill } from "react-icons/bs"; 
import { BsArrowLeftCircleFill } from "react-icons/bs"; 
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { FaUser, FaChartPie, FaBell, FaSignOutAlt, FaRoute, FaChartBar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();  
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    navigate('/login');
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white flex flex-col transition-all duration-300 ${
          isOpen ? "w-64" : "w-16"
        } md:w-64`}
      >
        <div className="p-4 flex justify-center cursor-pointer md:hidden" onClick={toggleSidebar}>
          {/* Bouton de basculement visible uniquement sur mobile */}
          <span className="text-white">{isOpen ? <BsArrowLeftCircleFill /> : <BsFillArrowRightCircleFill /> }</span>
        </div>

        <nav className="flex-1 px-2 py-4">
          <ul className="space-y-4">
            <li className="hover:bg-gray-700 rounded">
              <Link to="/dashboard/users" className="flex items-center px-4 py-2">
                <FaUser className="mr-3" />
                <span className={`${isOpen ? "block" : "hidden"} md:block`}>Users</span>
              </Link>
            </li>
            <li className="hover:bg-gray-700 rounded">
              <Link to="/dashboard/taxibe" className="flex items-center px-4 py-2">
                <FaRoute className="mr-3" />
                <span className={`${isOpen ? "block" : "hidden"} md:block`}>Taxibe</span>
              </Link>
            </li>
            <li className="hover:bg-gray-700 rounded">
              <Link to="/dashboard/stats" className="flex items-center px-4 py-2">
                <FaChartBar className="mr-3" />
                <span className={`${isOpen ? "block" : "hidden"} md:block`}>Stats</span>
              </Link>
            </li>
            <li className="hover:bg-gray-700 rounded">
              <Link to="/dashboard/notifications" className="flex items-center px-4 py-2">
                <FaBell className="mr-3" />
                <span className={`${isOpen ? "block" : "hidden"} md:block`}>Notifications</span>
              </Link>
            </li>
            <li className="hover:bg-gray-700 rounded">
              <Link to="/dashboard/chart" className="flex items-center px-4 py-2">
                <FaChartPie className="mr-3" />
                <span className={`${isOpen ? "block" : "hidden"} md:block`}>Charts</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Logout */}
        <div className="p-4">
          <button onClick={handleLogout} className="flex items-center px-4 py-2 text-red-400 hover:bg-gray-700 rounded">
            <FaSignOutAlt className="mr-3" />
            <span className={`${isOpen ? "block" : "hidden"} md:block`}>Logout</span>
          </button>
        </div>
      </div>


      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-md p-4">
          <h1 className="text-2xl font-bold text-gray-700">Welcome, Admin!</h1>
        </header>
        
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
