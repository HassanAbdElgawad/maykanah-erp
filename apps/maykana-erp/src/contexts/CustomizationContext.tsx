import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface CustomizationData {
  brandName?: string;
  brandImage?: string;
  avatarImage?: string;
  userEmail?: string;
  sidebarMainColor?: string;
  sidebarSecondaryColor?: string;
}

interface CustomizationContextType {
  customization: CustomizationData;
  updateCustomization: (data: Partial<CustomizationData>) => void;
  resetField: (field: keyof CustomizationData) => void;
  resetAll: () => void;
}

const CustomizationContext = createContext<CustomizationContextType | undefined>(undefined);

const STORAGE_KEY = 'maykana_customization';

// Default values
const DEFAULT_CUSTOMIZATION: CustomizationData = {
  brandName: '',
  brandImage: '',
  avatarImage: '',
  userEmail: '',
  sidebarMainColor: '#0A3B3D',
  sidebarSecondaryColor: '#ffffff0a',
};

export const CustomizationProvider = ({ children }: { children: ReactNode }) => {
  const [customization, setCustomization] = useState<CustomizationData>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return { ...DEFAULT_CUSTOMIZATION, ...JSON.parse(stored) };
      }
    } catch (error) {
      console.error('Error loading customization:', error);
    }
    return DEFAULT_CUSTOMIZATION;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(customization));
    } catch (error) {
      console.error('Error saving customization:', error);
    }
  }, [customization]);

  const updateCustomization = (data: Partial<CustomizationData>) => {
    setCustomization((prev) => ({ ...prev, ...data }));
  };

  const resetField = (field: keyof CustomizationData) => {
    setCustomization((prev) => ({
      ...prev,
      [field]: DEFAULT_CUSTOMIZATION[field],
    }));
  };

  const resetAll = () => {
    setCustomization(DEFAULT_CUSTOMIZATION);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <CustomizationContext.Provider
      value={{ customization, updateCustomization, resetField, resetAll }}
    >
      {children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  if (!context) {
    throw new Error('useCustomization must be used within CustomizationProvider');
  }
  return context;
};
