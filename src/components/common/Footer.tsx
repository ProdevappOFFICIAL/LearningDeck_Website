import React from 'react'

const Footer = () => {
  return (
    <div className="text-center">
      <div className="bg-gradient-to-r from-blue-400 to-blue-500 p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Run Secure Exams Anywhere?
        </h2>
        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
          Join schools and institutions shaping the future of offline-first assessments with LearningDeck.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          Apply for Free Pilot Access
        </button>
      </div>
    </div>
  )
}

export default Footer
