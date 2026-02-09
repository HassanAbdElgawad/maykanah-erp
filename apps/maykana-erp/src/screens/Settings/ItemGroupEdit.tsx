import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { ArrowRight, ChevronLeft } from 'lucide-react';
import { buttonClasses } from '../../styles/components/buttons';

interface ItemGroup {
  id: string;
  name: string;
  inventoryAccount: string;
  isActive: boolean;
}

const mockGroups: Record<string, ItemGroup> = {
  '1': {
    id: '1',
    name: 'اسم المجموعة',
    inventoryAccount: 'حساب المخزون',
    isActive: true,
  },
  '2': {
    id: '2',
    name: 'اسم المجموعة',
    inventoryAccount: 'حساب المخزون',
    isActive: true,
  },
  '3': {
    id: '3',
    name: 'اسم المجموعة',
    inventoryAccount: 'حساب المخزون',
    isActive: false,
  },
};

export const ItemGroupEdit = (): JSX.Element => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const group = id ? mockGroups[id] : null;

  const [formData, setFormData] = useState({
    name: group?.name || '',
    inventoryAccount: group?.inventoryAccount || '',
    isActive: group?.isActive ?? true,
  });

  const handleSubmit = () => {
    console.log('Form updated:', formData);
    navigate('/settings/warehouses/item-groups');
  };

  if (!group) {
    return (
      <Layout>
        <div className="text-center py-12">
          <p className="text-[#093738]">مجموعة الأصناف غير موجودة</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/settings/warehouses/item-groups')}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              title="رجوع"
            >
              <ArrowRight className="w-5 h-5 text-[#093738]" />
            </button>
            <h1 className="text-2xl font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              تعديل مجموعة الأصناف - {group.name}
            </h1>
          </div>
          <div className="flex gap-3">
            <button
              className="px-4 py-2 h-[38px] rounded-lg border border-[#e2e2e2] text-[#093738] hover:bg-gray-50 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm"
              onClick={() => navigate('/settings/warehouses/item-groups')}
            >
              إلغاء
            </button>
            <button
              className={`${buttonClasses.primary} flex items-center gap-2 h-[38px]`}
              onClick={handleSubmit}
            >
              <span>حفظ التعديلات</span>
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-lg border border-[#e2e2e2] p-6">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* اسم المجموعة */}
              <div>
                <label className="block text-sm font-medium text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  اسم المجموعة <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                  placeholder="أدخل اسم المجموعة"
                  required
                />
              </div>

              {/* حساب المخزون */}
              <div>
                <label className="block text-sm font-medium text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  حساب المخزون <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.inventoryAccount}
                  onChange={(e) => setFormData({ ...formData, inventoryAccount: e.target.value })}
                  className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                  required
                >
                  <option value="">اختر حساب المخزون</option>
                  <option value="حساب المخزون">حساب المخزون</option>
                  <option value="حساب آخر">حساب آخر</option>
                </select>
              </div>
            </div>

            {/* الحالة */}
            <div>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={formData.isActive}
                  onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                  className="w-5 h-5 text-[#093738] border-gray-300 rounded focus:ring-[#093738]"
                />
                <span className="text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium">
                  مجموعة مفعلة
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
