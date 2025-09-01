import React from 'react';
import { services } from '../data/services';
import { Service } from '../types';

interface ServicesSelectionProps {
  selectedReligion: string;
  selectedServices: Service[];
  onToggleService: (service: Service) => void;
  onNext: () => void;
  onBack: () => void;
}

export const ServicesSelection: React.FC<ServicesSelectionProps> = ({
  selectedReligion,
  selectedServices,
  onToggleService,
  onNext,
  onBack
}) => {
  const availableServices = services.filter(service => 
    service.religions.includes(selectedReligion)
  );

  const servicesByCategory = availableServices.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, Service[]>);

  const categoryLabels = {
    provider: 'Service Providers',
    religious: 'Religious Guides',
    transportation: 'Transportation Services',
    delivery: 'Delivery Services'
  };

  const totalServicesPrice = selectedServices.reduce((sum, service) => sum + service.price, 0);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Select Services
        </h2>
        <p className="text-gray-600">
          Choose the services you need from our verified providers.
        </p>
      </div>

      <div className="space-y-8 mb-8">
        {Object.entries(servicesByCategory).map(([category, categoryServices]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {categoryLabels[category as keyof typeof categoryLabels]}
            </h3>
            <div className="grid gap-4">
              {categoryServices.map((service) => {
                const isSelected = selectedServices.some(s => s.id === service.id);
                return (
                  <div
                    key={service.id}
                    className={`
                      p-4 rounded-lg border-2 cursor-pointer transition-all duration-300
                      hover:shadow-md
                      ${isSelected
                        ? 'border-amber-600 bg-amber-50'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                      }
                    `}
                    onClick={() => onToggleService(service)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-gray-900">{service.name}</h4>
                      <span className="font-semibold text-amber-700">₹{service.price}</span>
                    </div>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Total */}
      {selectedServices.length > 0 && (
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium text-gray-900">Services Total:</span>
            <span className="text-2xl font-bold text-amber-700">₹{totalServicesPrice}</span>
          </div>
        </div>
      )}

      <div className="flex justify-between">
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
          onClick={onNext}
          className="
            bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-lg font-medium
            transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1
            focus:outline-none focus:ring-4 focus:ring-amber-200
          "
        >
          Continue to Personal Details
        </button>
      </div>
    </div>
  );
};