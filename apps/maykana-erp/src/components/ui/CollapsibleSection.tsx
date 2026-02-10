import { useState, ReactNode } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface CollapsibleSectionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  icon?: ReactNode;
}

export const CollapsibleSection = ({
  title,
  children,
  defaultOpen = true,
  icon,
}: CollapsibleSectionProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          {icon && <div className="text-gray-600">{icon}</div>}
          <h3 className="text-lg font-medium text-gray-900 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
            {title}
          </h3>
        </div>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-600" />
        )}
      </button>
      {isOpen && <div className="p-6 border-t border-gray-200">{children}</div>}
    </div>
  );
};
