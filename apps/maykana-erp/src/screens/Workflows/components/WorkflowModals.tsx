import { X } from 'lucide-react';

interface ColumnModalProps {
  showColumnModal: boolean;
  setShowColumnModal: (show: boolean) => void;
  newColumnName: string;
  setNewColumnName: (name: string) => void;
  addColumn: () => void;
  primaryColor: string;
  dir: string;
}

export const ColumnModal = ({
  showColumnModal,
  setShowColumnModal,
  newColumnName,
  setNewColumnName,
  addColumn,
  primaryColor,
  dir,
}: ColumnModalProps) => {
  if (!showColumnModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-[400px] shadow-2xl" dir={dir}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-lg font-bold [direction:rtl]">
            إضافة عمود جديد
          </h3>
          <button
            onClick={() => setShowColumnModal(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <input
          type="text"
          value={newColumnName}
          onChange={(e) => setNewColumnName(e.target.value)}
          placeholder="اسم العمود"
          className="w-full h-10 px-3 mb-4 bg-white rounded-lg border border-gray-300 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] outline-none focus:border-[#0c4749]"
          autoFocus
        />
        <div className="flex gap-3 justify-end">
          <button
            onClick={() => setShowColumnModal(false)}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm"
          >
            إلغاء
          </button>
          <button
            onClick={addColumn}
            className="px-4 py-2 text-white rounded-lg transition-colors [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm font-medium"
            style={{ backgroundColor: primaryColor }}
          >
            إضافة
          </button>
        </div>
      </div>
    </div>
  );
};

interface ChecklistItemModalProps {
  showChecklistItemModal: boolean;
  setShowChecklistItemModal: (show: boolean) => void;
  newChecklistItemText: string;
  setNewChecklistItemText: (text: string) => void;
  addChecklistItem: () => void;
  primaryColor: string;
  dir: string;
}

export const ChecklistItemModal = ({
  showChecklistItemModal,
  setShowChecklistItemModal,
  newChecklistItemText,
  setNewChecklistItemText,
  addChecklistItem,
  primaryColor,
  dir,
}: ChecklistItemModalProps) => {
  if (!showChecklistItemModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-[400px] shadow-2xl" dir={dir}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-lg font-bold [direction:rtl]">
            إضافة عنصر جديد
          </h3>
          <button
            onClick={() => setShowChecklistItemModal(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <input
          type="text"
          value={newChecklistItemText}
          onChange={(e) => setNewChecklistItemText(e.target.value)}
          placeholder="نص العنصر"
          className="w-full h-10 px-3 mb-4 bg-white rounded-lg border border-gray-300 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] outline-none focus:border-[#0c4749]"
          autoFocus
        />
        <div className="flex gap-3 justify-end">
          <button
            onClick={() => setShowChecklistItemModal(false)}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm"
          >
            إلغاء
          </button>
          <button
            onClick={addChecklistItem}
            className="px-4 py-2 text-white rounded-lg transition-colors [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm font-medium"
            style={{ backgroundColor: primaryColor }}
          >
            إضافة
          </button>
        </div>
      </div>
    </div>
  );
};

interface PublishModalProps {
  showPublishModal: boolean;
  setShowPublishModal: (show: boolean) => void;
  selectedUsers: number[];
  setSelectedUsers: (users: number[]) => void;
  publishWorkflow: () => void;
  primaryColor: string;
  dir: string;
}

export const PublishModal = ({
  showPublishModal,
  setShowPublishModal,
  selectedUsers,
  setSelectedUsers,
  publishWorkflow,
  primaryColor,
  dir,
}: PublishModalProps) => {
  if (!showPublishModal) return null;

  const users = [
    { id: 1, name: 'أحمد محمد', role: 'مدير المشتريات' },
    { id: 2, name: 'فاطمة علي', role: 'محاسب' },
    { id: 3, name: 'خالد السعيد', role: 'مدير المبيعات' },
    { id: 4, name: 'نورة عبدالله', role: 'موظف مستودع' },
  ];

  const toggleUser = (userId: number) => {
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter((id) => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-[500px] shadow-2xl" dir={dir}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-lg font-bold [direction:rtl]">
            نشر سير العمل
          </h3>
          <button
            onClick={() => setShowPublishModal(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <p className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm text-gray-600 mb-4 [direction:rtl]">
          اختر المستخدمين الذين سيتمكنون من الوصول لهذا سير العمل
        </p>
        <div className="space-y-2 mb-4 max-h-[300px] overflow-y-auto">
          {users.map((user) => (
            <div
              key={user.id}
              onClick={() => toggleUser(user.id)}
              className={`p-3 rounded-lg border cursor-pointer transition-all ${
                selectedUsers.includes(user.id)
                  ? 'border-[#0c4749] bg-[#0c47490a]'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1 [direction:rtl]">
                  <p className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm font-medium text-black">
                    {user.name}
                  </p>
                  <p className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-xs text-gray-500">
                    {user.role}
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={selectedUsers.includes(user.id)}
                  onChange={() => {}}
                  className="w-5 h-5 rounded border-gray-300 text-[#0c4749] focus:ring-[#0c4749]"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-3 justify-end">
          <button
            onClick={() => setShowPublishModal(false)}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm"
          >
            إلغاء
          </button>
          <button
            onClick={publishWorkflow}
            className="px-4 py-2 text-white rounded-lg transition-colors [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm font-medium"
            style={{ backgroundColor: primaryColor }}
          >
            نشر
          </button>
        </div>
      </div>
    </div>
  );
};
