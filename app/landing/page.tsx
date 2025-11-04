
'use client';

import { useRouter } from 'next/navigation';

export default function LandingPage() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-600">SPARKLE</div>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                How it Works
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Contact Us
              </button>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-blue-600 font-medium">Login</button>
              <button 
                onClick={handleGetStarted}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium"
              >
                Get Started
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
                <button 
                  onClick={handleGetStarted}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 font-semibold text-lg"
                >
                  Get Started
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 font-semibold text-lg">
                  Learn More
                </button>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="bg-white rounded-lg px-6 py-3 shadow-sm">
                  <div className="text-2xl font-bold text-blue-600">2K+</div>
                  <div className="text-gray-600">Tutors Available</div>
                </div>
              </div>
            </div>

            {/* Right Content - Placeholder for image */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎓</div>
                  <div className="text-gray-600">Tutor Illustration</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm text-blue-600 font-semibold mb-2">一一Let Us Introduce Our self</div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Sparkle Tutoring Solution is where Experts Exist
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We can't stop you worrying about your child. But our expert tutors can help their grades and confidence soar - and help you worry a little less.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-white text-2xl">⭐</div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Certified Mentors</h3>
                <p className="text-gray-600">
                  We can't stop you worrying about your child. But our expert tutors can help their grades and confidence soar - and help you worry a little less.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Be A Tutor Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Turn Your Knowledge Into Impact (and Income!)
              </h2>
              <p className="text-lg text-blue-100 mb-8">
                Are you a passionate tutor who loves helping students reach their goals? Join a community of skilled educators turning their expertise into meaningful side gigs.
              </p>
              <p className="text-lg text-blue-100 mb-8">
                Connect, teach, and make a difference — all while earning from what you already know!
              </p>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 font-semibold text-lg">
                Be A Tutor
              </button>
            </div>

            {/* Right Content */}
            <div className="grid grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                    <div className="text-white">👨‍🏫</div>
                  </div>
                  <h4 className="text-white font-semibold mb-2">Certified Mentors</h4>
                  <p className="text-blue-100 text-sm">
                    We can't stop you worrying about your child. But our expert tutors can help their grades and confidence soar.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tutors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm text-blue-600 font-semibold mb-2">一一Let Us Introduce Our self</div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              More than thousand of tutors ready to give you the best education and help
            </h2>
          </div>

          {/* Tutors Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white text-xl">👤</div>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Biruktawit Selomon</h4>
                <div className="text-sm text-gray-600">48 ⚡ Engineer @ 40+</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 font-semibold">
                Browse More
              </button>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-semibold">
                Be A Tutor
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Here is what our Clients are saying About us
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="text-3xl font-bold text-blue-600 mb-4">"It was a very good experience"</div>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Urpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu.
            </p>
            <div className="mt-6 text-2xl font-bold text-blue-600">209%?</div>
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
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">How It works</h2>
          </div>

          <div className="space-y-12">
            {[1, 2, 3].map((step) => (
              <div key={step} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
                <div className="text-2xl font-bold text-blue-600 mb-4">Step {step}</div>
                <p className="text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Urpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4">SPARKLE</div>
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
            <p>© 2024 SPARKLE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}