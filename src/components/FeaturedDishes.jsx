import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const dishes = [
  {
    id: 1,
    name: 'Sushi Platter',
    description: 'A selection of the freshest sushi, artfully arranged.',
    image: '/images/sushi-platter.jpg',
    link: '/menu'
  },
  {
    id: 2,
    name: 'Ramen Bowl',
    description: 'Rich, savory broth paired with tender noodles.',
    image: '/images/ramen-bowl.jpg',
    link: '/menu'
  },
  {
    id: 3,
    name: 'Yakitori Skewers',
    description: 'Grilled to perfection with a savory glaze.',
    image: '/images/yakitori-skewers.jpg',
    link: '/menu'
  }
];

const FeaturedDishes = () => {
  return (
    <section className="py-16 bg-background" id="featured">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-heading text-center mb-8 text-primary">
          Featured Dishes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dishes.map((dish) => (
            <motion.div
              key={dish.id}
              className="bg-white rounded-lg shadow overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="relative h-56">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-heading text-primary mb-2">
                  {dish.name}
                </h3>
                <p className="text-sm text-text-secondary mb-4">
                  {dish.description}
                </p>
                <a
                  href={dish.link}
                  className="text-accent font-medium hover:underline"
                >
                  View Full Menu
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
