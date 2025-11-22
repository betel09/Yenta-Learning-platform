'use client';

import { useState, useEffect } from 'react';

export default function VerifyIdentity({ onContinue }: { onContinue: () => void }) {
  const [isClient, setIsClient] = useState(false);
  const [currentStep, setCurrentStep] = useState<'fan' | 'email-phone' | 'otp' | 'success'>('fan');
  const [fanNumber, setFanNumber] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    setIsClient(true);
  }, []);

  const validateFanNumber = () => {
    const newErrors: Record<string, string> = {};

    if (!fanNumber.trim()) {
      newErrors.fanNumber = 'Please enter your National ID FAN number';
    } else if (!/^\d+$/.test(fanNumber)) {
      newErrors.fanNumber = 'FAN number should contain only numbers';
    } else if (fanNumber.length !== 15) {
      newErrors.fanNumber = 'FAN number must be exactly 15 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateEmailPhone = () => {
    const newErrors: Record<string, string> = {};

    if (!email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = 'Please enter your phone number';
    } else if (!/^\d+$/.test(phoneNumber.replace(/\s/g, ''))) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateOtp = () => {
    const newErrors: Record<string, string> = {};

    if (otp.some(digit => !digit)) {
      newErrors.otp = 'Please enter all 6 digits of the verification code';
    } else if (otp.some(digit => !/^\d$/.test(digit))) {
      newErrors.otp = 'Verification code should contain only numbers';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFanSubmit = () => {
    if (validateFanNumber()) {
      setCurrentStep('email-phone');
      setErrors({});
    } else {
      const firstErrorField = document.querySelector('[data-error="true"]');
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  const handleEmailPhoneSubmit = () => {
    if (validateEmailPhone()) {
      setCurrentStep('otp');
      setErrors({});
    } else {
      const firstErrorField = document.querySelector('[data-error="true"]');
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  const handleOtpSubmit = () => {
    if (validateOtp()) {
      setCurrentStep('success');
      setErrors({});
    } else {
      const firstErrorField = document.querySelector('[data-error="true"]');
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  const handleOtpChange = (value: string, index: number) => {
    // Only allow numbers
    if (value && !/^\d$/.test(value)) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Clear OTP error when user starts typing
    if (errors.otp) {
      setErrors(prev => ({ ...prev, otp: '' }));
    }

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  // Handle paste event for OTP inputs
  const handleOtpPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text');
    
    // Only process if pasted content contains numbers
    if (/^\d+$/.test(pastedData)) {
      const digits = pastedData.split('').slice(0, 6); // Take only first 6 digits
      const newOtp = [...otp];
      
      digits.forEach((digit, index) => {
        if (index < 6) {
          newOtp[index] = digit;
        }
      });
      
      setOtp(newOtp);
      
      // Clear any existing OTP errors
      if (errors.otp) {
        setErrors(prev => ({ ...prev, otp: '' }));
      }
      
      // Focus on the next empty input or the last input
      const nextEmptyIndex = newOtp.findIndex(digit => !digit);
      const focusIndex = nextEmptyIndex === -1 ? 5 : Math.min(nextEmptyIndex, 5);
      const nextInput = document.getElementById(`otp-${focusIndex}`);
      if (nextInput) nextInput.focus();
    }
  };

  // Handle key down for navigation between OTP inputs
  const handleOtpKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      // Move to previous input on backspace if current input is empty
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleSuccessContinue = () => {
    onContinue();
  };

  const handleFanNumberChange = (value: string) => {
    setFanNumber(value);
    if (errors.fanNumber) {
      setErrors(prev => ({ ...prev, fanNumber: '' }));
    }
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    if (errors.email) {
      setErrors(prev => ({ ...prev, email: '' }));
    }
  };

  const handlePhoneNumberChange = (value: string) => {
    setPhoneNumber(value);
    if (errors.phoneNumber) {
      setErrors(prev => ({ ...prev, phoneNumber: '' }));
    }
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
        {/* Step Navigation - Responsive */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 md:mb-8 space-y-4 sm:space-y-0">
          <div className="text-yellow-500 text-2xl md:text-3xl">⭐</div>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 lg:gap-6">
            {[
              { number: 1, title: 'Account type', current: false },
              { number: 2, title: 'Details', current: false },
              { number: 3, title: 'Verify Identity', current: true },
              { number: 4, title: 'Submit', current: false }
            ].map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full text-xs md:text-sm ${
                  step.current ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400 border border-gray-300'
                }`}>
                  {step.number}
                </div>
                <span className={`ml-1 md:ml-2 text-xs md:text-sm ${
                  step.current ? 'text-blue-600 font-medium' : 'text-gray-500'
                } hidden sm:inline`}>
                  {step.title}
                </span>
                {index < 3 && (
                  <div className="ml-1 md:ml-4 w-4 md:w-6 h-0.5 bg-gray-300 hidden sm:block"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Show different content based on current step */}
        {currentStep === 'fan' && (
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border border-blue-100 max-w-2xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 text-center">Verify Identity</h1>
            <p className="text-gray-600 mb-6 md:mb-8 text-center text-sm sm:text-base">
              Please enter your National ID FAN number to verify your identity
            </p>

            <div className="space-y-4 md:space-y-6">
              {/* FAN Number Input */}
              <div data-error={!!errors.fanNumber}>
                <label className="block text-gray-700 font-medium mb-3 md:mb-4 text-base md:text-lg">
                  Please enter your National ID FAN number *
                </label>
                <input
                  type="text"
                  value={fanNumber}
                  onChange={(e) => handleFanNumberChange(e.target.value)}
                  className={`w-full px-3 py-3 md:px-4 md:py-4 bg-white border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base md:text-lg transition-all ${
                    errors.fanNumber ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="144444444444445250"
                  maxLength={15}
                  required
                />
                {errors.fanNumber ? (
                  <p className="text-red-500 text-sm mt-2">{errors.fanNumber}</p>
                ) : (
                  <p className="text-xs md:text-sm text-gray-500 mt-2">
                    Enter your 15-digit National ID FAN number
                  </p>
                )}
              </div>

              {/* Continue Button */}
              <div className="text-center">
                <button 
                  onClick={handleFanSubmit}
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 md:py-4 px-8 md:px-12 rounded-xl text-base md:text-lg transition-colors shadow-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        )}

        {currentStep === 'email-phone' && (
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border border-blue-100 max-w-2xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 text-center">OTP Verification</h1>
            <p className="text-gray-600 mb-6 md:mb-8 text-center text-sm sm:text-base">
              Enter email and phone number to send one time Password
            </p>

            <div className="space-y-4 md:space-y-6">
              {/* Email Input */}
              <div data-error={!!errors.email}>
                <label className="block text-gray-700 font-medium mb-2 text-sm md:text-base">
                  Email *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => handleEmailChange(e.target.value)}
                  className={`w-full px-3 py-2 md:px-4 md:py-3 bg-white border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base transition-all ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="dscode@gmail.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs md:text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone Number Input */}
              <div data-error={!!errors.phoneNumber}>
                <label className="block text-gray-700 font-medium mb-2 text-sm md:text-base">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => handlePhoneNumberChange(e.target.value)}
                  className={`w-full px-3 py-2 md:px-4 md:py-3 bg-white border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base transition-all ${
                    errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="+251999999999"
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-xs md:text-sm mt-1">{errors.phoneNumber}</p>
                )}
              </div>

              {/* Continue Button */}
              <div className="text-center">
                <button 
                  onClick={handleEmailPhoneSubmit}
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 md:py-4 px-8 md:px-12 rounded-xl text-base md:text-lg transition-colors shadow-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        )}

        {currentStep === 'otp' && (
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border border-blue-100 max-w-2xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 text-center">Verification Code</h1>
            <p className="text-gray-600 mb-6 md:mb-8 text-center text-sm sm:text-base">
              We have sent the verification code to your phone number
            </p>

            <div className="space-y-4 md:space-y-6">
              {/* OTP Inputs */}
              <div className="flex flex-col items-center">
                <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 mb-4">
                  {[0, 1, 2, 3, 4, 5].map((index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      type="text"
                      maxLength={1}
                      value={otp[index]}
                      onChange={(e) => handleOtpChange(e.target.value, index)}
                      onPaste={handleOtpPaste}
                      onKeyDown={(e) => handleOtpKeyDown(e, index)}
                      className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-center text-xl sm:text-2xl font-bold bg-white border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
                        errors.otp ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                  ))}
                </div>
                {errors.otp && (
                  <p className="text-red-500 text-sm mt-1 text-center">{errors.otp}</p>
                )}
              </div>

              {/* Continue Button */}
              <div className="text-center">
                <button 
                  onClick={handleOtpSubmit}
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 md:py-4 px-8 md:px-12 rounded-xl text-base md:text-lg transition-colors shadow-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        )}

        {currentStep === 'success' && (
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border border-blue-100 max-w-2xl mx-auto">
            <div className="text-center">
              {/* Success Icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 md:mb-4">Success!</h1>
              
              <p className="text-base sm:text-lg text-gray-600 mb-6 md:mb-8">
                Congratulations! You have been successfully authenticated
              </p>

              {/* Continue Button */}
              <div className="text-center">
                <button 
                  onClick={handleSuccessContinue}
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 md:py-4 px-8 md:px-12 rounded-xl text-base md:text-lg transition-colors shadow-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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