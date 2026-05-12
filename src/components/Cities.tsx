import img01 from "../../imports/1920WDefault/90219fa30ce211f3bdb2f2c69f62ce40056e8ef4.png";
import img02 from "../../imports/1920WDefault/4feb6b9a44299dc471e5e99d367f771e06e6b27e.png";
import img03 from "../../imports/1920WDefault/f53aede008ac97fe83530b224badbd2ceb6c339c.png";
import img04 from "../../imports/1920WDefault/414a935721d64580fe438778926cb8fb2a954dd5.png";

const cities = [
  { id: '1', name: 'New York', listingCount: 456, image: img01 },
  { id: '2', name: 'Paris', listingCount: 328, image: img02 },
  { id: '3', name: 'London', listingCount: 289, image: img03 },
  { id: '4', name: 'Tokyo', listingCount: 412, image: img04 },
];

export default function Cities() {
  return (
    <section className="bg-gradient-to-br from-orange-500 to-red-500 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl md:text-5xl mb-4">
            Explore Cities
          </h2>
          <p className="text-white/90 text-lg">
            Discover amazing places in top destinations around the world
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cities.map((city) => (
            <div
              key={city.id}
              className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* City Image */}
              <div className="absolute inset-0">
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>

              {/* City Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl mb-2">{city.name}</h3>
                <p className="text-white/80">{city.listingCount} Listings</p>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-4 border-white/0 group-hover:border-white/30 rounded-3xl transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
