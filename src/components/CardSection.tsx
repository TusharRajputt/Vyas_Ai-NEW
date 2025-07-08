import React from 'react';
import Card from './Card';

const cards = [
  {
    title: 'Advanced Analytics',
    description: 'Gain insights with powerful analytics tools and visualizations.',
    imageUrl: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Secure Platform',
    description: 'Enterprise-grade security protecting your data and privacy.',
    imageUrl: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Cloud Integration',
    description: 'Seamlessly connect with popular cloud services and APIs.',
    imageUrl: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
];

const CardSection: React.FC = () => {
  const handleCardClick = (index: number) => {
    console.log(`Card ${index + 1} clicked`);
    // You can add your own logic here
    alert(`You clicked on card: ${cards[index].title}`);
  };
  
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Explore Our <span className="text-cyan-600 dark:text-cyan-400">Solutions</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover how our platform can help transform your business with these powerful features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Card 
              key={index}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;