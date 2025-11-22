'use client';

import { useState, useEffect } from 'react';
import { Upload, X } from 'lucide-react';

interface StudentFormProps {
  onContinue: () => void;
  onStepClick: (stepNumber: number) => void;
}

interface FileWithPreview {
  file: File;
  preview: string;
}

export default function StudentForm({ onContinue, onStepClick }: StudentFormProps) {
  const [formData, setFormData] = useState({
    studentName: '',
    studentGrade: '',
    birthDate: '',
    gender: '',
    isInternational: '',
    parentName: '',
    address: '',
    parentEmail: '',
    parentPhone: '',
    password: '',
    confirmPassword: '',
  });

  const [files, setFiles] = useState({
    studentPhoto: null as FileWithPreview | null,
    studentIdPhoto: null as FileWithPreview | null,
    parentIdPhoto: null as FileWithPreview | null,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileUpload = (fieldName: keyof typeof files, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setErrors(prev => ({ ...prev, [fieldName]: 'Please upload an image file' }));
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, [fieldName]: 'File size must be less than 5MB' }));
        return;
      }

      const preview = URL.createObjectURL(file);
      setFiles(prev => ({
        ...prev,
        [fieldName]: { file, preview }
      }));

      if (errors[fieldName]) {
        setErrors(prev => ({ ...prev, [fieldName]: '' }));
      }
    }
  };

  const removeFile = (fieldName: keyof typeof files) => {
    if (files[fieldName]?.preview) {
      URL.revokeObjectURL(files[fieldName]!.preview);
    }
    setFiles(prev => ({
      ...prev,
      [fieldName]: null
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.studentName.trim()) newErrors.studentName = 'Please fill student name';
    if (!formData.studentGrade) newErrors.studentGrade = 'Please select grade';
    if (!formData.birthDate) newErrors.birthDate = 'Please select birth date';
    if (!formData.gender) newErrors.gender = 'Please select gender';
    if (!formData.isInternational) newErrors.isInternational = 'Please select if international student';
    if (!formData.parentName.trim()) newErrors.parentName = 'Please fill parent name';
    if (!formData.address.trim()) newErrors.address = 'Please fill address';
    if (!formData.parentEmail.trim()) newErrors.parentEmail = 'Please fill email';
    if (!formData.parentPhone.trim()) newErrors.parentPhone = 'Please fill phone number';
    if (!formData.password) newErrors.password = 'Please create password';
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Please confirm password';

    if (!files.studentPhoto) newErrors.studentPhoto = 'Please upload student photo';
    if (!files.studentIdPhoto) newErrors.studentIdPhoto = 'Please upload student ID photo';
    if (!files.parentIdPhoto) newErrors.parentIdPhoto = 'Please upload parent ID photo';

    if (formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (formData.parentEmail && !/\S+@\S+\.\S+/.test(formData.parentEmail)) {
      newErrors.parentEmail = 'Please enter a valid email';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form data:', formData);
      console.log('Files:', files);
      onContinue();
    } else {
      const firstErrorField = document.querySelector('[data-error="true"]');
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  const handleStepClick = (stepNumber: number) => {
    onStepClick?.(stepNumber);
  };

  useEffect(() => {
    return () => {
      Object.values(files).forEach(file => {
        if (file?.preview) {
          URL.revokeObjectURL(file.preview);
        }
      });
    };
  }, [files]);

  if (!isClient) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-lg text-gray-600">Loading form...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-3 sm:p-4 lg:p-6">
      <div className="max-w-4xl w-full">
        {/* Step Navigation - Fully Responsive */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 sm:mb-8 space-y-4 sm:space-y-0">
          <div className="text-yellow-500 text-2xl sm:text-3xl">⭐</div>
          
          {/* Mobile Steps - Compact */}
          <div className="sm:hidden w-full">
            <div className="flex justify-between items-center w-full">
              {[1, 2, 3, 4].map((stepNumber) => (
                <div key={stepNumber} className="flex flex-col items-center">
                  <div 
                    onClick={() => handleStepClick(stepNumber)}
                    className={`flex items-center justify-center w-8 h-8 rounded-full cursor-pointer transition-all ${
                      stepNumber === 2 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-gray-100 text-gray-600 border border-gray-300 hover:bg-gray-200 hover:border-gray-400'
                    }`}
                  >
                    {stepNumber}
                  </div>
                  {stepNumber === 2 && (
                    <span className="text-xs text-blue-600 font-medium mt-1">Details</span>
                  )}
                </div>
              ))}
            </div>
            
            {/* Mobile Step Titles */}
            <div className="grid grid-cols-4 gap-1 mt-2 text-center">
              {['Choose', 'Details', 'Verify', 'Submit'].map((title, index) => (
                <div 
                  key={index} 
                  className={`text-xs ${
                    index === 1 ? 'text-blue-600 font-medium' : 'text-gray-500'
                  } truncate`}
                >
                  {title}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Steps */}
          <div className="hidden sm:flex items-center space-x-2 lg:space-x-4 xl:space-x-6">
            {[
              { number: 1, title: 'Choose account type', current: false },
              { number: 2, title: 'Fill out details', current: true },
              { number: 3, title: 'Verify identity', current: false },
              { number: 4, title: 'Submit', current: false }
            ].map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div 
                  onClick={() => handleStepClick(step.number)}
                  className={`flex items-center justify-center w-8 h-8 rounded-full cursor-pointer transition-all ${
                    step.current 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-100 text-gray-600 border border-gray-300 hover:bg-gray-200 hover:border-gray-400'
                  }`}
                >
                  {step.number}
                </div>
                <span 
                  onClick={() => handleStepClick(step.number)}
                  className={`ml-2 text-sm cursor-pointer transition-colors ${
                    step.current 
                      ? 'text-blue-600 font-medium hover:text-blue-700' 
                      : 'text-gray-600 hover:text-gray-800'
                  } hidden lg:inline`}
                >
                  {step.title}
                </span>
                <span 
                  onClick={() => handleStepClick(step.number)}
                  className={`ml-2 text-sm cursor-pointer transition-colors ${
                    step.current 
                      ? 'text-blue-600 font-medium hover:text-blue-700' 
                      : 'text-gray-600 hover:text-gray-800'
                  } lg:hidden`}
                >
                  {step.number === 1 ? 'Choose' : 
                   step.number === 2 ? 'Details' : 
                   step.number === 3 ? 'Verify' : 'Submit'}
                </span>
                {index < 3 && <div className="ml-2 lg:ml-4 w-4 lg:w-6 h-0.5 bg-gray-300"></div>}
              </div>
            ))}
          </div>
        </div>

        {/* Alternative Mobile Progress Bar */}
        <div className="sm:hidden bg-gray-50 rounded-lg p-3 mb-6">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">Step 2 of 4</span>
            <span className="text-blue-600 font-medium">Fill Details</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div className="bg-blue-600 h-2 rounded-full w-2/4"></div>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-blue-100">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2 text-center">Student Registration</h1>
          <p className="text-gray-600 mb-6 sm:mb-8 text-center text-sm sm:text-base">
            Please fill out all required information
          </p>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Student Full Name */}
              <div className="md:col-span-2" data-error={!!errors.studentName}>
                <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                  Student Full Name *
                </label>
                <input
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base ${
                    errors.studentName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter student full name"
                />
                {errors.studentName && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.studentName}</p>
                )}
              </div>

              {/* Student Grade */}
              <div data-error={!!errors.studentGrade}>
                <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                  Student Grade *
                </label>
                <select
                  name="studentGrade"
                  value={formData.studentGrade}
                  onChange={handleChange}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base ${
                    errors.studentGrade ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select Grade</option>
                  {Array.from({ length: 12 }, (_, i) => i + 1).map(grade => (
                    <option key={grade} value={grade.toString()}>Grade {grade}</option>
                  ))}
                </select>
                {errors.studentGrade && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.studentGrade}</p>
                )}
              </div>

              {/* Select Birth Date */}
              <div data-error={!!errors.birthDate}>
                <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                  Birth Date *
                </label>
                <input
                  type="date"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base ${
                    errors.birthDate ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.birthDate && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.birthDate}</p>
                )}
              </div>

              {/* Select Gender - Radio Buttons */}
              <div data-error={!!errors.gender}>
                <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                  Gender *
                </label>
                <div className="flex space-x-4 sm:space-x-6">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={formData.gender === 'male'}
                      onChange={() => handleRadioChange('gender', 'male')}
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-gray-700 text-sm sm:text-base">Male</span>
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
                    <span className="text-gray-700 text-sm sm:text-base">Female</span>
                  </label>
                </div>
                {errors.gender && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.gender}</p>
                )}
              </div>

              {/* Student Photo Upload */}
              <div data-error={!!errors.studentPhoto}>
                <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                  Student Photo *
                </label>
                <div className={`border-2 border-dashed rounded-lg p-3 text-center transition-colors cursor-pointer ${
                  errors.studentPhoto ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white hover:border-blue-400'
                }`}>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload('studentPhoto', e)}
                    className="hidden"
                    id="studentPhoto"
                  />
                  <label htmlFor="studentPhoto" className="cursor-pointer">
                    {files.studentPhoto ? (
                      <div className="relative">
                        <img
                          src={files.studentPhoto.preview}
                          alt="Student photo preview"
                          className="mx-auto h-16 sm:h-20 w-16 sm:w-20 object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeFile('studentPhoto');
                          }}
                          className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-0.5 hover:bg-red-600"
                        >
                          <X className="w-3 h-3" />
                        </button>
                        <p className="text-xs text-gray-600 mt-1 truncate">
                          {files.studentPhoto.file.name}
                        </p>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center space-y-1">
                        <Upload className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                        <span className="text-xs sm:text-sm text-gray-500">Upload photo</span>
                        <span className="text-xs text-gray-400">Max 5MB</span>
                      </div>
                    )}
                  </label>
                </div>
                {errors.studentPhoto && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.studentPhoto}</p>
                )}
              </div>

              {/* Student ID Photo Upload */}
              <div data-error={!!errors.studentIdPhoto}>
                <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                  Student ID Photo *
                </label>
                <div className={`border-2 border-dashed rounded-lg p-3 text-center transition-colors cursor-pointer ${
                  errors.studentIdPhoto ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white hover:border-blue-400'
                }`}>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload('studentIdPhoto', e)}
                    className="hidden"
                    id="studentIdPhoto"
                  />
                  <label htmlFor="studentIdPhoto" className="cursor-pointer">
                    {files.studentIdPhoto ? (
                      <div className="relative">
                        <img
                          src={files.studentIdPhoto.preview}
                          alt="Student ID photo preview"
                          className="mx-auto h-16 sm:h-20 w-16 sm:w-20 object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeFile('studentIdPhoto');
                          }}
                          className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-0.5 hover:bg-red-600"
                        >
                          <X className="w-3 h-3" />
                        </button>
                        <p className="text-xs text-gray-600 mt-1 truncate">
                          {files.studentIdPhoto.file.name}
                        </p>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center space-y-1">
                        <Upload className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                        <span className="text-xs sm:text-sm text-gray-500">Upload ID photo</span>
                        <span className="text-xs text-gray-400">Max 5MB</span>
                      </div>
                    )}
                  </label>
                </div>
                {errors.studentIdPhoto && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.studentIdPhoto}</p>
                )}
              </div>

              {/* International Student */}
              <div className="md:col-span-2" data-error={!!errors.isInternational}>
                <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                  International Student? *
                </label>
                <div className="flex space-x-4 sm:space-x-6">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="isInternational"
                      value="yes"
                      checked={formData.isInternational === 'yes'}
                      onChange={() => handleRadioChange('isInternational', 'yes')}
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-gray-700 text-sm sm:text-base">Yes</span>
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
                    <span className="text-gray-700 text-sm sm:text-base">No</span>
                  </label>
                </div>
                {errors.isInternational && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.isInternational}</p>
                )}
              </div>

              {/* Parent Full Name */}
              <div className="md:col-span-2" data-error={!!errors.parentName}>
                <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                  Parent Full Name *
                </label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base ${
                    errors.parentName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="John Doe"
                />
                {errors.parentName && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.parentName}</p>
                )}
              </div>

              {/* Parent National ID Photo Upload */}
              <div className="md:col-span-2" data-error={!!errors.parentIdPhoto}>
                <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                  Parent National ID Photo *
                </label>
                <div className={`border-2 border-dashed rounded-lg p-3 text-center transition-colors cursor-pointer ${
                  errors.parentIdPhoto ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white hover:border-blue-400'
                }`}>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload('parentIdPhoto', e)}
                    className="hidden"
                    id="parentIdPhoto"
                  />
                  <label htmlFor="parentIdPhoto" className="cursor-pointer">
                    {files.parentIdPhoto ? (
                      <div className="relative">
                        <img
                          src={files.parentIdPhoto.preview}
                          alt="Parent ID photo preview"
                          className="mx-auto h-16 sm:h-20 w-16 sm:w-20 object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeFile('parentIdPhoto');
                          }}
                          className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-0.5 hover:bg-red-600"
                        >
                          <X className="w-3 h-3" />
                        </button>
                        <p className="text-xs text-gray-600 mt-1 truncate">
                          {files.parentIdPhoto.file.name}
                        </p>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center space-y-1">
                        <Upload className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                        <span className="text-xs sm:text-sm text-gray-500">Upload parent ID</span>
                        <span className="text-xs text-gray-400">Max 5MB</span>
                      </div>
                    )}
                  </label>
                </div>
                {errors.parentIdPhoto && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.parentIdPhoto}</p>
                )}
              </div>

              {/* Address */}
              <div className="md:col-span-2" data-error={!!errors.address}>
                <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                  Address *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base ${
                    errors.address ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your complete address"
                />
                {errors.address && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.address}</p>
                )}
              </div>

              {/* Parent Email */}
              <div data-error={!!errors.parentEmail}>
                <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                  Parent Email *
                </label>
                <input
                  type="email"
                  name="parentEmail"
                  value={formData.parentEmail}
                  onChange={handleChange}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base ${
                    errors.parentEmail ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="john.doe@gmail.com"
                />
                {errors.parentEmail && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.parentEmail}</p>
                )}
              </div>

              {/* Parent Phone Number */}
              <div data-error={!!errors.parentPhone}>
                <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                  Parent Phone Number *
                </label>
                <input
                  type="tel"
                  name="parentPhone"
                  value={formData.parentPhone}
                  onChange={handleChange}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base ${
                    errors.parentPhone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="098244444444"
                />
                {errors.parentPhone && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.parentPhone}</p>
                )}
              </div>

              {/* Create Password */}
              <div data-error={!!errors.password}>
                <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                  Create Password *
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base ${
                    errors.password ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Create a strong password"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password */}
              <div data-error={!!errors.confirmPassword}>
                <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                  Confirm Password *
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base ${
                    errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Confirm your password"
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.confirmPassword}</p>
                )}
              </div>
            </div>

            {/* Continue Button */}
            <div className="text-center mt-6 sm:mt-8">
              <button 
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 sm:py-4 px-8 sm:px-12 rounded-lg sm:rounded-xl text-base sm:text-lg transition-colors shadow-lg w-full sm:w-auto"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}