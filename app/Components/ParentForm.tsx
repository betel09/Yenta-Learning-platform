// Components/ParentForm.tsx
"use client";

import { useState } from 'react';
import { Upload } from 'lucide-react';

interface ParentFormProps {
  onContinue: () => void;
}

export default function ParentForm({ onContinue }: ParentFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    gender: 'male',
    phoneNumber: '',
    email: '',
    nationalIdPhoto: null as File | null,
    profilePhoto: null as File | null,
    homeAddress: '',
    workAddress: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'nationalIdPhoto' | 'profilePhoto') => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, [field]: file }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add validation later
    onContinue();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-xl p-4 sm:p-6 md:p-8">
        {/* Progress Steps - Improved for mobile */}
        <div className="flex justify-center mb-6 md:mb-8">
          <div className="flex items-center space-x-2 md:space-x-4">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-semibold text-xs md:text-sm ${
                  step === 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  {step}
                </div>
                {step < 4 && (
                  <div className="w-8 md:w-16 h-0.5 bg-gray-300 mx-1 md:mx-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          {/* Full Name & Gender */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="John Doe"
                className="w-full px-3 py-2 md:px-4 md:py-3 rounded-xl border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm md:text-base"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Gender *
              </label>
              <div className="flex items-center space-x-4 md:space-x-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === 'male'}
                    onChange={handleInputChange}
                    className="w-4 h-4 md:w-5 md:h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700 text-sm md:text-base">Male</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === 'female'}
                    onChange={handleInputChange}
                    className="w-4 h-4 md:w-5 md:h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700 text-sm md:text-base">Female</span>
                </label>
              </div>
            </div>
          </div>

          {/* Phone & Email */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="0982444444"
                className="w-full px-3 py-2 md:px-4 md:py-3 rounded-xl border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm md:text-base"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john@gmail.com"
                className="w-full px-3 py-2 md:px-4 md:py-3 rounded-xl border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm md:text-base"
                required
              />
            </div>
          </div>

          {/* Uploads */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                National ID Photo *
              </label>
              <label className="flex items-center justify-center w-full px-3 py-2 md:px-4 md:py-3 rounded-xl border-2 border-blue-300 border-dashed cursor-pointer hover:border-blue-500 transition-all">
                <Upload className="w-4 h-4 md:w-5 md:h-5 text-blue-500 mr-2" />
                <span className="text-blue-600 text-sm md:text-base">Upload photo</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, 'nationalIdPhoto')}
                  className="hidden"
                  required
                />
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload profile Photo
              </label>
              <label className="flex items-center justify-center w-full px-3 py-2 md:px-4 md:py-3 rounded-xl border-2 border-blue-300 border-dashed cursor-pointer hover:border-blue-500 transition-all">
                <Upload className="w-4 h-4 md:w-5 md:h-5 text-blue-500 mr-2" />
                <span className="text-blue-600 text-sm md:text-base">Upload photo</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, 'profilePhoto')}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* Addresses */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Home Address *
              </label>
              <input
                type="text"
                name="homeAddress"
                value={formData.homeAddress}
                onChange={handleInputChange}
                placeholder="Enter your home address"
                className="w-full px-3 py-2 md:px-4 md:py-3 rounded-xl border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm md:text-base"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Work Address *
              </label>
              <input
                type="text"
                name="workAddress"
                value={formData.workAddress}
                onChange={handleInputChange}
                placeholder="Enter your work address"
                className="w-full px-3 py-2 md:px-4 md:py-3 rounded-xl border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm md:text-base"
                required
              />
            </div>
          </div>

          {/* Passwords */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Create Password *
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="••••••••••••"
                className="w-full px-3 py-2 md:px-4 md:py-3 rounded-xl border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm md:text-base"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password *
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="••••••••••••"
                className="w-full px-3 py-2 md:px-4 md:py-3 rounded-xl border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm md:text-base"
                required
              />
            </div>
          </div>

          {/* Continue Button */}
          <div className="flex justify-center pt-4 md:pt-6">
            <button
              type="submit"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 md:py-4 md:px-12 rounded-xl text-base md:text-lg transition-all shadow-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}