"use client";

import { useState, useEffect } from 'react';
import StudentForm from '../Components/studentform';
import VerifyIdentity from '../Components/VerifyIdentity';
import SubmitForm from '../Components/SubmitForm';

export default function LoginPage() {
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [currentStep, setCurrentStep] = useState<'select' | 'form' | 'verify' | 'submit'>('select');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Show loading state during SSR to prevent hydration mismatch
  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-lg text-gray-600">Loading...</div>
      </div>
    );
  }

  if (currentStep === 'form') {
    return <StudentForm onContinue={() => setCurrentStep('verify')} />;
  }

  if (currentStep === 'verify') {
    return <VerifyIdentity onContinue={() => setCurrentStep('submit')} />;
  }

  if (currentStep === 'submit') {
    return <SubmitForm />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full">
        {/* Step Navigation */}
        <div className="flex items-center justify-between mb-16">
          <div className="text-yellow-500 text-3xl">⭐</div>
          <div className="flex items-center space-x-8">
            {[
              { number: 1, title: 'Choose account type', current: true },
              { number: 2, title: 'Fill out necessary detail', current: false },
              { number: 3, title: 'Verify identity', current: false },
              { number: 4, title: 'Submit', current: false }
            ].map((step) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  step.current ? 'bg-blue-600 text-white border-2 border-blue-600' : 'bg-white text-gray-400 border-2 border-gray-300'
                }`}>
                  <span className="font-semibold">{step.number}</span>
                </div>
                <span className={`ml-3 font-medium ${step.current ? 'text-blue-600' : 'text-gray-500'}`}>
                  {step.title}
                </span>
                {step.number < 4 && <div className="ml-8 w-12 h-0.5 bg-gray-300"></div>}
              </div>
            ))}
          </div>
        </div>

        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Are you a student, teacher or parent please choose
          </h1>
          <p className="text-lg text-gray-600">
            Before we begin, please choose the account you want to open.
          </p>
        </div>

        {/* Role Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Student Card */}
          <div 
            className={`bg-white rounded-2xl shadow-lg p-6 border-2 cursor-pointer transition-all duration-300 ${
              selectedRole === 'student' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-400 hover:bg-blue-50'
            }`}
            onClick={() => setSelectedRole('student')}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Student</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start"><span className="text-green-500 mr-2">•</span>Students can register</li>
              <li className="flex items-start"><span className="text-green-500 mr-2">•</span>Students can ask teachers for tutor</li>
              <li className="flex items-start"><span className="text-green-500 mr-2">•</span>Students can join class</li>
            </ul>
          </div>

          {/* Parent and Teacher Cards */}
          <div 
            className={`bg-white rounded-2xl shadow-lg p-6 border-2 cursor-pointer transition-all duration-300 ${
              selectedRole === 'parent' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-400 hover:bg-blue-50'
            }`}
            onClick={() => setSelectedRole('parent')}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Parent</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start"><span className="text-green-500 mr-2">•</span>Students can register</li>
              <li className="flex items-start"><span className="text-green-500 mr-2">•</span>Students can ask teachers for tutor</li>
              <li className="flex items-start"><span className="text-green-500 mr-2">•</span>Students can join class</li>
            </ul>
          </div>

          <div 
            className={`bg-white rounded-2xl shadow-lg p-6 border-2 cursor-pointer transition-all duration-300 ${
              selectedRole === 'teacher' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-400 hover:bg-blue-50'
            }`}
            onClick={() => setSelectedRole('teacher')}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Teacher</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start"><span className="text-green-500 mr-2">•</span>Students can register</li>
              <li className="flex items-start"><span className="text-green-500 mr-2">•</span>Students can ask teachers for tutor</li>
              <li className="flex items-start"><span className="text-green-500 mr-2">•</span>Students can join class</li>
            </ul>
          </div>
        </div>

        {/* Continue Button */}
        <div className="text-center">
          <button 
            onClick={() => setCurrentStep('form')}
            className={`font-semibold py-4 px-12 rounded-xl text-lg transition-colors shadow-lg ${
              selectedRole ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-400 text-gray-200 cursor-not-allowed'
            }`}
            disabled={!selectedRole}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
