import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    setIsAuthenticated(!!token);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('isAdmin');
    setIsAuthenticated(false);
    navigate('/'); 
  }

  return (
    <>
    <header className="bg-gray-500 fixed top-0 left-0 right-0 z-50 px-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center">
          <img
            src="/2207_w023_n003_2682b_p1_2682.jpg"
            alt="Logo"
            className="h-14 w-auto mr-4 rounded-full"
          />
        </div>

        {/* Menu mobile (hamburger) */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Navigation principale (desktop) */}
        <nav className="hidden md:flex md:flex-grow justify-center">
          <ul className="flex justify-center space-x-6 text-white">
            <li><Link to="/" className="hover:text-blue-300 font-bold">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-300 font-bold">About us</Link></li>
            <li><Link to="/my-ticket" className="hover:text-blue-300 font-bold">My Ticket</Link></li>
            <li><Link to="/features" className="hover:text-blue-300 font-bold">Features</Link></li>
            <li><Link to="/faq" className="hover:text-blue-300 font-bold">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-blue-300 font-bold">Contact</Link></li>
          </ul>
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
        {isAuthenticated ? (
              <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded">
                Logout
              </button>
            ) : (
              <Link to="/login" className="bg-green-500 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded">
                Login
              </Link>
            )}
          <Link to="/select_seats" className="bg-blue-500 hover:bg-green-500 text-white font-semibold px-4 py-2 rounded">
            Book Ticket
          </Link>
        </div>
      </div>

      {/* Menu mobile (déroulant) */}
      <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col bg-gray-700 space-y-4 py-6 items-center text-white">
          <li><Link to="/" className="hover:text-blue-300 font-bold" onClick={toggleMobileMenu}>Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-300 font-bold" onClick={toggleMobileMenu}>About us</Link></li>
          <li><Link to="/my-ticket" className="hover:text-blue-300 font-bold" onClick={toggleMobileMenu}>My Ticket</Link></li>
          <li><Link to="/features" className="hover:text-blue-300 font-bold" onClick={toggleMobileMenu}>Features</Link></li>
          <li><Link to="/faq" className="hover:text-blue-300 font-bold" onClick={toggleMobileMenu}>FAQ</Link></li>
          <li><Link to="/contact" className="hover:text-blue-300 font-bold" onClick={toggleMobileMenu}>Contact</Link></li>
          
          <div className="flex flex-col space-y-2 mt-4">
            {isAuthenticated ? (
              <button onClick={() => { handleLogout(); toggleMobileMenu(); }} className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded">
                Logout
              </button>
              ) : (
              <Link to="/login" className="bg-green-500 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded" onClick={toggleMobileMenu}>
                Login
              </Link>
              )}
            <Link to="/select_seats" className="bg-blue-500 hover:bg-green-500 text-white font-semibold px-4 py-2 rounded" onClick={toggleMobileMenu}>
              Book Ticket
            </Link>

          </div>
        </ul>
      </div>
    </header>

    <div>
        <Outlet/>
    </div>
  </>
  );
};

export default Header;






























// import {Link} from "react-router-dom"
// const header = () => {
//   return (
//     <div>
//       <header className="bg-gray-500 left-0 right-0 top-0 z-50 px-4 fixed">
//         <div className="container mx-auto flex justify-between items-center py-4">
//           <div className="flex items-center">
//             <img
//               src="/2207_w023_n003_2682b_p1_2682.jpg"
//               alt="Logo"
//               className="h-14 w-auto mr-4 rounded-full"
//             />
//           </div>
//           <div className="flex md:hidden">
//             <button id="hamburger" className="text-white focus:outline-none">
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 />
//               </svg>
//             </button>
//           </div>
//           <nav className="hidden md:flex md:flex-grow justify-center">
//             <ul className="flex justify-center space-x-4 text-white">
//               <li>
//                 <Link to="/" className="hover:text-secondary font-bold">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/" className="hover:text-secondary font-bold">
//                   About us
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/" className="hover:text-secondary font-bold">
//                   My ticket
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/features" className="hover:text-secondary font-bold">
//                   Features
//                 </Link>
//               </li>

//               <li>
//                 <Link to="/faq" className="hover:text-secondary font-bold">
//                   Faq
//                 </Link>
//               </li>

//               <li>
//                 <Link to="/" className="hover:text-secondary font-bold">
//                   Contact
//                 </Link>
//               </li>

//             </ul>
//           </nav>
//           <div className="hidden lg:flex items-center space-x-4">
//             <Link
//               to="/login"
//               className="bg-green-500 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded inline-block"
//             >
//               Login
//             </Link>
//             <Link
//               to="/available_taxibe" 
//               className="bg-blue-500 hover:bg-green-500 text-white font-semibold px-4 py-2 rounded inline-block"
//             >
//               Book Ticket
//             </Link>
//           </div>
//         </div>
//       </header>




//       <nav
//         id="mobile-menu-placeholder"
//         className="mobile-menu hidden flex-col items-center space-y-8 md:hidden px-8"
//       >
//         <ul className="w-full text-center">
//           <li className="border-b border-gray-300 pb-4 pt-4">
//             <a href="#home" className="hover:text-secondary font-bold">
//               Home
//             </a>
//           </li>
//           <li className="border-b border-gray-300 pb-4 pt-4">
//             <a href="#about" className="hover:text-secondary font-bold">
//               About us
//             </a>
//           </li>
//           <li className="border-b border-gray-300 pb-4 pt-4">
//             <a href="#features" className="hover:text-secondary font-bold">
//               Features
//             </a>
//           </li>
//           <li className="border-b border-gray-300 pb-4 pt-4">
//             <a href="#faq" className="hover:text-secondary font-bold">
//               Faq
//             </a>
//           </li>
//           <li className="pb-4 pt-4">
//             <a href="#contact" className="hover:text-secondary font-bold">
//               Contact
//             </a>
//           </li>
//         </ul>
//         <div className="flex flex-col mt-6 space-y-2 items-center">
//           <a
//             href="#"
//             className="bg-green-500 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded flex items-center justify-center min-w-[110px]"
//           >
//             Login
//           </a>
//           <a
//             href="#"
//             className="bg-blue-500 hover:bg-green-500 text-white font-semibold px-4 py-2 rounded flex items-center justify-center min-w-[110px]"
//           >
//             Book Ticket
//           </a>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default header;
