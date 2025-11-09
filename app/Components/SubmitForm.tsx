// // // 'use client';

// // // import { useState, useEffect } from 'react';

// // // export default function SubmitForm() {
// // //   const [isClient, setIsClient] = useState(false);
// // //   const [showTerms, setShowTerms] = useState(false);
// // //   const [acceptedTerms, setAcceptedTerms] = useState(false);
// // //   const [submitted, setSubmitted] = useState(false);

// // //   useEffect(() => {
// // //     setIsClient(true);
// // //   }, []);

// // //   const handleSubmit = () => {
// // //     setShowTerms(true);
// // //   };

// // //   const handleAccept = () => {
// // //     setSubmitted(true);
// // //   };

// // //   const handleToDashboard = () => {
// // //     // Redirect to dashboard or next page
// // //     alert('Redirecting to dashboard...');
// // //   };

// // //   if (!isClient) {
// // //     return (
// // //       <div className="min-h-screen bg-white flex items-center justify-center">
// // //         <div className="text-lg text-gray-600">Loading...</div>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-white flex items-center justify-center p-4">
// // //       <div className="max-w-4xl w-full">
// // //         {/* Step Navigation */}
// // //         <div className="flex items-center justify-between mb-8">
// // //           <div className="text-yellow-500 text-3xl">⭐</div>
// // //           <div className="flex items-center space-x-6">
// // //             {[
// // //               { number: 1, title: 'Choose account type', current: false },
// // //               { number: 2, title: 'Fill out necessary detail', current: false },
// // //               { number: 3, title: 'Verify Identity', current: false },
// // //               { number: 4, title: 'Submit', current: !submitted }
// // //             ].map((step) => (
// // //               <div key={step.number} className="flex items-center">
// // //                 <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
// // //                   step.current ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400 border border-gray-300'
// // //                 }`}>
// // //                   {step.number}
// // //                 </div>
// // //                 <span className={`ml-2 text-sm ${step.current ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>
// // //                   {step.title}
// // //                 </span>
// // //                 {step.number < 4 && <div className="ml-4 w-6 h-0.5 bg-gray-300"></div>}
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* Show different content based on state */}
// // //         {!showTerms && !submitted ? (
// // //           /* Review Information Card */
// // //           <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl shadow-lg p-8 border border-blue-100">
// // //             <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">Review Your Information</h1>
// // //             <p className="text-gray-600 mb-8 text-center">
// // //               Please review all information before submitting your application
// // //             </p>

// // //             <div className="space-y-8">
// // //               {/* Student Information Section */}
// // //               <div className="bg-white rounded-xl p-6 shadow-md">
// // //                 <h2 className="text-2xl font-bold text-gray-800 mb-4">Student Information</h2>
                
// // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //                   {/* Student Full Name */}
// // //                   <div>
// // //                     <label className="block text-gray-700 font-medium mb-2">
// // //                       Student Full Name *
// // //                     </label>
// // //                     <div className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200">
// // //                       <span className="text-gray-800">Bien Nogas</span>
// // //                     </div>
// // //                   </div>

// // //                   {/* Birth Date */}
// // //                   <div>
// // //                     <label className="block text-gray-700 font-medium mb-2">
// // //                       Select Birth Date *
// // //                     </label>
// // //                     <div className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200">
// // //                       <span className="text-gray-800">01/25/2008</span>
// // //                     </div>
// // //                   </div>

// // //                   {/* Student Photo */}
// // //                   <div>
// // //                     <label className="block text-gray-700 font-medium mb-2">
// // //                       Student photo
// // //                     </label>
// // //                     <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
// // //                       <span className="text-gray-500">Uploaded photo</span>
// // //                     </div>
// // //                   </div>

// // //                   {/* Student Grade */}
// // //                   <div>
// // //                     <label className="block text-gray-700 font-medium mb-2">
// // //                       Student Grade
// // //                     </label>
// // //                     <div className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200">
// // //                       <span className="text-gray-800">Grade 10</span>
// // //                     </div>
// // //                   </div>

// // //                   {/* Gender */}
// // //                   <div>
// // //                     <label className="block text-gray-700 font-medium mb-2">
// // //                       Select Gender *
// // //                     </label>
// // //                     <div className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200">
// // //                       <div className="flex items-center space-x-2">
// // //                         <div className="w-4 h-4 rounded-full border-2 border-blue-600 bg-blue-600"></div>
// // //                         <span className="text-gray-800">Female</span>
// // //                       </div>
// // //                     </div>
// // //                   </div>

// // //                   {/* Student ID Photo */}
// // //                   <div>
// // //                     <label className="block text-gray-700 font-medium mb-2">
// // //                       Student ID Photo *
// // //                     </label>
// // //                     <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
// // //                       <span className="text-gray-500">Uploaded school ID</span>
// // //                     </div>
// // //                   </div>

// // //                   {/* International Student */}
// // //                   <div>
// // //                     <label className="block text-gray-700 font-medium mb-2">
// // //                       Are You International Student *
// // //                     </label>
// // //                     <div className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200">
// // //                       <div className="flex items-center space-x-2">
// // //                         <div className="w-4 h-4 rounded-full border-2 border-gray-400"></div>
// // //                         <span className="text-gray-800">No</span>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* Parent Information Section */}
// // //               <div className="bg-white rounded-xl p-6 shadow-md">
// // //                 <h2 className="text-2xl font-bold text-gray-800 mb-4">Parent Information</h2>
                
// // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //                   {/* Parent Full Name */}
// // //                   <div>
// // //                     <label className="block text-gray-700 font-medium mb-2">
// // //                       Parent Full Name *
// // //                     </label>
// // //                     <div className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200">
// // //                       <span className="text-gray-800">John Doe</span>
// // //                     </div>
// // //                   </div>

// // //                   {/* Address */}
// // //                   <div>
// // //                     <label className="block text-gray-700 font-medium mb-2">
// // //                       Address *
// // //                     </label>
// // //                     <div className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200">
// // //                       <span className="text-gray-800">Lutho, near michael church</span>
// // //                     </div>
// // //                   </div>

// // //                   {/* Parent Phone Number */}
// // //                   <div>
// // //                     <label className="block text-gray-700 font-medium mb-2">
// // //                       Parent Phone Number *
// // //                     </label>
// // //                     <div className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200">
// // //                       <span className="text-gray-800">0982444444444</span>
// // //                     </div>
// // //                   </div>

// // //                   {/* Parent National ID Photo */}
// // //                   <div>
// // //                     <label className="block text-gray-700 font-medium mb-2">
// // //                       Parent National ID Photo *
// // //                     </label>
// // //                     <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
// // //                       <span className="text-gray-500">Uploaded parent ID</span>
// // //                     </div>
// // //                   </div>

// // //                   {/* Parent Email */}
// // //                   <div>
// // //                     <label className="block text-gray-700 font-medium mb-2">
// // //                       Parent Email *
// // //                     </label>
// // //                     <div className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200">
// // //                       <span className="text-gray-800">john@gmail.com</span>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Submit Button */}
// // //             <div className="text-center mt-8">
// // //               <button 
// // //                 onClick={handleSubmit}
// // //                 className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-12 rounded-xl text-lg transition-colors shadow-lg"
// // //               >
// // //                 Submit Application
// // //               </button>
// // //             </div>
// // //           </div>
// // //         ) : showTerms && !submitted ? (
// // //           /* Terms and Conditions Card */
// // //           <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl shadow-lg p-8 border border-blue-100">
// // //             <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Terms and Conditions</h1>
            
// // //             <div className="bg-white rounded-xl p-6 shadow-md mb-6">
// // //               <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Agreement</h2>
              
// // //               <div className="space-y-4 text-gray-600">
// // //                 <p>
// // //                   <strong>Last Revised: December 16, 2013</strong><br />
// // //                   Welcome to www.lorem-ipsum.info. This site is provided as a service to our visitors and may be used for informational purposes only. Because the Terms and Conditions contain legal obligations, please read them carefully.
// // //                 </p>
                
// // //                 <div>
// // //                   <h3 className="text-lg font-semibold text-gray-800 mb-2">1. YOUR AGREEMENT</h3>
// // //                   <p>
// // //                     By using this Site, you agree to be bound by, and to comply with, these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use this site.
// // //                   </p>
// // //                 </div>

// // //                 <div>
// // //                   <h3 className="text-lg font-semibold text-gray-800 mb-2">2. PRIVACY</h3>
// // //                   <p>
// // //                     Please review our Privacy Policy, which also governs your visit to this Site, to understand our practices.
// // //                   </p>
// // //                 </div>

// // //                 <div>
// // //                   <h3 className="text-lg font-semibold text-gray-800 mb-2">3. LINKED SITES</h3>
// // //                   <p>
// // //                     This Site may contain links to other independent third-party Web sites ("Linked Sites"). These Linked Sites are provided solely as a convenience to our visitors. Such Linked Sites are not under our control, and we are not responsible for and does not endorse the content of such Linked Sites, including any information or materials contained on such Linked Sites. You will need to make your own independent judgment regarding your interaction with these Linked Sites.
// // //                   </p>
// // //                 </div>

// // //                 <div>
// // //                   <h3 className="text-lg font-semibold text-gray-800 mb-2">4. FORWARD LOOKING STATEMENTS</h3>
// // //                   <p>
// // //                     [Additional terms and conditions content would go here...]
// // //                   </p>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Confirmation Checkbox */}
// // //             <div className="bg-white rounded-xl p-6 shadow-md mb-6">
// // //               <label className="flex items-start space-x-3 cursor-pointer">
// // //                 <input
// // //                   type="checkbox"
// // //                   checked={acceptedTerms}
// // //                   onChange={(e) => setAcceptedTerms(e.target.checked)}
// // //                   className="w-5 h-5 text-blue-600 focus:ring-blue-500 rounded mt-1"
// // //                 />
// // //                 <span className="text-gray-700 text-lg">
// // //                   I confirm that I have read and accept the terms and conditions and privacy policy.
// // //                 </span>
// // //               </label>
// // //             </div>

