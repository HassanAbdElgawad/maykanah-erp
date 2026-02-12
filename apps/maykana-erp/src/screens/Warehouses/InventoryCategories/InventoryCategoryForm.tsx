import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { buttonClasses } from '@/styles';

export const InventoryCategoryForm = (): JSX.Element => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = !!id;

  const [isSectionOpen, setIsSectionOpen] = useState(true);
  const [formData, setFormData] = useState({
    code: isEditMode ? 'CAT-001' : '',
    nameAr: isEditMode ? 'مواد خام' : '',
    nameEn: isEditMode ? 'Raw Materials' : '',
  });

  const handleSubmit = () => {
    console.log('Form data:', formData);
    navigate('/warehouses/inventory-categories');
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <Card className="bg-white rounded-lg border border-gray-200">
          <div className="flex items-center justify-between p-4">
            <Button
              variant="ghost"
              onClick={() => navigate('/warehouses/inventory-categories')}
              className="flex items-center gap-2 text-[#093738] hover:bg-gray-100"
            >
              <ArrowRight className="w-5 h-5" />
              <span className="text-base font-medium">
                {isEditMode ? 'تعديل تصنيف مخزون' : 'إضافة تصنيف مخزون جديد'}
              </span>
            </Button>
            <Button onClick={handleSubmit} className={buttonClasses.primary}>
              حفظ
            </Button>
          </div>
        </Card>

        {/* Form Section */}
        <Card className="bg-white rounded-lg border border-gray-200">
          <div
            className="flex items-center justify-between p-4 bg-[#F1F5F980] cursor-pointer"
            onClick={() => setIsSectionOpen(!isSectionOpen)}
          >
            <h2 className="text-lg font-semibold text-[#093738]">بيانات تصنيفات المخزون</h2>
            {isSectionOpen ? (
              <ChevronUp className="w-5 h-5 text-gray-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-600" />
            )}
          </div>

          {isSectionOpen && (
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* اسم التصنيف بالعربي */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#093738]">
                    اسم التصنيف بالعربي
                  </label>
                  <Input
                    value={formData.nameAr}
                    onChange={(e) => setFormData({ ...formData, nameAr: e.target.value })}
                    placeholder="اسم التصنيف بالعربي"
                    className="bg-white border-[#e2e2e2] h-[45px]"
                  />
                </div>

                {/* اسم التصنيف بالإنجليزي */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#093738]">
                    اسم التصنيف بالإنجليزي
                  </label>
                  <Input
                    value={formData.nameEn}
                    onChange={(e) => setFormData({ ...formData, nameEn: e.target.value })}
                    placeholder="اسم التصنيف بالإنجليزي"
                    className="bg-white border-[#e2e2e2] h-[45px]"
                  />
                </div>

                {/* الرقم الرمزي للتصنيف */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#093738]">
                    الرقم الرمزي للتصنيف
                  </label>
                  <Input
                    value={formData.code}
                    onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                    placeholder="الرقم الرمزي للتصنيف"
                    className="bg-white border-[#e2e2e2] h-[45px]"
                    readOnly={isEditMode}
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
