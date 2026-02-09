import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { ArrowRight, ChevronLeft } from 'lucide-react';
import { buttonClasses } from '../../styles/components/buttons';

export const UnitOfMeasureForm = (): JSX.Element => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    symbol: '',
    isActive: true,
  });

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    navigate('/settings/warehouses/unit-of-measures');
  };

  return (
    <Layout>
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/settings/warehouses/unit-of-measures')}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              title="رجوع"
            >
              <ArrowRight className="w-5 h-5 text-[#093738]" />
            </button>
            <h1 className="text-2xl font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              إضافة وحدة قياس جديدة
            </h1>
          </div>
          <div className="flex gap-3">
            <button
              className="px-4 py-2 h-[38px] rounded-lg border border-[#e2e2e2] text-[#093738] hover:bg-gray-50 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm"
              onClick={() => navigate('/settings/warehouses/unit-of-measures')}
            >
              إلغاء
            </button>
            <button
              className={`${buttonClasses.primary} flex items-center gap-2 h-[38px]`}
              onClick={handleSubmit}
            >
              <span>إرسال الطلب</span>
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-lg border border-[#e2e2e2] p-6">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* اسم الوحدة */}
              <div>
                <label className="block text-sm font-medium text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  اسم الوحدة <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                  placeholder="أدخل اسم الوحدة"
                  required
                />
              </div>

              {/* رمز الوحدة */}
              <div>
                <label className="block text-sm font-medium text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  رمز الوحدة
                </label>
                <input
                  type="text"
                  value={formData.symbol}
                  onChange={(e) => setFormData({ ...formData, symbol: e.target.value })}
                  className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                  placeholder="مثال: كجم، م، ل"
                />
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
                  وحدة قياس مفعلة
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
