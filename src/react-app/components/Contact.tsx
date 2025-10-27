import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4 mr-2" />
            Get In Touch
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Contact Us
          </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Have questions about our products or want to place an order? We'd love to hear from you.
                Visit our farm or get in touch with us today.
              </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Farm</h3>
              <p className="text-gray-600 mb-8">
                Experience the freshness firsthand! Visit our farm to see our production process and 
                meet the team that makes it all possible.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Our Address</h4>
                  <p className="text-gray-600">
                    Bhirud Dudh Dairy, Bhirud Colony, Near Mahadev Temple, Ring Road, Jalgaon Road, Bhusawal
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600">
                    +91 70284 47829<br />
                    <span className="text-sm">Call us for orders and inquiries</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg flex-shrink-0">
                  <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">
                    bhiruddudhdairy@gmail.com<br />
                    <span className="text-sm">We'll respond within 24 hours</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Operating Hours</h4>
                  <div className="text-gray-600 space-y-1">
                    <p>Morning: 6:00 AM - 8:00 AM</p>
                    <p>Evening: 3:30 PM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form/Map Area */}
          <div className="space-y-8">
            {/* Map Placeholder */}
            <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100"></div>
              <div className="relative z-10 text-center">
                <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-gray-900 mb-2">Find Us Here</h4>
                <p className="text-gray-600">
                  Bhirud Dudh Dairy, Bhirud Colony, Near Mahadev Temple, Ring Road, Jalgaon Road, Bhusawal
                </p>
                <a
                  href="https://maps.app.goo.gl/UfuumXk4M9uQMmz17?g_st=aw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-2 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  View on Google Maps
                </a>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Why Choose Bhirud Dairy?</h4>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Direct from our own farm</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>100% pure and natural products</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Made fresh daily</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>No artificial preservatives</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Traditional preparation methods</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Family-owned and operated</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
