import { Utensils, Hotel, ShoppingBag, Camera, Coffee, Dumbbell } from 'lucide-react';

const categories = [
  { id: '1', title: 'Restaurants', count: 156, Icon: Utensils },
  { id: '2', title: 'Hotels', count: 89, Icon: Hotel },
  { id: '3', title: 'Shopping', count: 234, Icon: ShoppingBag },
  { id: '4', title: 'Activities', count: 178, Icon: Camera },
  { id: '5', title: 'Cafes', count: 92, Icon: Coffee },
  { id: '6', title: 'Fitness', count: 67, Icon: Dumbbell },
];

export default function Categories() {
  return (
    <section className="bg-[#101722] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl md:text-5xl mb-4">
            Featured Categories
          </h2>
          <p className="text-gray-400 text-lg">
            Explore top categories and find what you're looking for
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-[#1a2332] rounded-2xl p-6 text-center hover:bg-[#222d3f] hover:border-orange-500 border-2 border-transparent transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer group"
            >
              <div className="bg-orange-500/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500/20 transition-all duration-300">
                <category.Icon className="text-orange-500" size={32} />
              </div>
              <h3 className="text-white text-lg mb-2">{category.title}</h3>
              <p className="text-gray-400 text-sm">{category.count} Listings</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
