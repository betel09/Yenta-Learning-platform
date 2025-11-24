"use client";

import { useState, useEffect } from 'react';
import StudentForm from '../Components/studentform';
import TeacherForm from '../Components/TeacherForm';
import ParentForm from '../Components/ParentForm';
import VerifyIdentity from '../Components/VerifyIdentity';
import SubmitForm from '../Components/SubmitForm';

export default function LoginPage() {
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [currentStep, setCurrentStep] = useState<'select' | 'form' | 'verify' | 'submit'>('select');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Add this function for step navigation
  const handleStepClick = (stepNumber: number) => {
    switch (stepNumber) {
      case 1:
        setCurrentStep('select');
        break;
      case 2:
        if (selectedRole) {
          setCurrentStep('form');
        }
        break;
      case 3:
        if (selectedRole) {
          setCurrentStep('verify');
        }
        break;
      case 4:
        if (selectedRole) {
          setCurrentStep('submit');
        }
        break;
    }
  };

  // Prevent hydration mismatch
  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="text-lg text-gray-600">Loading...</div>
      </div>
    );
  }

  // === STEP: FORM ===
  if (currentStep === 'form') {
    if (selectedRole === 'student') {
      return (
        <StudentForm 
          onContinue={() => setCurrentStep('verify')} 
          onStepClick={handleStepClick}
          selectedRole={selectedRole}
        />
      );
    }
    if (selectedRole === 'teacher') {
      return (
        <TeacherForm 
          onContinue={() => setCurrentStep('verify')} 
          onStepClick={handleStepClick}
          selectedRole={selectedRole}
        />
      );
    }
    if (selectedRole === 'parent') {
      return (
        <ParentForm 
          onContinue={() => setCurrentStep('verify')} 
          onStepClick={handleStepClick}
          selectedRole={selectedRole}
        />
      );
    }
    // Fallback
    return (
      <StudentForm 
        onContinue={() => setCurrentStep('verify')} 
        onStepClick={handleStepClick}
        selectedRole={selectedRole}
      />
    );
  }

  // === STEP: VERIFY ===
  if (currentStep === 'verify') {
    return (
      <VerifyIdentity 
        onContinue={() => setCurrentStep('submit')} 
        onStepClick={handleStepClick}
        selectedRole={selectedRole}
      />
    );
  }

  // === STEP: SUBMIT ===
  if (currentStep === 'submit') {
    return (
      <SubmitForm 
        selectedRole={selectedRole} 
        onStepClick={handleStepClick}
      />
    );
  }

  // === STEP: SELECT ROLE ===
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-3 sm:p-4 lg:p-6">
      <div className="max-w-6xl w-full mx-auto">
        {/* Step Navigation - Mobile Responsive */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 sm:mb-12 lg:mb-16 space-y-4 sm:space-y-0">
          <div className="text-yellow-500 text-2xl sm:text-3xl">⭐</div>
          
          {/* Mobile Steps - Compact */}
          <div className="sm:hidden w-full">
            <div className="flex justify-between items-center w-full px-4">
              {[1, 2, 3, 4].map((stepNumber) => (
                <div key={stepNumber} className="flex flex-col items-center">
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                    stepNumber === 1 ? 'bg-blue-600 text-white' : 'bg-white text-gray-400 border-2 border-gray-300'
                  }`}>
                    <span className="font-semibold text-sm">{stepNumber}</span>
                  </div>
                  {stepNumber === 1 && (
                    <span className="text-xs text-blue-600 font-medium mt-1">Choose</span>
                  )}
                </div>
              ))}
            </div>
            
            {/* Mobile Step Titles */}
            <div className="grid grid-cols-4 gap-1 mt-2 text-center px-2">
              {['Choose', 'Details', 'Verify', 'Submit'].map((title, index) => (
                <div 
                  key={index} 
                  className={`text-xs ${
                    index === 0 ? 'text-blue-600 font-medium' : 'text-gray-500'
                  } truncate`}
                >
                  {title}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Steps */}
          <div className="hidden sm:flex items-center space-x-4 lg:space-x-8">
            {[
              { number: 1, title: 'Choose account type', current: true },
              { number: 2, title: 'Fill out necessary detail', current: false },
              { number: 3, title: 'Verify identity', current: false },
              { number: 4, title: 'Submit', current: false }
            ].map((step) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 rounded-full ${
                  step.current ? 'bg-blue-600 text-white border-2 border-blue-600' : 'bg-white text-gray-400 border-2 border-gray-300'
                }`}>
                  <span className="font-semibold text-sm lg:text-base">{step.number}</span>
                </div>
                <span className={`ml-2 lg:ml-3 font-medium text-sm lg:text-base ${
                  step.current ? 'text-blue-600' : 'text-gray-500'
                }`}>
                  {step.title}
                </span>
                {step.number < 4 && <div className="ml-4 lg:ml-8 w-6 lg:w-12 h-0.5 bg-gray-300"></div>}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Progress Bar */}
        <div className="sm:hidden bg-gray-50 rounded-lg p-3 mb-6">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">Step 1 of 4</span>
            <span className="text-blue-600 font-medium">Choose Account Type</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div className="bg-blue-600 h-2 rounded-full w-1/4"></div>
          </div>
        </div>

        {/* Header Section - Mobile Responsive */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12 px-2 sm:px-0">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 leading-tight">
            Are you a student, teacher or parent please choose
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Before we begin, please choose the account you want to open.
          </p>
        </div>

        {/* Role Selection Cards - Mobile Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 px-2 sm:px-0">
          {/* Student Card */}
          <div 
            className={`bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
              selectedRole === 'student' ? 'border-blue-500 bg-blue-50 shadow-blue-100' : 'border-gray-200 hover:border-blue-400 hover:bg-blue-50'
            }`}
            onClick={() => setSelectedRole('student')}
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Student</h3>
            <ul className="space-y-2 sm:space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1 flex-shrink-0">•</span>
                <span className="text-sm sm:text-base">Students can register</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1 flex-shrink-0">•</span>
                <span className="text-sm sm:text-base">Students can ask teachers for tutor</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1 flex-shrink-0">•</span>
                <span className="text-sm sm:text-base">Students can join class</span>
              </li>
            </ul>
            
            {/* Mobile selection indicator */}
            {selectedRole === 'student' && (
              <div className="mt-4 p-2 bg-blue-100 rounded-lg text-center">
                <span className="text-blue-700 text-sm font-medium">✓ Selected</span>
              </div>
            )}
          </div>

          {/* Parent Card */}
          <div 
            className={`bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
              selectedRole === 'parent' ? 'border-blue-500 bg-blue-50 shadow-blue-100' : 'border-gray-200 hover:border-blue-400 hover:bg-blue-50'
            }`}
            onClick={() => setSelectedRole('parent')}
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Parent</h3>
            <ul className="space-y-2 sm:space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1 flex-shrink-0">•</span>
                <span className="text-sm sm:text-base">Register your child</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1 flex-shrink-0">•</span>
                <span className="text-sm sm:text-base">Find qualified tutors</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1 flex-shrink-0">•</span>
                <span className="text-sm sm:text-base">Track progress</span>
              </li>
            </ul>
            
            {/* Mobile selection indicator */}
            {selectedRole === 'parent' && (
              <div className="mt-4 p-2 bg-blue-100 rounded-lg text-center">
                <span className="text-blue-700 text-sm font-medium">✓ Selected</span>
              </div>
            )}
          </div>

          {/* Teacher Card */}
          <div 
            className={`bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
              selectedRole === 'teacher' ? 'border-blue-500 bg-blue-50 shadow-blue-100' : 'border-gray-200 hover:border-blue-400 hover:bg-blue-50'
            }`}
            onClick={() => setSelectedRole('teacher')}
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Teacher</h3>
            <ul className="space-y-2 sm:space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1 flex-shrink-0">•</span>
                <span className="text-sm sm:text-base">Teach students online</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1 flex-shrink-0">•</span>
                <span className="text-sm sm:text-base">Set your own rates</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1 flex-shrink-0">•</span>
                <span className="text-sm sm:text-base">Flexible schedule</span>
              </li>
            </ul>
            
            {/* Mobile selection indicator */}
            {selectedRole === 'teacher' && (
              <div className="mt-4 p-2 bg-blue-100 rounded-lg text-center">
                <span className="text-blue-700 text-sm font-medium">✓ Selected</span>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Selection Hint */}
        <div className="sm:hidden text-center mb-4 px-4">
          <p className="text-sm text-gray-500 bg-blue-50 rounded-lg p-3">
            👆 Tap on a card to select your role
          </p>
        </div>

        {/* Continue Button - Mobile Responsive */}
        <div className="text-center px-2 sm:px-0">
          <button 
            onClick={() => setCurrentStep('form')}
            className={`font-semibold py-3 sm:py-4 px-8 sm:px-12 rounded-lg sm:rounded-xl text-base sm:text-lg transition-all duration-300 shadow-lg w-full sm:w-auto ${
              selectedRole 
                ? 'bg-blue-600 hover:bg-blue-700 text-white hover:scale-105 active:scale-95' 
                : 'bg-gray-400 text-gray-200 cursor-not-allowed'
            }`}
            disabled={!selectedRole}
          >
            Continue
          </button>
          
          {/* Mobile helper text */}
          {!selectedRole && (
            <p className="sm:hidden text-sm text-gray-500 mt-3">
              Please select a role above to continue
            </p>
          )}
        </div>

        {/* Desktop helper text */}
        {!selectedRole && (
          <div className="hidden sm:block text-center mt-4">
            <p className="text-sm text-gray-500">
              Click on a card to select your role and continue
            </p>
          </div>
        )}
      </div>
    </div>
  );
}