import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const menuCategories = ['Small Plates', 'Sushi', 'Ramen', 'Drinks'];

const menuItems = [
  {
    id: 1,
    name: 'Edamame',
    category: 'Small Plates',
    ingredients: 'Steamed soybeans with sea salt',
    seasonal: false,
  },
  {
    id: 2,
    name: 'Spicy Tuna Roll',
    category: 'Sushi',
    ingredients: 'Fresh tuna, spicy mayo, cucumber, and avocado',
    seasonal: true,
  },
  {
    id: 3,
    name: 'Tonkotsu Ramen',
    category: 'Ramen',
    ingredients: 'Rich pork broth, noodles, chashu, egg, and scallions',
    seasonal: false,
  },
  {
    id: 4,
    name: 'Sake',
    category: 'Drinks',
    ingredients: 'Premium Japanese rice wine served chilled',
    seasonal: false,
  }
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('Small Plates');
  const [hoveredItemId, setHoveredItemId] = useState(null);

  const filteredItems = menuItems.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section className="py-16 bg-background" id="menu">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-heading text-center text-primary mb-8">
          Our Menu
        </h1>
        {/* Category Filters */}
        <div className="flex justify-center mb-8 space-x-4">
          {menuCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full border transition-colors ${
                activeCategory === category
                  ? 'bg-accent text-white'
                  : 'bg-white text-text-primary hover:bg-secondary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative p-4 border rounded hover:shadow-lg transition-shadow"
              onMouseEnter={() => setHoveredItemId(item.id)}
              onMouseLeave={() => setHoveredItemId(null)}
            >
              <h3 className="text-2xl font-heading text-primary">
                {item.name}{' '}
                {item.seasonal && (
                  <span className="ml-2 text-xs text-secondary uppercase tracking-wide">
                    Seasonal
                  </span>
                )}
              </h3>
              {/* Ingredient Tooltip */}
              <AnimatePresence>
                {hoveredItemId === item.id && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-0 left-full ml-2 w-64 p-2 bg-white border rounded shadow-lg z-10"
                  >
                    <p className="text-sm text-text-secondary">
                      {item.ingredients}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
      {/* SEO-friendly Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "http://schema.org",
          "@type": "Menu",
          "name": "Tsuki Izakaya Menu",
          "hasMenuSection": menuCategories.map((category) => ({
            "@type": "MenuSection",
            "name": category,
            "hasMenuItem": menuItems
              .filter((item) => item.category === category)
              .map((item) => ({
                "@type": "MenuItem",
                "name": item.name,
                "description": item.ingredients,
                "offers": {
                  "@type": "Offer",
                  "price": "0.00",
                  "priceCurrency": "USD"
                }
              }))
          }))
        })}
      </script>
    </section>
  );
};

export default Menu;