// // //             {/* Action Buttons */}
// // //             <div className="flex justify-end space-x-4">
// // //               <button
// // //                 onClick={() => setShowTerms(false)}
// // //                 className="px-8 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium"
// // //               >
// // //                 Cancel
// // //               </button>
// // //               <button
// // //                 onClick={handleAccept}
// // //                 disabled={!acceptedTerms}
// // //                 className={`px-8 py-3 rounded-xl font-medium transition-colors ${
// // //                   acceptedTerms
// // //                     ? 'bg-green-600 hover:bg-green-700 text-white shadow-lg'
// // //                     : 'bg-gray-300 text-gray-500 cursor-not-allowed'
// // //                 }`}
// // //               >
// // //                 Accept
// // //               </button>
// // //             </div>
// // //           </div>
// // //         ) : (
// // //           /* Success Card */
// // //           <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl shadow-lg p-8 border border-blue-100">
// // //             <div className="text-center">
// // //               {/* Success Icon */}
// // //               <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
// // //                 <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// // //                 </svg>
// // //               </div>

// // //               <h1 className="text-3xl font-bold text-gray-800 mb-4">Registration form submitted successfully</h1>
              
// // //               <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
// // //                 you have successfully finished registration and verification after this step you can search for tutors and select your preferred tutor or join active class
// // //               </p>

// // //               {/* To Dashboard Button */}
// // //               <div className="mb-8">
// // //                 <button 
// // //                   onClick={handleToDashboard}
// // //                   className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-12 rounded-xl text-lg transition-colors shadow-lg"
// // //                 >
// // //                   To the dashboard
// // //                 </button>
// // //               </div>

// // //               {/* Student Summary Info */}
// // //               <div className="bg-white rounded-xl p-6 shadow-md max-w-md mx-auto">
// // //                 <div className="text-left space-y-3">
// // //                   <div>
// // //                     <h3 className="font-semibold text-gray-800">Student Full Name</h3>
// // //                     <p className="text-gray-600">Bien Nogas</p>
// // //                   </div>
// // //                   <div>
// // //                     <h3 className="font-semibold text-gray-800">Address</h3>
// // //                     <p className="text-gray-600">Lutho, near-michael church</p>
// // //                   </div>
// // //                   <div>
// // //                     <h3 className="font-semibold text-gray-800">Parent Email</h3>
// // //                     <p className="text-blue-600">john@gmail.com</p>
// // //                   </div>
// // //                   <div>
// // //                     <h3 className="font-semibold text-gray-800">Parent Phone Number</h3>
// // //                     <p className="text-gray-600">09824444444</p>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // 'use client';

// // import { useState, useEffect } from 'react';

// // export default function SubmitForm({ selectedRole }: { selectedRole: string }) {
// //   const [isClient, setIsClient] = useState(false);
// //   const [showTerms, setShowTerms] = useState(false);
// //   const [acceptedTerms, setAcceptedTerms] = useState(false);
// //   const [submitted, setSubmitted] = useState(false);

// //   useEffect(() => {
// //     setIsClient(true);
// //   }, []);

// //   const handleSubmit = () => setShowTerms(true);
// //   const handleAccept = () => setSubmitted(true);
// //   const handleToDashboard = () => alert('Redirecting to dashboard...');

// //   if (!isClient) {
// //     return (
// //       <div className="min-h-screen bg-white flex items-center justify-center">
// //         <div className="text-lg text-gray-600">Loading...</div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-white flex items-center justify-center p-4">
// //       <div className="max-w-4xl w-full">

// //         {/* Step Navigation */}
// //         <div className="flex items-center justify-between mb-8">
// //           <div className="text-yellow-500 text-3xl">Star</div>
// //           <div className="flex items-center space-x-6">
// //             {[
// //               { number: 1, title: 'Choose account type', current: false },
// //               { number: 2, title: 'Fill out necessary detail', current: false },
// //               { number: 3, title: 'Verify Identity', current: false },
// //               { number: 4, title: 'Submit', current: !submitted }
// //             ].map((step) => (
// //               <div key={step.number} className="flex items-center">
// //                 <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
// //                   step.current ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400 border border-gray-300'
// //                 }`}>
// //                   {step.number}
// //                 </div>
// //                 <span className={`ml-2 text-sm ${step.current ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>
// //                   {step.title}
// //                 </span>
// //                 {step.number < 4 && <div className="ml-4 w-6 h-0.5 bg-gray-300"></div>}
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* REVIEW SECTION */}
// //         {!showTerms && !submitted ? (
// //           <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl shadow-lg p-8 border border-blue-100">
// //             <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">Review Your Information</h1>
// //             <p className="text-gray-600 mb-8 text-center">
// //               Please review all information before submitting your application
// //             </p>

// //             <div className="space-y-8">

