import { BiTaxi } from "react-icons/bi"; 
import { BsFillArrowRightCircleFill } from "react-icons/bs"; 
import { BsArrowLeftCircleFill } from "react-icons/bs"; 
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { FaUser, FaChartPie, FaBell, FaSignOutAlt, FaChartBar } from "react-icons/fa";
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

  const navbar = [
    {title:'Users', icon:FaUser, link:'/dashboard/users'},
    {title:'Taxibe', icon:BiTaxi, link:'/dashboard/taxibe'},
    {title:'Stats', icon:FaChartPie, link:'/dashboard/stats'},
    {title:'Notification', icon:FaBell, link:'/dashboard/notification'},
    {title:'Charts', icon:FaChartBar, link:'/dashboard/chart'},
  ]
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white flex flex-col transition-all duration-300 ${
          isOpen ? "w-64" : "w-16"
        } md:w-64`}
      >
        <div className="p-4 flex justify-center cursor-pointer md:hidden" onClick={toggleSidebar}>
          <span className="text-white">{isOpen ? <BsArrowLeftCircleFill /> : <BsFillArrowRightCircleFill /> }</span>
        </div>

        <nav className="flex-1 px-2 py-4">
          <ul className="space-y-4">
            {navbar.map((navy, index) => (
            <li key={index} className="hover:bg-gray-700 rounded">
              <Link to={navy.link} className="flex items-center px-4 py-2">
                <navy.icon className="mr-3" />
                <span className={`${isOpen ? "block" : "hidden"} md:block`}>{navy.title}</span>
              </Link>
            </li>
            ))}
          </ul>
        </nav>

        <div className="p-4">
          <button onClick={handleLogout} className="flex items-center px-4 py-2 text-red-400 hover:bg-gray-700 rounded">
            <FaSignOutAlt className="mr-3" />
            <span className={`${isOpen ? "block" : "hidden"} md:block`}>Logout</span>
          </button>
        </div>
      </div>


      {/* Main */}
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
