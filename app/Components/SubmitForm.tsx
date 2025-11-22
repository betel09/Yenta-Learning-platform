'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SubmitForm({ selectedRole }: { selectedRole: string }) {
  const [isClient, setIsClient] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  useEffect(() => { setIsClient(true); }, []);

  const handleSubmit = () => setShowTerms(true);
  const handleAccept = () => setSubmitted(true);
  const handleToDashboard = () => router.push('/dashboard');

  if (!isClient) return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-lg text-gray-600">Loading...</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 sm:p-6">
      <div className="max-w-4xl w-full">
        {/* Step Navigation - Fully Responsive */}
        <div className="flex flex-col items-center space-y-4 sm:space-y-0 sm:flex-row sm:justify-between mb-6 sm:mb-8">
          {/* Star Icon */}
          <div className="text-yellow-500 text-2xl sm:text-3xl">⭐</div>
          
          {/* Steps - Responsive Layout */}
          <div className="w-full sm:w-auto">
            {/* Mobile Steps - Compact */}
            <div className="sm:hidden flex justify-between items-center w-full">
              {[1, 2, 3, 4].map((stepNumber) => (
                <div key={stepNumber} className="flex flex-col items-center">
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm ${
                    stepNumber === 4 && !submitted ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400 border border-gray-300'
                  }`}>
                    {stepNumber}
                  </div>
                  {stepNumber === 4 && (
                    <span className="text-xs text-blue-600 font-medium mt-1">Submit</span>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop Steps - Full */}
            <div className="hidden sm:flex items-center space-x-2 lg:space-x-4">
              {[
                { number: 1, title: 'Choose account type', current: false },
                { number: 2, title: 'Fill out details', current: false },
                { number: 3, title: 'Verify Identity', current: false },
                { number: 4, title: 'Submit', current: !submitted }
              ].map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm ${
                    step.current ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400 border border-gray-300'
                  }`}>
                    {step.number}
                  </div>
                  <span className={`ml-2 text-sm ${
                    step.current ? 'text-blue-600 font-medium' : 'text-gray-500'
                  } hidden lg:inline`}>
                    {step.title}
                  </span>
                  <span className={`ml-2 text-sm ${
                    step.current ? 'text-blue-600 font-medium' : 'text-gray-500'
                  } lg:hidden`}>
                    {step.number === 1 ? 'Choose' : 
                     step.number === 2 ? 'Details' : 
                     step.number === 3 ? 'Verify' : 'Submit'}
                  </span>
                  {index < 3 && <div className="ml-2 lg:ml-4 w-4 lg:w-6 h-0.5 bg-gray-300"></div>}
                </div>
              ))}
            </div>

            {/* Mobile Step Titles */}
            <div className="sm:hidden grid grid-cols-4 gap-1 mt-2 text-center">
              {['Choose', 'Details', 'Verify', 'Submit'].map((title, index) => (
                <div 
                  key={index} 
                  className={`text-xs ${
                    index === 3 && !submitted ? 'text-blue-600 font-medium' : 'text-gray-500'
                  } truncate`}
                >
                  {title}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Alternative Mobile Step Design */}
        <div className="sm:hidden bg-gray-50 rounded-lg p-3 mb-6">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">Step 4 of 4</span>
            <span className="text-blue-600 font-medium">Submit Application</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div className="bg-blue-600 h-2 rounded-full w-full"></div>
          </div>
        </div>

        {/* REVIEW SECTION */}
        {!showTerms && !submitted ? (
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-blue-100">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2 text-center">Review Your Information</h1>
            <p className="text-gray-600 mb-6 sm:mb-8 text-center text-sm sm:text-base">
              Please review all information before submitting your application
            </p>

            <div className="space-y-6 sm:space-y-8">
              {/* STUDENT */}
              {selectedRole === 'student' && (
                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md">
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4">Student Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">Student Full Name *</label>
                      <div className="bg-gray-50 px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-200 text-sm sm:text-base">
                        <span className="text-gray-800">Bien Nogas</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">Birth Date *</label>
                      <div className="bg-gray-50 px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-200 text-sm sm:text-base">
                        <span className="text-gray-800">01/25/2008</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">Student photo</label>
                      <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 text-center">
                        <span className="text-gray-500 text-sm">Uploaded photo</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">Student Grade</label>
                      <div className="bg-gray-50 px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-200 text-sm sm:text-base">
                        <span className="text-gray-800">Grade 10</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">Gender *</label>
                      <div className="bg-gray-50 px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-200">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-blue-600 bg-blue-600"></div>
                          <span className="text-gray-800 text-sm sm:text-base">Female</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">Student ID Photo *</label>
                      <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 text-center">
                        <span className="text-gray-500 text-sm">Uploaded school ID</span>
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">International Student *</label>
                      <div className="bg-gray-50 px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-200">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-gray-400"></div>
                          <span className="text-gray-800 text-sm sm:text-base">No</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* PARENT */}
              {selectedRole === 'parent' && (
                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md">
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4">Parent Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">Parent Full Name *</label>
                      <div className="bg-gray-50 px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-200 text-sm sm:text-base">
                        <span className="text-gray-800">John Doe</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">Address *</label>
                      <div className="bg-gray-50 px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-200 text-sm sm:text-base">
                        <span className="text-gray-800">Lutho, near michael church</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">Phone Number *</label>
                      <div className="bg-gray-50 px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-200 text-sm sm:text-base">
                        <span className="text-gray-800">0982444444444</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">National ID Photo *</label>
                      <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 text-center">
                        <span className="text-gray-500 text-sm">Uploaded parent ID</span>
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">Email *</label>
                      <div className="bg-gray-50 px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-200 text-sm sm:text-base">
                        <span className="text-gray-800">john@gmail.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TEACHER */}
              {selectedRole === 'teacher' && (
                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md">
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4">Teacher Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">Teacher Full Name *</label>
                      <div className="bg-gray-50 px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-200 text-sm sm:text-base">
                        <span className="text-gray-800">Mr. Smith</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">Email *</label>
                      <div className="bg-gray-50 px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-200 text-sm sm:text-base">
                        <span className="text-gray-800">smith@school.com</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">Phone *</label>
                      <div className="bg-gray-50 px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-200 text-sm sm:text-base">
                        <span className="text-gray-800">0911111111</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="text-center mt-6 sm:mt-8">
              <button 
                onClick={handleSubmit}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 sm:py-4 px-8 sm:px-12 rounded-lg sm:rounded-xl text-base sm:text-lg transition-colors shadow-lg w-full sm:w-auto"
              >
                Submit Application
              </button>
            </div>
          </div>
        ) : showTerms && !submitted ? (
          /* TERMS SECTION */
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-blue-100">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">Terms and Conditions</h1>
            
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md mb-4 sm:mb-6 max-h-96 overflow-y-auto">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Your Agreement</h2>
              <div className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base">
                <p>
                  <strong>Last Revised: December 16, 2013</strong><br />
                  Welcome to www.lorem-ipsum.info. This site is provided as a service to our visitors and may be used for informational purposes only. Because the Terms and Conditions contain legal obligations, please read them carefully.
                </p>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">1. YOUR AGREEMENT</h3>
                  <p>By using this Site, you agree to be bound by, and to comply with, these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use this site.</p>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">2. PRIVACY</h3>
                  <p>Please review our Privacy Policy, which also governs your visit to this Site, to understand our practices.</p>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">3. LINKED SITES</h3>
                  <p>This Site may contain links to other independent third-party Web sites ("Linked Sites"). These Linked Sites are provided solely as a convenience to our visitors. Such Linked Sites are not under our control, and we are not responsible for and does not endorse the content of such Linked Sites, including any information or materials contained on such Linked Sites. You will need to make your own independent judgment regarding your interaction with these Linked Sites.</p>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">4. FORWARD LOOKING STATEMENTS</h3>
                  <p>[Additional terms and conditions content would go here...]</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md mb-4 sm:mb-6">
              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                  className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 focus:ring-blue-500 rounded mt-1 flex-shrink-0"
                />
                <span className="text-gray-700 text-sm sm:text-base lg:text-lg">
                  I confirm that I have read and accept the terms and conditions and privacy policy.
                </span>
              </label>
            </div>

            <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => setShowTerms(false)}
                className="px-6 sm:px-8 py-2 sm:py-3 border border-gray-300 text-gray-700 rounded-lg sm:rounded-xl hover:bg-gray-50 transition-colors font-medium text-sm sm:text-base order-2 sm:order-1"
              >
                Cancel
              </button>
              <button
                onClick={handleAccept}
                disabled={!acceptedTerms}
                className={`px-6 sm:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium transition-colors text-sm sm:text-base order-1 sm:order-2 ${
                  acceptedTerms
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Accept
              </button>
            </div>
          </div>
        ) : (
          /* SUCCESS SECTION */
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-blue-100">
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
                Registration form submitted successfully
              </h1>
              
              <p className="text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-2">
                you have successfully finished registration and verification after this step you can search for tutors and select your preferred tutor or join active class
              </p>

              <div className="mb-6 sm:mb-8">
                <button 
                  onClick={handleToDashboard}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 sm:py-4 px-8 sm:px-12 rounded-lg sm:rounded-xl text-base sm:text-lg transition-colors shadow-lg w-full sm:w-auto"
                >
                  To the dashboard
                </button>
              </div>

              <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md max-w-md mx-auto">
                <div className="text-left space-y-2 sm:space-y-3">
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                      {selectedRole === 'student' ? 'Student' : selectedRole === 'parent' ? 'Parent' : 'Teacher'} Full Name
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {selectedRole === 'student' ? 'Bien Nogas' : selectedRole === 'parent' ? 'John Doe' : 'Mr. Smith'}
                    </p>
                  </div>
                  {selectedRole === 'parent' && (
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm sm:text-base">Address</h3>
                      <p className="text-gray-600 text-sm sm:text-base">Lutho, near-michael church</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}