// //               {/* STUDENT */}
// //               {selectedRole === 'student' && (
// //                 <div className="bg-white rounded-xl p-6 shadow-md">
// //                   <h2 className="text-2xl font-bold text-gray-800 mb-4">Student Information</h2>
// //                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                     <div>
// //                       <label className="block text-gray-700 font-medium mb-2">Student Full Name *</label>
// //                       <div className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200">
// //                         <span className="text-gray-800">Bien Nogas</span>
// //                       </div>
// //                     </div>
// //                     <div>
// //                       <label className="block text-gray-700 font-medium mb-2">Select Birth Date *</label>
// //                       <div className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200">
// //                         <span className="text-gray-800">01/25/2008</span>
// //                       </div>
// //                     </div>
// //                     <div>
// //                       <label className="block text-gray-700 font-medium mb-2">Student photo</label>
// //                       <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
// //                         <span className="text-gray-500">Uploaded photo</span>
// //                       </div>
// //                     </div>
// //                     <div>
// //                       <label className="block text-gray-700 font-medium mb-2">Student Grade</label>
// //                       <div className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200">
// //                         <span className="text-gray-800">Grade 10</span>
// //                       </div>
// //                     </div>
// //                     <div>
// //                       <label className="block text-gray-700 font-medium mb-2">Select Gender *</label>
// //                       <div className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200">
// //                         <div className="flex items-center space-x-2">
// //                           <div className="w-4 h-4 rounded-full border-2 border-blue-600 bg-blue-600"></div>
// //                           <span className="text-gray-800">Female</span>
// //                         </div>
// //                       </div>
// //                     </div>
// //                     <div>
// //                       <label className="block text-gray-700 font-medium mb-2">Student ID Photo *</label>
// //                       <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
// //                         <span className="text-gray-500">Uploaded school ID</span>
// //                       </div>
// //                     </div>
// //                     <div>
// //                       <label className="block text-gray-700 font-medium mb-2">Are You International Student *</label>
// //                       <div className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200">
// //                         <div className="flex items-center space-x-2">
// //                           <div className="w-4 h-4 rounded-full border-2 border-gray-400"></div>
// //                           <span className="text-gray-800">No</span>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               )}

// //               {/* PARENT */}
// //               {selectedRole === 'parent' && (
// //                 <div className="bg-white rounded-xl p-6 shadow-md">
// //                   <h2 className="text-2xl font-bold text-gray-800 mb-4">Parent Information</h2>
// //                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                     <div>
// //                       <label className="block text-gray-700 font-medium mb-2">Parent Full Name *</label>
// //                       <div className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200">
// //                         <span className="text-gray-800">John Doe</span>
// //                       </div>
// //                     </div>
// //                     <div>
// //                       <label className="block text-gray-700 font-medium mb-2">Address *</label>
// //                       <div className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200">
// //                         <span className="text-gray-800">Lutho, near michael church</span>
// //                       </div>
// //                     </div>
// //                     <div>
// //                       <label className="block text-gray-700 font-medium mb-2">Parent Phone Number *</label>
// //                       <div className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200">
// //                         <span className="text-gray-800">0982444444444</span>
// //                       </div>
// //                     </div>
// //                     <div>
// //                       <label className="block text-gray-700 font-medium mb-2">Parent National ID Photo *</label>
// //                       <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
// //                         <span className="text-gray-500">Uploaded parent ID</span>
// //                       </div>
// //                     </div>
// //                     <div>
// //                       <label className="block text-gray-700 font-medium mb-2">Parent Email *</label>
// //                       <div className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200">
// //                         <span className="text-gray-800">john@gmail.com</span>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               )}

// //               {/* TEACHER */}
// //               {selectedRole === 'teacher' && (
// //                 <div className="bg-white rounded-xl p-6 shadow-md">
// //                   <h2 className="text-2xl font-bold text-gray-800 mb-4">Teacher Information</h2>
// //                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                     <div>
// //                       <label className="block text-gray-700 font-medium mb-2">Teacher Full Name *</label>
// //                       <div className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200">
// //                         <span className="text-gray-800">Mr. Smith</span>
// //                       </div>
// //                     </div>
// //                     <div>
// //                       <label className="block text-gray-700 font-medium mb-2">Email *</label>
// //                       <div className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200">
// //                         <span className="text-gray-800">smith@school.com</span>
// //                       </div>
// //                     </div>
// //                     <div>
// //                       <label className="block text-gray-700 font-medium mb-2">Phone *</label>
// //                       <div className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200">
// //                         <span className="text-gray-800">0911111111</span>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               )}

// //             </div>

// //             <div className="text-center mt-8">
// //               <button
// //                 onClick={handleSubmit}
// //                 className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-12 rounded-xl text-lg transition-colors shadow-lg"
// //               >
// //                 Submit Application
// //               </button>
// //             </div>
// //           </div>
// //         ) : showTerms && !submitted ? (
// //           /* TERMS – EXACT FROM YOUR FIRST IMAGE */
// //           <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl shadow-lg p-8 border border-blue-100">
// //             <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Terms and Conditions</h1>
// //             <div className="bg-white rounded-xl p-6 shadow-md mb-6">
// //               <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Agreement</h2>
// //               <div className="space-y-4 text-gray-600">
// //                 <p>
// //                   <strong>Last Revised: December 16, 2013</strong><br />
// //                   Welcome to www.lorem-ipsum.info. This site is provided as a service to our visitors and may be used for informational purposes only. Because the Terms and Conditions contain legal obligations, please read them carefully.
// //                 </p>
// //                 <div>
// //                   <h3 className="text-lg font-semibold text-gray-800 mb-2">1. YOUR AGREEMENT</h3>
// //                   <p>
// //                     By using this Site, you agree to be bound by, and to comply with, these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use this site.
// //                   </p>
// //                 </div>
// //                 <div>
// //                   <h3 className="text-lg font-semibold text-gray-800 mb-2">2. PRIVACY</h3>
// //                   <p>
// //                     Please review our Privacy Policy, which also governs your visit to this Site, to understand our practices.
// //                   </p>
// //                 </div>
// //                 <div>
// //                   <h3 className="text-lg font-semibold text-gray-800 mb-2">3. LINKED SITES</h3>
// //                   <p>
// //                     This Site may contain links to other independent third-party Web sites ("Linked Sites"). These Linked Sites are provided solely as a convenience to our visitors. Such Linked Sites are not under our control, and we are not responsible for and does not endorse the content of such Linked Sites, including any information or materials contained on such Linked Sites. You will need to make your own independent judgment regarding your interaction with these Linked Sites.
// //                   </p>
// //                 </div>
// //                 <div>
// //                   <h3 className="text-lg font-semibold text-gray-800 mb-2">4. FORWARD LOOKING STATEMENTS</h3>
// //                   <p>[Additional terms and conditions content would go here...]</p>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="bg-white rounded-xl p-6 shadow-md mb-6">
// //               <label className="flex items-start space-x-3 cursor-pointer">
// //                 <input
// //                   type="checkbox"
// //                   checked={acceptedTerms}
// //                   onChange={(e) => setAcceptedTerms(e.target.checked)}
// //                   className="w-5 h-5 text-blue-600 focus:ring-blue-500 rounded mt-1"
// //                 />
// //                 <span className="text-gray-700 text-lg">
// //                   I confirm that I have read and accept the terms and conditions and privacy policy.
// //                 </span>
// //               </label>
// //             </div>

