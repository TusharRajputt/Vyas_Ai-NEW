import React from 'react';
import Button from './Button';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video">
              <img 
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team working together" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-cyan-600/10"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="text-cyan-600 dark:text-cyan-400">Our Team</span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              We're a team of passionate designers and developers dedicated to creating beautiful, functional interfaces that help businesses grow.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Our mission is to combine cutting-edge technology with intuitive design to deliver exceptional user experiences. We believe in clean code, attention to detail, and putting users first.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary">
                Our Work
              </Button>
              <Button variant="outline">
                Meet the Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;