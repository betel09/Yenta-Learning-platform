"use client";

import { useState, useEffect } from 'react';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [showPassword, setShowPassword] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { ...formData, role: selectedRole });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCreateAccount = () => {
    router.push('/register');
  };

  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="text-lg text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-yellow-500 text-4xl mb-4">⭐</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome Back!</h1>
          <p className="text-gray-600 text-lg">Sign in to your account to continue</p>
        </div>

        {/* Role Selection - Always Visible */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
            Select Your Role
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Student Card */}
            <div 
              className={`bg-white rounded-2xl shadow-lg p-6 border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                selectedRole === 'student' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-400'
              }`}
              onClick={() => setSelectedRole('student')}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Student</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">•</span>
                  Access your courses
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">•</span>
                  Join live classes
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">•</span>
                  Track your progress
                </li>
              </ul>
              {selectedRole === 'student' && (
                <div className="mt-4 p-2 bg-blue-100 rounded-lg text-center">
                  <span className="text-blue-700 text-sm font-medium">✓ Selected</span>
                </div>
              )}
            </div>

            {/* Parent Card */}
            <div 
              className={`bg-white rounded-2xl shadow-lg p-6 border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                selectedRole === 'parent' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-400'
              }`}
              onClick={() => setSelectedRole('parent')}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Parent</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">•</span>
                  Monitor child's progress
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">•</span>
                  Communicate with tutors
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">•</span>
                  View reports
                </li>
              </ul>
              {selectedRole === 'parent' && (
                <div className="mt-4 p-2 bg-blue-100 rounded-lg text-center">
                  <span className="text-blue-700 text-sm font-medium">✓ Selected</span>
                </div>
              )}
            </div>

            {/* Teacher Card */}
            <div 
              className={`bg-white rounded-2xl shadow-lg p-6 border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                selectedRole === 'teacher' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-400'
              }`}
              onClick={() => setSelectedRole('teacher')}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Teacher</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">•</span>
                  Manage your classes
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">•</span>
                  Track student progress
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">•</span>
                  Schedule sessions
                </li>
              </ul>
              {selectedRole === 'teacher' && (
                <div className="mt-4 p-2 bg-blue-100 rounded-lg text-center">
                  <span className="text-blue-700 text-sm font-medium">✓ Selected</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Login Form - Only shows when role is selected */}
        {selectedRole && (
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <span>Selected:</span>
                  <span className="font-semibold capitalize">{selectedRole}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Sign In as {selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}
                </h2>
                <p className="text-gray-600">
                  Enter your credentials to access your account
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Input */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Password *
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500 rounded"
                    />
                    <span className="text-gray-700">Remember me</span>
                  </label>
                  <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                    Forgot password?
                  </a>
                </div>

                {/* Sign In Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105"
                >
                  Sign In
                </button>

                {/* Create New Account Link */}
                <div className="text-center pt-4 border-t border-gray-200">
                  <p className="text-gray-600">
                    Don't have an account?{' '}
                    <button
                      type="button"
                      onClick={handleCreateAccount}
                      className="text-blue-600 hover:text-blue-700 font-semibold transition-colors underline"
                    >
                      Create new one
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Helper Text when no role is selected */}
        {!selectedRole && (
          <div className="text-center mt-8">
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 max-w-md mx-auto">
              <div className="text-yellow-600 text-lg font-semibold mb-2">Select Your Role</div>
              <p className="text-yellow-700">
                Please choose your role above to continue with the login process
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}