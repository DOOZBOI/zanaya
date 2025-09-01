import React from 'react';
import { regions } from '../data/regions';

interface RegionSelectionProps {
  selectedRegion: string;
  onSelect: (region: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export const RegionSelection: React.FC<RegionSelectionProps> = ({
  selectedRegion,
  onSelect,
  onNext,
  onBack
}) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Select Your Region
        </h2>
        <p className="text-gray-600">
          Choose your state or region to connect you with local service providers.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8 max-h-96 overflow-y-auto">
        {regions.map((region) => (
          <button
            key={region}
            onClick={() => onSelect(region)}
            className={`
              p-3 rounded-lg border-2 transition-all duration-300 text-sm text-center
              hover:shadow-md transform hover:-translate-y-1
              ${selectedRegion === region
                ? 'border-amber-600 bg-amber-50 text-amber-900'
                : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
              }
            `}
          >
            {region}
          </button>
        ))}
      </div>

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
        
        {selectedRegion && (
          <button
            onClick={onNext}
            className="
              bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-lg font-medium
              transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1
              focus:outline-none focus:ring-4 focus:ring-amber-200
            "
          >
            Continue to Ritual Kit
          </button>
        )}
      </div>
    </div>
  );
};