import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { temples } from '../data/temples';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import TempleCard from '../components/TempleCard';
import { Star, Users, MapPin, Award, Shield, Heart, ArrowRight, Sparkles } from 'lucide-react';

const HomePage: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState(temples.slice(0, 6));

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults(temples.slice(0, 6));
      return;
    }
    
    const results = temples.filter(temple =>
      temple.name.toLowerCase().includes(query.toLowerCase()) ||
      temple.location.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleTempleClick = (templeId: string) => {
    if (!isAuthenticated) {
      alert('Please login to view temple details');
      navigate('/login');
      return;
    }
    navigate(`/temple/${templeId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-6 sm:mb-8">
            <div className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-orange-100 text-orange-800 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              Discover Sacred Places
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Find Your Perfect
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Spiritual Journey
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
              Explore thousands of sacred temples, discover nearby spiritual places, and plan meaningful pilgrimages with detailed information and interactive maps.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto mb-12 sm:mb-16 px-4">
            <SearchBar onSearch={handleSearch} className="shadow-2xl" />
          </div>
          
          {!isAuthenticated && (
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 px-4">
              <Link
                to="/signup"
                className="w-full sm:w-auto bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center group"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/login"
                className="w-full sm:w-auto bg-white/80 backdrop-blur-sm text-gray-900 px-8 py-4 rounded-2xl font-semibold hover:bg-white transition-all duration-300 shadow-xl border border-gray-200 hover:shadow-2xl transform hover:-translate-y-1"
              >
                Sign In
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Why Choose TempleSeeker?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              We provide comprehensive information about temples with modern features to enhance your spiritual journey and cultural exploration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="group text-center p-6 sm:p-8 rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Smart Location Services</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Find temples near you with precise GPS coordinates, real-time navigation, and distance calculations.</p>
            </div>
            
            <div className="group text-center p-6 sm:p-8 rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Star className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Verified Reviews</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Read authentic reviews and ratings from fellow devotees and spiritual seekers worldwide.</p>
            </div>
            
            <div className="group text-center p-6 sm:p-8 rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Rich Cultural Heritage</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Explore detailed histories, architectural significance, and cultural importance of each sacred place.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center p-4 sm:p-6 lg:p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-2">1000+</div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium">Temples Listed</div>
            </div>
            <div className="text-center p-4 sm:p-6 lg:p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-2">50K+</div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium">Happy Users</div>
            </div>
            <div className="text-center p-4 sm:p-6 lg:p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-2">4.8</div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium">Average Rating</div>
            </div>
            <div className="text-center p-4 sm:p-6 lg:p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-2">24/7</div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Temples */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white/40 to-orange-50/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Featured Sacred Places
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              {!isAuthenticated ? 'Sign in to explore detailed information about these magnificent temples and plan your spiritual journey' : 'Discover the most revered temples in our curated collection'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {searchResults.map((temple) => (
              <div key={temple.id} onClick={() => handleTempleClick(temple.id)} className="cursor-pointer">
                <TempleCard temple={temple} showLink={isAuthenticated} />
              </div>
            ))}
          </div>
          
          {!isAuthenticated && (
            <div className="text-center mt-12 sm:mt-16">
              <Link
                to="/login"
                className="inline-flex items-center bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 group"
              >
                Explore All Temples
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex justify-center items-center mb-6 sm:mb-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mr-3 sm:mr-4">
                <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold">TempleSeeker</span>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
              Connecting souls with sacred spaces, fostering spiritual growth, and preserving cultural heritage for future generations.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="text-center">
                <div className="text-lg sm:text-xl font-bold text-orange-400 mb-1">Discover</div>
                <div className="text-xs sm:text-sm text-gray-400">Sacred Places</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl font-bold text-orange-400 mb-1">Connect</div>
                <div className="text-xs sm:text-sm text-gray-400">With Community</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl font-bold text-orange-400 mb-1">Explore</div>
                <div className="text-xs sm:text-sm text-gray-400">Rich Heritage</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl font-bold text-orange-400 mb-1">Journey</div>
                <div className="text-xs sm:text-sm text-gray-400">Spiritually</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center">
            <p className="text-xs sm:text-sm text-gray-400">
              © 2024 TempleSeeker. Crafted with devotion for spiritual seekers worldwide.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;