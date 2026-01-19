import { useLocation } from 'react-router-dom';
import * as Icons from 'lucide-react';

const moduleIcons: Record<string, string> = {
  '/accounting': 'DollarSign',
  '/purchases': 'ShoppingCart',
  '/sales': 'TrendingUp',
  '/competitions': 'Trophy',
  '/assets': 'Package',
  '/hr': 'Users',
  '/projects': 'Folder',
  '/strategy': 'Target',
  '/warehouses': 'Warehouse',
  '/workflow-engine': 'Workflow',
};

export function ModuleIcon() {
  const { pathname } = useLocation();
  
  // Get the first segment of the path (module name)
  const moduleSegment = '/' + pathname.split('/').filter(Boolean)[0];
  const iconName = moduleIcons[moduleSegment];
  
  if (!iconName) return null;
  
  const IconComponent = (Icons as any)[iconName];
  
  if (!IconComponent) return null;
  
  return (
    <div className="flex items-center justify-center w-8 h-8 bg-[#093738] bg-opacity-10 rounded-lg">
      <IconComponent className="w-5 h-5 text-[#093738]" />
    </div>
  );
}
