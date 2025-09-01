import React, { useState } from 'react';
import { WizardStep, UserSelection, PersonalDetails, RitualKit, AddOn, Service } from './types';
import { religions } from './data/religions';
import { ritualKits } from './data/ritualKits';
import { HomePage } from './components/HomePage';
import { ProgressBar } from './components/ProgressBar';
import { ReligionSelection } from './components/ReligionSelection';
import { CommunitySelection } from './components/CommunitySelection';
import { RegionSelection } from './components/RegionSelection';
import { RitualKitSelection } from './components/RitualKitSelection';
import { ServicesSelection } from './components/ServicesSelection';
import { PersonalDetailsForm } from './components/PersonalDetailsForm';
import { ConfirmationPage } from './components/ConfirmationPage';

function App() {
  const [currentStep, setCurrentStep] = useState<WizardStep>('home');
  const [userSelection, setUserSelection] = useState<Partial<UserSelection>>({
    addOns: [],
    services: [],
    personalDetails: {
      fullName: '',
      phoneNumber: '',
      address: '',
      specialNotes: ''
    }
  });

  const handleReligionSelect = (religion: string) => {
    const religionData = religions.find(r => r.id === religion);
    setUserSelection(prev => ({
      ...prev,
      religion: religionData?.name || religion,
      subCommunity: '',
      ritualKit: undefined
    }));
  };

  const handleCommunitySelect = (community: string) => {
    setUserSelection(prev => ({
      ...prev,
      subCommunity: community
    }));
  };

  const handleRegionSelect = (region: string) => {
    setUserSelection(prev => ({
      ...prev,
      region
    }));
  };

  const handleKitSelect = (kit: RitualKit) => {
    setUserSelection(prev => ({
      ...prev,
      ritualKit: kit
    }));
  };

  const handleAddOnToggle = (addOn: AddOn) => {
    setUserSelection(prev => {
      const currentAddOns = prev.addOns || [];
      const isSelected = currentAddOns.some(item => item.id === addOn.id);
      
      if (isSelected) {
        return {
          ...prev,
          addOns: currentAddOns.filter(item => item.id !== addOn.id)
        };
      } else {
        return {
          ...prev,
          addOns: [...currentAddOns, addOn]
        };
      }
    });
  };

  const handleServiceToggle = (service: Service) => {
    setUserSelection(prev => {
      const currentServices = prev.services || [];
      const isSelected = currentServices.some(item => item.id === service.id);
      
      if (isSelected) {
        return {
          ...prev,
          services: currentServices.filter(item => item.id !== service.id)
        };
      } else {
        return {
          ...prev,
          services: [...currentServices, service]
        };
      }
    });
  };

  const handlePersonalDetailsUpdate = (details: PersonalDetails) => {
    setUserSelection(prev => ({
      ...prev,
      personalDetails: details
    }));
  };

  const getReligionId = (religionName: string) => {
    const religion = religions.find(r => r.name === religionName);
    return religion?.id || '';
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'home':
        return <HomePage onStart={() => setCurrentStep('religion')} />;
      
      case 'religion':
        return (
          <ReligionSelection
            selectedReligion={getReligionId(userSelection.religion || '')}
            onSelect={handleReligionSelect}
            onNext={() => setCurrentStep('community')}
          />
        );
      
      case 'community':
        return (
          <CommunitySelection
            selectedReligion={getReligionId(userSelection.religion || '')}
            selectedCommunity={userSelection.subCommunity || ''}
            onSelect={handleCommunitySelect}
            onNext={() => setCurrentStep('region')}
            onBack={() => setCurrentStep('religion')}
          />
        );
      
      case 'region':
        return (
          <RegionSelection
            selectedRegion={userSelection.region || ''}
            onSelect={handleRegionSelect}
            onNext={() => setCurrentStep('kit')}
            onBack={() => setCurrentStep('community')}
          />
        );
      
      case 'kit':
        return (
          <RitualKitSelection
            selectedReligion={getReligionId(userSelection.religion || '')}
            selectedKit={userSelection.ritualKit || null}
            selectedAddOns={userSelection.addOns || []}
            onSelectKit={handleKitSelect}
            onToggleAddOn={handleAddOnToggle}
            onNext={() => setCurrentStep('services')}
            onBack={() => setCurrentStep('region')}
          />
        );
      
      case 'services':
        return (
          <ServicesSelection
            selectedReligion={getReligionId(userSelection.religion || '')}
            selectedServices={userSelection.services || []}
            onToggleService={handleServiceToggle}
            onNext={() => setCurrentStep('details')}
            onBack={() => setCurrentStep('kit')}
          />
        );
      
      case 'details':
        return (
          <PersonalDetailsForm
            personalDetails={userSelection.personalDetails!}
            onUpdate={handlePersonalDetailsUpdate}
            onNext={() => setCurrentStep('confirmation')}
            onBack={() => setCurrentStep('services')}
          />
        );
      
      case 'confirmation':
        return (
          <ConfirmationPage
            userSelection={userSelection as UserSelection}
            onBack={() => setCurrentStep('details')}
          />
        );
      
      default:
        return <HomePage onStart={() => setCurrentStep('religion')} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="container mx-auto px-6 py-8">
        <ProgressBar currentStep={currentStep} />
        {renderCurrentStep()}
      </div>
    </div>
  );
}

export default App;