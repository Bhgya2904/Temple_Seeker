import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { temples } from '../data/temples';
import Header from '../components/Header';
import TempleCard from '../components/TempleCard';
import { 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  History, 
  Info, 
  Navigation,
  ChevronRight,
  ArrowLeft,
  Users,
  Camera,
  Share2,
  Heart,
  Calendar
} from 'lucide-react';

const TempleDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('overview');
  
  const temple = temples.find(t => t.id === id);
  
  if (!temple) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-16">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Temple not found</h1>
            <Link to="/dashboard" className="text-orange-600 hover:text-orange-700 font-medium">
              ← Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const nearbyTemples = temples.filter(t => temple.nearbyTemples.includes(t.id));
  
  const openInMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${temple.coordinates.lat},${temple.coordinates.lng}`;
    window.open(url, '_blank');
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Info },
    { id: 'history', label: 'History', icon: History },
    { id: 'gallery', label: 'Gallery', icon: Camera }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Back Button */}
        <Link 
          to="/dashboard" 
          className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6 sm:mb-8 font-medium transition-colors group"
        >
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Dashboard
        </Link>

        <div className="flex flex-col xl:flex-row gap-6 sm:gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Hero Section */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden mb-6 sm:mb-8 border border-gray-100">
              <div className="relative">
                <img
                  src={temple.image}
                  alt={temple.name}
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6 flex space-x-2 sm:space-x-3">
                  <div className="bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg">
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
                      <span className="text-xs sm:text-sm font-semibold text-gray-800">{temple.rating}</span>
                    </div>
                  </div>
                  <button className="bg-white/95 backdrop-blur-sm rounded-full p-2 sm:p-2.5 shadow-lg hover:bg-white transition-colors">
                    <Share2 className="h-4 w-4 text-gray-600" />
                  </button>
                  <button className="bg-white/95 backdrop-blur-sm rounded-full p-2 sm:p-2.5 shadow-lg hover:bg-white transition-colors">
                    <Heart className="h-4 w-4 text-gray-600 hover:text-red-500 transition-colors" />
                  </button>
                </div>
              </div>
              
              <div className="p-4 sm:p-6 lg:p-8">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {temple.name}
                </h1>
                <div className="flex items-center text-gray-600 mb-4 sm:mb-6">
                  <MapPin className="h-5 w-5 mr-2 text-orange-500 flex-shrink-0" />
                  <span className="text-sm sm:text-base lg:text-lg">{temple.location}</span>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div className="flex items-center text-gray-500">
                    <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
                    <span className="text-sm sm:text-base font-medium">{temple.rating} ({temple.reviews.toLocaleString()} reviews)</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-4 w-4 mr-1 text-green-500" />
                    <span className="text-sm sm:text-base font-medium">{temple.timings}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Calendar className="h-4 w-4 mr-1 text-blue-500" />
                    <span className="text-sm sm:text-base font-medium">Open Today</span>
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed">
                  {temple.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button
                    onClick={openInMaps}
                    className="flex-1 sm:flex-none bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 sm:py-4 rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300 flex items-center justify-center space-x-2 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <Navigation className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>Get Directions</span>
                  </button>
                  <button className="flex-1 sm:flex-none bg-white border-2 border-orange-600 text-orange-600 px-6 py-3 sm:py-4 rounded-xl hover:bg-orange-50 transition-colors font-semibold">
                    Plan Visit
                  </button>
                </div>
              </div>
            </div>

            {/* Content Tabs */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-100">
              {/* Tab Navigation */}
              <div className="border-b border-gray-200">
                <nav className="flex overflow-x-auto">
                  {tabs.map((tab) => {
                    const IconComponent = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center space-x-2 px-4 sm:px-6 py-4 sm:py-5 border-b-2 font-medium text-sm sm:text-base whitespace-nowrap transition-colors ${
                          activeTab === tab.id
                            ? 'border-orange-600 text-orange-600 bg-orange-50/50'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <IconComponent className="h-4 w-4" />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
              
              {/* Tab Content */}
              <div className="p-4 sm:p-6 lg:p-8">
                {activeTab === 'overview' && (
                  <div className="space-y-6 sm:space-y-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6 flex items-center">
                          <Phone className="h-5 w-5 mr-2 text-orange-500" />
                          Contact Information
                        </h3>
                        <div className="space-y-3 sm:space-y-4">
                          <div className="flex items-center text-gray-600 p-3 bg-gray-50 rounded-lg">
                            <Phone className="h-4 w-4 mr-3 text-green-500 flex-shrink-0" />
                            <span className="text-sm sm:text-base">{temple.contact.phone}</span>
                          </div>
                          <div className="flex items-center text-gray-600 p-3 bg-gray-50 rounded-lg">
                            <Mail className="h-4 w-4 mr-3 text-blue-500 flex-shrink-0" />
                            <span className="text-sm sm:text-base break-all">{temple.contact.email}</span>
                          </div>
                          <div className="flex items-start text-gray-600 p-3 bg-gray-50 rounded-lg">
                            <MapPin className="h-4 w-4 mr-3 mt-1 text-red-500 flex-shrink-0" />
                            <span className="text-sm sm:text-base leading-relaxed">{temple.contact.address}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6 flex items-center">
                          <Clock className="h-5 w-5 mr-2 text-orange-500" />
                          Visiting Hours
                        </h3>
                        <div className="p-4 sm:p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200">
                          <div className="flex items-center text-green-700 mb-2">
                            <Clock className="h-4 w-4 mr-2" />
                            <span className="font-semibold text-sm sm:text-base">Open Today</span>
                          </div>
                          <p className="text-lg sm:text-xl font-bold text-gray-900">{temple.timings}</p>
                          <p className="text-xs sm:text-sm text-gray-600 mt-2">
                            Please check for special occasions and festivals
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'history' && (
                  <div className="space-y-6 sm:space-y-8">
                    <div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6 flex items-center">
                        <History className="h-5 w-5 sm:h-6 sm:w-6 mr-2 text-orange-500" />
                        Temple History & Heritage
                      </h3>
                      <div className="prose prose-gray max-w-none">
                        <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                          {temple.history}
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6">
                        Historical Gallery
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        {temple.gallery.slice(0, 2).map((image, index) => (
                          <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg">
                            <img
                              src={image}
                              alt={`${temple.name} historical view ${index + 1}`}
                              className="w-full h-48 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'gallery' && (
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6 flex items-center">
                      <Camera className="h-5 w-5 sm:h-6 sm:w-6 mr-2 text-orange-500" />
                      Temple Gallery
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                      {temple.gallery.map((image, index) => (
                        <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                          <img
                            src={image}
                            alt={`${temple.name} view ${index + 1}`}
                            className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                          />
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <Camera className="h-8 w-8 text-white" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="xl:w-80 space-y-6">
            {/* Quick Actions */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-4 sm:p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 sm:mb-6">Quick Actions</h3>
              <div className="space-y-3">
                <button
                  onClick={openInMaps}
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-3 sm:py-4 rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300 flex items-center justify-center space-x-2 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Navigation className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Get Directions</span>
                </button>
                
                <button
                  onClick={() => setActiveTab('history')}
                  className="w-full bg-gray-100 text-gray-700 px-4 py-3 sm:py-4 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2 font-medium"
                >
                  <History className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>View History</span>
                </button>

                <button className="w-full bg-blue-50 text-blue-700 px-4 py-3 sm:py-4 rounded-xl hover:bg-blue-100 transition-colors flex items-center justify-center space-x-2 font-medium">
                  <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Plan Visit</span>
                </button>
              </div>
            </div>
            
            {/* Nearby Temples */}
            {nearbyTemples.length > 0 && (
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-4 sm:p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 sm:mb-6">
                  Nearby Sacred Places
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {nearbyTemples.map((nearbyTemple) => (
                    <Link
                      key={nearbyTemple.id}
                      to={`/temple/${nearbyTemple.id}`}
                      className="block p-3 sm:p-4 border border-gray-200 rounded-xl hover:border-orange-300 hover:bg-orange-50 transition-all duration-300 group"
                    >
                      <div className="flex items-center space-x-3">
                        <img
                          src={nearbyTemple.image}
                          alt={nearbyTemple.name}
                          className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 text-sm sm:text-base line-clamp-1 group-hover:text-orange-600 transition-colors">
                            {nearbyTemple.name}
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-600 line-clamp-1">{nearbyTemple.location}</p>
                          <div className="flex items-center mt-1">
                            <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                            <span className="text-xs text-gray-500 font-medium">{nearbyTemple.rating}</span>
                          </div>
                        </div>
                        <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TempleDetailsPage;