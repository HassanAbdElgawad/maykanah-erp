import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { buttonClasses } from '../../styles';

export const WarehousePriceListForm = (): JSX.Element => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = !!id;

  const [isDataSectionOpen, setIsDataSectionOpen] = useState(true);
  const [isModulesSectionOpen, setIsModulesSectionOpen] = useState(true);

  const [formData, setFormData] = useState({
    name: isEditMode ? 'قائمة الأسعار الأساسية' : '',
    currency: isEditMode ? 'SAR' : '',
    hasPurchases: isEditMode ? true : false,
    hasSales: isEditMode ? true : false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    navigate('/warehouses/price-lists');
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <Card className="bg-white rounded-lg border border-gray-200">
          <div className="flex items-center justify-between p-4">
            <Button
              variant="ghost"
              onClick={() => navigate('/warehouses/price-lists')}
              className="flex items-center gap-2 text-[#093738] hover:bg-gray-100"
            >
              <ArrowRight className="w-5 h-5" />
              <span className="text-base font-medium">
                {isEditMode ? 'تعديل قائمة الأسعار' : 'قائمة اسعار جديدة'}
              </span>
            </Button>
            <Button onClick={handleSubmit} className={buttonClasses.primary}>
              حفظ
            </Button>
          </div>
        </Card>

        {/* Data Section */}
        <Card className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div
            className="flex items-center justify-between p-4 bg-[#F1F5F980] cursor-pointer"
            onClick={() => setIsDataSectionOpen(!isDataSectionOpen)}
          >
            <h2 className="text-lg font-semibold text-[#093738]">بيانات</h2>
            {isDataSectionOpen ? (
              <ChevronUp className="w-5 h-5 text-gray-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-600" />
            )}
          </div>

          {isDataSectionOpen && (
            <div className="p-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    قائمة الاسعار اسم
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="قائمة الاسعار اسم"
                    className="bg-white border-[#e2e2e2] h-[43px]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    العملة
                  </label>
                  <select
                    value={formData.currency}
                    onChange={(e) => handleInputChange('currency', e.target.value)}
                    className="h-[43px] w-full px-3 rounded-md border border-[#e2e2e2] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1a5f7a]"
                  >
                    <option value="">العملة</option>
                    <option value="SAR">ريال سعودي</option>
                    <option value="USD">دولار أمريكي</option>
                    <option value="EUR">يورو</option>
                    <option value="AED">درهم إماراتي</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </Card>

        {/* Modules Section */}
        <Card className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div
            className="flex items-center justify-between p-4 bg-[#F1F5F980] cursor-pointer"
            onClick={() => setIsModulesSectionOpen(!isModulesSectionOpen)}
          >
            <h2 className="text-lg font-semibold text-[#093738]">الوحدات</h2>
            {isModulesSectionOpen ? (
              <ChevronUp className="w-5 h-5 text-gray-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-600" />
            )}
          </div>

          {isModulesSectionOpen && (
            <div className="p-6 space-y-4">
              {/* Purchases Management */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <label className="text-sm font-medium text-gray-700">
                  ادارة المشتريات
                </label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.hasPurchases}
                    onChange={(e) => handleInputChange('hasPurchases', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-5 h-5 border-2 border-gray-300 rounded peer-checked:bg-[#1a5f7a] peer-checked:border-[#1a5f7a] flex items-center justify-center">
                    {formData.hasPurchases && (
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </label>
              </div>

              {/* Sales Management */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <label className="text-sm font-medium text-gray-700">
                  ادارة المبيعات
                </label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.hasSales}
                    onChange={(e) => handleInputChange('hasSales', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-5 h-5 border-2 border-gray-300 rounded peer-checked:bg-[#1a5f7a] peer-checked:border-[#1a5f7a] flex items-center justify-center">
                    {formData.hasSales && (
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </label>
              </div>
            </div>
          )}
        </Card>
      </div>
    </Layout>
  );
};
