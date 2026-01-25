import React from 'react';
import { Card } from './ui/card';

interface InitialFiltersProps {
  children: React.ReactNode;
}

const InitialFilters: React.FC<InitialFiltersProps> = ({ children }) => {
  return (
    <Card className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4">
        {children}
      </div>
    </Card>
  );
};

export default InitialFilters;
