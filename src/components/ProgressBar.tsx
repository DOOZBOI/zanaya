import React from 'react';
import { WizardStep } from '../types';

interface ProgressBarProps {
  currentStep: WizardStep;
}

const steps: { key: WizardStep; label: string }[] = [
  { key: 'religion', label: 'Religion' },
  { key: 'community', label: 'Community' },
  { key: 'region', label: 'Region' },
  { key: 'kit', label: 'Ritual Kit' },
  { key: 'services', label: 'Services' },
  { key: 'details', label: 'Details' },
  { key: 'confirmation', label: 'Submit' }
];

export const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep }) => {
  const currentIndex = steps.findIndex(step => step.key === currentStep);
  
  if (currentStep === 'home') {
    return null;
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isCompleted = index < currentIndex;
          const isCurrent = index === currentIndex;
          const isUpcoming = index > currentIndex;

          return (
            <div key={step.key} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`
                    w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300
                    ${isCompleted ? 'bg-amber-700 text-white' : ''}
                    ${isCurrent ? 'bg-amber-600 text-white ring-4 ring-amber-200' : ''}
                    ${isUpcoming ? 'bg-gray-200 text-gray-600' : ''}
                  `}
                >
                  {isCompleted ? '✓' : index + 1}
                </div>
                <span 
                  className={`
                    mt-2 text-xs font-medium text-center
                    ${isCompleted || isCurrent ? 'text-amber-700' : 'text-gray-500'}
                  `}
                >
                  {step.label}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div 
                  className={`
                    flex-1 h-1 mx-4 transition-all duration-300
                    ${isCompleted ? 'bg-amber-700' : 'bg-gray-200'}
                  `}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};