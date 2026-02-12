import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronLeft } from 'lucide-react';
import { Layout } from '@/components/Layout';

const buttonClasses = {
  base: 'h-[40px] px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 font-medium text-sm whitespace-nowrap [font-family:"IBM_Plex_Sans_Arabic",Helvetica]',
  primary:
    'bg-[#093738] hover:bg-[#0a4849] text-white shadow-sm hover:shadow-md active:scale-[0.98]',
  secondary:
    'bg-white hover:bg-gray-50 text-[#093738] border border-[#e2e2e2] shadow-sm hover:shadow active:scale-[0.98]',
};

const inputClasses =
  'w-full h-[48px] px-4 rounded-lg border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#1a7b7c] focus:border-transparent transition-all [font-family:"IBM_Plex_Sans_Arabic",Helvetica] text-right';
const labelClasses = 'block text-sm font-medium text-[#093738] mb-2 [font-family:"IBM_Plex_Sans_Arabic",Helvetica]';

export const WarehouseManagementForm = () => {
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);

  const [formData, setFormData] = useState({
    warehouseName: '',
    code: '',
    accountName: '',
    date: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      navigate('/settings/warehouses/warehouse-management');
    }, 2000);
  };

  return (
    <Layout>
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/settings/warehouses/warehouse-management')}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              title="رجوع"
            >
              <ArrowRight className="w-5 h-5 text-[#093738]" />
            </button>
            <h1 className="text-2xl font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              إنشاء طلب مستودع جديد
            </h1>
          </div>
          <div className="flex gap-3">
            <button
              className={`${buttonClasses.base} ${buttonClasses.secondary}`}
              onClick={() => navigate('/settings/warehouses/warehouse-management')}
            >
              إلغاء
            </button>
            <button
              className={`${buttonClasses.base} ${buttonClasses.primary} flex items-center gap-2`}
              onClick={handleSubmit}
            >
              <span>إرسال الطلب</span>
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Form Container */}
          <div className="bg-white rounded-lg border border-[#e2e2e2] p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Warehouse Name */}
              <div>
                <label className={labelClasses}>اسم المستودع</label>
                <input
                  type="text"
                  value={formData.warehouseName}
                  onChange={(e) => setFormData({ ...formData, warehouseName: e.target.value })}
                  className={inputClasses}
                  placeholder="اسم المستودع"
                />
              </div>

              {/* Code */}
              <div>
                <label className={labelClasses}>الكود</label>
                <input
                  type="text"
                  value={formData.code}
                  onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                  className={inputClasses}
                  placeholder="الكود"
                />
              </div>

              {/* Account Name */}
              <div>
                <label className={labelClasses}>اسم الحساب</label>
                <input
                  type="text"
                  value={formData.accountName}
                  onChange={(e) => setFormData({ ...formData, accountName: e.target.value })}
                  className={inputClasses}
                  placeholder="اسم الحساب"
                />
              </div>

              {/* Date */}
              <div>
                <label className={labelClasses}>التاريخ</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className={inputClasses}
                />
              </div>
            </div>
          </div>
        </form>

        {/* Toast Notification */}
        {showToast && (
          <div className="fixed bottom-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
            تم إنشاء المستودع بنجاح
          </div>
        )}
      </div>
    </Layout>
  );
};
