'use client';

import { useState } from 'react';
import { Search, Bell, Grid, Menu, X, Plus } from 'lucide-react';

const Header = ({ onFindJobsClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-header-gradient border-b border-gray-800/20 relative">
      {/* Gradient Border Effect */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              {/* Logo Icon */}
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center">
                    <div className="w-2 h-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-white text-xl font-bold">Tallento.ai</h1>
                <p className="text-gray-300 text-xs -mt-1">Where AI Meets Ambition</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex flex-row gap-8 justify-between items-center">
              <NavItem icon={<Grid className="w-5 h-5" />} label="Job Category" href="/development?action=Job Category" />
              <NavItem icon={<Search className="w-5 h-5" />} label="Find Jobs" onClick={onFindJobsClick} />
              <div className="relative flex flex-row justify-between items-center">
                <NavItem icon={<Bell className="w-5 h-5" />} label="Notifications" href="/development?action=Notifications" />
                <span className="absolute -top-[4px] -right-[12px] bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-medium">
                  29
                </span>
              </div>
              
              {/* Profile Image */}
              <div className="ml-4 flex flex-col gap-2 justify-center items-center">
                <img
                  className="h-8 w-8 rounded-full border-2 border-gray-600 hover:border-white transition-colors duration-200"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile"
                />
                <button 
                  onClick={() => window.location.href = '/development?action=Post a Job'}
                  className="bg-gradient-to-r from-red-400 to-pink-400 hover:shadow-lg hover:scale-105 transition-all duration-200 text-white px-6 py-2 rounded-lg font-medium flex items-center space-x-2"
                >
                  <Plus className="w-4 h-4" />
                  <span className="hidden sm:inline">Post a Job</span>
                  <span className="sm:hidden">Post</span>
                </button>
              </div>
            </div>
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="bg-gradient-to-r from-red-400 to-pink-400 text-gray-300 hover:text-white transition-colors duration-200"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-sm rounded-lg mt-2 mb-4 p-4 space-y-4">
            <MobileNavItem icon={<Grid className="w-5 h-5" />} label="Job Category" href="/development?action=Job Category" />
            <MobileNavItem icon={<Search className="w-5 h-5" />} label="Find Jobs" onClick={onFindJobsClick} />
            <div className="flex items-center justify-between">
              <MobileNavItem icon={<Bell className="w-5 h-5" />} label="Notifications" href="/development?action=Notifications" />
              <span className="bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-medium">
                29
              </span>
            </div>
            <div className="flex items-center space-x-3 pt-2 border-t border-gray-700">
              <img
                className="h-8 w-8 rounded-full border-2 border-gray-600"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
              />
              <span className="text-white font-medium">Profile</span>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

// Desktop Navigation Item Component
const NavItem = ({ icon, label, onClick, href }) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) {
      onClick();
    } else if (href) {
      window.location.href = href;
    }
  };

  return (
    <a
      href={href || "#"}
      onClick={handleClick}
      className="text-gray-300 hover:text-white flex flex-col items-center space-y-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-white/10"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
};

// Mobile Navigation Item Component
const MobileNavItem = ({ icon, label, onClick, href }) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) {
      onClick();
    } else if (href) {
      window.location.href = href;
    }
  };

  return (
    <a
      href={href || "#"}
      onClick={handleClick}
      className="text-gray-300 hover:text-white flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
};

export default Header;