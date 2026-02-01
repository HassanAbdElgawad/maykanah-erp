import { useState } from 'react';
import { FileText, TrendingDown, DollarSign, Package, Settings } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { Layout } from '../../../components/Layout';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';

interface StepConfig {
  id: number;
  icon: React.ElementType;
  label: string;
  labelEn: string;
}

const steps: StepConfig[] = [
  { id: 1, icon: FileText, label: 'معلومات أساسية', labelEn: 'Basic Info' },
  { id: 2, icon: TrendingDown, label: 'الإهلاك', labelEn: 'Depreciation' },
  { id: 3, icon: DollarSign, label: 'المعلومات المالية', labelEn: 'Financial Info' },
  { id: 4, icon: Package, label: 'نوع الأصل', labelEn: 'Asset Type' },
  { id: 5, icon: Settings, label: 'إدارة الإستراتيجية', labelEn: 'Strategy Management' },
];

export function AddAssetForm() {
  const { dir } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    // Step 1: Basic Information
    category: '',
    assetCode: '',
    assetCodePrefix: '2025-PL-001',
    location: '',
    description: '',
    currentPosition: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleDefaultAccount = () => {
    // Handle default account logic
    console.log('Setting default account...');
  };

  return (
    <Layout>
      <div
        className={`min-h-screen bg-gray-50 ${
          dir === 'rtl' ? "font-['IBM_Plex_Sans_Arabic']" : ''
        }`}
        dir={dir}
      >
        {/* Step Indicators */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              {steps.map((step) => {
                const Icon = step.icon;
                const isActive = currentStep === step.id;
                const isCompleted = currentStep > step.id;

                return (
                  <div
                    key={step.id}
                    className="flex flex-col items-center flex-1"
                    style={{ minWidth: '120px' }}
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-colors ${
                        isActive
                          ? 'bg-[#11383f] text-white'
                          : isCompleted
                          ? 'bg-green-100 text-green-600'
                          : 'bg-gray-100 text-gray-400'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div
                      className={`text-xs text-center ${
                        isActive ? 'text-[#11383f] font-semibold' : 'text-gray-500'
                      }`}
                    >
                      {dir === 'rtl' ? step.label : step.labelEn}
                    </div>
                    <div
                      className={`text-[10px] text-center mt-0.5 ${
                        isActive ? 'text-gray-600' : 'text-gray-400'
                      }`}
                    >
                      {dir === 'rtl' ? step.labelEn : step.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            {currentStep === 1 && (
              <div className="space-y-6">
                {/* Category */}
                <div>
                  <Label htmlFor="category" className="text-right block mb-2">
                    الفئة
                  </Label>
                  <select
                    id="category"
                    value={formData.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-right text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
                    dir={dir}
                  >
                    <option value="">اختر الفئة</option>
                    <option value="category1">فئة 1</option>
                    <option value="category2">فئة 2</option>
                    <option value="category3">فئة 3</option>
                  </select>
                </div>

                {/* Asset Code - Two fields side by side */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-right">
                    <Label htmlFor="assetCode" className="text-right block mb-2">
                      كود الأصل
                    </Label>
                    <Input
                      id="assetCode"
                      value={formData.assetCode}
                      onChange={(e) => handleInputChange('assetCode', e.target.value)}
                      className="w-full"
                      dir={dir}
                    />
                  </div>
                  <div className="text-right">
                    <Label htmlFor="assetCodePrefix" className="text-right block mb-2">
                      كود الأصل
                    </Label>
                    <Input
                      id="assetCodePrefix"
                      value={formData.assetCodePrefix}
                      onChange={(e) => handleInputChange('assetCodePrefix', e.target.value)}
                      className="w-full"
                      dir={dir}
                      disabled
                    />
                  </div>
                </div>

                {/* Location */}
                <div>
                  <Label htmlFor="location" className="text-right block mb-2">
                    الموقع
                  </Label>
                  <select
                    id="location"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-right text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
                    dir={dir}
                  >
                    <option value="">اختر الموقع</option>
                    <option value="location1">موقع 1</option>
                    <option value="location2">موقع 2</option>
                    <option value="location3">موقع 3</option>
                  </select>
                </div>

                {/* Description/Department */}
                <div>
                  <Label htmlFor="description" className="text-right block mb-2">
                    الوصف/القسم
                  </Label>
                  <select
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-right text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
                    dir={dir}
                  >
                    <option value="">اختر الوصف/القسم</option>
                    <option value="dept1">قسم 1</option>
                    <option value="dept2">قسم 2</option>
                    <option value="dept3">قسم 3</option>
                  </select>
                </div>

                {/* Current Position */}
                <div>
                  <Label htmlFor="currentPosition" className="text-right block mb-2">
                    الموقف الحالي
                  </Label>
                  <select
                    id="currentPosition"
                    value={formData.currentPosition}
                    onChange={(e) => handleInputChange('currentPosition', e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-right text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
                    dir={dir}
                  >
                    <option value="">اختر الموقف الحالي</option>
                    <option value="position1">موقف 1</option>
                    <option value="position2">موقف 2</option>
                    <option value="position3">موقف 3</option>
                  </select>
                </div>

                {/* Default Account Button */}
                <div className="flex justify-center pt-4">
                  <Button
                    onClick={handleDefaultAccount}
                    className="px-8 py-2.5 bg-gradient-to-r from-blue-400 to-green-400 hover:from-blue-500 hover:to-green-500 text-white rounded-lg font-medium transition-all"
                  >
                    الحساب الافتراضي
                  </Button>
                </div>
              </div>
            )}

            {/* Placeholder for other steps */}
            {currentStep > 1 && (
              <div className="text-center py-12 text-gray-500">
                محتوى الخطوة {currentStep} - سيتم إضافته لاحقاً
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-6">
            <Button
              onClick={handleNext}
              disabled={currentStep === steps.length}
              className="px-8 py-2.5 bg-[#11383f] hover:bg-[#0f2f35] text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              التالي
            </Button>

            {currentStep > 1 && (
              <Button
                onClick={handlePrevious}
                className="px-8 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-medium transition-colors"
              >
                السابق
              </Button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
