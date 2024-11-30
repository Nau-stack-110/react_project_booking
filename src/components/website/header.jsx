const header = () => {
  return (
    <div>
      <header className="bg-gray-500 left-0 right-0 top-0 z-50 px-4 fixed">
        <div className="container mx-auto flex justify-between items-center py-4">
          <div className="flex items-center">
            <img
              src="/2207_w023_n003_2682b_p1_2682.jpg"
              alt="Logo"
              className="h-14 w-auto mr-4 rounded-full"
            />
          </div>
          <div className="flex md:hidden">
            <button id="hamburger" className="text-white focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex md:flex-grow justify-center">
            <ul className="flex justify-center space-x-4 text-white">
              <li>
                <a href="#home" className="hover:text-secondary font-bold">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-secondary font-bold">
                  About us
                </a>
              </li>
              <li>
                <a href="#mytickets" className="hover:text-secondary font-bold">
                  My ticket
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-secondary font-bold">
                  Features
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-secondary font-bold">
                  Faq
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-secondary font-bold">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="#"
              className="bg-green-500 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded inline-block"
            >
              Login
            </a>
            <a
              href="#"
              className="bg-blue-500 hover:bg-green-500 text-white font-semibold px-4 py-2 rounded inline-block"
            >
              Book Ticket
            </a>
          </div>
        </div>
      </header>




      <nav
        id="mobile-menu-placeholder"
        className="mobile-menu hidden flex-col items-center space-y-8 md:hidden px-8"
      >
        <ul className="w-full text-center">
          <li className="border-b border-gray-300 pb-4 pt-4">
            <a href="#home" className="hover:text-secondary font-bold">
              Home
            </a>
          </li>
          <li className="border-b border-gray-300 pb-4 pt-4">
            <a href="#about" className="hover:text-secondary font-bold">
              About us
            </a>
          </li>
          <li className="border-b border-gray-300 pb-4 pt-4">
            <a href="#features" className="hover:text-secondary font-bold">
              Features
            </a>
          </li>
          <li className="border-b border-gray-300 pb-4 pt-4">
            <a href="#faq" className="hover:text-secondary font-bold">
              Faq
            </a>
          </li>
          <li className="pb-4 pt-4">
            <a href="#contact" className="hover:text-secondary font-bold">
              Contact
            </a>
          </li>
        </ul>
        <div className="flex flex-col mt-6 space-y-2 items-center">
          <a
            href="#"
            className="bg-green-500 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded flex items-center justify-center min-w-[110px]"
          >
            Login
          </a>
          <a
            href="#"
            className="bg-blue-500 hover:bg-green-500 text-white font-semibold px-4 py-2 rounded flex items-center justify-center min-w-[110px]"
          >
            Book Ticket
          </a>
        </div>
      </nav>
    </div>
  );
};

export default header;
