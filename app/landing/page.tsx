'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';

export default function LandingPage() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignUp = () => {
    router.push('/Registor');
  };

  const handleSignIn = () => {
    router.push('/login');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Responsive */}
      <nav className="bg-white shadow-sm border-b fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-600">YENETA</div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">How it Works</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Services</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact Us</button>
            </div>

            {/* Desktop Sign Up Button */}
            <div className="hidden md:flex items-center">
                <button onClick={handleSignIn} className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 font-medium transition-colors">
                Sign In
              </button>
              <button onClick={handleSignUp} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium transition-colors">
                Sign Up
              </button>
            </div>
 
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
                  <button onClick={handleSignIn} className="border border-blue-600 text-blue-600 px-3 py-2 rounded-lg hover:bg-blue-50 font-medium text-sm transition-colors">
                Sign In
              </button>
              <button onClick={handleSignUp} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium text-sm transition-colors">
                Sign Up
              </button>
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-64 opacity-100 py-4' : 'max-h-0 opacity-0'
          }`}>
            <div className="flex flex-col space-y-4 px-2">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-blue-600 font-medium py-2 text-left transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-blue-600 font-medium py-2 text-left transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-gray-700 hover:text-blue-600 font-medium py-2 text-left transition-colors"
              >
                How it Works
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-blue-600 font-medium py-2 text-left transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-blue-600 font-medium py-2 text-left transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </nav>

   

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-5xl font-bold text-gray-800 mb-6">
                Help You Find The Best Tutor
              </h1>
              <h2 className="text-3xl font-semibold text-blue-600 mb-4">
                Online tutoring that releases potential
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We can't stop you worrying about your child. But our expert tutors can help their grades and confidence soar - and help you worry a little less.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={handleSignUp} className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 font-semibold text-lg">Get Started</button>
                <button onClick={() => scrollToSection('about')} className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 font-semibold text-lg">Learn More</button>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="bg-white rounded-lg px-6 py-3 shadow-sm">
                  <div className="text-2xl font-bold text-blue-600">2K+</div>
                  <div className="text-gray-600">Tutors Available</div>
                </div>
              </div>
            </div>

            {/* Right Content - Single Combined Image */}
<div className="bg-white rounded-3xl shadow-lg p-8">
  <div className="flex justify-center items-center">
    <div className="rounded-lg overflow-hidden">
      <Image 
        src="/pic/Picsart.png" 
        alt="Tutoring session illustration"
        width={600}
        height={600}
        className="object-contain w-full h-full max-h-96"
      />
    </div>
  </div>
</div>

          </div>
        </div>
      </section>
  {/* Navigation Bar Style Horizontal List */}
<div className="bg-[#F9B236] w-full py-4">
  <div className="flex flex-wrap justify-center gap-11 mx-auto max-w-6xl">
    {['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'History'].map((subject, index) => (
      <div key={index} className="text-black font-medium text-lg hover:text-white transition-colors cursor-default">
        {subject}
      </div>
    ))}
  </div>
</div>

{/* Let Us Introduce Section */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      
      {/* Left Side - Introduction Text */}
      <div className="space-y-6">
        <div className="text-sm text-blue-600 font-semibold mb-2">一一Let Us Introduce Our self</div>
        <h2 className="text-4xl font-bold text-gray-800 leading-tight">
          YENETA Tutoring<br />
          Solution is where Experts Exist
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          We can't stop you worrying about your child. But our expert tutors can help their grades and confidence soar - and help you worry a little less.
        </p>
        
        {/* Additional Info */}
        <div className="space-y-4 mt-8">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <span className="text-gray-700">Certified and experienced tutors</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <span className="text-gray-700">Personalized learning approach</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <span className="text-gray-700">Proven track record of success</span>
          </div>
        </div>
      </div>

      {/* Right Side - Certified Mentor Cards */}
      <div className="grid grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="text-white text-2xl">🎓</div>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">Certified Educators</h3>
          <p className="text-gray-600 text-sm">
            All our tutors are certified professionals with extensive teaching experience and subject matter expertise.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
          <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="text-white text-2xl">✨</div>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">Personalized Approach</h3>
          <p className="text-gray-600 text-sm">
            We create customized learning plans tailored to each student's strengths, weaknesses, and learning style.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
          <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="text-white text-2xl">📈</div>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">Proven Results</h3>
          <p className="text-gray-600 text-sm">
            Our students consistently show significant improvement in grades, test scores, and academic confidence.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
          <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="text-white text-2xl">🕒</div>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">24/7 Support</h3>
          <p className="text-gray-600 text-sm">
            Round-the-clock assistance ensures students get help whenever they need it, even outside scheduled sessions.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* Be A Tutor Section */}
      <section className=" py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
     {/* Left Side - Two Images Overlapping */}
   <div className="bg-white rounded-2xl shadow-lg p-8">
   <div className="relative flex justify-center">
    {/* First Image - Back */}
    <div className="relative z-10 w-2/3 transform -rotate-3 shadow-xl">
      <Image 
        src="/pic/Frame19.png" 
        alt="Tutor teaching"
        width={300}
        height={400}
        className="object-cover w-full h-full rounded-xl"
      />
     </div>
     {/* Second Image - Front */}
     <div className="relative z-20 w-2/3 -ml-16 transform rotate-3 mt-8 shadow-2xl">
       <Image 
         src="/pic/Frame20.png"                
         alt="Successful tutoring session"
         width={300}
         height={400}
         className="object-cover w-full h-full rounded-xl"
         />
        </div>
        </div>
        </div> 
            {/* Right Side - Text Content */}
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Turn Your Knowledge Into Impact (and Income!)
              </h2>
              <p className="text-lg text-blue-100 mb-6">
                Are you a passionate tutor who loves helping students reach their goals? Join a community of skilled educators turning their expertise into meaningful side gigs.
              </p>
              <p className="text-lg text-blue-100 mb-8">
                Connect, teach, and make a difference — all while earning from what you already know!
              </p>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 font-semibold text-lg">
                Be A Tutor
              </button>
            </div>
          </div>

          {/* Rest of the section remains the same */}
          <div className="mt-16">
  {/* First Row - Two Cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
    {[
      { title: "Flexible Schedule", description: "Choose your own hours and teach when it's convenient for you.", icon: "⏰" },
      { title: "Competitive Earnings", description: "Earn competitive rates while making a difference in students' lives.", icon: "💰" }
    ].map((feature, index) => (
      <div key={index} className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm">
        <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
          <div className="text-white text-xl">{feature.icon}</div>
        </div>
        <h4 className="text-white font-semibold mb-3">{feature.title}</h4>
        <p className="text-blue-100 text-sm">{feature.description}</p>
      </div>
    ))}
  </div>

  {/* Services Title */}
  <div className="flex justify-center items-center bold my-8">
    <h3 className="text-3xl font-bold text-white text-center">Services</h3>
  </div>

  {/* Second Row - Two Cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
    {[
      { title: "Supportive Community", description: "Join a network of passionate educators and share best practices.", icon: "👥" },
      { title: "Easy Setup", description: "Get started quickly with our simple onboarding process.", icon: "⚡" }
    ].map((feature, index) => (
      <div key={index} className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm">
        <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
          <div className="text-white text-xl">{feature.icon}</div>
        </div>
        <h4 className="text-white font-semibold mb-3">{feature.title}</h4>
        <p className="text-blue-100 text-sm">{feature.description}</p>
      </div>
    ))}
  </div>
</div>
        </div>
      </section>

      {/* Let Us Introduce Our Tutors Section */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-left mb-16">
      <div className="text-sm text-blue-600 font-semibold mb-2">一一Let Us Introduce Our self</div>
      <h3 className="text-4xl font-bold text-gray-800 mb-4">
        More than thousand of tutors ready to give you the best education and help
      </h3>
    </div>

    {/* Tutors Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {/* Tutor Card 1 */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
        <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-white shadow-lg">
          <Image 
            src="/pic/Frame19.png" 
            alt="Biruktawit Selomon"
            width={96}
            height={96}
            className="object-cover w-full h-full"
          />
        </div>
        <h4 className="font-semibold text-gray-800 mb-2 text-lg">Biruktawit Selomon</h4>
        <div className="flex items-center justify-center gap-1 mb-2">
          <span className="text-yellow-500">⭐</span>
          <span className="font-medium text-gray-700">4.8</span>
        </div>
        <div className="text-gray-600 mb-1">Engineer</div>
        <div className="text-sm text-gray-500">40+ students</div>
      </div>

      {/* Tutor Card 2 */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
        <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-white shadow-lg">
          <Image 
            src="/pic/Frame19.png" 
            alt="Biruktawit Selomon"
            width={96}
            height={96}
            className="object-cover w-full h-full"
          />
        </div>
        <h4 className="font-semibold text-gray-800 mb-2 text-lg">Biruktawit Selomon</h4>
        <div className="flex items-center justify-center gap-1 mb-2">
          <span className="text-yellow-500">⭐</span>
          <span className="font-medium text-gray-700">4.8</span>
        </div>
        <div className="text-gray-600 mb-1">Engineer</div>
        <div className="text-sm text-gray-500">40+ students</div>
      </div>

      {/* Tutor Card 3 */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
        <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-white shadow-lg">
          <Image 
            src="/pic/Frame19.png" 
            alt="Biruktawit Selomon"
            width={96}
            height={96}
            className="object-cover w-full h-full"
          />
        </div>
        <h4 className="font-semibold text-gray-800 mb-2 text-lg">Biruktawit Selomon</h4>
        <div className="flex items-center justify-center gap-1 mb-2">
          <span className="text-yellow-500">⭐</span>
          <span className="font-medium text-gray-700">4.8</span>
        </div>
        <div className="text-gray-600 mb-1">Engineer</div>
        <div className="text-sm text-gray-500">40+ students</div>
      </div>

      {/* Tutor Card 4 */}
      <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
        <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-white shadow-lg">
          <Image 
            src="/pic/Frame19.png" 
            alt="Biruktawit Selomon"
            width={96}
            height={96}
            className="object-cover w-full h-full"
          />
        </div>
        <h4 className="font-semibold text-gray-800 mb-2 text-lg">Biruktawit Selomon</h4>
        <div className="flex items-center justify-center gap-1 mb-2">
          <span className="text-yellow-500">⭐</span>
          <span className="font-medium text-gray-700">4.8</span>
        </div>
        <div className="text-gray-600 mb-1">Engineer</div>
        <div className="text-sm text-gray-500">40+ students</div>
      </div>

      {/* Tutor Card 5 */}
      <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
        <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-white shadow-lg">
          <Image 
            src="/pic/Frame19.png" 
            alt="Biruktawit Selomon"
            width={96}
            height={96}
            className="object-cover w-full h-full"
          />
        </div>
        <h4 className="font-semibold text-gray-800 mb-2 text-lg">Biruktawit Selomon</h4>
        <div className="flex items-center justify-center gap-1 mb-2">
          <span className="text-yellow-500">⭐</span>
          <span className="font-medium text-gray-700">4.8</span>
        </div>
        <div className="text-gray-600 mb-1">Engineer</div>
        <div className="text-sm text-gray-500">40+ students</div>
      </div>

      {/* Tutor Card 6 */}
      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
        <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-white shadow-lg">
          <Image 
            src="/pic/Frame19.png" 
            alt="Biruktawit Selomon"
            width={96}
            height={96}
            className="object-cover w-full h-full"
          />
        </div>
        <h4 className="font-semibold text-gray-800 mb-2 text-lg">Biruktawit Selomon</h4>
        <div className="flex items-center justify-center gap-1 mb-2">
          <span className="text-yellow-500">⭐</span>
          <span className="font-medium text-gray-700">4.8</span>
        </div>
        <div className="text-gray-600 mb-1">Engineer</div>
        <div className="text-sm text-gray-500">40+ students</div>
      </div>
    </div>

    {/* Buttons */}
    <div className="text-center">
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 font-semibold transition-colors">
          Browse More
        </button>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-semibold transition-colors">
          Be A Tutor
        </button>
      </div>
    </div>
  </div>
</section>

      {/* Testimonial Section */}
<section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-100">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        Here is what our Clients are saying About us
      </h2>
    </div>

    {/* Message Bubble Design */}
    <div className="relative max-w-3xl mx-auto">
      {/* Message Bubble */}
      <div className="bg-white rounded-3xl shadow-xl p-8 relative">
        {/* Quote Icon */}
        <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-white text-xl">❝</span>
        </div>
        
        {/* Message Content */}
        <div className="text-2xl font-bold text-blue-600 mb-6 text-center">
          "It was a very good experience"
        </div>
        
        <p className="text-gray-700 leading-relaxed text-lg text-center mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu.
        </p>
        
        {/* Stats */}
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600 inline-block bg-blue-50 px-6 py-3 rounded-full">
            85% Improvement
          </div>
        </div>

        {/* Message Tail */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="w-8 h-8 bg-white transform rotate-45"></div>
        </div>
      </div>

      {/* Profile Pictures Below */}
      <div className="flex justify-center items-center gap-6 mt-12">
        {/* Profile 1 */}
        <div className="text-center">
          <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-2 border-4 border-white shadow-lg">
            <Image 
              src="/pic/Frame19.png" 
              alt="Happy Student"
              width={64}
              height={64}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-sm font-semibold text-gray-800">Sarah M.</div>
          <div className="text-xs text-gray-600">Student</div>
        </div>

        {/* Profile 2 */}
        <div className="text-center">
          <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-2 border-4 border-white shadow-lg">
            <Image 
              src="/pic/Frame19.png" 
              alt="Happy Student"
              width={80}
              height={80}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-sm font-semibold text-gray-800">John D.</div>
          <div className="text-xs text-gray-600">Parent</div>
        </div>

        {/* Profile 3 */}
        <div className="text-center">
          <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-2 border-4 border-white shadow-lg">
            <Image 
              src="/pic/Frame19.png" 
              alt="Happy Student"
              width={64}
              height={64}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-sm font-semibold text-gray-800">Emma L.</div>
          <div className="text-xs text-gray-600">Student</div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm text-blue-600 font-semibold mb-2">About Us</div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Learn More About Sparkle Tutoring
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are dedicated to providing the best online tutoring experience for students and creating opportunities for passionate educators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To connect students with expert tutors who can help them achieve academic success and build confidence in their learning journey.
              </p>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To become the leading online tutoring platform that transforms education through personalized learning experiences.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">Why Choose Us?</h4>
                <ul className="text-gray-600 space-y-2 text-left">
                  <li>✅ Certified and experienced tutors</li>
                  <li>✅ Personalized learning plans</li>
                  <li>✅ Flexible scheduling</li>
                  <li>✅ Affordable pricing</li>
                  <li>✅ 24/7 support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
<section id="how-it-works" className="py-20 bg-white">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
    </div>

    <div className="relative">
      {/* Blue Vertical Line */}
      <div className="absolute left-8 top-0 bottom-0 w-1 bg-blue-500"></div>

      {/* Step 1 */}
      <div className="relative flex items-start gap-8 mb-16">
        {/* Step Number Circle */}
        <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xl font-bold">1</span>
        </div>
        
        {/* Step Content */}
        <div className="flex-1 pt-2">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Step 1</h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt.
          </p>
        </div>
      </div>

      {/* Step 2 */}
      <div className="relative flex items-start gap-8 mb-16">
        {/* Step Number Circle */}
        <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xl font-bold">2</span>
        </div>
        
        {/* Step Content */}
        <div className="flex-1 pt-2">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Step 2</h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt.
          </p>
        </div>
      </div>

      {/* Step 3 - Gray Color */}
      <div className="relative flex items-start gap-8">
        {/* Step Number Circle - Gray */}
        <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center">
          <span className="text-white text-xl font-bold">3</span>
        </div>
        
        {/* Step Content - Gray */}
        <div className="flex-1 pt-2">
          <h3 className="text-2xl font-bold text-gray-600 mb-4">Step 3</h3>
          <p className="text-gray-500 leading-relaxed text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Contact Us Section */}
<section id="contact" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-orange-500 mb-4">Contact Us</h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Any question or remarks? Just write us a message!
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
      
      {/* Left Side - Contact Information (Blue Background) */}
      <div className="bg-blue-600 rounded-2xl p-8 text-white relative overflow-hidden">
        {/* Decorative Element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-700 rounded-full -translate-y-16 translate-x-16"></div>
        
        <h3 className="text-2xl font-bold mb-8 relative z-10">Contact Information</h3>
        
        <div className="space-y-6 relative z-10">
          

          {/* Phone Numbers */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white">📞</span>
            </div>
            <div>
              <div className="text-blue-200 text-sm mb-1">Phone Number</div>
              <div className="text-white font-medium">+1 012 3456 789</div>
              <div className="text-white font-medium">+1012 3456 789</div>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white">✉️</span>
            </div>
            <div>
              <div className="text-blue-200 text-sm mb-1">Email</div>
              <div className="text-white font-medium">demo@gmail.com</div>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white">📍</span>
            </div>
            <div>
              <div className="text-blue-200 text-sm mb-1">Address</div>
              <div className="text-white font-medium">
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </div>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="pt-6 border-t border-blue-500">
            <div className="text-blue-200 text-sm mb-4">Follow us on social media</div>
            <div className="flex gap-4">
              {/* Twitter */}
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>

              {/* Telegram */}
              <a 
                href="https://telegram.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.191c-.175.761-.836 2.485-1.587 4.791-.612 1.865-1.271 3.705-1.82 5.563-.185.627-.547 1.235-.875 1.235-.107 0-.438-.258-.875-.761-.547-.547-1.076-1.152-1.548-1.821-.324-.438-1.235-1.235-1.235-1.548 0-.185.129-.185.711-.547 3.902-1.711 6.511-2.533 7.829-2.465.438 0 1.235.258 1.548.438.185.107.355.478.107.547z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Contact Form (White Background) */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
        <form className="space-y-6">
          {/* Name Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input 
          type="text" 
          placeholder="Doe" 
          className="w-full px-1 py-3 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:ring-0 outline-none transition-colors bg-transparent" 
        />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input 
          type="text" 
          placeholder="Doe" 
          className="w-full px-1 py-3 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:ring-0 outline-none transition-colors bg-transparent" 
        />
            </div>
          </div>
          
            {/* Email and Phone Row */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
    <input 
      type="email" 
      placeholder="Enter your email" 
      className="w-full px-1 py-3 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:ring-0 outline-none transition-colors bg-transparent" 
    />
  </div>
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
    <input 
      type="tel" 
      placeholder="Enter your phone number" 
      className="w-full px-1 py-3 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:ring-0 outline-none transition-colors bg-transparent" 
    />
  </div>
</div>
  <div>
  <label className="block text-sm font-medium text-gray-700 mb-4">Select Subject?</label>
  
  {/* Horizontal Radio Buttons */}
  <div className="flex flex-wrap gap-6">
    <label className="flex items-center space-x-2">
      <input 
        type="radio" 
        name="subject" 
        value="general" 
        className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300"
      />
      <span className="text-gray-700">General Inquiry</span>
    </label>
    <label className="flex items-center space-x-2">
      <input 
        type="radio" 
        name="subject" 
        value="technical" 
        className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300"
      />
      <span className="text-gray-700">Technical Support</span>
    </label>
    <label className="flex items-center space-x-2">
      <input 
        type="radio" 
        name="subject" 
        value="billing" 
        className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300"
      />
      <span className="text-gray-700">Billing Question</span>
    </label>
    <label className="flex items-center space-x-2">
      <input 
        type="radio" 
        name="subject" 
        value="partnership" 
        className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300"
      />
      <span className="text-gray-700">Partnership</span>
    </label>
  </div>
</div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea 
  rows={1} 
  placeholder="Write your message.." 
  className="w-full px-1 py-3 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:ring-0 outline-none transition-colors bg-transparent resize-none"
></textarea>
          </div>
        
  <div className="flex justify-end">
      <button 
        type="submit" 
        className="bg-blue-600 text-white py-3 px-8 rounded-md font-semibold text-base hover:bg-blue-700 transition-colors shadow-lg"
      >
        Send Message
      </button>
    </div>
        </form>
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4">YENTA</div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Updates</a></li>
                <li><a href="#" className="hover:text-white">Beta</a></li>
                <li><a href="#" className="hover:text-white">Newsletter</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Learning</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Learn Hub</a></li>
                <li><a href="#" className="hover:text-white">Manuals</a></li>
                <li><a href="#" className="hover:text-white">Tutorials</a></li>
                <li><a href="#" className="hover:text-white">Communities</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Tutorials</a></li>
                <li><a href="#" className="hover:text-white">Editorials</a></li>
                <li><a href="#" className="hover:text-white">Product</a></li>
                <li><a href="#" className="hover:text-white">Newsroom</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">About</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Company</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Legal</a></li>
                <li><a href="#" className="hover:text-white">Help</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-gray-300">
            <p>© 2024 YENETA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}