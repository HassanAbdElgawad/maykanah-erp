import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { ArrowRight, ChevronLeft } from 'lucide-react';
import { buttonClasses } from '@/styles/components/buttons';

export const WarehousesGeneralSettings = (): JSX.Element => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    costingMethod: 'FIFO',
    priceQuantityUnit: 'NOS',
    allowedSalesVarianceUp: '100',
    allowedSalesDiscountUp: '10',
    allowedPurchaseVarianceUp: '100',
    allowedPurchaseDiscountUp: '10',
    openStockBySerialsNumbers: false,
    notifyBelowMinQuantity: false,
    reserveQuantityOnConfirm: false,
    preventSaleBelowCost: false,
  });

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <Layout>
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/settings?module=warehouses')}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              title="رجوع"
            >
              <ArrowRight className="w-5 h-5 text-[#093738]" />
            </button>
            <h1 className="text-2xl font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              الاعدادات العامة
            </h1>
          </div>
          <button
            className={`${buttonClasses.primary} flex items-center gap-2 h-[38px]`}
            onClick={handleSubmit}
          >
            <span>حفظ</span>
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-lg border border-[#e2e2e2] p-6 space-y-6">
          {/* Costing Method Section */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* النسبة الأولى الروراد زيادياً على سعر التكلفة */}
              <div>
                <label className="block text-sm font-medium text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  النسبة الأولى الروراد زيادياً عند سعر التكلفة
                </label>
                <input
                  type="text"
                  value={formData.costingMethod}
                  onChange={(e) => setFormData({ ...formData, costingMethod: e.target.value })}
                  className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                  placeholder="FIFO"
                />
              </div>

              {/* النسبة الثانية */}
              <div>
                <label className="block text-sm font-medium text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  النسبة الثانية
                </label>
                <select
                  value={formData.priceQuantityUnit}
                  onChange={(e) => setFormData({ ...formData, priceQuantityUnit: e.target.value })}
                  className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                >
                  <option value="NOS">NOS</option>
                  <option value="أيغون">أيغون</option>
                </select>
              </div>

              {/* وحدة القياس الأفتراضية */}
              <div>
                <label className="block text-sm font-medium text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  وحدة القياس الافتراضية
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                  placeholder="مجموعة العلاج الافتراضي"
                />
              </div>
            </div>

            {/* Date Range */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  الدور المسموح به لاستلام البضائع
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-center"
                  placeholder="الدور المسموح به لاستلام البضائع"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  المجموعة الافتراضية للمواد
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-center"
                  placeholder="المجموعة الافتراضية للمواد"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  تحديد الحرد من إلى
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-center"
                  placeholder="09:30 -- 10/11/2025"
                />
              </div>
            </div>
          </div>

          {/* Allowed Variance Section */}
          <div className="border-t border-[#e2e2e2] pt-6 space-y-4">
            <h3 className="text-lg font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              النسبة الثانية المسموح لك بتجاوزها
            </h3>

            <div className="space-y-4">
              {/* Sales Variance */}
              <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                <div className="text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] leading-relaxed">
                  <p>
                    النسبة الأولى المسموح لك بتجاوزها أو تسليم البيد مقابل الكمية الأولى به على سٍِبِل مثلٍة :
                  </p>
                  <p className="mt-2">
                    لثقل إذا أتت بك قد طلبت 100 وحدة وكان مخصصنك 10 / فيسمح لك بإستلام 110 وحدة .
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                <div className="text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] leading-relaxed">
                  <p>
                    النسبة الثانية المسموح لك بتجاوزها أكبر مقابل الكمية الأولى به على سٍِبِله مثلٍة :
                  </p>
                  <p className="mt-2">
                    لثقل إذا أتت بك قد طلبت 100 وحدة وكان مخصصنك 10 / بيل 110 وحدة .
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Checkboxes Section */}
          <div className="border-t border-[#e2e2e2] pt-6 space-y-3">
            {/* فتح المستودع بالسالب */}
            <label className="flex items-center gap-3 cursor-pointer group bg-[#F7F7F9] px-4 py-3 rounded-lg hover:bg-[#ECECF1] transition-colors">
              <input
                type="checkbox"
                checked={formData.openStockBySerialsNumbers}
                onChange={(e) =>
                  setFormData({ ...formData, openStockBySerialsNumbers: e.target.checked })
                }
                className="w-5 h-5 text-[#093738] border-gray-300 rounded focus:ring-[#093738]"
              />
              <span className="text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium">
                فتح المستودع بالسالب
              </span>
            </label>

            {/* تنبيهات عند انخفاض الكميات عن الحد الأدنى */}
            <label className="flex items-center gap-3 cursor-pointer group bg-[#F7F7F9] px-4 py-3 rounded-lg hover:bg-[#ECECF1] transition-colors">
              <input
                type="checkbox"
                checked={formData.notifyBelowMinQuantity}
                onChange={(e) =>
                  setFormData({ ...formData, notifyBelowMinQuantity: e.target.checked })
                }
                className="w-5 h-5 text-[#093738] border-gray-300 rounded focus:ring-[#093738]"
              />
              <span className="text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium">
                تنبيهات عند انخفاض الكميات عن الحد الادني
              </span>
            </label>

            {/* حجز البضاعة عند تأكيد في امر البيع */}
            <label className="flex items-center gap-3 cursor-pointer group bg-[#F7F7F9] px-4 py-3 rounded-lg hover:bg-[#ECECF1] transition-colors">
              <input
                type="checkbox"
                checked={formData.reserveQuantityOnConfirm}
                onChange={(e) =>
                  setFormData({ ...formData, reserveQuantityOnConfirm: e.target.checked })
                }
                className="w-5 h-5 text-[#093738] border-gray-300 rounded focus:ring-[#093738]"
              />
              <span className="text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium">
                حجز البضاعه عند تأكيد في امر البيع
              </span>
            </label>

            {/* منع البيع بأقل من سعر التكلفة */}
            <label className="flex items-center gap-3 cursor-pointer group bg-[#F7F7F9] px-4 py-3 rounded-lg hover:bg-[#ECECF1] transition-colors">
              <input
                type="checkbox"
                checked={formData.preventSaleBelowCost}
                onChange={(e) =>
                  setFormData({ ...formData, preventSaleBelowCost: e.target.checked })
                }
                className="w-5 h-5 text-[#093738] border-gray-300 rounded focus:ring-[#093738]"
              />
              <span className="text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium">
                منع البيع بأقل من سعر التكلفة
              </span>
            </label>
          </div>
        </div>
      </div>
    </Layout>
  );
};
