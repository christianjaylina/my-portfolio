import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="w-64 h-64 lg:w-80 lg:h-80 bg-white rounded-full overflow-hidden shadow-2xl flex-shrink-0">
              <img
                src="332.jpg"
                alt="Profile"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold mb-3">
                Christian Jay Lina
              </h1>
              <p className="text-xl lg:text-2xl text-primary-100">
                Software Developer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hi! I’m a third-year BS Information Technology student with a strong passion for troubleshooting and problem-solving. 
              I enjoy figuring out how things work, fixing technical issues, and exploring new technologies. Alongside my studies, 
              I’m continuously learning more about web development and IT systems. 
              I aim to build a career where I can combine creativity, technical skills, and curiosity to create effective and reliable solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Resume CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Want to know more?
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Download my resume for a complete overview of my background, skills, and experiences.
          </p>
          <a
            href="/Lina_2025_CV.pdf"
            download="Lina_2025_CV.pdf"
            className="inline-flex items-center gap-2 bg-black hover:bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"/>
            </svg>
            Download Resume
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
