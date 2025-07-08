import React from 'react';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-cyan-50/50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
            Machine Learning
            <span className="bg-gradient-to-r from-cyan-500 to-cyan-600 bg-clip-text text-transparent"> as a Service</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 mb-8">
            Harness the power of machine learning without infrastructure overhead. From research projects to enterprise solutions, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="primary">
              Start Free Trial
              <ArrowRight size={20} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline">
              Schedule Demo
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">MLaaS</h3>
              <p className="text-gray-600 dark:text-gray-300">State-of-the-art algorithms and models</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">Research</h3>
              <p className="text-gray-600 dark:text-gray-300">Complete your projects with robust support</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">Training</h3>
              <p className="text-gray-600 dark:text-gray-300">Custom solutions for your needs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;