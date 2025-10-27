import { Heart, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-1">
                <img
                  src="/Bhirudlogo.webp"
                  alt="Bhirud Dairy Farm Logo"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold leading-tight">Bhirud Dairy Farm</h3>
                <p className="text-green-400 font-medium">Pure & Fresh</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Serving the community with pure, fresh dairy products straight from our farm. 
              Three generations of dairy expertise you can trust.
            </p>
            <div className="flex items-center space-x-2 text-green-400">
              <Heart className="w-4 h-4 fill-current" />
              <span className="text-sm">Made with love, delivered with care</span>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Products</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-green-400 transition-colors cursor-pointer">Fresh Milk</li>
              <li className="hover:text-green-400 transition-colors cursor-pointer">Paneer</li>
              <li className="hover:text-green-400 transition-colors cursor-pointer">Curd (Dahi)</li>
              <li className="hover:text-green-400 transition-colors cursor-pointer">Shrikhand</li>
              <li className="hover:text-green-400 transition-colors cursor-pointer">Khava (Mawa)</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-sm">
                  Bhirud Dudh Dairy, Bhirud Colony, Near Mahadev Temple, Ring Road, Jalgaon Road, Bhusawal
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-sm">+91 70284 47829</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-sm">bhiruddudhdairy@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Bhirud Dairy Farm. All rights reserved.
          </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Operating Hours:</span>
              <span className="text-green-400 text-sm font-medium">
                Morning: 6AM-8AM | Evening: 3:30PM-6PM
              </span>
            </div>
        </div>
      </div>
    </footer>
  );
}
