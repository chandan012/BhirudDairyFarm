import { Package, Star, Clock } from 'lucide-react';

const products = [
  {
    name: 'Milk',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=400&fit=crop',
    description: 'Fresh, pure cow milk delivered daily',
    features: ['100% Pure', 'No Additives', 'Daily Fresh']
  },
  {
    name: 'Paneer',
    image: 'https://img.clevup.in/272541/SKU-1060_0-1718193185268.jpg?width=600&format=webp',
    description: 'Soft and fresh homemade paneer',
    features: ['Homemade', 'Soft Texture', 'Rich in Protein']
  },
  {
    name: 'Amrakhand',
    image: 'https://ghodkesweets.com/wp-content/uploads/2020/10/amrakhand@2x.jpg',
    description: 'Delicious mango flavored shrikhand',
    features: ['Mango Flavor', 'Traditional Recipe', 'Creamy Texture']
  },
  {
    name: 'Yogurt',
    image: 'https://thumbs.dreamstime.com/b/yogurt-28954147.jpg',
    description: 'Thick and creamy natural yogurt',
    features: ['Natural', 'Probiotic Rich', 'Homemade']
  },
  {
    name: 'Dahi',
    image: 'https://cdnasd.countrydelight.in/New_product_image/Low%20fat%20Dahi%20-%20PDP%204_1681126973430.jpeg',
    description: 'Traditional Indian curd',
    features: ['Traditional', 'Digestive Health', 'Fresh Daily']
  },
  {
    name: 'Khava',
    image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/10/mawa-khoya-recipe.jpg',
    description: 'Sweet and delicious khava (mawa)',
    features: ['Sweet Treat', 'Traditional', 'Premium Quality']
  }
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
            <Package className="w-4 h-4 mr-2" />
            Our Products
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Farm fresh milk and Milk products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the authentic taste of farm-fresh dairy products. All our products are made with love,
            using traditional methods and the finest ingredients from our own farm.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-lg mr-4" />
                <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
              </div>

              <p className="text-gray-600 mb-4">{product.description}</p>

              <div className="space-y-2">
                {product.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quality Promise */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Quality Promise</h3>
            <p className="text-gray-600">
              Every product we make carries our commitment to quality, freshness, and traditional taste.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Daily Fresh</h4>
              <p className="text-sm text-gray-600">Made fresh every day</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">No Preservatives</h4>
              <p className="text-sm text-gray-600">100% natural ingredients</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Premium Quality</h4>
              <p className="text-sm text-gray-600">Highest standards maintained</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Farm Fresh</h4>
              <p className="text-sm text-gray-600">Direct from our farm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
