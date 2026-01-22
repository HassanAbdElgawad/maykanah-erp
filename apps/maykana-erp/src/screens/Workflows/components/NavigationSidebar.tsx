import { SquareCode, GitBranch, ShieldCheck } from 'lucide-react';
import { ViewMode } from './types';

interface NavigationSidebarProps {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  primaryColor: string;
}

export const NavigationSidebar = ({
  viewMode,
  setViewMode,
  primaryColor,
}: NavigationSidebarProps): JSX.Element => {
  return (
    <div className="w-14 bg-white rounded-xl border border-gray-200 flex flex-col items-center gap-3 py-4">
      <button
        onClick={() => setViewMode('form')}
        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
          viewMode === 'form' ? 'text-white' : 'bg-[#0a37381a] hover:bg-[#0a37382a]'
        }`}
        style={viewMode === 'form' ? { backgroundColor: primaryColor } : undefined}
      >
        <SquareCode
          className={`w-5 h-5 ${viewMode === 'form' ? 'text-white' : 'text-[#0a3738]'}`}
        />
      </button>
      <button
        onClick={() => setViewMode('flow')}
        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
          viewMode === 'flow' ? 'text-white' : 'bg-[#0a37381a] hover:bg-[#0a37382a]'
        }`}
        style={viewMode === 'flow' ? { backgroundColor: primaryColor } : undefined}
      >
        <GitBranch
          className={`w-5 h-5 ${viewMode === 'flow' ? 'text-white' : 'text-[#0a3738]'}`}
        />
      </button>
      <button
        onClick={() => setViewMode('formBuilder')}
        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
          viewMode === 'formBuilder' ? 'text-white' : 'bg-[#0a37381a] hover:bg-[#0a37382a]'
        }`}
        style={viewMode === 'formBuilder' ? { backgroundColor: primaryColor } : undefined}
      >
        <ShieldCheck
          className={`w-5 h-5 ${viewMode === 'formBuilder' ? 'text-white' : 'text-[#0a3738]'}`}
        />
      </button>
    </div>
  );
};