// //             <div className="flex justify-end space-x-4">
// //               <button
// //                 onClick={() => setShowTerms(false)}
// //                 className="px-8 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium"
// //               >
// //                 Cancel
// //               </button>
// //               <button
// //                 onClick={handleAccept}
// //                 disabled={!acceptedTerms}
// //                 className={`px-8 py-3 rounded-xl font-medium transition-colors ${
// //                   acceptedTerms
// //                     ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg'
// //                     : 'bg-gray-300 text-gray-500 cursor-not-allowed'
// //                 }`}
// //               >
// //                 Accept
// //               </button>
// //             </div>
// //           </div>
// //         ) : (
// //           /* SUCCESS – SAME AS YOUR ORIGINAL */
// //           <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl shadow-lg p-8 border border-blue-100">
// //             <div className="text-center">
// //               <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
// //                 <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// //                 </svg>
// //               </div>
// //               <h1 className="text-3xl font-bold text-gray-800 mb-4">Registration form submitted successfully</h1>
// //               <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
// //                 you have successfully finished registration and verification after this step you can search for tutors and select your preferred tutor or join active class
// //               </p>
// //               <div className="mb-8">
// //                 <button
// //                   onClick={handleToDashboard}
// //                   className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-12 rounded-xl text-lg transition-colors shadow-lg"
// //                 >
// //                   To the dashboard
// //                 </button>
// //               </div>
// //               <div className="bg-white rounded-xl p-6 shadow-md max-w-md mx-auto">
// //                 <div className="text-left space-y-3">
// //                   <div>
// //                     <h3 className="font-semibold text-gray-800">
// //                       {selectedRole === 'student' ? 'Student' : selectedRole === 'parent' ? 'Parent' : 'Teacher'} Full Name
// //                     </h3>
// //                     <p className="text-gray-600">
// //                       {selectedRole === 'student' ? 'Bien Nogas' : selectedRole === 'parent' ? 'John Doe' : 'Mr. Smith'}
// //                     </p>
// //                   </div>
// //                   {selectedRole === 'parent' && (
// //                     <div>
// //                       <h3 className="font-semibold text-gray-800">Address</h3>
// //                       <p className="text-gray-600">Lutho, near-michael church</p>
// //                     </div>
// //                   )}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }























// 'use client';

// import { useState, useEffect } from 'react';

// export default function SubmitForm({ selectedRole }: { selectedRole: string }) {
//   const [isClient, setIsClient] = useState(false);
//   const [showTerms, setShowTerms] = useState(false);
//   const [acceptedTerms, setAcceptedTerms] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   useEffect(() => { setIsClient(true); }, []);

//   const handleSubmit = () => setShowTerms(true);
//   const handleAccept = () => setSubmitted(true);
//   const handleToDashboard = () => alert('Redirecting to dashboard...');

//   if (!isClient) return <div className="min-h-screen bg-white flex items-center justify-center"><div className="text-lg text-gray-600">Loading...</div></div>;

//   return (
//     <div className="min-h-screen bg-white flex items-center justify-center p-4">
//       <div className="max-w-4xl w-full">

//         {/* Step Navigation */}
//         <div className="flex items-center justify-between mb-8">
//           <div className="text-yellow-500 text-3xl">Star</div>
//           <div className="flex items-center space-x-6">
//             {[
//               { number: 1, title: 'Choose account type', current: false },
//               { number: 2, title: 'Fill out necessary detail', current: false },
//               { number: 3, title: 'Verify Identity', current: false },
//               { number: 4, title: 'Submit', current: !submitted }
//             ].map((step) => (
//               <div key={step.number} className="flex items-center">
//                 <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step.current ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400 border border-gray-300'}`}>
//                   {step.number}
//                 </div>
//                 <span className={`ml-2 text-sm ${step.current ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>{step.title}</span>
//                 {step.number < 4 && <div className="ml-4 w-6 h-0.5 bg-gray-300"></div>}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* REVIEW */}
//         {!showTerms && !submitted ? (
//           <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl shadow-lg p-8 border border-blue-100">
//             <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">Review Your Information</h1>
//             <p className="text-gray-600 mb-8 text-center">Please review all information before submitting your application</p>

