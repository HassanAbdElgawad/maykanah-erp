import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { useLanguage } from '../../../contexts/LanguageContext';

interface LeaveRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LeaveRequestModal({ isOpen, onClose }: LeaveRequestModalProps) {
  const { dir } = useLanguage();
  const [formData, setFormData] = useState({
    employee: '',
    leaveDaysBefore: '15',
    leaveDaysAfter: '12',
    leaveType: '',
    startDate: '',
    endDate: '',
    substituteEmployee: '',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (action: 'accept' | 'reject') => {
    console.log('Form submitted:', { action, ...formData });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        className={`bg-white rounded-xl w-full max-w-2xl mx-4 ${dir === 'rtl' ? "font-['IBM_Plex_Sans_Arabic']" : ''}`}
        dir={dir}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">طلب إجازة</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Employee Information Section */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">معلومات الموظف</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  الموظف
                </label>
                <Input
                  type="text"
                  value={formData.employee}
                  onChange={(e) =>
                    setFormData({ ...formData, employee: e.target.value })
                  }
                  placeholder="أدخل اسم الموظف"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  رصيد الإجازات قبل الإجراء
                </label>
                <div className="flex items-center gap-2">
                  <Input
                    type="text"
                    value={formData.leaveDaysBefore}
                    onChange={(e) =>
                      setFormData({ ...formData, leaveDaysBefore: e.target.value })
                    }
                    className="w-full"
                  />
                  <span className="text-sm text-gray-600 whitespace-nowrap">يوم</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  رصيد الإجازات بعد الإجراء
                </label>
                <div className="flex items-center gap-2">
                  <Input
                    type="text"
                    value={formData.leaveDaysAfter}
                    onChange={(e) =>
                      setFormData({ ...formData, leaveDaysAfter: e.target.value })
                    }
                    className="w-full"
                  />
                  <span className="text-sm text-gray-600 whitespace-nowrap">يوم</span>
                </div>
              </div>
            </div>
          </div>

          {/* Other Information Section */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">معلومات أخرى</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  نوع الأجازة
                </label>
                <select
                  value={formData.leaveType}
                  onChange={(e) =>
                    setFormData({ ...formData, leaveType: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f]"
                >
                  <option value="">اختر نوع الأجازة</option>
                  <option value="سنوية">سنوية</option>
                  <option value="مرضية">مرضية</option>
                  <option value="طارئة">طارئة</option>
                  <option value="بدون أجر">بدون أجر</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  تاريخ البدء
                </label>
                <Input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) =>
                    setFormData({ ...formData, startDate: e.target.value })
                  }
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  تاريخ الانتهاء
                </label>
                <Input
                  type="date"
                  value={formData.endDate}
                  onChange={(e) =>
                    setFormData({ ...formData, endDate: e.target.value })
                  }
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  الموظف البديل
                </label>
                <Input
                  type="text"
                  value={formData.substituteEmployee}
                  onChange={(e) =>
                    setFormData({ ...formData, substituteEmployee: e.target.value })
                  }
                  placeholder="أدخل اسم الموظف البديل"
                  className="w-full"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ملاحظات
                </label>
                <textarea
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  placeholder="أضف ملاحظاتك هنا..."
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] resize-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200">
          <Button
            onClick={() => handleSubmit('reject')}
            variant="outline"
            className="px-6 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            رفض
          </Button>
          <Button
            onClick={() => handleSubmit('accept')}
            className="bg-[#11383f] hover:bg-[#0f2f35] text-white px-6 py-2"
          >
            قبول
          </Button>
        </div>
      </div>
    </div>
  );
}
