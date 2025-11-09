// components/StudentDashboard.tsx
'use client';

import { useState } from 'react';
import { Search, MessageCircle, Bell, ChevronDown, Settings, Calendar, HelpCircle, MessageSquare, Users, LogOut } from 'lucide-react';

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState('home');
  const [showProfile, setShowProfile] = useState(false);

  const tutors = [
    { name: 'Sarah Leah', subject: 'Mathematics', nextSession: 'Oct 15, 2:00pm' },
    { name: 'Sarah Leah', subject: 'Mathematics', nextSession: 'Oct 15, 2:00pm' },
  ];

  const classes = [
    { name: 'Physic 101', tutor: 'Sarah Lee', schedule: 'Mon, Wed, Fri -4:00pm', status: 'ongoing' },
    { name: 'Physic 101', tutor: 'Sarah Lee', schedule: 'Mon, Wed, Fri -4:00pm', status: 'ongoing' },
  ];

  return (
    <>
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg"></div>
                <span className="text-xl font-bold text-gray-900">SPARKLE SOLUTION</span>
              </div>
              <nav className="hidden md:flex space-x-8">
                <button onClick={() => setActiveTab('home')} className={`text-sm font-medium ${activeTab === 'home' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}>Home</button>
                <button onClick={() => setActiveTab('tutors')} className={`text-sm font-medium ${activeTab === 'tutors' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}>Find a tutor</button>
                <button className="text-sm font-medium text-gray-600 hover:text-gray-900">Bookings</button>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:text-gray-900">
                <MessageCircle className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-blue-600 rounded-full"></span>
              </button>
              <button className="relative p-2 text-gray-600 hover:text-gray-900">
                <Bell className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="relative">
                <button onClick={() => setShowProfile(!showProfile)} className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-700">Aklesiya</span>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-xs font-bold">A</div>
                </button>
                {showProfile && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-200">
                    <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">A</div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">Aklesiya</p>
                          <p className="text-xs text-gray-600">Student</p>
                        </div>
                      </div>
                    </div>
                    <div className="py-2">
                      <a href="#" className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"><Settings className="w-4 h-4" /> <span>Your Profile</span></a>
                      <a href="#" className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"><Calendar className="w-4 h-4" /> <span>Trial lesson space</span></a>
                      <a href="#" className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"><HelpCircle className="w-4 h-4" /> <span>Help center</span></a>
                      <a href="#" className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"><MessageSquare className="w-4 h-4" /> <span>Report Concern</span></a>
                      <a href="#" className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"><Users className="w-4 h-4" /> <span>Contact Us</span></a>
                      <div className="border-t border-gray-200 mt-2 pt-2">
                        <a href="#" className="flex items-center space-x-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50"><LogOut className="w-4 h-4" /> <span>Logout</span></a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'home' && (
          <div className="space-y-8">
            <h1 className="text-3xl font-bold text-gray-900">Welcome back, John!</h1>

            <div className="relative">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-300"></div></div>
              <div className="relative flex justify-center">
                <div className="bg-white px-4">
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Search className="w-5 h-5" />
                    <input type="text" placeholder="Search anything" className="py-2 pr-4 text-sm outline-none" />
                  </div>
                </div>
              </div>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">My Tutors</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tutors.map((tutor, i) => (
                  <div key={i} className="bg-white rounded-xl border border-gray-200 p-4 flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gray-200 rounded-full"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{tutor.name}</h3>
                      <p className="text-sm text-gray-600">{tutor.subject}</p>
                      <p className="text-xs text-gray-500 mt-1">Next Sessions: {tutor.nextSession}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Enrolled Class</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {classes.map((cls, i) => (
                  <div key={i} className="bg-white rounded-xl border border-gray-200 p-4">
                    <h3 className="font-semibold text-gray-900">{cls.name}</h3>
                    <p className="text-sm text-gray-600">Tutor: {cls.tutor}</p>
                    <p className="text-sm text-gray-600">Schedule: {cls.schedule}</p>
                    <p className="text-sm font-medium text-green-600 mt-1">Status: {cls.status}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'tutors' && (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Private tutors that fit your schedule</h1>
            <div className="flex flex-wrap gap-3">
              <select className="px-4 py-2 border border-blue-500 text-blue-600 rounded-lg bg-white"><option>All Subjects</option></select>
              <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white"><option>Grade</option></select>
              <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white"><option>Price</option></select>
            </div>
            <div className="space-y-4">
              {['Brtukan Bolete', 'Melaku Mola', 'Hebrew Language'].map((name, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-200 p-4 flex items-start space-x-4">
                  <div className="w-20 h-20 bg-gray-200 rounded-lg"></div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{name}</h3>
                    <p className="text-sm text-gray-600 mt-1">Body text for whatever you’d like to say...</p>
                    <button className="mt-3 px-3 py-1 bg-blue-600 text-white text-sm rounded-full">300ETB/hr</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center space-x-2">
              <button className="w-8 h-8 border rounded-lg">&lt;</button>
              {[1,2,3,4].map(n => <button key={n} className={`w-8 h-8 rounded-lg ${n===1 ? 'bg-blue-600 text-white' : 'border'}`}>{n}</button>)}
              <button className="w-8 h-8 border rounded-lg">&gt;</button>
            </div>
          </div>
        )}
      </main>
    </>
  );
}