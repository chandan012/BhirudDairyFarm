import { MapPin, Users, Award, Leaf, Clock, Shield } from 'lucide-react';

export default function Farm() {
  return (
    <section id="farm" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
            <Leaf className="w-4 h-4 mr-2" />
            About Our Farm
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Where Quality Begins
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Located in the heart of Bhusawal, our farm represents three generations of dairy expertise. 
            We believe in sustainable farming practices and treating our animals with the utmost care.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Farm Story */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Our Story</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Bhirud Dairy & Farm has been serving the community with pure, fresh dairy products for years. 
                What started as a small family farm has grown into a trusted name in quality dairy production.
              </p>
              <p>
                We own and operate our farm in Bhirud Colony, Ring Road, Bhusawal, where every aspect of 
                production is carefully monitored to ensure the highest standards of quality and purity.
              </p>
              <p>
                Our commitment to excellence means that we control every step of the process - from the 
                care of our cattle to the final packaging of our products.
              </p>
            </div>

            {/* Location */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Our Location</h4>
                  <p className="text-gray-600">
                    Bhirud Colony, Ring Road<br />
                    Bhusawal, Maharashtra
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Farm Image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/image1.jpg"
                alt="Our dairy farm"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-green-400 to-blue-400 rounded-full opacity-60 blur-2xl"></div>
          </div>
        </div>

        {/* Farm Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center group hover:shadow-xl transition-shadow duration-300">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Expert Care</h4>
            <p className="text-gray-600">
              Our experienced team ensures that every animal receives the best care and attention.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center group hover:shadow-xl transition-shadow duration-300">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Quality Control</h4>
            <p className="text-gray-600">
              Strict hygiene and quality standards ensure that only the finest products reach you.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center group hover:shadow-xl transition-shadow duration-300">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors duration-300">
              <Clock className="w-8 h-8 text-yellow-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Daily Fresh</h4>
            <p className="text-gray-600">
              All our products are made fresh daily, ensuring maximum nutrition and taste.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center group hover:shadow-xl transition-shadow duration-300">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors duration-300">
              <Leaf className="w-8 h-8 text-purple-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Sustainable</h4>
            <p className="text-gray-600">
              We practice sustainable farming methods that are good for the environment.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center group hover:shadow-xl transition-shadow duration-300">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors duration-300">
              <Award className="w-8 h-8 text-orange-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Premium Quality</h4>
            <p className="text-gray-600">
              Our commitment to excellence has made us a trusted name in dairy products.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center group hover:shadow-xl transition-shadow duration-300">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">100% Pure</h4>
            <p className="text-gray-600">
              No additives, no preservatives - just pure, natural dairy goodness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
