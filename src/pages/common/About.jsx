import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full bg-white rounded-4xl shadow-lg overflow-hidden md:flex md:items-center">
   
        <div >
          <img
            src="aboutimage.jpg" 
            alt="About Us"
            className="w-600 h-100 rounded-3xl mx-1"
          />
        </div>
        
       
        <div className="rounded-2xl p-8">
          <h1 className="text-4xl font-semibold text-blue-900 mb-6 text-center">Welcome to ServiceFinn ! </h1>
          <p className="text-3xl text-blue-900 mb-4 text-center ">
          We hope you <strong>Finn</strong> with our services.
          </p>
          <p className="text-lg text-gray-600 mt-10 mb-4 mx-8 ">
            We specialize in delivering high-quality services and exceptional services to our customers. Our dedicated team is passionate about bringing innovative solutions to meet your needs.
          </p>
          <p className="text-lg text-gray-600 mb-4 mx-8">
            We believe in the power of collaboration, and we are committed to building strong relationships with our clients. Our goal is to provide services that not only meet but exceed your expectations, ensuring long-term success for everyone involved.
          </p>
          <p className="text-lg text-gray-600 my-10 mx-8 text-center">
            "Thank you for visiting our website. We look forward to partnering with you and making a positive impact together!"
          </p>

        </div>
      </div>
    </div>
  );
};

export default About;