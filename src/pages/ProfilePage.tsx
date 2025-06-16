import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Header from '../components/Header';
import { User, Mail, MapPin, Calendar, Edit2, Save, X, Camera, Star, Heart, Award } from 'lucide-react';

const ProfilePage: React.FC = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    location: 'Delhi, India',
    joinDate: 'January 2024',
    bio: 'Passionate about exploring sacred places and spiritual journeys. Love discovering the rich cultural heritage and architectural beauty of temples across India.'
  });

  const handleSave = () => {
    // Here you would typically save to backend
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      name: user?.name || '',
      email: user?.email || '',
      location: 'Delhi, India',
      joinDate: 'January 2024',
      bio: 'Passionate about exploring sacred places and spiritual journeys. Love discovering the rich cultural heritage and architectural beauty of temples across India.'
    });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 px-6 sm:px-8 py-8 sm:py-12 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>
            
            <div className="relative flex flex-col sm:flex-row items-center sm:items-start sm:justify-between">
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="relative group">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border-4 border-white/30 group-hover:scale-105 transition-transform duration-300">
                    <User className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 text-white" />
                  </div>
                  <button className="absolute -bottom-2 -right-2 bg-white text-orange-600 p-2 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <Camera className="h-3 w-3 sm:h-4 sm:w-4" />
                  </button>
                </div>
                <div className="text-white text-center sm:text-left">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">{user?.name}</h1>
                  <p className="text-orange-100 text-sm sm:text-base lg:text-lg mb-2">{user?.email}</p>
                  <div className="flex items-center justify-center sm:justify-start space-x-4 text-orange-100">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{formData.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">Since {formData.joinDate}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-2 sm:space-x-3 mt-4 sm:mt-0">
                {isEditing ? (
                  <>
                    <button
                      onClick={handleSave}
                      className="bg-white text-orange-600 px-4 py-2 sm:px-6 sm:py-3 rounded-xl hover:bg-gray-50 transition-colors flex items-center space-x-2 font-semibold shadow-lg text-sm sm:text-base"
                    >
                      <Save className="h-4 w-4" />
                      <span>Save</span>
                    </button>
                    <button
                      onClick={handleCancel}
                      className="bg-orange-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl hover:bg-orange-800 transition-colors flex items-center space-x-2 font-semibold shadow-lg text-sm sm:text-base"
                    >
                      <X className="h-4 w-4" />
                      <span>Cancel</span>
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="bg-white text-orange-600 px-4 py-2 sm:px-6 sm:py-3 rounded-xl hover:bg-gray-50 transition-colors flex items-center space-x-2 font-semibold shadow-lg text-sm sm:text-base"
                  >
                    <Edit2 className="h-4 w-4" />
                    <span>Edit Profile</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Profile Information */}
          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6 flex items-center">
                  <User className="h-5 w-5 mr-2 text-orange-500" />
                  Personal Information
                </h2>
                
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      />
                    ) : (
                      <div className="flex items-center space-x-3 text-gray-900 p-3 bg-gray-50 rounded-xl">
                        <User className="h-4 w-4 text-gray-500 flex-shrink-0" />
                        <span className="text-sm sm:text-base">{formData.name}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                    <div className="flex items-center space-x-3 text-gray-900 p-3 bg-gray-50 rounded-xl">
                      <Mail className="h-4 w-4 text-gray-500 flex-shrink-0" />
                      <span className="text-sm sm:text-base break-all">{formData.email}</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      />
                    ) : (
                      <div className="flex items-center space-x-3 text-gray-900 p-3 bg-gray-50 rounded-xl">
                        <MapPin className="h-4 w-4 text-gray-500 flex-shrink-0" />
                        <span className="text-sm sm:text-base">{formData.location}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Member Since</label>
                    <div className="flex items-center space-x-3 text-gray-900 p-3 bg-gray-50 rounded-xl">
                      <Calendar className="h-4 w-4 text-gray-500 flex-shrink-0" />
                      <span className="text-sm sm:text-base">{formData.joinDate}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">About Me</h2>
                
                {isEditing ? (
                  <textarea
                    value={formData.bio}
                    onChange={(e) => setFormData({...formData, bio: e.target.value})}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none text-sm sm:text-base"
                    placeholder="Tell us about yourself and your spiritual journey..."
                  />
                ) : (
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{formData.bio}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Statistics */}
            <div className="border-t border-gray-200 pt-6 sm:pt-8">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">
                My Spiritual Journey
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">12</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">Temples Visited</div>
                </div>
                
                <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Star className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">8</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">Reviews Written</div>
                </div>
                
                <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">24</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">Favorites</div>
                </div>
                
                <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Award className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">3</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">Achievements</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;