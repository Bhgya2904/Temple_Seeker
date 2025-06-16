import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  onSearch, 
  placeholder = "Search temples by name, location, or deity...",
  className = ""
}) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className={`relative w-full ${className}`}>
      <div className="relative">
        <Search className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 h-5 w-5 sm:h-6 sm:w-6 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-12 sm:pl-16 pr-16 sm:pr-20 py-4 sm:py-5 lg:py-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 text-gray-900 placeholder-gray-500 text-sm sm:text-base lg:text-lg transition-all duration-300"
        />
        <button
          type="submit"
          className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm sm:text-base"
        >
          <span className="hidden sm:inline">Search</span>
          <Search className="h-4 w-4 sm:hidden" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;