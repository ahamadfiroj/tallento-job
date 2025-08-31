'use client';

import { useState, useRef, useImperativeHandle, forwardRef } from 'react';
import { Search, ChevronDown, Trophy, Filter, MapPin } from 'lucide-react';

const HeroBanner = forwardRef((props, ref) => {
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focusSearch: () => {
      if (searchInputRef.current) {
        searchInputRef.current.focus();
        searchInputRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }));

  const suggestedTags = [
    'Social Science Teacher',
    'Math Faculty', 
    'Physics JEE Expert'
  ];

  const features = [
    {
      icon: <Trophy className="w-8 h-8 text-purple-400" />,
      title: 'Top 1% candidates,',
      subtitle: '3x faster hiring'
    },
    {
      icon: <Filter className="w-8 h-8 text-purple-400" />,
      title: 'Streamlined hiring',
      subtitle: 'with AI screening'
    },
    {
      icon: <MapPin className="w-8 h-8 text-purple-400" />,
      title: 'Advanced filtering',
      subtitle: '& instant scheduling'
    }
  ];

  const stats = [
    {
      number: '7500+',
      label: 'Jobs Available'
    },
    {
      number: '5500+',
      label: 'Companies Hiring'
    },
    {
      number: '1M+',
      label: 'Candidates'
    }
  ];

  return (
    <section className="bg-hero-gradient min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        {/* Main Heading */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Find Your
            <br />
            <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
              Dream Job Now
            </span>
          </h1>
        </div>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto mb-8 animate-slide-up">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-2 border border-purple-500/50">
            <div className="flex items-center">
              {/* Search Input */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search jobs, skills or companies"
                  className="w-full bg-transparent text-white placeholder-gray-400 pl-12 pr-12 py-4 rounded-full border-0 focus:outline-none"
                />
                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 cursor-pointer" />
              </div>

              {/* Find Jobs Button */}
              <button 
                onClick={() => window.location.href = '/development?action=Find Jobs'}
                className="bg-gradient-to-r from-red-400 to-pink-400 hover:shadow-xl hover:scale-105 transition-all duration-300 text-white px-8 py-4 rounded-full font-semibold flex-shrink-0"
              >
                Find Jobs
              </button>
            </div>
          </div>
        </div>

        {/* Suggested Tags */}
        <div className="max-w-4xl mx-auto mb-16 animate-slide-up">
          <div className="flex flex-wrap justify-center gap-3">
            {suggestedTags.map((tag, index) => (
              <button
                key={index}
                className="bg-purple-500/50 backdrop-blur-sm hover:bg-purple-500/60 text-white px-4 py-2 rounded-full text-sm transition-all duration-300 hover:scale-105 relative"
              >
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent rounded-full"></div>
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="max-w-6xl mx-auto mb-16 animate-slide-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-purple-500/50 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 relative">
                  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {feature.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-slide-up">
          <p className="text-gray-300 text-lg leading-relaxed">
            Empowering education, coaching, and tech sectors to hire verified, 
            ready-to-join talent faster. Find high-paying jobs that match 
            your skills and goals with AI-powered screening, instant interview scheduling, and 24/7 job alerts.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="max-w-4xl mx-auto animate-slide-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-purple-500/50 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-purple-500/60 transition-all duration-300 group hover:scale-105 relative"
              >
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

HeroBanner.displayName = 'HeroBanner';

export default HeroBanner;