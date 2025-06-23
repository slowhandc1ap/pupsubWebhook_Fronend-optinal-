import React from 'react';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen font-[Kanit] bg-gradient-to-br from-gray-50 to-yellow-100 text-gray-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-600 text-white p-5 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide drop-shadow-sm flex items-center gap-2">
            🚀 Pub/Sub Webhook Portal
          </h1>
          <span className="hidden md:inline text-sm font-light italic text-gray-200">
            by Korn ⚡
          </span>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow px-4 py-8 max-w-7xl mx-auto w-full">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-700 to-indigo-600 text-white py-4 text-center text-sm shadow-inner">
        <div className="flex flex-col items-center gap-1">
          <span>© {new Date().getFullYear()} Built for Debuz Dev Test 🎯</span>
          <span className="text-xs text-purple-200">Made with 💻 by Korn</span>
        </div>
      </footer>
    </div>
  );
};
