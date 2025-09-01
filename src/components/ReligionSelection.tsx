import React from 'react';
import { religions } from '../data/religions';

interface ReligionSelectionProps {
  selectedReligion: string;
  onSelect: (religion: string) => void;
  onNext: () => void;
}

const religionSymbols: Record<string, string> = {
  hindu: '🕉️',
  muslim: '☪️',
  christian: '✝️',
  sikh: '☬',
  jain: '🤲',
  buddhist: '☸️',
  parsi: '🔥',
  other: '🙏'
};

const popularReligions = ['hindu', 'muslim', 'sikh', 'jain', 'christian', 'other'];

export const ReligionSelection: React.FC<ReligionSelectionProps> = ({
  selectedReligion,
  onSelect,
  onNext
}) => {
  const handleReligionClick = (religionId: string) => {
    onSelect(religionId);
    // Automatically advance to next step after selection
    setTimeout(() => {
      onNext();
    }, 300);
  };

  const getPopularReligions = () => {
    return popularReligions.map(id => religions.find(r => r.id === id)).filter(Boolean);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Select Your Religion
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Please choose your religious faith to customize the appropriate services and rituals for your loved one.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {getPopularReligions().map((religion) => (
          <div
            key={religion!.id}
            onClick={() => handleReligionClick(religion!.id)}
            className={`
              group relative bg-white rounded-2xl border-2 p-8 cursor-pointer 
              transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2
              ${selectedReligion === religion!.id
                ? 'border-amber-600 bg-gradient-to-br from-amber-50 to-orange-50 shadow-lg scale-105'
                : 'border-gray-200 hover:border-amber-300 hover:bg-gradient-to-br hover:from-amber-25 hover:to-orange-25'
              }
            `}
          >
            {/* Selection indicator */}
            {selectedReligion === religion!.id && (
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
            )}
            
            {/* Religion symbol */}
            <div className="text-center mb-4">
              <div className="text-6xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {religionSymbols[religion!.id]}
              </div>
              <h3 className={`
                text-xl font-semibold transition-colors duration-300
                ${selectedReligion === religion!.id ? 'text-amber-900' : 'text-gray-800 group-hover:text-amber-800'}
              `}>
                {religion!.name}
              </h3>
            </div>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-400/0 to-orange-400/0 group-hover:from-amber-400/5 group-hover:to-orange-400/5 transition-all duration-300" />
          </div>
        ))}
      </div>

      {/* Additional info */}
      <div className="text-center">
        <p className="text-sm text-gray-500 mb-4">
          Can't find your religion? Select "Other" and specify in the notes section.
        </p>
        
        {selectedReligion && (
          <div className="bg-white p-4 rounded-lg shadow-md inline-block">
            <p className="text-amber-700 font-medium">
              ✓ {religions.find(r => r.id === selectedReligion)?.name} selected
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Proceeding to community selection...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};