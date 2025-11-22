// Components/TeacherForm.tsx
'use client';

import { useState } from 'react';

interface TeacherFormProps {
  onContinue: () => void;
}

export default function TeacherForm({ onContinue }: TeacherFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    gender: 'Male',
    phone: '',
    email: '',
    nationalIdPhoto: null as File | null,
    profilePhoto: null as File | null,
    homeAddress: '',
    workAddress: '',
    password: '',
    confirmPassword: '',
    yearsOfExperience: '',
    preferredGrades: [] as string[],
    preferredSubjects: [] as string[],
    latencyLevel: '',
    desiredPrice: 300,
    isCurrentlyTeacher: 'Yes',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add validation
    onContinue();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-xl p-4 sm:p-6 md:p-8">
        {/* Step Indicator - Improved for mobile */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 md:mb-12 space-y-4 sm:space-y-0">
          {[
            { num: 1, label: 'Choose account type', active: false },
            { num: 2, label: 'Fill out details', active: true },
            { num: 3, label: 'Verify identity', active: false },
            { num: 4, label: 'Submit', active: false },
          ].map((step, index) => (
            <div key={step.num} className="flex items-center">
              <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-sm md:text-base ${
                step.active ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
              }`}>
                {step.num}
              </div>
              <span className={`ml-2 text-xs md:text-sm ${step.active ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>
                {step.label}
              </span>
              {index < 3 && (
                <div className="hidden sm:block mx-2 md:mx-4 w-8 md:w-16 h-0.5 bg-gray-300"></div>
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
          {/* Full Name & Gender */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
              <input
                type="text"
                required
                className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm md:text-base transition-all"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Gender *</label>
              <div className="flex gap-4 md:gap-6">
                <label className="flex items-center">
                  <input 
                    type="radio" 
                    name="gender" 
                    value="Male" 
                    checked={formData.gender === 'Male'}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-4 h-4 md:w-5 md:h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm md:text-base">Male</span>
                </label>
                <label className="flex items-center">
                  <input 
                    type="radio" 
                    name="gender" 
                    value="Female" 
                    checked={formData.gender === 'Female'}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-4 h-4 md:w-5 md:h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm md:text-base">Female</span>
                </label>
              </div>
            </div>
          </div>

          {/* Phone & Email */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
              <input
                type="tel"
                required
                className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm md:text-base transition-all"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
              <input
                type="email"
                required
                className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm md:text-base transition-all"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          {/* Photos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">National ID Photo *</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 md:p-6 text-center hover:border-blue-500 transition-all cursor-pointer">
                <input type="file" accept="image/*" required className="hidden" id="id-photo" />
                <label htmlFor="id-photo" className="cursor-pointer">
                  <div className="text-gray-500 text-sm md:text-base">Upload photo</div>
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Upload Profile Photo *</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 md:p-6 text-center hover:border-blue-500 transition-all cursor-pointer">
                <input type="file" accept="image/*" required className="hidden" id="profile-photo" />
                <label htmlFor="profile-photo" className="cursor-pointer">
                  <div className="text-gray-500 text-sm md:text-base">Upload photo</div>
                </label>
              </div>
            </div>
          </div>

          {/* Addresses */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Home Address *</label>
              <input
                type="text"
                required
                className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm md:text-base transition-all"
                value={formData.homeAddress}
                onChange={(e) => setFormData({ ...formData, homeAddress: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Work Address *</label>
              <input
                type="text"
                required
                className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm md:text-base transition-all"
                value={formData.workAddress}
                onChange={(e) => setFormData({ ...formData, workAddress: e.target.value })}
              />
            </div>
          </div>

          {/* Passwords */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Create Password *</label>
              <input
                type="password"
                required
                className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm md:text-base transition-all"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password *</label>
              <input
                type="password"
                required
                className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm md:text-base transition-all"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              />
            </div>
          </div>

          {/* Experience & Preferences */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Years of Experience *</label>
              <input
                type="number"
                min="0"
                required
                className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm md:text-base transition-all"
                value={formData.yearsOfExperience}
                onChange={(e) => setFormData({ ...formData, yearsOfExperience: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Grades</label>
              <select 
                multiple 
                className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm md:text-base transition-all h-24 md:h-auto"
                size={3}
              >
                <option>Grade 1</option>
                <option>Grade 2</option>
                <option>Grade 3</option>
                <option>Grade 4</option>
                <option>Grade 5</option>
              </select>
              <p className="text-xs text-gray-500 mt-1">Hold Ctrl to select multiple</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Subjects</label>
              <select 
                multiple 
                className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm md:text-base transition-all h-24 md:h-auto"
                size={3}
              >
                <option>Math</option>
                <option>Science</option>
                <option>English</option>
                <option>History</option>
                <option>Geography</option>
              </select>
              <p className="text-xs text-gray-500 mt-1">Hold Ctrl to select multiple</p>
            </div>
          </div>

          {/* Latency & Price */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Latency Level *</label>
              <input
                type="number"
                min="1"
                required
                className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm md:text-base transition-all"
                value={formData.latencyLevel}
                onChange={(e) => setFormData({ ...formData, latencyLevel: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Desired Price Per Hour</label>
              <div className="flex items-center gap-2">
                <button 
                  type="button" 
                  className="px-3 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-all text-sm md:text-base"
                >
                  −
                </button>
                <input
                  type="number"
                  value={formData.desiredPrice}
                  readOnly
                  className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg text-center text-sm md:text-base"
                />
                <button 
                  type="button" 
                  className="px-3 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-all text-sm md:text-base"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Current Teacher */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Are you currently a teacher? *</label>
            <div className="flex gap-4 md:gap-6">
              <label className="flex items-center">
                <input 
                  type="radio" 
                  name="currentTeacher" 
                  value="Yes" 
                  checked={formData.isCurrentlyTeacher === 'Yes'}
                  onChange={(e) => setFormData({ ...formData, isCurrentlyTeacher: e.target.value })}
                  className="w-4 h-4 md:w-5 md:h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm md:text-base">Yes</span>
              </label>
              <label className="flex items-center">
                <input 
                  type="radio" 
                  name="currentTeacher" 
                  value="No" 
                  checked={formData.isCurrentlyTeacher === 'No'}
                  onChange={(e) => setFormData({ ...formData, isCurrentlyTeacher: e.target.value })}
                  className="w-4 h-4 md:w-5 md:h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm md:text-base">No</span>
              </label>
            </div>
          </div>

          {/* Submit */}
          <div className="text-center pt-4 md:pt-6">
            <button
              type="submit"
              className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 md:px-12 md:py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm md:text-base"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}