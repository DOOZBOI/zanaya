import React, { useState } from 'react';
import { PersonalDetails } from '../types';

interface PersonalDetailsFormProps {
  personalDetails: PersonalDetails;
  onUpdate: (details: PersonalDetails) => void;
  onNext: () => void;
  onBack: () => void;
}

export const PersonalDetailsForm: React.FC<PersonalDetailsFormProps> = ({
  personalDetails,
  onUpdate,
  onNext,
  onBack
}) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!personalDetails.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!personalDetails.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(personalDetails.phoneNumber.replace(/\D/g, ''))) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit phone number';
    }
    
    if (!personalDetails.address.trim()) {
      newErrors.address = 'Address is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onNext();
    }
  };

  const handleInputChange = (field: keyof PersonalDetails, value: string) => {
    onUpdate({
      ...personalDetails,
      [field]: value
    });
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Personal Details
        </h2>
        <p className="text-gray-600">
          Please provide your contact information so our team can reach you.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              value={personalDetails.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              className={`
                w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500
                transition-colors duration-200
                ${errors.fullName ? 'border-red-500' : 'border-gray-300'}
              `}
              placeholder="Enter your full name"
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phoneNumber"
              value={personalDetails.phoneNumber}
              onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
              className={`
                w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500
                transition-colors duration-200
                ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'}
              `}
              placeholder="Enter your phone number"
            />
            {errors.phoneNumber && (
              <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p>
            )}
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
              Complete Address *
            </label>
            <textarea
              id="address"
              value={personalDetails.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              rows={3}
              className={`
                w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500
                transition-colors duration-200 resize-none
                ${errors.address ? 'border-red-500' : 'border-gray-300'}
              `}
              placeholder="Enter your complete address"
            />
            {errors.address && (
              <p className="mt-1 text-sm text-red-600">{errors.address}</p>
            )}
          </div>

          <div>
            <label htmlFor="specialNotes" className="block text-sm font-medium text-gray-700 mb-2">
              Special Notes or Requirements (Optional)
            </label>
            <textarea
              id="specialNotes"
              value={personalDetails.specialNotes}
              onChange={(e) => handleInputChange('specialNotes', e.target.value)}
              rows={3}
              className="
                w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 
                focus:border-amber-500 transition-colors duration-200 resize-none
              "
              placeholder="Any specific requirements or notes for our team"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={onBack}
          className="
            bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium
            transition-all duration-300 hover:shadow-lg
            focus:outline-none focus:ring-4 focus:ring-gray-200
          "
        >
          Back
        </button>
        
        <button
          onClick={handleSubmit}
          className="
            bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-lg font-medium
            transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1
            focus:outline-none focus:ring-4 focus:ring-amber-200
          "
        >
          Review & Submit
        </button>
      </div>
    </div>
  );
};