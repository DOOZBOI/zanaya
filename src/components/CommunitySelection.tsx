import React from 'react';
import { religions } from '../data/religions';

interface CommunitySelectionProps {
  selectedReligion: string;
  selectedCommunity: string;
  onSelect: (community: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export const CommunitySelection: React.FC<CommunitySelectionProps> = ({
  selectedReligion,
  selectedCommunity,
  onSelect,
  onNext,
  onBack
}) => {
  const religion = religions.find(r => r.id === selectedReligion);
  
  if (!religion) return null;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Select Your Community
        </h2>
        <p className="text-gray-600">
          Choose your sub-community or sect within {religion.name} traditions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {religion.subCommunities.map((community) => (
          <button
            key={community}
            onClick={() => onSelect(community)}
            className={`
              p-4 rounded-lg border-2 transition-all duration-300 text-left
              hover:shadow-md transform hover:-translate-y-1
              ${selectedCommunity === community
                ? 'border-amber-600 bg-amber-50 text-amber-900'
                : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
              }
            `}
          >
            <div className="font-medium">{community}</div>
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
        
        {selectedCommunity && (
          <button
            onClick={onNext}
            className="
              bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-lg font-medium
              transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1
              focus:outline-none focus:ring-4 focus:ring-amber-200
            "
          >
            Continue to Region
          </button>
        )}
      </div>
    </div>
  );
};