//             <div className="space-y-8">

//               {/* STUDENT */}
//               {selectedRole === 'student' && (
//                 <div className="bg-white rounded-xl p-6 shadow-md">
//                   <h2 className="text-2xl font-bold text-gray-800 mb-4">Student Information</h2>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div><label className="block text-gray-700 font-medium mb-2">Student Full Name *</label><div className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200"><span className="text-gray-800">Bien Nogas</span></div></div>
//                     <div><label className="block text-gray-700 font-medium mb-2">Select Birth Date *</label><div className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200"><span className="text-gray-800">01 personnel/25/2008</span></div></div>
//                     <div><label className="block text-gray-700 font-medium mb-2">Student photo</label><div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center"><span className="text-gray-500">Uploaded photo</span></div></div>
//                     <div><label className="block text-gray-700 font-medium mb-2">Student Grade</label><div className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200"><span className="text-gray-800">Grade 10</span></div></div>
//                     <div><label className="block text-gray-700 font-medium mb-2">Select Gender *</label><div className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200"><div className="flex items-center space-x-2"><div className="w-4 h-4 rounded-full border-2 border-blue-600 bg-blue-600"></div><span className="text-gray-800">Female</span></div></div></div>
//                     <div><label className="block text-gray-700 font-medium mb-2">Student ID Photo *</label><div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center"><span className="text-gray-500">Uploaded school ID</span></div></div>
//                     <div><label className="block text-gray-700 font-medium mb-2">Are You International Student *</label><div className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200"><div className="flex items-center space-x-2"><div className="w-4 h-4 rounded-full border-2 border-gray-400"></div><span className="text-gray-800">No</span></div></div></div>
//                   </div>
//                 </div>
//               )}

//               {/* PARENT */}
//               {selectedRole === 'parent' && (
//                 <div className="bg-white rounded-xl p-6 shadow-md">
//                   <h2 className="text-2xl font-bold text-gray-800 mb-4">Parent Information</h2>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div><label className="block text-gray-700 font-medium mb-2">Parent Full Name *</label><div className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200"><span className="text-gray-800">John Doe</span></div></div>
//                     <div><label className="block text-gray-700 font-medium mb-2">Address *</label><div className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200"><span className="text-gray-800">Lutho, near michael church</span></div></div>
//                     <div><label className="block text-gray-700 font-medium mb-2">Parent Phone Number *</label><div className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200"><span className="text-gray-800">0982444444444</span></div></div>
//                     <div><label className="block text-gray-700 font-medium mb-2">Parent National ID Photo *</label><div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center"><span className="text-gray-500">Uploaded parent ID</span></div></div>
//                     <div><label className="block text-gray-700 font-medium mb-2">Parent Email *</label><div className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200"><span className="text-gray-800">john@gmail.com</span></div></div>
//                   </div>
//                 </div>
//               )}

//               {/* TEACHER */}
//               {selectedRole === 'teacher' && (
//                 <div className="bg-white rounded-xl p-6 shadow-md">
//                   <h2 className="text-2xl font-bold text-gray-800 mb-4">Teacher Information</h2>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div><label className="block text-gray-700 font-medium mb-2">Teacher Full Name *</label><div className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200"><span className="text-gray-800">Mr. Smith</span></div></div>
//                     <div><label className="block text-gray-700 font-medium mb-2">Email *</label><div className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200"><span className="text-gray-800">smith@school.com</span></div></div>
//                     <div><label className="block text-gray-700 font-medium mb-2">Phone *</label><div className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200"><span className="text-gray-800">0911111111</span></div></div>
//                   </div>
//                 </div>
//               )}

//             </div>

