import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { TogglerWithLabel } from '../../components/ui/TogglerWithLabel';
import InitialFilters from '../../components/InitialFilters';
import { ArrowRight } from 'lucide-react';
import { buttonClasses } from '../../styles';

export const SalesSettings = (): JSX.Element => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    defaultPriceList: 'قائمة الأسعار الافتراضي',
    defaultCustomerGroup: 'مجموعة العملاء الافتراضي',
    defaultGeographicArea: 'النطاق الجغرافي الافتراضي',
    defaultWarehouse: 'المستودع الافتراضي',
    quoteValidityPeriod: 'فترة صلاحية عرض السعر',
    quoteValidityDays: '15',
    allowSellBelowCost: true,
    allowCalculatePriceByComponents: true,
    allowReserveQuantityByWorkOrders: true,
    allowCreateWorkOrderForExpiredPrices: true,
  });

  const toggleOptions = [
    {
      id: 'allowSellBelowCost',
      label: 'إمكانية بيع السلع بأقل من فاتورة الشراء',
    },
    {
      id: 'allowCalculatePriceByComponents',
      label: 'إمكانية حساب سعر المنتجات بناء على العناصر الجمعية',
    },
    {
      id: 'allowReserveQuantityByWorkOrders',
      label: 'إمكانية حجز الكمية في المستودعات بناء على أوامر العمل',
    },
    {
      id: 'allowCreateWorkOrderForExpiredPrices',
      label: 'إمكانية إنشاء أمر عمل لغرض أسعار منتهي الصلاحية',
    },
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // TODO: Implement save logic
  };

  return (
    <Layout>
      <div className="space-y-4">
        {/* Header Section with InitialFilters */}
        <InitialFilters>
          {/* Right side - Back button */}
          <Button
            variant="outline"
            onClick={() => navigate('/settings?module=sales')}
            className="bg-white hover:bg-gray-50 px-4 py-2 h-[43px] rounded-lg gap-2 border-0 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
          >
            <ArrowRight className="h-4 w-4" />
            <span className="text-base">إعدادات المبيعات</span>
          </Button>

          {/* Left side - Action buttons */}
          <div className="flex gap-2">
            <button 
              className={buttonClasses.primary}
              onClick={handleSubmit}
            >
              حفظ التعديلات
            </button>
          </div>
        </InitialFilters>

        {/* Main Content Card */}
        <Card className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <div className="p-6 space-y-6">
            {/* Dropdowns Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Default Price List */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  قائمة الأسعار الافتراضي
                </label>
                <select
                  value={formData.defaultPriceList}
                  onChange={(e) => handleInputChange('defaultPriceList', e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg [font-family:'IBM_Plex_Sans_Arabic',Helvetica] focus:outline-none focus:ring-2 focus:ring-[#2F7E79] focus:border-transparent"
                >
                  <option>قائمة الأسعار الافتراضي</option>
                </select>
              </div>

              {/* Default Customer Group */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  مجموعة العملاء الافتراضي
                </label>
                <select
                  value={formData.defaultCustomerGroup}
                  onChange={(e) => handleInputChange('defaultCustomerGroup', e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg [font-family:'IBM_Plex_Sans_Arabic',Helvetica] focus:outline-none focus:ring-2 focus:ring-[#2F7E79] focus:border-transparent"
                >
                  <option>مجموعة العملاء الافتراضي</option>
                </select>
              </div>

              {/* Default Geographic Area */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  النطاق الجغرافي الافتراضي
                </label>
                <select
                  value={formData.defaultGeographicArea}
                  onChange={(e) => handleInputChange('defaultGeographicArea', e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg [font-family:'IBM_Plex_Sans_Arabic',Helvetica] focus:outline-none focus:ring-2 focus:ring-[#2F7E79] focus:border-transparent"
                >
                  <option>النطاق الجغرافي الافتراضي</option>
                </select>
              </div>

              {/* Default Warehouse */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  المستودع الافتراضي
                </label>
                <select
                  value={formData.defaultWarehouse}
                  onChange={(e) => handleInputChange('defaultWarehouse', e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg [font-family:'IBM_Plex_Sans_Arabic',Helvetica] focus:outline-none focus:ring-2 focus:ring-[#2F7E79] focus:border-transparent"
                >
                  <option>المستودع الافتراضي</option>
                </select>
              </div>

              {/* Quote Validity Period */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  فترة صلاحية عرض السعر
                </label>
                <select
                  value={formData.quoteValidityPeriod}
                  onChange={(e) => handleInputChange('quoteValidityPeriod', e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg [font-family:'IBM_Plex_Sans_Arabic',Helvetica] focus:outline-none focus:ring-2 focus:ring-[#2F7E79] focus:border-transparent"
                >
                  <option>فترة صلاحية عرض السعر</option>
                </select>
              </div>

              {/* Quote Validity Days */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  عدد ايام صلاحية عرض السعر
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.quoteValidityDays}
                    onChange={(e) => handleInputChange('quoteValidityDays', e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg [font-family:'IBM_Plex_Sans_Arabic',Helvetica] focus:outline-none focus:ring-2 focus:ring-[#2F7E79] focus:border-transparent"
                  />
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    يوم
                  </span>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* Toggle Switches Section */}
            <div className="space-y-4">
              {toggleOptions.map((option) => (
                <div key={option.id} className="flex items-center justify-between py-3">
                  <label className="text-sm font-bold text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    {option.label}
                  </label>
                  <TogglerWithLabel
                    isActive={formData[option.id as keyof typeof formData] as boolean}
                    onToggle={() => handleInputChange(option.id, !formData[option.id as keyof typeof formData])}
                    activeColor="bg-[#2F7E79]"
                    size="sm"
                    activeLabel="نعم"
                    inactiveLabel="لا"
                    minWidth="min-w-[100px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
};
