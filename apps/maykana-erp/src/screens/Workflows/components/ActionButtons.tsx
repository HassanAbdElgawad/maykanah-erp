import { Eye } from 'lucide-react';

interface ActionButtonsProps {
  onSave: () => void;
  onPublish: () => void;
  primaryColor: string;
}

export const ActionButtons = ({
  onSave,
  onPublish,
  primaryColor,
}: ActionButtonsProps): JSX.Element => {
  return (
    <div className="sticky bottom-0 left-0 right-0 z-10 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-4 flex gap-3 justify-end mt-6">
      <button
        onClick={onSave}
        className="h-10 px-6 bg-[#0c47491a] text-[#0c4749] rounded-lg hover:bg-[#0c47492a] transition-colors [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium"
      >
        حفظ وإغلاق
      </button>
      <button className="h-10 px-6 bg-[#0c47491a] text-[#0c4749] rounded-lg hover:bg-[#0c47492a] transition-colors [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium flex items-center gap-2">
        <Eye className="w-5 h-5" />
        معاينة
      </button>
      <button
        onClick={onPublish}
        className="h-10 px-6 text-white rounded-lg transition-colors [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium"
        style={{ backgroundColor: primaryColor }}
      >
        انشر مباشر
      </button>
    </div>
  );
};
