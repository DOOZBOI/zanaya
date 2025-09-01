import React from 'react';
import { Heart, Shield, Clock } from 'lucide-react';

interface HomePageProps {
  onStart: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Zanaya
            </h1>
            <p className="text-xl text-gray-700 mb-2">
              Digital Last Rites Service Platform
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Helping families honor their loved ones with dignity, tradition, and care. 
              We connect you with verified service providers and ensure all rituals are 
              performed according to your faith and customs.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Heart className="w-12 h-12 text-amber-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Compassionate Care</h3>
              <p className="text-gray-600">
                We understand your loss and provide gentle, respectful guidance through this difficult time.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Shield className="w-12 h-12 text-amber-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Verified Providers</h3>
              <p className="text-gray-600">
                All our service providers are thoroughly verified and experienced in traditional practices.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Clock className="w-12 h-12 text-amber-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Response</h3>
              <p className="text-gray-600">
                Our team responds within 2 hours to ensure timely arrangements for your needs.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Begin Your Arrangement
            </h2>
            <p className="text-gray-600 mb-6">
              Let us guide you through a simple, step-by-step process to arrange 
              the appropriate services for your loved one.
            </p>
            <button
              onClick={onStart}
              className="
                bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-lg text-lg font-medium
                transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1
                focus:outline-none focus:ring-4 focus:ring-amber-200
              "
            >
              Start Your Arrangement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};