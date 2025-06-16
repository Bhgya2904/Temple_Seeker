import React, { useState } from 'react';
import { temples } from '../data/temples';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import TempleCard from '../components/TempleCard';
import { Filter, SortAsc, Grid, List, MapPin, Star } from 'lucide-react';

const DashboardPage: React.FC = () => {
  const [filteredTemples, setFilteredTemples] = useState(temples);
  const [sortBy, setSortBy] = useState('name');
  const [filterBy, setFilterBy] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setFilteredTemples(temples);
      return;
    }
    
    const results = temples.filter(temple =>
      temple.name.toLowerCase().includes(query.toLowerCase()) ||
      temple.location.toLowerCase().includes(query.toLowerCase()) ||
      temple.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredTemples(results);
  };

  const handleSort = (criteria: string) => {
    setSortBy(criteria);
    const sorted = [...filteredTemples].sort((a, b) => {
      switch (criteria) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'rating':
          return b.rating - a.rating;
        case 'reviews':
          return b.reviews - a.reviews;
        case 'location':
          return a.location.localeCompare(b.location);
        default:
          return 0;
      }
    });
    setFilteredTemples(sorted);
  };

  const handleFilter = (criteria: string) => {
    setFilterBy(criteria);
    let filtered = temples;
    
    switch (criteria) {
      case 'high-rated':
        filtered = temples.filter(temple => temple.rating >= 4.5);
        break;
      case 'popular':
        filtered = temples.filter(temple => temple.reviews >= 10000);
        break;
      case 'all':
      default:
        filtered = temples;
        break;
    }
    
    setFilteredTemples(filtered);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Header Section */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
            Discover Sacred Temples
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl">
            Explore thousands of temples, find spiritual guidance, and plan meaningful pilgrimages with our comprehensive database.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:space-x-6">
            {/* Search Bar */}
            <div className="flex-1">
              <SearchBar onSearch={handleSearch} className="shadow-xl" />
            </div>
            
            {/* Filter Controls */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => handleSort(e.target.value)}
                  className="appearance-none bg-white/90 backdrop-blur-sm px-4 py-3 pr-10 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 shadow-lg text-sm sm:text-base font-medium min-w-[140px] sm:min-w-[160px]"
                >
                  <option value="name">Sort by Name</option>
                  <option value="rating">Sort by Rating</option>
                  <option value="reviews">Sort by Reviews</option>
                  <option value="location">Sort by Location</option>
                </select>
                <SortAsc className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>
              
              {/* Filter Dropdown */}
              <div className="relative">
                <select
                  value={filterBy}
                  onChange={(e) => handleFilter(e.target.value)}
                  className="appearance-none bg-white/90 backdrop-blur-sm px-4 py-3 pr-10 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 shadow-lg text-sm sm:text-base font-medium min-w-[140px] sm:min-w-[160px]"
                >
                  <option value="all">All Temples</option>
                  <option value="high-rated">High Rated (4.5+)</option>
                  <option value="popular">Popular (10K+ reviews)</option>
                </select>
                <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>

              {/* View Mode Toggle */}
              <div className="flex bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 shadow-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    viewMode === 'grid'
                      ? 'bg-orange-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                  }`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    viewMode === 'list'
                      ? 'bg-orange-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-0">
            <span className="font-semibold text-gray-900">{filteredTemples.length}</span> temple{filteredTemples.length !== 1 ? 's' : ''} found
          </p>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
              <span>Verified ratings</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 text-orange-500 mr-1" />
              <span>GPS locations</span>
            </div>
          </div>
        </div>

        {/* Temple Grid/List */}
        {filteredTemples.length > 0 ? (
          <div className={
            viewMode === 'grid'
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
              : "space-y-6"
          }>
            {filteredTemples.map((temple) => (
              <TempleCard key={temple.id} temple={temple} showLink={true} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 sm:py-24">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <MapPin className="h-8 w-8 sm:h-10 sm:w-10 text-gray-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">No temples found</h3>
              <p className="text-sm sm:text-base text-gray-500 mb-6">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setFilteredTemples(temples);
                  setFilterBy('all');
                }}
                className="bg-orange-600 text-white px-6 py-3 rounded-xl hover:bg-orange-700 transition-colors font-medium shadow-lg"
              >
                Show All Temples
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;