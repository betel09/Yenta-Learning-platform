'use client';

import { useState, useEffect } from 'react';
interface StudentFormProps {
  onContinue: () => void;
}

export default function StudentForm({ onContinue }: StudentFormProps){
  const [formData, setFormData] = useState({
    studentName: '',
    studentGrade: '',
    birthDate: '',
    gender: '',
    isInternational: '',
    parentName: '',
    parentNationalId: '',
    address: '',
    parentEmail: '',
    parentPhone: '',
    password: '',
    confirmPassword: '',
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  if (!isClient) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-lg text-gray-600">Loading form...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Step Navigation */}
        <div className="flex items-center justify-between mb-8">
          <div className="text-yellow-500 text-3xl">⭐</div>
          <div className="flex items-center space-x-6">
            {[
              { number: 1, title: 'Choose account type', current: false },
              { number: 2, title: 'Fill out necessary detail', current: true },
              { number: 3, title: 'Verify identity', current: false },
              { number: 4, title: 'Submit', current: false }
            ].map((step) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  step.current ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400 border border-gray-300'
                }`}>
                  {step.number}
                </div>
                <span className={`ml-2 text-sm ${step.current ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>
                  {step.title}
                </span>
                {step.number < 4 && <div className="ml-4 w-6 h-0.5 bg-gray-300"></div>}
              </div>
            ))}
          </div>
        </div>

        {/* Form Card - Water Blue */}
        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl shadow-lg p-8 border border-blue-100">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Student Registration</h1>
          <p className="text-gray-600 mb-8">Please fill out all required information</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Student Full Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Student Full Name *
              </label>
              <input
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter student full name"
                required
              />
            </div>

            {/* Student Grade */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Student Grade *
              </label>
              <select
                name="studentGrade"
                value={formData.studentGrade}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Select Grade</option>
                <option value="1">Grade 1</option>
                <option value="2">Grade 2</option>
                <option value="3">Grade 3</option>
                <option value="4">Grade 4</option>
                <option value="5">Grade 5</option>
                <option value="6">Grade 6</option>
                <option value="7">Grade 7</option>
                <option value="8">Grade 8</option>
                <option value="9">Grade 9</option>
                <option value="10">Grade 10</option>
                <option value="11">Grade 11</option>
                <option value="12">Grade 12</option>
              </select>
            </div>

            {/* Select Birth Date */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Select Birth Date *
              </label>
              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Select Gender - Radio Buttons */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Select Gender *
              </label>
              <div className="flex space-x-6">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === 'male'}
                    onChange={() => handleRadioChange('gender', 'male')}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700">Male</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === 'female'}
                    onChange={() => handleRadioChange('gender', 'female')}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700">Female</span>
                </label>
              </div>
            </div>

            {/* Student Photo */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Student Photo *
              </label>
              <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors cursor-pointer">
                <span className="text-gray-500">Click to upload student photo</span>
              </div>
            </div>

            {/* Student ID Photo */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Student ID Photo *
              </label>
              <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors cursor-pointer">
                <span className="text-gray-500">Upload student ID photo</span>
              </div>
            </div>

            {/* Are You International Student - Radio Buttons */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Are You International Student? *
              </label>
              <div className="flex space-x-6">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="isInternational"
                    value="yes"
                    checked={formData.isInternational === 'yes'}
                    onChange={() => handleRadioChange('isInternational', 'yes')}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700">Yes</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="isInternational"
                    value="no"
                    checked={formData.isInternational === 'no'}
                    onChange={() => handleRadioChange('isInternational', 'no')}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700">No</span>
                </label>
              </div>
            </div>

            {/* Parent Full Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Parent Full Name *
              </label>
              <input
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="John Doe"
                required
              />
            </div>

            {/* Parent National ID Photo */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Parent National ID Photo *
              </label>
              <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors cursor-pointer">
                <span className="text-gray-500">Upload parent national ID photo</span>
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Address *
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your complete address"
                required
              />
            </div>

            {/* Parent Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Parent Email *
              </label>
              <input
                type="email"
                name="parentEmail"
                value={formData.parentEmail}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="john.doe@gmail.com"
                required
              />
            </div>

            {/* Parent Phone Number */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Parent Phone Number *
              </label>
              <input
                type="tel"
                name="parentPhone"
                value={formData.parentPhone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="098244444444"
                required
              />
            </div>

            {/* Create Password */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Create Password *
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Create a strong password"
                required
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Confirm Password *
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Confirm your password"
                required
              />
            </div>
          </div>

          {/* Continue Button */}
          <div className="text-center mt-8">
          <button 
            onClick={onContinue}
           className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-12 rounded-xl text-lg transition-colors shadow-lg"
           >
            Continue
          </button>
         </div>
        </div>
      </div>
    </div>
  );
}