import React from 'react';
import { religions } from '../data/religions';

interface ReligionSelectionProps {
  selectedReligion: string;
  onSelect: (religion: string) => void;
  onNext: () => void;
}

export const ReligionSelection: React.FC<ReligionSelectionProps> = ({
  selectedReligion,
  onSelect,
  onNext
}) => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Select Your Religion
        </h2>
        <p className="text-gray-600">
          Please choose your religious faith to customize the appropriate services and rituals.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {religions.map((religion) => (
          <button
            key={religion.id}
            onClick={() => onSelect(religion.id)}
            className={`
              p-4 rounded-lg border-2 transition-all duration-300 text-center
              hover:shadow-md transform hover:-translate-y-1
              ${selectedReligion === religion.id
                ? 'border-amber-600 bg-amber-50 text-amber-900'
                : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
              }
            `}
          >
            <div className="font-medium">{religion.name}</div>
          </button>
        ))}
      </div>

      {selectedReligion && (
        <div className="text-center">
          <button
            onClick={onNext}
            className="
              bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-lg font-medium
              transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1
              focus:outline-none focus:ring-4 focus:ring-amber-200
            "
          >
            Continue to Community Selection
          </button>
        </div>
      )}
    </div>
  );
};