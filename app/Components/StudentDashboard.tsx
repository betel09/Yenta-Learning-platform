'use client';

import { useState } from 'react';
import { Search, MessageCircle, Bell, ChevronDown, Settings, Calendar, HelpCircle, MessageSquare, Users, LogOut, Clock, CheckCircle, DollarSign, BookOpen } from 'lucide-react';

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState('home');
  const [showProfile, setShowProfile] = useState(false);
  const [bookingView, setBookingView] = useState<string | null>(null); // 'upcoming' or 'previous' or null
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const tutors = [
    { name: 'Sarah Leah', subject: 'Mathematics', nextSession: 'Oct 15, 2:00pm' },
    { name: 'Sarah Leah', subject: 'Mathematics', nextSession: 'Oct 15, 2:00pm' },
  ];

  const classes = [
    { name: 'Physic 101', tutor: 'Sarah Lee', schedule: 'Mon, Wed, Fri -4:00pm', status: 'ongoing' },
    { name: 'Physic 101', tutor: 'Sarah Lee', schedule: 'Mon, Wed, Fri -4:00pm', status: 'ongoing' },
  ];

  // Sample booking data
  const upcomingBookings = {
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

  const previousBookings = [];

  const toggleSection = (section: string) => {
    setSelectedSection(selectedSection === section ? null : section);
  };

  const handleBookingViewChange = (view: string) => {
    setBookingView(view);
    setSelectedSection(null);
  };

  const BookingCard = ({ booking, status }: any) => (
    <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4 hover:shadow-lg transition-shadow">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
          {booking.tutorInitials}
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 text-lg">{booking.tutorName}</h3>
          <p className="text-sm text-gray-600">{booking.subject}</p>
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
          <span className="font-medium">{booking.date}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Time:</span>
          <span className="font-medium">{booking.time}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Duration:</span>
          <span className="font-medium">{booking.duration}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Price:</span>
          <span className="font-medium text-blue-600">{booking.price}</span>
        </div>
      </div>

      <div className="flex space-x-3 pt-2">
        {status === 'awaitingConfirmation' && (
          <>
            <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
              Accept
            </button>
            <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Decline
            </button>
          </>
        )}
        {status === 'awaitingPayment' && (
          <button className="flex-1 bg-green-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
            Pay Now
          </button>
        )}
        {status === 'confirmed' && (
          <button className="flex-1 border border-blue-600 text-blue-600 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors">
            View Details
          </button>
        )}
      </div>
    </div>
  );

  const EmptyState = ({ title, description }: { title: string; description: string }) => (
    <div className="text-center py-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border-2 border-dashed border-gray-300">
      <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
          </div>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-6 max-w-md mx-auto">{description}</p>
      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
        Find Tutor
      </button>
    </div>
  );

  const MainEmptyState = () => (
    <div className="text-center py-16">
      <div className="w-48 h-48 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full flex items-center justify-center mx-auto mb-8">
        <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <div className="w-16 h-2 bg-gray-200 rounded-full mx-auto"></div>
          </div>
        </div>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">No Bookings Selected</h3>
      <p className="text-gray-600 mb-8 max-w-md mx-auto text-lg">
        {bookingView 
          ? "Select a booking category from the dropdown sections to view your bookings"
          : "Select 'Upcoming' or 'Previous' to view your bookings"
        }
      </p>
      <div className="flex justify-center space-x-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
          Browse Tutors
        </button>
        <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
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
    bookings: any[];
  }) => (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <button
        onClick={() => toggleSection(section)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center space-x-3">
          <Icon className={`w-5 h-5 ${color}`} />
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          <span className={`px-2 py-1 rounded-full text-sm font-medium ${
            section === 'awaitingConfirmation' ? 'bg-blue-100 text-blue-600' :
            section === 'awaitingPayment' ? 'bg-yellow-100 text-yellow-600' :
            'bg-green-100 text-green-600'
          }`}>
            {bookings.length}
          </span>
        </div>
        <ChevronDown 
          className={`w-5 h-5 text-gray-400 transition-transform ${
            selectedSection === section ? 'rotate-180' : ''
          }`}
        />
      </button>
      
      {selectedSection === section && (
        <div className="px-6 pb-6">
          {bookings.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg"></div>
                <span className="text-xl font-bold text-gray-900">SPARKLE</span>
              </div>
              <nav className="hidden md:flex space-x-8">
                <button onClick={() => setActiveTab('home')} className={`text-sm font-medium ${activeTab === 'home' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}>Home</button>
                <button onClick={() => setActiveTab('tutors')} className={`text-sm font-medium ${activeTab === 'tutors' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}>Find a tutor</button>
                <button onClick={() => setActiveTab('bookings')} className={`text-sm font-medium ${activeTab === 'bookings' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}>Bookings</button>
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
                    <p className="text-sm text-gray-600 mt-1">Body text for whatever you'd like to say...</p>
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

        {activeTab === 'bookings' && (
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="text-center space-y-4">
              <h1 className="text-3xl font-bold text-gray-900">Booking from Tutors live here</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                First let's find a tutor who will inspire you
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Find Tutor
              </button>
            </div>

            {/* Search Section */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center">
                <div className="bg-white px-4">
                  <div className="flex items-center space-x-2 text-gray-500 bg-gray-50 rounded-lg px-4 py-2">
                    <Search className="w-5 h-5" />
                    <input 
                      type="text" 
                      placeholder="Search anything" 
                      className="py-2 pr-4 text-sm outline-none bg-transparent w-64"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Content */}
            <div className="flex gap-8">
              {/* Sidebar */}
              <div className="w-64 flex-shrink-0">
                <div className="bg-white rounded-xl border border-gray-200 p-4 space-y-2">
                  <button
                    onClick={() => handleBookingViewChange('upcoming')}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                      bookingView === 'upcoming' 
                        ? 'bg-blue-50 text-blue-600 border border-blue-200' 
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    Upcoming
                  </button>
                  <button
                    onClick={() => handleBookingViewChange('previous')}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
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
                  <MainEmptyState />
                ) : bookingView === 'upcoming' ? (
                  <div>
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
                        <div className="mt-12">
                          <MainEmptyState />
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  // Previous bookings view
                  <div>
                    {previousBookings.length > 0 ? (
                      <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Previous Bookings</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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