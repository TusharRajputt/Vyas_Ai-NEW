import React from 'react';
import { Layout, Palette, Smartphone, Zap, Code, MousePointer, Shield, LineChart } from 'lucide-react';

const features = [
  {
    icon: <Palette className="h-10 w-10 text-cyan-600 mb-4" />,
    title: 'Beautiful Design',
    description: 'Modern cyan-themed interface with attention to detail and professional aesthetics.',
  },
  {
    icon: <Smartphone className="h-10 w-10 text-cyan-600 mb-4" />,
    title: 'Fully Responsive',
    description: 'Optimized for all screen sizes from mobile devices to large desktop displays.',
  },
  {
    icon: <Zap className="h-10 w-10 text-cyan-600 mb-4" />,
    title: 'Fast Performance',
    description: 'Lightweight and optimized code for quick loading and smooth interactions.',
  },
  {
    icon: <Layout className="h-10 w-10 text-cyan-600 mb-4" />,
    title: 'Modular Components',
    description: 'Build with reusable components that you can easily modify and extend.',
  },
  {
    icon: <MousePointer className="h-10 w-10 text-cyan-600 mb-4" />,
    title: 'Interactive Elements',
    description: 'Working buttons, forms, and interactive elements with smooth animations.',
  },
  {
    icon: <Code className="h-10 w-10 text-cyan-600 mb-4" />,
    title: 'Clean Code',
    description: 'Well-structured TypeScript code following best practices for maintainability.',
  },
  {
    icon: <Shield className="h-10 w-10 text-cyan-600 mb-4" />,
    title: 'Dark Mode Support',
    description: 'Built-in dark mode for better accessibility and user preference.',
  },
  {
    icon: <LineChart className="h-10 w-10 text-cyan-600 mb-4" />,
    title: 'Scalable Foundation',
    description: 'Designed to grow with your project as you add more content and features.',
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Key <span className="text-cyan-600 dark:text-cyan-400">Features</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to start building your next project with a solid foundation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transition duration-300 hover:shadow-lg hover:transform hover:-translate-y-1 dark:shadow-gray-800/10"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;