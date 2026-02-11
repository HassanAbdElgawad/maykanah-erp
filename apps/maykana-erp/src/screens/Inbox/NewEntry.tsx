import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import {
  ArrowRight,
  Save,
  X,
  Plus,
  Trash2,
  Upload,
} from 'lucide-react';

// Types
interface ChecklistItem {
  id: number;
  element: string;
  description: string;
  status: string;
  notes: string;
}

export const NewEntry = (): JSX.Element => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    requestType: 'قائمة تحقق',
    branch: '',
    department: '',
  });

  const [checklistItems, setChecklistItems] = useState<ChecklistItem[]>([
    { id: 1, element: '', description: '', status: '', notes: '' },
  ]);

  // Add new checklist item
  const addItem = () => {
    const newId = checklistItems.length + 1;
    setChecklistItems([
      ...checklistItems,
      { id: newId, element: '', description: '', status: '', notes: '' },
    ]);
  };

  // Remove checklist item
  const removeItem = (id: number) => {
    if (checklistItems.length > 1) {
      setChecklistItems(checklistItems.filter((item) => item.id !== id));
    }
  };

  // Update checklist item
  const updateItem = (id: number, field: keyof ChecklistItem, value: string) => {
    setChecklistItems(
      checklistItems.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  // Handle form submission
  const handleSubmit = () => {
    console.log('Form Data:', formData);
    console.log('Checklist Items:', checklistItems);
    // In real app, this would send data to the backend
    navigate('/inbox');
  };

  return (
    <Layout>
      <div className="flex flex-col gap-4 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]" dir="rtl">
        {/* Header with Back Button and Actions */}
        <div className="flex items-center justify-between gap-4 bg-white p-4 rounded-xl border border-[#e2e2e2]">
          {/* Right Side - Title with Back Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/inbox')}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowRight className="w-5 h-5 text-gray-600" />
            </button>
            <h1 className="text-lg font-semibold text-[#0e0d24]">قيد جديد</h1>
          </div>

          {/* Left Side - Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Cancel Button */}
            <Button
              variant="outline"
              onClick={() => navigate('/inbox')}
              className="px-4 py-2 border-gray-300 rounded-lg flex items-center gap-2"
            >
              <X className="w-4 h-4" />
              <span>إلغاء</span>
            </Button>

            {/* Save Button */}
            <Button
              onClick={handleSubmit}
              className="bg-[#093738] hover:bg-[#0b4a4c] text-white px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              <span>حفظ</span>
            </Button>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] p-6">
          <h2 className="text-lg font-semibold text-[#0e0d24] mb-6">معلومات الطلب</h2>

          <div className="grid grid-cols-4 gap-6">
            {/* Title */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">عنوان الطلب</label>
              <Input
                type="text"
                placeholder="أدخل عنوان الطلب"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="border-gray-300"
              />
            </div>

            {/* Request Type */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">نوع الطلب</label>
              <select
                value={formData.requestType}
                onChange={(e) => setFormData({ ...formData, requestType: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#093738] bg-white"
              >
                <option value="قائمة تحقق">قائمة تحقق</option>
                <option value="طلب شراء">طلب شراء</option>
                <option value="طلب إجازة">طلب إجازة</option>
                <option value="طلب سلفة">طلب سلفة</option>
              </select>
            </div>

            {/* Branch */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">الفرع</label>
              <select
                value={formData.branch}
                onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#093738] bg-white"
              >
                <option value="">اختر الفرع</option>
                <option value="فرع 1">فرع 1</option>
                <option value="فرع 2">فرع 2</option>
                <option value="فرع 3">فرع 3</option>
              </select>
            </div>

            {/* Department */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">القسم</label>
              <select
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#093738] bg-white"
              >
                <option value="">اختر القسم</option>
                <option value="قسم 1">قسم 1</option>
                <option value="قسم 2">قسم 2</option>
                <option value="قسم 3">قسم 3</option>
              </select>
            </div>
          </div>
        </div>

        {/* Checklist Items */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-[#0e0d24]">عناصر قائمة التحقق</h2>
            <Button
              variant="outline"
              onClick={addItem}
              className="px-4 py-2 border-[#093738] text-[#093738] hover:bg-[#093738]/5 rounded-lg flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>إضافة عنصر</span>
            </Button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full" dir="rtl">
              <thead className="bg-[#F8FAFC] border-b border-gray-200">
                <tr>
                  <th className="px-4 py-4 text-right text-sm font-semibold text-[#0e0d24] w-16">
                    #
                  </th>
                  <th className="px-4 py-4 text-right text-sm font-semibold text-[#0e0d24]">
                    العنصر
                  </th>
                  <th className="px-4 py-4 text-right text-sm font-semibold text-[#0e0d24]">
                    الوصف
                  </th>
                  <th className="px-4 py-4 text-right text-sm font-semibold text-[#0e0d24]">
                    الحالة
                  </th>
                  <th className="px-4 py-4 text-right text-sm font-semibold text-[#0e0d24]">
                    ملاحظات
                  </th>
                  <th className="px-4 py-4 text-right text-sm font-semibold text-[#0e0d24]">
                    مرفقات
                  </th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-[#0e0d24] w-16">
                    إجراء
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {checklistItems.map((item, index) => (
                  <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                    {/* Row Number */}
                    <td className="px-4 py-4 text-sm text-gray-900 font-medium">{index + 1}</td>

                    {/* Element */}
                    <td className="px-4 py-4">
                      <Input
                        type="text"
                        placeholder="اسم العنصر"
                        value={item.element}
                        onChange={(e) => updateItem(item.id, 'element', e.target.value)}
                        className="border-gray-200 text-sm"
                      />
                    </td>

                    {/* Description */}
                    <td className="px-4 py-4">
                      <Input
                        type="text"
                        placeholder="وصف العنصر"
                        value={item.description}
                        onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                        className="border-gray-200 text-sm"
                      />
                    </td>

                    {/* Status */}
                    <td className="px-4 py-4">
                      <select
                        value={item.status}
                        onChange={(e) => updateItem(item.id, 'status', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#093738] bg-white"
                      >
                        <option value="">اختر الحالة</option>
                        <option value="نعم تم التنظيف">نعم تم التنظيف</option>
                        <option value="لا، لم يتم">لا، لم يتم</option>
                        <option value="تم جزئيا">تم جزئيا</option>
                      </select>
                    </td>

                    {/* Notes */}
                    <td className="px-4 py-4">
                      <Input
                        type="text"
                        placeholder="ملاحظات"
                        value={item.notes}
                        onChange={(e) => updateItem(item.id, 'notes', e.target.value)}
                        className="border-gray-200 text-sm"
                      />
                    </td>

                    {/* Attachments */}
                    <td className="px-4 py-4">
                      <button className="flex items-center gap-2 px-3 py-2 border border-dashed border-gray-300 rounded-lg text-sm text-gray-500 hover:border-[#093738] hover:text-[#093738] transition-colors">
                        <Upload className="w-4 h-4" />
                        <span>رفع صور</span>
                      </button>
                    </td>

                    {/* Action */}
                    <td className="px-4 py-4 text-center">
                      <button
                        onClick={() => removeItem(item.id)}
                        disabled={checklistItems.length === 1}
                        className={`p-2 rounded-lg transition-colors ${
                          checklistItems.length === 1
                            ? 'text-gray-300 cursor-not-allowed'
                            : 'text-red-500 hover:bg-red-50'
                        }`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};
