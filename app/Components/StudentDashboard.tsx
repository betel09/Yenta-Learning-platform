'use client';

import { useState } from 'react';
import { Search, MessageCircle, Bell, ChevronDown, Settings, Calendar, HelpCircle, MessageSquare, Users, LogOut, Clock, CheckCircle, DollarSign, BookOpen, Menu, User } from 'lucide-react';

// Define types for our data
interface Tutor {
  name: string;
  subject: string;
  nextSession: string;
}

interface Class {
  name: string;
  tutor: string;
  schedule: string;
  status: string;
}

interface Booking {
  id: number;
  tutorName: string;
  subject: string;
  date: string;
  time: string;
  duration: string;
  price: string;
  tutorInitials: string;
}

interface UpcomingBookings {
  awaitingConfirmation: Booking[];
  awaitingPayment: Booking[];
  confirmed: Booking[];
}

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState('home');
  const [showProfile, setShowProfile] = useState(false);
  const [bookingView, setBookingView] = useState<string | null>(null);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tutors: Tutor[] = [
    { name: 'Sarah Leah', subject: 'Mathematics', nextSession: 'Oct 15, 2:00pm' },
    { name: 'David Smith', subject: 'Physics', nextSession: 'Oct 16, 3:00pm' },
  ];

  const classes: Class[] = [
    { name: 'Physic 101', tutor: 'Sarah Lee', schedule: 'Mon, Wed, Fri -4:00pm', status: 'ongoing' },
    { name: 'Physic 101', tutor: 'Sarah Lee', schedule: 'Mon, Wed, Fri -4:00pm', status: 'ongoing' },
  ];

  // Sample booking data with proper typing
  const upcomingBookings: UpcomingBookings = {
    awaitingConfirmation: [
      {
        id: 1,
        tutorName: 'Sarah Johnson',
        subject: 'Mathematics',
        date: 'Oct 20, 2023',
        time: '2:00 PM - 3:00 PM',
        duration: '1 hour',
        price: '300 ETB',
        tutorInitials: 'SJ'
      }
    ],
    awaitingPayment: [],
    confirmed: []
  };

  const previousBookings: Booking[] = [];

  const toggleSection = (section: string) => {
    setSelectedSection(selectedSection === section ? null : section);
  };

  const handleBookingViewChange = (view: string) => {
    setBookingView(view);
    setSelectedSection(null);
  };

  const BookingCard = ({ booking, status }: { booking: Booking; status: string }) => (
    <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 space-y-4 hover:shadow-lg transition-shadow">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg">
          {booking.tutorInitials}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 text-base sm:text-lg truncate">{booking.tutorName}</h3>
          <p className="text-sm text-gray-600 truncate">{booking.subject}</p>
          <div className="flex items-center space-x-1 mt-1">
            <div className={`w-2 h-2 rounded-full ${
              status === 'confirmed' ? 'bg-green-500' : 
              status === 'awaitingPayment' ? 'bg-yellow-500' : 
              'bg-blue-500'
            }`}></div>
            <span className="text-xs text-gray-500 capitalize">
              {status === 'awaitingConfirmation' ? 'Awaiting Confirmation' : 
               status === 'awaitingPayment' ? 'Awaiting Payment' : 
               'Confirmed'}
            </span>
          </div>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Date:</span>
          <span className="font-medium text-right">{booking.date}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Time:</span>
          <span className="font-medium text-right">{booking.time}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Duration:</span>
          <span className="font-medium text-right">{booking.duration}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Price:</span>
          <span className="font-medium text-blue-600 text-right">{booking.price}</span>
        </div>
      </div>

      <div className="flex space-x-2 sm:space-x-3 pt-2">
        {status === 'awaitingConfirmation' && (
          <>
            <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-700 transition-colors">
              Accept
            </button>
            <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-gray-50 transition-colors">
              Decline
            </button>
          </>
        )}
        {status === 'awaitingPayment' && (
          <button className="flex-1 bg-green-600 text-white py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-green-700 transition-colors">
            Pay Now
          </button>
        )}
        {status === 'confirmed' && (
          <button className="flex-1 border border-blue-600 text-blue-600 py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-50 transition-colors">
            View Details
          </button>
        )}
      </div>
    </div>
  );

  const EmptyState = ({ title, description }: { title: string; description: string }) => (
    <div className="text-center py-8 sm:py-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border-2 border-dashed border-gray-300 mx-2 sm:mx-0">
      <div className="w-16 h-16 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
          </div>
        </div>
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 px-4">{title}</h3>
      <p className="text-gray-600 mb-6 max-w-md mx-auto px-4 text-sm sm:text-base">{description}</p>
      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm sm:text-base">
        Find Tutor
      </button>
    </div>
  );

  const MainEmptyState = () => (
    <div className="text-center py-8 sm:py-16 px-4">
      <div className="w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8">
        <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
          <div className="text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <div className="w-12 h-1 sm:w-16 sm:h-2 bg-gray-200 rounded-full mx-auto"></div>
          </div>
        </div>
      </div>
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">No Bookings Selected</h3>
      <p className="text-gray-600 mb-6 sm:mb-8 max-w-md mx-auto text-base sm:text-lg px-4">
        {bookingView 
          ? "Select a booking category from the dropdown sections to view your bookings"
          : "Select 'Upcoming' or 'Previous' to view your bookings"
        }
      </p>
      <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 px-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm sm:text-base">
          Browse Tutors
        </button>
        <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm sm:text-base">
          View Calendar
        </button>
      </div>
    </div>
  );

  const SectionDropdown = ({ 
    section, 
    title, 
    icon: Icon, 
    color, 
    bookings 
  }: { 
    section: string;
    title: string;
    icon: any;
    color: string;
    bookings: Booking[];
  }) => (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <button
        onClick={() => toggleSection(section)}
        className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center space-x-3 flex-1 min-w-0">
          <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${color} flex-shrink-0`} />
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 truncate">{title}</h2>
          <span className={`px-2 py-1 rounded-full text-xs sm:text-sm font-medium flex-shrink-0 ${
            section === 'awaitingConfirmation' ? 'bg-blue-100 text-blue-600' :
            section === 'awaitingPayment' ? 'bg-yellow-100 text-yellow-600' :
            'bg-green-100 text-green-600'
          }`}>
            {bookings.length}
          </span>
        </div>
        <ChevronDown 
          className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-400 transition-transform flex-shrink-0 ${
            selectedSection === section ? 'rotate-180' : ''
          }`}
        />
      </button>
      
      {selectedSection === section && (
        <div className="px-4 sm:px-6 pb-4 sm:pb-6">
          {bookings.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {bookings.map(booking => (
                <BookingCard key={booking.id} booking={booking} status={section} />
              ))}
            </div>
          ) : (
            <EmptyState 
              title={`No ${title.toLowerCase()}`}
              description={
                section === 'awaitingConfirmation' 
                  ? "When tutors send you booking requests, they will appear here for you to confirm or decline."
                  : section === 'awaitingPayment'
                  ? "Bookings that require payment will appear here once confirmed."
                  : "Your upcoming confirmed sessions will appear here."
              }
            />
          )}
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4 sm:space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg"></div>
                <span className="text-xl font-bold text-gray-900">YENETA</span>
              </div>
              
              {/* Mobile menu button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-gray-600 hover:text-gray-900"
              >
                <Menu className="w-5 h-5" />
              </button>

              <nav className={`${
                mobileMenuOpen ? 'block absolute top-16 left-0 right-0 bg-white border-b border-gray-200 py-4' : 'hidden'
              } md:flex md:static md:space-x-8`}>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 px-4 md:px-0">
                  <button onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }} className={`text-sm font-medium ${activeTab === 'home' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'} py-2 md:py-0`}>Home</button>
                  <button onClick={() => { setActiveTab('tutors'); setMobileMenuOpen(false); }} className={`text-sm font-medium ${activeTab === 'tutors' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'} py-2 md:py-0`}>Find a tutor</button>
                  <button onClick={() => { setActiveTab('bookings'); setMobileMenuOpen(false); }} className={`text-sm font-medium ${activeTab === 'bookings' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'} py-2 md:py-0`}>Bookings</button>
                </div>
              </nav>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
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
                  <span className="hidden sm:block text-sm font-medium text-gray-700">Aklesiya</span>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-xs font-bold">A</div>
                </button>
                {showProfile && (
                  <div className="absolute right-0 mt-2 w-48 sm:w-64 bg-white rounded-xl shadow-lg border border-gray-200 z-50">
                    <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xs sm:text-sm">A</div>
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
      <main className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-8">
        {activeTab === 'home' && (
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 px-2 sm:px-0">Welcome back, John!</h1>

            {/* Search Section with Three Lines Inside */}
            <div className="max-w-md mx-auto sm:mx-0">
              <div className="bg-white rounded-lg border border-gray-300 flex items-center px-3 py-2">
                <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors">
                  <Menu className="w-4 h-4" />
                </button>
                <Search className="w-4 h-4 text-gray-400 mx-2" />
                <input 
                  type="text" 
                  placeholder="" 
                  className="w-full text-gray-700 outline-none text-sm"
                />
              </div>
            </div>

            <section className="px-2 sm:px-0">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">My Tutors</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tutors.map((tutor, i) => (
                  <div key={i} className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-4 sm:p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center space-x-3 sm:space-x-4 mb-4">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                        <User className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-base sm:text-lg truncate">{tutor.name}</h3>
                        <p className="text-indigo-100 text-xs sm:text-sm truncate">{tutor.subject}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2 sm:space-y-3 mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="text-xs sm:text-sm text-indigo-100">Professional Tutor</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="text-xs sm:text-sm text-indigo-100">5+ Years Experience</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/20">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
                        <div className="flex-1">
                          <p className="text-xs text-indigo-200">Next Session</p>
                          <p className="text-sm font-semibold">{tutor.nextSession}</p>
                        </div>
                        <button className="bg-white text-indigo-600 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-indigo-50 transition-colors w-full sm:w-auto text-center">
                          View Profile
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="px-2 sm:px-0">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Enrolled Class</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {classes.map((cls, i) => (
                  <div key={i} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-100 p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-bold text-gray-900 text-base sm:text-lg truncate">{cls.name}</h3>
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-lg flex items-center justify-center flex-shrink-0 ml-2">
                        <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                      </div>
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                        <p className="text-sm text-gray-700 truncate"><span className="font-medium">Tutor:</span> {cls.tutor}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                        <p className="text-sm text-gray-700 truncate"><span className="font-medium">Schedule:</span> {cls.schedule}</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-blue-100">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-blue-100 text-blue-700 border border-blue-200">
                        {cls.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'tutors' && (
          <div className="space-y-6 px-2 sm:px-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Private tutors that fit your schedule</h1>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full">
              <div className="flex-1 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                <select className="w-full sm:w-60 px-4 py-3 border border-gray-300 rounded-lg bg-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>All Subjects</option>
                  <option>Mathematics</option>
                  <option>Physics</option>
                  <option>Chemistry</option>
                  <option>Biology</option>
                  <option>English</option>
                </select>
                <select className="w-full sm:w-60 px-4 py-3 border border-gray-300 rounded-lg bg-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>All Grades</option>
                  <option>Grade 1-6</option>
                  <option>Grade 7-8</option>
                  <option>Grade 9-10</option>
                  <option>Grade 11-12</option>
                  <option>University</option>
                </select>
                <select className="w-full sm:w-60 px-4 py-3 border border-gray-300 rounded-lg bg-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Any Price</option>
                  <option>100-200 ETB</option>
                  <option>200-300 ETB</option>
                  <option>300-400 ETB</option>
                  <option>400-500 ETB</option>
                  <option>500+ ETB</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              {['Brtukan Bolete', 'Melaku Mola', 'Hebrew Language'].map((name, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-200 p-4 flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-lg flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-base sm:text-lg">{name}</h3>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">Body text for whatever you'd like to say...</p>
                    <button className="mt-3 px-3 py-1 bg-blue-600 text-white text-sm rounded-full">300ETB/hr</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center space-x-2">
              <button className="w-8 h-8 border rounded-lg text-sm">&lt;</button>
              {[1,2,3,4].map(n => <button key={n} className={`w-8 h-8 rounded-lg text-sm ${n===1 ? 'bg-blue-600 text-white' : 'border'}`}>{n}</button>)}
              <button className="w-8 h-8 border rounded-lg text-sm">&gt;</button>
            </div>
          </div>
        )}

        {activeTab === 'bookings' && (
          <div className="space-y-6 sm:space-y-8 px-2 sm:px-0">
            {/* Hero Section */}
            <div className="text-left space-y-4">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Bookings</h1>
            </div>

            {/* Booking Content */}
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
              {/* Sidebar */}
              <div className="w-full lg:w-64 flex-shrink-0">
                <div className="bg-white rounded-xl border border-gray-200 p-4 space-y-2">
                  <button
                    onClick={() => handleBookingViewChange('upcoming')}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors text-sm sm:text-base ${
                      bookingView === 'upcoming' 
                        ? 'bg-blue-50 text-blue-600 border border-blue-200' 
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    Upcoming
                  </button>
                  <button
                    onClick={() => handleBookingViewChange('previous')}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors text-sm sm:text-base ${
                      bookingView === 'previous' 
                        ? 'bg-blue-50 text-blue-600 border border-blue-200' 
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    Previous
                  </button>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1">
                {!bookingView ? (
                  <div className="bg-gradient-to-br from-blue-25 to-blue-50/30 rounded-2xl p-4 sm:p-8">
                    <MainEmptyState />
                  </div>
                ) : bookingView === 'upcoming' ? (
                  <div className="bg-gradient-to-br from-blue-25 to-blue-50/30 rounded-2xl p-4 sm:p-6">
                    {selectedSection ? (
                      <div className="space-y-4">
                        <SectionDropdown
                          section="awaitingConfirmation"
                          title="Awaiting Confirmation"
                          icon={Clock}
                          color="text-blue-600"
                          bookings={upcomingBookings.awaitingConfirmation}
                        />

                        <SectionDropdown
                          section="awaitingPayment"
                          title="Awaiting Payment"
                          icon={DollarSign}
                          color="text-yellow-600"
                          bookings={upcomingBookings.awaitingPayment}
                        />

                        <SectionDropdown
                          section="confirmed"
                          title="Confirmed"
                          icon={CheckCircle}
                          color="text-green-600"
                          bookings={upcomingBookings.confirmed}
                        />
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {/* Show dropdown headers only when no section is selected */}
                        <div className="space-y-4">
                          <SectionDropdown
                            section="awaitingConfirmation"
                            title="Awaiting Confirmation"
                            icon={Clock}
                            color="text-blue-600"
                            bookings={upcomingBookings.awaitingConfirmation}
                          />

                          <SectionDropdown
                            section="awaitingPayment"
                            title="Awaiting Payment"
                            icon={DollarSign}
                            color="text-yellow-600"
                            bookings={upcomingBookings.awaitingPayment}
                          />

                          <SectionDropdown
                            section="confirmed"
                            title="Confirmed"
                            icon={CheckCircle}
                            color="text-green-600"
                            bookings={upcomingBookings.confirmed}
                          />
                        </div>
                        
                        {/* Show main empty state in the center */}
                        <div className="mt-8 sm:mt-12">
                          <MainEmptyState />
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  // Previous bookings view
                  <div className="bg-gradient-to-br from-blue-25 to-blue-50/30 rounded-2xl p-4 sm:p-6">
                    {previousBookings.length > 0 ? (
                      <div className="space-y-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Previous Bookings</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                          {previousBookings.map(booking => (
                            <BookingCard key={booking.id} booking={booking} status="completed" />
                          ))}
                        </div>
                      </div>
                    ) : (
                      <MainEmptyState />
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}