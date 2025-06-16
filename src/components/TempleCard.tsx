import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Users, Clock, ArrowRight } from 'lucide-react';
import { Temple } from '../data/temples';

interface TempleCardProps {
  temple: Temple;
  showLink?: boolean;
}

const TempleCard: React.FC<TempleCardProps> = ({ temple, showLink = false }) => {
  const CardContent = () => (
    <div className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-orange-200">
      <div className="relative overflow-hidden">
        <img
          src={temple.image}
          alt={temple.name}
          className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg">
          <div className="flex items-center space-x-1">
            <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
            <span className="text-xs sm:text-sm font-semibold text-gray-800">{temple.rating}</span>
          </div>
        </div>
        {showLink && (
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <div className="bg-orange-600 text-white p-2 rounded-full shadow-lg hover:bg-orange-700 transition-colors">
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        )}
      </div>
      
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
          {temple.name}
        </h3>
        <div className="flex items-center text-gray-600 mb-3 sm:mb-4">
          <MapPin className="h-4 w-4 mr-2 text-orange-500 flex-shrink-0" />
          <span className="text-sm sm:text-base line-clamp-1">{temple.location}</span>
        </div>
        <p className="text-gray-700 text-sm sm:text-base mb-4 sm:mb-6 line-clamp-3 leading-relaxed">
          {temple.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-gray-500">
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span className="text-xs sm:text-sm font-medium">{temple.reviews.toLocaleString()}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span className="text-xs sm:text-sm font-medium">Open</span>
            </div>
          </div>
          {showLink && (
            <div className="text-orange-600 hover:text-orange-700 font-semibold text-sm group-hover:translate-x-1 transition-transform duration-300 flex items-center">
              <span className="hidden sm:inline">Explore</span>
              <ArrowRight className="h-4 w-4 ml-1" />
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return showLink ? (
    <Link to={`/temple/${temple.id}`} className="block">
      <CardContent />
    </Link>
  ) : (
    <CardContent />
  );
};

export default TempleCard;