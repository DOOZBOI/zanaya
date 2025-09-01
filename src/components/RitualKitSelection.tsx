import React from 'react';
import { ritualKits } from '../data/ritualKits';
import { addOns } from '../data/addOns';
import { RitualKit, AddOn } from '../types';

interface RitualKitSelectionProps {
  selectedReligion: string;
  selectedKit: RitualKit | null;
  selectedAddOns: AddOn[];
  onSelectKit: (kit: RitualKit) => void;
  onToggleAddOn: (addOn: AddOn) => void;
  onNext: () => void;
  onBack: () => void;
}

export const RitualKitSelection: React.FC<RitualKitSelectionProps> = ({
  selectedReligion,
  selectedKit,
  selectedAddOns,
  onSelectKit,
  onToggleAddOn,
  onNext,
  onBack
}) => {
  const availableKits = ritualKits[selectedReligion] || [];
  const availableAddOns = addOns[selectedReligion] || [];
  const totalPrice = (selectedKit?.price || 0) + selectedAddOns.reduce((sum, addon) => sum + addon.price, 0);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Select Ritual Kit & Add-ons
        </h2>
        <p className="text-gray-600">
          Choose the essential ritual kit and any additional items you need.
        </p>
      </div>

      {/* Ritual Kits */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Essential Ritual Kit</h3>
        <div className="grid gap-4">
          {availableKits.map((kit) => (
            <div
              key={kit.id}
              className={`
                p-6 rounded-lg border-2 cursor-pointer transition-all duration-300
                hover:shadow-md transform hover:-translate-y-1
                ${selectedKit?.id === kit.id
                  ? 'border-amber-600 bg-amber-50'
                  : 'border-gray-200 bg-white hover:border-gray-300'
                }
              `}
              onClick={() => onSelectKit(kit)}
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-medium text-gray-900">{kit.name}</h4>
                <span className="text-lg font-semibold text-amber-700">₹{kit.price}</span>
              </div>
              <p className="text-gray-600 mb-3">{kit.description}</p>
              <div className="text-sm text-gray-500">
                <strong>Includes:</strong> {kit.items.join(', ')}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add-ons */}
      {selectedKit && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Additional Items (Optional)</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {availableAddOns.map((addOn) => {
              const isSelected = selectedAddOns.some(item => item.id === addOn.id);
              return (
                <div
                  key={addOn.id}
                  className={`
                    p-4 rounded-lg border-2 cursor-pointer transition-all duration-300
                    hover:shadow-md
                    ${isSelected
                      ? 'border-amber-600 bg-amber-50'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                    }
                  `}
                  onClick={() => onToggleAddOn(addOn)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-gray-900">{addOn.name}</h4>
                    <span className="font-semibold text-amber-700">₹{addOn.price}</span>
                  </div>
                  <p className="text-sm text-gray-600">{addOn.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Total */}
      {selectedKit && (
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium text-gray-900">Total Cost:</span>
            <span className="text-2xl font-bold text-amber-700">₹{totalPrice}</span>
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
        
        {selectedKit && (
          <button
            onClick={onNext}
            className="
              bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-lg font-medium
              transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1
              focus:outline-none focus:ring-4 focus:ring-amber-200
            "
          >
            Continue to Services
          </button>
        )}
      </div>
    </div>
  );
};