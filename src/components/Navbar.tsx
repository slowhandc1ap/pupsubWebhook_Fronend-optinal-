import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-600 shadow-lg font-[Kanit] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo + Name */}
          <div className="flex items-center gap-2">
            <img src="/logo.svg" className="h-8 w-8" alt="Logo" />
            <span className="text-xl font-bold tracking-widest">Pub/Sub Hero</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#subscribe" className="hover:text-yellow-300 transition duration-200">Subscribe</a>
            <a href="#provide" className="hover:text-yellow-300 transition duration-200">Provide</a>
            <a href="#ask" className="hover:text-yellow-300 transition duration-200">Ask</a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none hover:text-yellow-300 transition duration-200"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 space-y-2 bg-purple-800 shadow-inner">
          <a href="#subscribe" className="block text-sm hover:text-yellow-300">Subscribe</a>
          <a href="#provide" className="block text-sm hover:text-yellow-300">Provide</a>
          <a href="#ask" className="block text-sm hover:text-yellow-300">Ask</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