//             <div className="text-center mt-8">
//               <button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-12 rounded-xl text-lg transition-colors shadow-lg">
//                 Submit Application
//               </button>
//             </div>
//           </div>
//         ) : showTerms && !submitted ? (
//           /* TERMS – EXACT FROM YOUR FIRST IMAGE */
//           <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl shadow-lg p-8 border border-blue-100">
//             <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Terms and Conditions</h1>
//             <div className="bg-white rounded-xl p-6 shadow-md mb-6">
//               <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Agreement</h2>
//               <div className="space-y-4 text-gray-600">
//                 <p><strong>Last Revised: December 16, 2013</strong><br />Welcome to www.lorem-ipsum.info. This site is provided as a service to our visitors and may be used for informational purposes only. Because the Terms and Conditions contain legal obligations, please read them carefully.</p>
//                 <div><h3 className="text-lg font-semibold text-gray-800 mb-2">1. YOUR AGREEMENT</h3><p>By using this Site, you agree to be bound by, and to comply with, these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use this site.</p></div>
//                 <div><h3 className="text-lg font-semibold text-gray-800 mb-2">2. PRIVACY</h3><p>Please review our Privacy Policy, which also governs your visit to this Site, to understand our practices.</p></div>
//                 <div><h3 className="text-lg font-semibold text-gray-800 mb-2">3. LINKED SITES</h3><p>This Site may contain links to other independent third-party Web sites ("Linked Sites"). These Linked Sites are provided solely as a convenience to our visitors. Such Linked Sites are not under our control, and we are not responsible for and does not endorse the content of such Linked Sites, including any information or materials contained on such Linked Sites. You will need to make your own independent judgment regarding your interaction with these Linked Sites.</p></div>
//                 <div><h3 className="text-lg font-semibold text-gray-800 mb-2">4. FORWARD LOOKING STATEMENTS</h3><p>[Additional terms and conditions content would go here...]</p></div>
//               </div>
//             </div>
//             <div className="bg-white rounded-xl p-6 shadow-md mb-6">
//               <label className="flex items-start space-x-3 cursor-pointer">
//                 <input type="checkbox" checked={acceptedTerms} onChange={(e) => setAcceptedTerms(e.target.checked)} className="w-5 h-5 text-blue-600 focus:ring-blue-500 rounded mt-1" />
//                 <span className="text-gray-700 text-lg">I confirm that I have read and accept the terms and conditions and privacy policy.</span>
//               </label>
//             </div>
//             <div className="flex justify-end space-x-4">
//               <button onClick={() => setShowTerms(false)} className="px-8 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium">Cancel</button>
//               <button onClick={handleAccept} disabled={!acceptedTerms} className={`px-8 py-3 rounded-xl font-medium transition-colors ${acceptedTerms ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}>Accept</button>
//             </div>
//           </div>
//         ) : (
//           /* SUCCESS – MATCHES YOUR FIRST CODE */
//           <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl shadow-lg p-8 border border-blue-100">
//             <div className="text-center">
//               <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                 </svg>
//               </div>
//               <h1 className="text-3xl font-bold text-gray-800 mb-4">Registration form submitted successfully</h1>
//               <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
//                 you have successfully finished registration and verification after this step you can search for tutors and select your preferred tutor or join active class
//               </p>
//               <div className="mb-8">
//                 <button onClick={handleToDashboard} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-12 rounded-xl text-lg transition-colors shadow-lg">
//                   To the dashboard
//                 </button>
//               </div>
//               <div className="bg-white rounded-xl p-6 shadow-md max-w-md mx-auto">
//                 <div className="text-left space-y-3">
//                   <div><h3 className="font-semibold text-gray-800">{selectedRole === 'student' ? 'Student' : selectedRole === 'parent' ? 'Parent' : 'Teacher'} Full Name</h3><p className="text-gray-600">{selectedRole === 'student' ? 'Bien Nogas' : selectedRole === 'parent' ? 'John Doe' : 'Mr. Smith'}</p></div>
//                   {selectedRole === 'parent' && <div><h3 className="font-semibold text-gray-800">Address</h3><p className="text-gray-600">Lutho, near-michael church</p></div>}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


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

  if (!isClient) return <div className="min-h-screen bg-white flex items-center justify-center"><div className="text-lg text-gray-600">Loading...</div></div>;

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">

        {/* Step Navigation */}
        <div className="flex items-center justify-between mb-8">
          <div className="text-yellow-500 text-3xl">Star</div>
          <div className="flex items-center space-x-6">
            {[
              { number: 1, title: 'Choose account type', current: false },
              { number: 2, title: 'Fill out necessary detail', current: false },
              { number: 3, title: 'Verify Identity', current: false },
              { number: 4, title: 'Submit', current: !submitted }
            ].map((step) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step.current ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400 border border-gray-300'}`}>
                  {step.number}
                </div>
                <span className={`ml-2 text-sm ${step.current ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>{step.title}</span>
                {step.number < 4 && <div className="ml-4 w-6 h-0.5 bg-gray-300"></div>}
              </div>
            ))}
          </div>
        </div>

        {/* REVIEW */}
        {!showTerms && !submitted ? (
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl shadow-lg p-8 border border-blue-100">
            <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">Review Your Information</h1>
            <p className="text-gray-600 mb-8 text-center">Please review all information before submitting your application</p>

            <div className="space-y-8">

              {/* STUDENT */}
              {selectedRole === 'student' && (
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Student Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div><label className="block text-gray-700 font-medium mb-2">Student Full Name *</label><div className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200"><span className="text-gray-800">Bien Nogas</span></div></div>
                    <div><label className="block text-gray-700 font-medium mb-2">Select Birth Date *</label><div className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200"><span className="text-gray-800">01 personnel/25/2008</span></div></div>
                    <div><label className="block text-gray-700 font-medium mb-2">Student photo</label><div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center"><span className="text-gray-500">Uploaded photo</span></div></div>
                    <div><label className="block text-gray-700 font-medium mb-2">Student Grade</label><div className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200"><span className="text-gray-800">Grade 10</span></div></div>
                    <div><label className="block text-gray-700 font-medium mb-2">Select Gender *</label><div className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200"><div className="flex items-center space-x-2"><div className="w-4 h-4 rounded-full border-2 border-blue-600 bg-blue-600"></div><span className="text-gray-800">Female</span></div></div></div>
                    <div><label className="block text-gray-700 font-medium mb-2">Student ID Photo *</label><div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center"><span className="text-gray-500">Uploaded school ID</span></div></div>
                    <div><label className="block text-gray-700 font-medium mb-2">Are You International Student *</label><div className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200"><div className="flex items-center space-x-2"><div className="w-4 h-4 rounded-full border-2 border-gray-400"></div><span className="text-gray-800">No</span></div></div></div>
                  </div>
                </div>
              )}

              {/* PARENT */}
              {selectedRole === 'parent' && (
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Parent Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div><label className="block text-gray-700 font-medium mb-2">Parent Full Name *</label><div className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200"><span className="text-gray-800">John Doe</span></div></div>
                    <div><label className="block text-gray-700 font-medium mb-2">Address *</label><div className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200"><span className="text-gray-800">Lutho, near michael church</span></div></div>
                    <div><label className="block text-gray-700 font-medium mb-2">Parent Phone Number *</label><div className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200"><span className="text-gray-800">0982444444444</span></div></div>
                    <div><label className="block text-gray-700 font-medium mb-2">Parent National ID Photo *</label><div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center"><span className="text-gray-500">Uploaded parent ID</span></div></div>
                    <div><label className="block text-gray-700 font-medium mb-2">Parent Email *</label><div className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200"><span className="text-gray-800">john@gmail.com</span></div></div>
                  </div>
                </div>
              )}

              {/* TEACHER */}
              {selectedRole === 'teacher' && (
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Teacher Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div><label className="block text-gray-700 font-medium mb-2">Teacher Full Name *</label><div className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200"><span className="text-gray-800">Mr. Smith</span></div></div>
                    <div><label className="block text-gray-700 font-medium mb-2">Email *</label><div className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200"><span className="text-gray-800">smith@school.com</span></div></div>
                    <div><label className="block text-gray-700 font-medium mb-2">Phone *</label><div className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200"><span className="text-gray-800">0911111111</span></div></div>
                  </div>
                </div>
              )}

            </div>

            <div className="text-center mt-8">
              <button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-12 rounded-xl text-lg transition-colors shadow-lg">
                Submit Application
              </button>
            </div>
          </div>
        ) : showTerms && !submitted ? (
          /* TERMS – EXACT FROM YOUR FIRST IMAGE */
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl shadow-lg p-8 border border-blue-100">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Terms and Conditions</h1>
            <div className="bg-white rounded-xl p-6 shadow-md mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Agreement</h2>
              <div className="space-y-4 text-gray-600">
                <p><strong>Last Revised: December 16, 2013</strong><br />Welcome to www.lorem-ipsum.info. This site is provided as a service to our visitors and may be used for informational purposes only. Because the Terms and Conditions contain legal obligations, please read them carefully.</p>
                <div><h3 className="text-lg font-semibold text-gray-800 mb-2">1. YOUR AGREEMENT</h3><p>By using this Site, you agree to be bound by, and to comply with, these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use this site.</p></div>
                <div><h3 className="text-lg font-semibold text-gray-800 mb-2">2. PRIVACY</h3><p>Please review our Privacy Policy, which also governs your visit to this Site, to understand our practices.</p></div>
                <div><h3 className="text-lg font-semibold text-gray-800 mb-2">3. LINKED SITES</h3><p>This Site may contain links to other independent third-party Web sites ("Linked Sites"). These Linked Sites are provided solely as a convenience to our visitors. Such Linked Sites are not under our control, and we are not responsible for and does not endorse the content of such Linked Sites, including any information or materials contained on such Linked Sites. You will need to make your own independent judgment regarding your interaction with these Linked Sites.</p></div>
                <div><h3 className="text-lg font-semibold text-gray-800 mb-2">4. FORWARD LOOKING STATEMENTS</h3><p>[Additional terms and conditions content would go here...]</p></div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md mb-6">
              <label className="flex items-start space-x-3 cursor-pointer">
                <input type="checkbox" checked={acceptedTerms} onChange={(e) => setAcceptedTerms(e.target.checked)} className="w-5 h-5 text-blue-600 focus:ring-blue-500 rounded mt-1" />
                <span className="text-gray-700 text-lg">I confirm that I have read and accept the terms and conditions and privacy policy.</span>
              </label>
            </div>
            <div className="flex justify-end space-x-4">
              <button onClick={() => setShowTerms(false)} className="px-8 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium">Cancel</button>
              <button onClick={handleAccept} disabled={!acceptedTerms} className={`px-8 py-3 rounded-xl font-medium transition-colors ${acceptedTerms ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}>Accept</button>
            </div>
          </div>
        ) : (
          /* SUCCESS – MATCHES YOUR FIRST CODE */
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl shadow-lg p-8 border border-blue-100">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Registration form submitted successfully</h1>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                you have successfully finished registration and verification after this step you can search for tutors and select your preferred tutor or join active class
              </p>
              <div className="mb-8">
                <button onClick={handleToDashboard} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-12 rounded-xl text-lg transition-colors shadow-lg">
                  To the dashboard
                </button>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md max-w-md mx-auto">
                <div className="text-left space-y-3">
                  <div><h3 className="font-semibold text-gray-800">{selectedRole === 'student' ? 'Student' : selectedRole === 'parent' ? 'Parent' : 'Teacher'} Full Name</h3><p className="text-gray-600">{selectedRole === 'student' ? 'Bien Nogas' : selectedRole === 'parent' ? 'John Doe' : 'Mr. Smith'}</p></div>
                  {selectedRole === 'parent' && <div><h3 className="font-semibold text-gray-800">Address</h3><p className="text-gray-600">Lutho, near-michael church</p></div>}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}