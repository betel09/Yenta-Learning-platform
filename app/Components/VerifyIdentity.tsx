'use client';

import { useState, useEffect } from 'react';

export default function VerifyIdentity({ onContinue }: { onContinue: () => void }) {
  const [isClient, setIsClient] = useState(false);
  const [currentStep, setCurrentStep] = useState<'fan' | 'email-phone' | 'otp' | 'success'>('fan');
  const [fanNumber, setFanNumber] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleFanSubmit = () => {
    // Here you would typically verify the FAN number
    setCurrentStep('email-phone');
  };

  const handleEmailPhoneSubmit = () => {
    // Here you would typically send the OTP to the provided email/phone
    setCurrentStep('otp');
  };

  const handleOtpSubmit = () => {
    // Here you would typically verify the OTP
    setCurrentStep('success');
  };

  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleSuccessContinue = () => {
    onContinue();
  };

  if (!isClient) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-lg text-gray-600">Loading...</div>
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
              { number: 2, title: 'Fill out necessary detail', current: false },
              { number: 3, title: 'Verify Identity', current: true },
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

        {/* Show different content based on current step */}
        {currentStep === 'fan' && (
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl shadow-lg p-8 border border-blue-100 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">Verify Identity</h1>
            <p className="text-gray-600 mb-8 text-center">
              Please enter your National ID FAN number to verify your identity
            </p>

            <div className="space-y-6">
              {/* FAN Number Input */}
              <div>
                <label className="block text-gray-700 font-medium mb-4 text-lg">
                  Please enter you National ID FAN number *
                </label>
                <input
                  type="text"
                  value={fanNumber}
                  onChange={(e) => setFanNumber(e.target.value)}
                  className="w-full px-4 py-4 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  placeholder="144444444444445250"
                  required
                />
                <p className="text-sm text-gray-500 mt-2">
                  Enter your 15-digit National ID FAN number
                </p>
              </div>

              {/* Continue Button */}
              <div className="text-center">
                <button 
                  onClick={handleFanSubmit}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-12 rounded-xl text-lg transition-colors shadow-lg"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        )}

        {currentStep === 'email-phone' && (
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl shadow-lg p-8 border border-blue-100 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">OTP Verification</h1>
            <p className="text-gray-600 mb-8 text-center">
              Enter email and phone number to send one time Password
            </p>

            <div className="space-y-6">
              {/* Email Input */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="dscode@gmail.com"
                />
              </div>

              {/* Phone Number Input */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+251999999999"
                />
              </div>

              {/* Continue Button */}
              <div className="text-center">
                <button 
                  onClick={handleEmailPhoneSubmit}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-12 rounded-xl text-lg transition-colors shadow-lg"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        )}

        {currentStep === 'otp' && (
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl shadow-lg p-8 border border-blue-100 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">Verification Code</h1>
            <p className="text-gray-600 mb-8 text-center">
              We have sent the verification code to your phone number
            </p>

            <div className="space-y-6">
              {/* OTP Inputs */}
              <div className="flex justify-center space-x-4">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    maxLength={1}
                    value={otp[index]}
                    onChange={(e) => handleOtpChange(e.target.value, index)}
                    className="w-14 h-14 text-center text-2xl font-bold bg-white border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                ))}
              </div>

              {/* Continue Button */}
              <div className="text-center">
                <button 
                  onClick={handleOtpSubmit}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-12 rounded-xl text-lg transition-colors shadow-lg"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        )}

        {currentStep === 'success' && (
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl shadow-lg p-8 border border-blue-100 max-w-2xl mx-auto">
            <div className="text-center">
              {/* Success Icon */}
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h1 className="text-3xl font-bold text-gray-800 mb-4">Success!</h1>
              
              <p className="text-lg text-gray-600 mb-8">
                Congratulations! You have been successfully authenticated
              </p>

              {/* Continue Button */}
              <div className="text-center">
                <button 
                  onClick={handleSuccessContinue}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-12 rounded-xl text-lg transition-colors shadow-lg"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}