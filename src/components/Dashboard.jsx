import { MdAdminPanelSettings } from "react-icons/md"; 
import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { 
  FiUsers, 
  FiLogOut,
  FiBarChart2,
  FiMap,
  FiTruck,
  FiGrid,
  FiMenu,
  FiX,
  FiCalendar
} from 'react-icons/fi';

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  // Responsive handler
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  // eslint-disable-next-line react/prop-types
  const NavLink = ({ to, icon: Icon, children }) => (
    <Link 
      to={to} 
      className={`flex items-center space-x-3 p-3 pr-4 rounded-lg transition-all duration-300 
        ${isActiveRoute(to) 
          ? 'bg-gradient-to-r from-red-500 via-red-400 to-green-500 text-white shadow-lg transform scale-105 font-bold'
          : 'hover:bg-gray-100 hover:scale-102'}`}
    >
      <Icon className={`${isActiveRoute(to) ? 'text-white' : 'text-gray-600'} min-w-[20px]`} size={20} />
      {isSidebarOpen && (
        <span className={`transition-all duration-300 ${isActiveRoute(to) ? 'font-semibold' : ''}`}>
          {children}
        </span>
      )}
    </Link>
  );

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile Overlay */}
      {isMobile && isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`
          ${isSidebarOpen ? 'w-64' : 'w-20'} 
          ${isMobile ? 'fixed z-30' : 'relative'} 
          h-screen bg-white shadow-lg transition-all duration-300 transform
          ${isMobile && !isSidebarOpen ? '-translate-x-full' : 'translate-x-0'}
          pl-4
        `}
      >
        {/* Toggle Button */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute -right-3 top-4 bg-white rounded-full p-1.5 shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        >
          {isSidebarOpen ? (
            <FiX size={20} className="text-gray-600" />
          ) : (
            <FiMenu size={20} className="text-gray-600" />
          )}
        </button>

        <div className="p-4 relative h-full">
          {/* Madagascar Flag Inspired Header */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-white to-green-500 opacity-20 rounded-lg" />
            <div className="flex items-center space-x-4 p-3">
              <div className="relative">
                <img
                  src="/vite.svg"
                  alt="Admin"
                  className="w-12 h-12 rounded-full border-2 border-white shadow-lg transform hover:scale-110 transition-all duration-300"
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
              </div>
              {isSidebarOpen && (
                <div className="animate-fadeIn">
                  <h3 className="font-medium text-gray-800">Admin Name</h3>
                  <p className="text-sm text-gray-500">Administrator</p>
                </div>
              )}
            </div>
          </div>

          <nav className="space-y-2">
            <NavLink to="/dashboard/profile" icon={MdAdminPanelSettings}>Profile</NavLink>
            <NavLink to="/dashboard/users" icon={FiUsers}>Utilisateurs</NavLink>
            <NavLink to="/dashboard/taxibes" icon={FiTruck}>Taxibes</NavLink>
            <NavLink to="/dashboard/routes" icon={FiMap}>Routes</NavLink>
            <NavLink to="/dashboard/trajets" icon={FiCalendar}>Trajets</NavLink>
            <NavLink to="/dashboard/cooperatives" icon={FiGrid}>Coopératives</NavLink>
            <NavLink to="/dashboard/charts" icon={FiBarChart2}>Statistiques</NavLink>
          </nav>

          <div className="absolute bottom-4 w-full left-0 px-4">
            <button 
              className={`flex items-center space-x-3 p-3 pr-4 w-full rounded-lg
                transition-all duration-300 bg-red-50 text-red-600
                hover:bg-red-500 hover:text-white hover:shadow-md hover:scale-105 
                ${!isSidebarOpen ? 'justify-center' : ''}`}
            >
              <FiLogOut className="transition-all duration-300"
               size={isSidebarOpen ? 28 : 28} />
              {isSidebarOpen && <span>Déconnexion</span>}
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 p-8 overflow-y-auto bg-gray-50 transition-all duration-300
        ${isMobile ? 'w-full pl-20' : ''}`}>
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
} 