import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { buttonClasses } from '@/styles';

export const WarehouseBatchForm = (): JSX.Element => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = !!id;

  const [isDataSectionOpen, setIsDataSectionOpen] = useState(true);

  const [formData, setFormData] = useState({
    name: isEditMode ? 'البند الأصلي' : '',
    batchNumber: isEditMode ? 'BTH-001' : '',
    isActive: isEditMode ? true : false,
    itemType: isEditMode ? 'inventory' : 'inventory',
    expiryDate: isEditMode ? '2025-05-20' : '',
    originalItem: isEditMode ? 'البند الأصلي' : '',
    manufacturingDate: isEditMode ? '2025-05-20' : '',
    batchDescription: isEditMode ? 'وصف الباتش هنا' : '',
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    navigate('/warehouses/batches');
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <Card className="bg-white rounded-lg border border-gray-200">
          <div className="flex items-center justify-between p-4">
            <Button
              variant="ghost"
              onClick={() => navigate('/warehouses/batches')}
              className="flex items-center gap-2 text-[#093738] hover:bg-gray-100"
            >
              <ArrowRight className="w-5 h-5" />
              <span className="text-base font-medium">
                {isEditMode ? 'تعديل الدفعة' : 'الدفعة جديدة'}
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
              {/* Row 1 */}
              <div className="grid grid-cols-4 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    الاسم
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="البند الأصلي"
                    className="bg-white border-[#e2e2e2] h-[43px]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    دفعة
                  </label>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={!formData.isActive}
                        onChange={(e) => handleInputChange('isActive', !e.target.checked)}
                        className="w-4 h-4 text-[#1a5f7a] border-gray-300 rounded focus:ring-[#1a5f7a]"
                      />
                      <span className="text-sm text-gray-700">غير مفعل</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    نوع الصنف
                  </label>
                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="itemType"
                        value="inventory"
                        checked={formData.itemType === 'inventory'}
                        onChange={(e) => handleInputChange('itemType', e.target.value)}
                        className="w-4 h-4 text-[#1a5f7a] border-gray-300 focus:ring-[#1a5f7a]"
                      />
                      <span className="text-sm text-gray-700">مخزني</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="itemType"
                        value="service"
                        checked={formData.itemType === 'service'}
                        onChange={(e) => handleInputChange('itemType', e.target.value)}
                        className="w-4 h-4 text-[#1a5f7a] border-gray-300 focus:ring-[#1a5f7a]"
                      />
                      <span className="text-sm text-gray-700">خدمي</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    تاريخ انتهاء الصلاحية
                  </label>
                  <Input
                    type="date"
                    value={formData.expiryDate}
                    onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                    className="bg-white border-[#e2e2e2] h-[43px]"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    البند الأصلي
                  </label>
                  <Input
                    type="text"
                    value={formData.originalItem}
                    onChange={(e) => handleInputChange('originalItem', e.target.value)}
                    placeholder="البند الأصلي"
                    className="bg-white border-[#e2e2e2] h-[43px]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    تاريخ التصنيع
                  </label>
                  <Input
                    type="date"
                    value={formData.manufacturingDate}
                    onChange={(e) => handleInputChange('manufacturingDate', e.target.value)}
                    className="bg-white border-[#e2e2e2] h-[43px]"
                  />
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    وصف الباتش
                  </label>
                  <Input
                    type="text"
                    value={formData.batchDescription}
                    onChange={(e) => handleInputChange('batchDescription', e.target.value)}
                    placeholder="وصف الباتش هنا"
                    className="bg-white border-[#e2e2e2] h-[43px]"
                  />
                </div>
              </div>
            </div>
          )}
        </Card>
      </div>
    </Layout>
  );
};
