import React, { useState } from 'react';
import { UserSelection } from '../types';
import { sendCompletionEmail } from '../services/emailService';
import { CheckCircle, Loader2, Phone, Mail, Clock } from 'lucide-react';

interface ConfirmationPageProps {
  userSelection: UserSelection;
  onBack: () => void;
}

export const ConfirmationPage: React.FC<ConfirmationPageProps> = ({
  userSelection,
  onBack
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const totalKitPrice = userSelection.ritualKit.price;
  const totalAddOnsPrice = userSelection.addOns.reduce((sum, addon) => sum + addon.price, 0);
  const totalServicesPrice = userSelection.services.reduce((sum, service) => sum + service.price, 0);
  const grandTotal = totalKitPrice + totalAddOnsPrice + totalServicesPrice;

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const success = await sendCompletionEmail(userSelection);
      if (success) {
        setIsSubmitted(true);
      } else {
        setSubmitError('Failed to submit request. Please try again.');
      }
    } catch (error) {
      setSubmitError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto p-6 text-center">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Thank You for Trusting Zanaya
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Our team will contact you shortly to confirm the arrangements and coordinate the services.
          </p>
          
          <div className="bg-amber-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-amber-900 mb-4">What happens next?</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-blue-800">We'll review your request within 30 minutes</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-blue-800">Our team will call you within 2 hours</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-blue-800">Detailed confirmation via email/SMS</span>
              </div>
            </div>
          </div>
          
          <p className="text-sm text-gray-600 mt-6">
            Reference ID: ZNY-{Date.now().toString().slice(-8)}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Review Your Selection
        </h2>
        <p className="text-gray-600">
          Please review all details before submitting your request.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Religious Details */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Religious Details</h3>
            <div className="space-y-2 text-sm">
              <div><span className="font-medium">Religion:</span> {userSelection.religion}</div>
              <div><span className="font-medium">Community:</span> {userSelection.subCommunity}</div>
              <div><span className="font-medium">Region:</span> {userSelection.region}</div>
            </div>
          </div>

          {/* Personal Details */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Personal Details</h3>
            <div className="space-y-2 text-sm">
              <div><span className="font-medium">Name:</span> {userSelection.personalDetails.fullName}</div>
              <div><span className="font-medium">Phone:</span> {userSelection.personalDetails.phoneNumber}</div>
              <div><span className="font-medium">Address:</span> {userSelection.personalDetails.address}</div>
            </div>
          </div>
        </div>

        {/* Ritual Kit */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Ritual Kit</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">{userSelection.ritualKit.name}</span>
              <span className="font-semibold text-blue-600">₹{userSelection.ritualKit.price}</span>
            </div>
            <p className="text-sm text-gray-600">{userSelection.ritualKit.description}</p>
          </div>
        </div>

        {/* Add-ons */}
        {userSelection.addOns.length > 0 && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Additional Items</h3>
            <div className="space-y-2">
              {userSelection.addOns.map(addon => (
                <div key={addon.id} className="flex justify-between items-center bg-gray-50 p-3 rounded">
                  <span>{addon.name}</span>
                  <span className="font-semibold text-blue-600">₹{addon.price}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Services */}
        {userSelection.services.length > 0 && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Selected Services</h3>
            <div className="space-y-2">
              {userSelection.services.map(service => (
                <div key={service.id} className="flex justify-between items-center bg-gray-50 p-3 rounded">
                  <span>{service.name}</span>
                  <span className="font-semibold text-blue-600">₹{service.price}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Total */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex justify-between items-center text-xl font-bold">
            <span>Grand Total:</span>
            <span className="text-blue-600">₹{grandTotal}</span>
          </div>
        </div>
      </div>

      {submitError && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
          {submitError}
        </div>
      )}

      <div className="flex justify-between">
        <button
          onClick={onBack}
          disabled={isSubmitting}
          className="
            bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium
            transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed
            focus:outline-none focus:ring-4 focus:ring-gray-200
          "
        >
          Back
        </button>
        
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="
            bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium
            transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1
            focus:outline-none focus:ring-4 focus:ring-blue-200
            disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
            flex items-center
          "
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Submitting...
            </>
          ) : (
            'Submit Request'
          )}
        </button>
      </div>
    </div>
  );
};