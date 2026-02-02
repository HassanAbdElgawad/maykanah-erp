import React from 'react';

export interface AssetData {
  id: string;
  code: string;
  name: string;
  category: string;
  group: string;
  department: string;
  costCenter: string;
  supplier: string;
  purchaseDate: string;
  usageDate: string;
  warranty: string;
  depreciationType: string;
  originalValue: number;
  currentValue: number;
  depreciationRate: number;
  custodyHolder: string;
  isActive: boolean;
  image: string;
}

export interface AssetImageSliderProps {
  images: string[];
  assetName: string;
}

export interface AssetInfoCardProps {
  assetData: AssetData;
  isActive: boolean;
  onActiveChange: (value: boolean) => void;
  formatCurrency: (value: number) => React.ReactNode;
}

export interface AssetTabsProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export interface TabContentProps {
  assetData: AssetData;
  formatCurrency: (value: number) => React.ReactNode;
  onOpenModal?: (modalType: string) => void;
}
