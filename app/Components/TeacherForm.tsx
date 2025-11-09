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
    <div className="max-w-4xl mx-auto p-6">
      {/* Step Indicator */}
      <div className="flex items-center justify-between mb-12">
        {[
          { num: 1, label: 'Choose account type', active: false },
          { num: 2, label: 'Fill out necessary detail', active: true },
          { num: 3, label: 'Verify identity', active: false },
          { num: 4, label: 'Submit', active: false },
        ].map((step) => (
          <div key={step.num} className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
              step.active ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
            }`}>
              {step.num}
            </div>
            <span className={`ml-2 text-sm ${step.active ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>
              {step.label}
            </span>
            {step.num < 4 && <div className="mx-4 w-16 h-0.5 bg-gray-300"></div>}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Full Name & Gender */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Gender *</label>
            <div className="flex gap-6">
              <label className="flex items-center">
                <input type="radio" name="gender" value="Male" checked={formData.gender === 'Male'}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  className="mr-2" />
                <span>Male</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="gender" value="Female" checked={formData.gender === 'Female'}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  className="mr-2" />
                <span>Female</span>
              </label>
            </div>
          </div>
        </div>

        {/* Phone & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
            <input
              type="tel"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>

        {/* Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">National ID Photo *</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <input type="file" accept="image/*" required className="hidden" id="id-photo" />
              <label htmlFor="id-photo" className="cursor-pointer">
                <div className="text-gray-500">Upload photo</div>
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Upload Profile Photo *</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <input type="file" accept="image/*" required className="hidden" id="profile-photo" />
              <label htmlFor="profile-photo" className="cursor-pointer">
                <div className="text-gray-500">Upload photo</div>
              </label>
            </div>
          </div>
        </div>

        {/* Addresses */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Home Address *</label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              value={formData.homeAddress}
              onChange={(e) => setFormData({ ...formData, homeAddress: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Work Address *</label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              value={formData.workAddress}
              onChange={(e) => setFormData({ ...formData, workAddress: e.target.value })}
            />
          </div>
        </div>

        {/* Passwords */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Create Password *</label>
            <input
              type="password"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password *</label>
            <input
              type="password"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            />
          </div>
        </div>

        {/* Experience & Preferences */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">How many years of experience? *</label>
            <input
              type="number"
              min="0"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              value={formData.yearsOfExperience}
              onChange={(e) => setFormData({ ...formData, yearsOfExperience: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Grades for tutoring</label>
            <select multiple className="w-full px-4 py-3 border border-gray-300 rounded-lg">
              <option>Grade 1</option>
              <option>Grade 2</option>
              {/* Add more */}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Preferred subjects</label>
            <select multiple className="w-full px-4 py-3 border border-gray-300 rounded-lg">
              <option>Math</option>
              <option>Science</option>
              {/* Add more */}
            </select>
          </div>
        </div>

        {/* Latency & Price */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Latency Level *</label>
            <input
              type="number"
              min="1"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              value={formData.latencyLevel}
              onChange={(e) => setFormData({ ...formData, latencyLevel: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Desired Price Per Hour</label>
            <div className="flex items-center gap-2">
              <button type="button" className="px-3 py-1 bg-gray-200 rounded">+</button>
              <input
                type="number"
                value={formData.desiredPrice}
                readOnly
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-center"
              />
              <button type="button" className="px-3 py-1 bg-gray-200 rounded">−</button>
            </div>
          </div>
        </div>

        {/* Current Teacher */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Are you currently a teacher? *</label>
          <div className="flex gap-6">
            <label className="flex items-center">
              <input type="radio" name="currentTeacher" value="Yes" checked={formData.isCurrentlyTeacher === 'Yes'}
                onChange={(e) => setFormData({ ...formData, isCurrentlyTeacher: e.target.value })}
                className="mr-2" />
              <span>Yes</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="currentTeacher" value="No" checked={formData.isCurrentlyTeacher === 'No'}
                onChange={(e) => setFormData({ ...formData, isCurrentlyTeacher: e.target.value })}
                className="mr-2" />
              <span>No</span>
            </label>
          </div>
        </div>

        {/* Submit */}
        <div className="text-center pt-6">
          <button
            type="submit"
            className="bg-blue-600 text-white px-12 py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}