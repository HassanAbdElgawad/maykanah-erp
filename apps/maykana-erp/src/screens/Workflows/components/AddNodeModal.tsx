import { User, CheckSquare, Trash2 } from 'lucide-react';

interface AddNodeModalProps {
  show: boolean;
  onClose: () => void;
  modalType: 'task' | 'condition';
  onAddNode: (type: 'task' | 'success' | 'failure') => void;
  dir: string;
}

export const AddNodeModal = ({
  show,
  onClose,
  modalType,
  onAddNode,
  dir,
}: AddNodeModalProps): JSX.Element | null => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-[450px] shadow-2xl" dir={dir}>
        <h3 className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-bold text-lg mb-6 [direction:rtl]">
          {modalType === 'task' ? 'إضافة مرحلة جديدة' : 'إضافة شرط جديد'}
        </h3>

        <div className="space-y-4">
          {modalType === 'task' ? (
            <button
              onClick={() => onAddNode('task')}
              className="w-full p-4 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white rounded-lg transition-colors text-right flex items-center gap-3"
            >
              <User className="w-6 h-6" />
              <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium [direction:rtl]">
                مهمة جديدة
              </span>
            </button>
          ) : (
            <>
              <button
                onClick={() => onAddNode('success')}
                className="w-full p-4 bg-[#10b981] hover:bg-[#059669] text-white rounded-lg transition-colors text-right flex items-center gap-3"
              >
                <CheckSquare className="w-6 h-6" />
                <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium [direction:rtl]">
                  نتيجة إيجابية
                </span>
              </button>

              <button
                onClick={() => onAddNode('failure')}
                className="w-full p-4 bg-[#ef4444] hover:bg-[#dc2626] text-white rounded-lg transition-colors text-right flex items-center gap-3"
              >
                <Trash2 className="w-6 h-6" />
                <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium [direction:rtl]">
                  نتيجة سلبية
                </span>
              </button>
            </>
          )}
        </div>

        <div className="flex gap-3 justify-end mt-6">
          <button
            onClick={onClose}
            className="h-10 px-6 bg-slate-100 text-gray-700 rounded-lg hover:bg-slate-200 transition-colors [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium"
          >
            إلغاء
          </button>
        </div>
      </div>
    </div>
  );
};
