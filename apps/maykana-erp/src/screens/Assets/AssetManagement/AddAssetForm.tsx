import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Upload, Trash2, Eye, Paperclip } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { TogglerWithLabel } from '@/components/ui/TogglerWithLabel';
import translations from '@/data/translations.json';
import {
  getAddAssetFormSteps,
  getAddAssetFormDepreciationTableData,
  getAddAssetFormInitialUploadedFiles,
} from '@/data/assets/add-asset-form.data';

export function AddAssetForm() {
  const steps = getAddAssetFormSteps();
  const { dir, language } = useLanguage();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = (translations as any)[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  const [formData, setFormData] = useState({
    // Step 1: Basic Information
    category: '',
    assetCode: 'AST-2026-001', // Auto-generated code
    department: '',
    costCenter: '',
    location: '',
    currentEmployee: '',
    // Step 2: Asset Type
    isAssetAvailable: true,
    purchaseInvoice: '',
    itemSelection: '',
    priceAuto: '15,000 ريال', // Auto-generated price
    supplierAuto: 'شركة التقنية المتقدمة', // Auto-generated supplier
    // Step 3: Depreciation
    usageStartDate: '',
    depreciationMethodStep3: '',
    assetAgeYears: '',
    annualDepreciationValueAuto: 'ر.س 3,264', // Auto-calculated
    numberOfPayments: '36 دفعة', // Auto-calculated
    willCompleteFully: true,
    // Step 4: Financial Information
    originalValue: '',
    currentValue: '',
    purchaseDate: '',
    supplierOptional: '',
    assetAccount: '',
    accumulatedDepreciationAccount: '',
    // valueAfterDepreciation: 'ر. 8,984', // Auto-calculated
    valueAfterDepreciation: '8,984', // Auto-calculated
  });

  const [depreciationTableData] = useState(() => getAddAssetFormDepreciationTableData());
  const [selectedMonths, setSelectedMonths] = useState(6);
  const [uploadedFiles, setUploadedFiles] = useState(() => getAddAssetFormInitialUploadedFiles());

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleToggle = () => {
    setFormData((prev) => ({ ...prev, isAssetAvailable: !prev.isAssetAvailable }));
  };

  const handleToggleCompleteFully = () => {
    setFormData((prev) => ({ ...prev, willCompleteFully: !prev.willCompleteFully }));
  };

  const handleRecalculateDepreciation = () => {
    console.log('Recalculating depreciation...');
    // TODO: Implement recalculation logic
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newFiles = Array.from(files).map((file, index) => ({
        id: uploadedFiles.length + index + 1,
        name: file.name,
        type: file.type.split('/')[1].toUpperCase() || 'FILE',
        size: `${(file.size / (1024 * 1024)).toFixed(1)} ميجابايت`,
        date: new Date().toLocaleString('ar-SA', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
      }));
      setUploadedFiles([...uploadedFiles, ...newFiles]);
    }
  };

  const handleDeleteFile = (id: number) => {
    setUploadedFiles(uploadedFiles.filter((file) => file.id !== id));
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
      // When moving to next step, the previous step is now 100% complete
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSaveAsDraft = () => {
    // TODO: Implement save as draft functionality
    console.log('Saving as draft...', formData);
  };

  // Calculate step progress based on filled fields
  const getStepProgress = (step: number): number => {
    if (step === 1) {
      // Step 1 has 5 fields (excluding assetCode which is disabled)
      const fields: (keyof typeof formData)[] = [
        'category',
        'department',
        'costCenter',
        'location',
        'currentEmployee',
      ];
      const filledFields = fields.filter((field) => formData[field] !== '').length;
      // Calculate up to 85% (15% reserved for clicking "Next")
      return Math.min((filledFields / fields.length) * 85, 85);
    }
    if (step === 2) {
      // Step 2 has 2 fields (excluding assetCode and priceAuto which are disabled)
      const fields: (keyof typeof formData)[] = ['purchaseInvoice', 'itemSelection'];
      const filledFields = fields.filter((field) => formData[field] !== '').length;
      // Calculate up to 85% (15% reserved for clicking "Next")
      return Math.min((filledFields / fields.length) * 85, 85);
    }
    if (step === 3) {
      // Step 3 has 3 fields for depreciation (excluding 3 disabled/auto fields)
      const fields: (keyof typeof formData)[] = [
        'usageStartDate',
        'depreciationMethodStep3',
        'assetAgeYears',
      ];
      const filledFields = fields.filter((field) => formData[field] !== '').length;
      // Calculate up to 85% (15% reserved for clicking "Next")
      return Math.min((filledFields / fields.length) * 85, 85);
    }
    if (step === 4) {
      // Step 4 has 6 fields for financial information
      const fields: (keyof typeof formData)[] = [
        'originalValue',
        'currentValue',
        'purchaseDate',
        'supplierOptional',
        'assetAccount',
        'accumulatedDepreciationAccount',
      ];
      const filledFields = fields.filter((field) => formData[field] !== '').length;
      // Calculate up to 85% (15% reserved for clicking "Next")
      return Math.min((filledFields / fields.length) * 85, 85);
    }
    // Add other steps here when implemented
    return 0;
  };

  return (
    <Layout>
      <div
        className={`flex flex-col gap-4 min-h-[calc(100vh-120px)] ${dir === 'rtl' ? "font-['IBM_Plex_Sans_Arabic']" : ''}`}
        dir={dir}
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-[#e2e2e2]">
          <div className="flex items-center gap-3">
            <div className="relative w-[42px] h-[42px] bg-[#f0f4f7] rounded-lg">
              <button
                onClick={() => navigate('/assets/asset-management')}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <ArrowRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <h1 className="text-xl font-medium text-gray-900">
              {t('assets.add_asset_form.title')}
            </h1>
          </div>
        </div>

        {/* Step Indicators */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <div className="p-6">
            <div className="flex items-start justify-between relative">
              {/* Connecting Lines Between Icons */}
              <div
                className="absolute top-6 left-0 right-0 flex items-center"
                style={{ zIndex: 0, paddingLeft: '10%', paddingRight: '10%' }}
              >
                {steps.slice(0, -1).map((_, index) => {
                  const isCompleted = currentStep > index + 1;
                  const isActive = currentStep === index + 1;
                  const gradientDirection = dir === 'rtl' ? 'to left' : 'to right';

                  // Calculate progress percentage for current step
                  const stepProgress = isActive ? getStepProgress(currentStep) : 0;
                  const gradientPercentage = isCompleted ? 100 : isActive ? stepProgress : 0;

                  return (
                    <div
                      key={index}
                      className="flex-1 h-1 mx-2 transition-all"
                      style={{
                        background: isCompleted
                          ? '#11383f'
                          : isActive && gradientPercentage > 0
                            ? `linear-gradient(${gradientDirection}, #11383f ${gradientPercentage}%, #d1d5db ${gradientPercentage}%)`
                            : '#d1d5db',
                      }}
                    />
                  );
                })}
              </div>

              {steps.map((step) => {
                const Icon = step.icon;
                const isActive = currentStep === step.id;
                const isCompleted = currentStep > step.id;

                return (
                  <div
                    key={step.id}
                    className="flex flex-col items-center flex-1 relative"
                    style={{ minWidth: '120px', zIndex: 1 }}
                  >
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-colors ${
                        isActive
                          ? 'bg-[#11383f] text-white'
                          : isCompleted
                            ? 'bg-[#11383f] text-white'
                            : 'bg-gray-100 text-gray-400'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Main Title */}
                    <div
                      className={`text-sm text-center font-medium ${
                        isActive ? 'text-[#11383f]' : 'text-gray-700'
                      }`}
                    >
                      {dir === 'rtl' ? step.label : step.labelEn}
                    </div>

                    {/* Subtitle */}
                    <div className="text-[10px] text-center mt-1 text-gray-400">
                      {dir === 'rtl' ? 'إدارة الإستراتيجية' : 'Strategy Management'}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          {/* <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
            <h2 className="text-lg font-medium text-gray-900">{t('assets.add_asset_form.step1_title')}</h2>
            <ChevronUp className="w-5 h-5 text-gray-600" />
          </button> */}

          <div className="p-6  border-[#e2e2e2]">
            <div className="flex gap-12">
              {currentStep === 1 && (
                <div className="flex-1">
                  <div className="grid grid-cols-3 gap-6">
                    {/* First Row - Right to Left */}
                    {/* كود الأصل - Position 1 - DISABLED */}
                    <div className="flex flex-col gap-1.5">
                      <Label
                        htmlFor="assetCode"
                        className="text-sm font-medium text-gray-700 text-right"
                      >
                        {t('assets.add_asset_form.asset_code')}
                      </Label>
                      <Input
                        id="assetCode"
                        value={formData.assetCode}
                        disabled
                        className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg bg-gray-100 text-gray-500 text-right cursor-not-allowed"
                        dir={dir}
                      />
                    </div>

                    {/* الفئة - Position 2 */}
                    <div className="flex flex-col gap-1.5">
                      <Label
                        htmlFor="category"
                        className="text-sm font-medium text-gray-700 text-right"
                      >
                        {t('assets.add_asset_form.category')}
                      </Label>
                      <select
                        id="category"
                        value={formData.category}
                        onChange={(e) => handleInputChange('category', e.target.value)}
                        className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg bg-white text-gray-900 text-right"
                        dir={dir}
                      >
                        <option value="">{t('assets.add_asset_form.select_category')}</option>
                        <option value="category1">{t('assets.add_asset_form.category_1')}</option>
                        <option value="category2">{t('assets.add_asset_form.category_2')}</option>
                        <option value="category3">{t('assets.add_asset_form.category_3')}</option>
                      </select>
                    </div>

                    {/* الوحدة/القسم - Position 3 */}
                    <div className="flex flex-col gap-1.5">
                      <Label
                        htmlFor="department"
                        className="text-sm font-medium text-gray-700 text-right"
                      >
                        {t('assets.add_asset_form.department')}
                      </Label>
                      <select
                        id="department"
                        value={formData.department}
                        onChange={(e) => handleInputChange('department', e.target.value)}
                        className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg bg-white text-gray-900 text-right"
                        dir={dir}
                      >
                        <option value="">{t('assets.add_asset_form.select_department')}</option>
                        <option value="dept1">{t('assets.add_asset_form.department_1')}</option>
                        <option value="dept2">{t('assets.add_asset_form.department_2')}</option>
                        <option value="dept3">{t('assets.add_asset_form.department_3')}</option>
                      </select>
                    </div>

                    {/* Second Row - Right to Left */}
                    {/* مركز التكلفة - Position 4 */}
                    <div className="flex flex-col gap-1.5">
                      <Label
                        htmlFor="costCenter"
                        className="text-sm font-medium text-gray-700 text-right"
                      >
                        {t('assets.add_asset_form.cost_center')}
                      </Label>
                      <select
                        id="costCenter"
                        value={formData.costCenter}
                        onChange={(e) => handleInputChange('costCenter', e.target.value)}
                        className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg bg-white text-gray-900 text-right"
                        dir={dir}
                      >
                        <option value="">{t('assets.add_asset_form.select_cost_center')}</option>
                        <option value="center1">{t('assets.add_asset_form.cost_center_1')}</option>
                        <option value="center2">{t('assets.add_asset_form.cost_center_2')}</option>
                        <option value="center3">{t('assets.add_asset_form.cost_center_3')}</option>
                      </select>
                    </div>

                    {/* الموقع - Position 5 */}
                    <div className="flex flex-col gap-1.5">
                      <Label
                        htmlFor="location"
                        className="text-sm font-medium text-gray-700 text-right"
                      >
                        {t('assets.add_asset_form.location')}
                      </Label>
                      <select
                        id="location"
                        value={formData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg bg-white text-gray-900 text-right"
                        dir={dir}
                      >
                        <option value="">{t('assets.add_asset_form.select_location')}</option>
                        <option value="location1">{t('assets.add_asset_form.location_1')}</option>
                        <option value="location2">{t('assets.add_asset_form.location_2')}</option>
                        <option value="location3">{t('assets.add_asset_form.location_3')}</option>
                      </select>
                    </div>

                    {/* الموظف الحالي - Position 6 */}
                    <div className="flex flex-col gap-1.5">
                      <Label
                        htmlFor="currentEmployee"
                        className="text-sm font-medium text-gray-700 text-right"
                      >
                        {t('assets.add_asset_form.current_employee')}
                      </Label>
                      <select
                        id="currentEmployee"
                        value={formData.currentEmployee}
                        onChange={(e) => handleInputChange('currentEmployee', e.target.value)}
                        className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg bg-white text-gray-900 text-right"
                        dir={dir}
                      >
                        <option value="">
                          {t('assets.add_asset_form.select_current_employee')}
                        </option>
                        <option value="emp1">{t('assets.add_asset_form.employee_1')}</option>
                        <option value="emp2">{t('assets.add_asset_form.employee_2')}</option>
                        <option value="emp3">{t('assets.add_asset_form.employee_3')}</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="flex-1">
                  <div className="grid grid-cols-3 gap-6">
                    {/* First Row - Right to Left */}
                    {/* هل الأصل موجود؟ - Position 1 */}
                    <div className="flex flex-col gap-1.5">
                      <Label
                        htmlFor="isAssetAvailable"
                        className="text-sm font-medium text-gray-700 text-right"
                      >
                        {t('assets.add_asset_form.is_asset_available')}
                      </Label>
                      <TogglerWithLabel
                        isActive={formData.isAssetAvailable}
                        onToggle={handleToggle}
                        activeLabel={t('assets.add_asset_form.available')}
                        inactiveLabel={t('assets.add_asset_form.not_available')}
                        size="md"
                        minWidth="min-w-full"
                      />
                    </div>

                    {/* اختر فاتورة الشراء - Position 2 */}
                    <div className="flex flex-col gap-1.5">
                      <Label
                        htmlFor="purchaseInvoice"
                        className="text-sm font-medium text-gray-700 text-right"
                      >
                        {t('assets.add_asset_form.purchase_invoice')}
                      </Label>
                      <select
                        id="purchaseInvoice"
                        value={formData.purchaseInvoice}
                        onChange={(e) => handleInputChange('purchaseInvoice', e.target.value)}
                        className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg bg-white text-gray-900 text-right"
                        dir={dir}
                      >
                        <option value="">
                          {t('assets.add_asset_form.select_purchase_invoice')}
                        </option>
                        <option value="invoice1">{t('assets.add_asset_form.invoice_1')}</option>
                        <option value="invoice2">{t('assets.add_asset_form.invoice_2')}</option>
                        <option value="invoice3">{t('assets.add_asset_form.invoice_3')}</option>
                      </select>
                    </div>

                    {/* اختيار البند - Position 3 */}
                    <div className="flex flex-col gap-1.5">
                      <Label
                        htmlFor="itemSelection"
                        className="text-sm font-medium text-gray-700 text-right"
                      >
                        {t('assets.add_asset_form.item_selection')}
                      </Label>
                      <select
                        id="itemSelection"
                        value={formData.itemSelection}
                        onChange={(e) => handleInputChange('itemSelection', e.target.value)}
                        className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg bg-white text-gray-900 text-right"
                        dir={dir}
                      >
                        <option value="">{t('assets.add_asset_form.select_item')}</option>
                        <option value="item1">{t('assets.add_asset_form.item_1')}</option>
                        <option value="item2">{t('assets.add_asset_form.item_2')}</option>
                        <option value="item3">{t('assets.add_asset_form.item_3')}</option>
                      </select>
                    </div>

                    {/* Second Row - Right to Left */}
                    {/* السعر (يظهر تلقائياً) - Position 4 - DISABLED */}
                    <div className="flex flex-col gap-1.5">
                      <Label
                        htmlFor="priceAuto"
                        className="text-sm font-medium text-gray-700 text-right"
                      >
                        {t('assets.add_asset_form.price_auto')}
                      </Label>
                      <Input
                        id="priceAuto"
                        value={formData.priceAuto}
                        disabled
                        className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg bg-gray-100 text-gray-500 text-right cursor-not-allowed"
                        dir={dir}
                      />
                    </div>

                    {/* المورد (يظهر تلقائياً) - Position 5 - DISABLED */}
                    <div className="flex flex-col gap-1.5">
                      <Label
                        htmlFor="supplierAuto"
                        className="text-sm font-medium text-gray-700 text-right"
                      >
                        {t('assets.add_asset_form.supplier_auto')}
                      </Label>
                      <Input
                        id="supplierAuto"
                        value={formData.supplierAuto}
                        disabled
                        className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg bg-gray-100 text-gray-500 text-right cursor-not-allowed"
                        dir={dir}
                      />
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="flex-1 flex flex-col gap-6">
                  {/* Fields Section */}
                  <div className="grid grid-cols-3 gap-6">
                    {/* First Row */}
                    {/* يبدأ الاستخدام في - Position 1 */}
                    <div className="flex flex-col gap-1.5">
                      <Label
                        htmlFor="usageStartDate"
                        className="text-sm font-medium text-gray-700 text-right"
                      >
                        {t('assets.add_asset_form.usage_start_date')}
                      </Label>
                      <Input
                        id="usageStartDate"
                        type="date"
                        value={formData.usageStartDate}
                        onChange={(e) => handleInputChange('usageStartDate', e.target.value)}
                        className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg bg-white text-gray-900 text-right"
                        dir={dir}
                        placeholder={t('assets.add_asset_form.select_usage_start_date')}
                      />
                    </div>

                    {/* طريقة الإهلاك - Position 2 */}
                    <div className="flex flex-col gap-1.5">
                      <Label
                        htmlFor="depreciationMethodStep3"
                        className="text-sm font-medium text-gray-700 text-right"
                      >
                        {t('assets.add_asset_form.depreciation_method_step3')}
                      </Label>
                      <select
                        id="depreciationMethodStep3"
                        value={formData.depreciationMethodStep3}
                        onChange={(e) =>
                          handleInputChange('depreciationMethodStep3', e.target.value)
                        }
                        className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg bg-white text-gray-900 text-right"
                        dir={dir}
                      >
                        <option value="">
                          {t('assets.add_asset_form.select_depreciation_method_step3')}
                        </option>
                        <option value="straight_line">
                          {t('assets.add_asset_form.method_straight_line')}
                        </option>
                        <option value="declining_balance">
                          {t('assets.add_asset_form.method_declining_balance')}
                        </option>
                        <option value="units_production">
                          {t('assets.add_asset_form.method_units_of_production')}
                        </option>
                      </select>
                    </div>

                    {/* عمر الأصل (بالسنة) - Position 3 */}
                    <div className="flex flex-col gap-1.5">
                      <Label
                        htmlFor="assetAgeYears"
                        className="text-sm font-medium text-gray-700 text-right"
                      >
                        {t('assets.add_asset_form.asset_age_years')}
                      </Label>
                      <Input
                        id="assetAgeYears"
                        type="number"
                        value={formData.assetAgeYears}
                        onChange={(e) => handleInputChange('assetAgeYears', e.target.value)}
                        className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg bg-white text-gray-900 text-right"
                        dir={dir}
                        placeholder="0"
                      />
                    </div>

                    {/* Second Row */}
                    {/* قيمة الإهلاك السنوي (يحسب تلقائياً) - Position 4 - DISABLED */}
                    <div className="flex flex-col gap-1.5">
                      <Label
                        htmlFor="annualDepreciationValueAuto"
                        className="text-sm font-medium text-gray-700 text-right"
                      >
                        {t('assets.add_asset_form.annual_depreciation_value_auto')}
                      </Label>
                      <Input
                        id="annualDepreciationValueAuto"
                        value={formData.annualDepreciationValueAuto}
                        disabled
                        className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg bg-gray-100 text-gray-500 text-right cursor-not-allowed"
                        dir={dir}
                        placeholder={t('assets.add_asset_form.annual_depreciation_placeholder')}
                      />
                    </div>

                    {/* عدد الدفعات - Position 5 - DISABLED */}
                    <div className="flex flex-col gap-1.5">
                      <Label
                        htmlFor="numberOfPayments"
                        className="text-sm font-medium text-gray-700 text-right"
                      >
                        {t('assets.add_asset_form.number_of_payments')}
                      </Label>
                      <Input
                        id="numberOfPayments"
                        value={formData.numberOfPayments}
                        disabled
                        className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg bg-gray-100 text-gray-500 text-right cursor-not-allowed"
                        dir={dir}
                        placeholder={t('assets.add_asset_form.number_of_payments_placeholder')}
                      />
                    </div>

                    {/* هل سيتم إكماله بالكامل؟ - Position 6 - TogglerWithLabel */}
                    <div className="flex flex-col gap-1.5">
                      <Label
                        htmlFor="willCompleteFully"
                        className="text-sm font-medium text-gray-700 text-right"
                      >
                        {t('assets.add_asset_form.will_complete_fully')}
                      </Label>
                      <TogglerWithLabel
                        isActive={formData.willCompleteFully}
                        onToggle={handleToggleCompleteFully}
                        activeLabel={t('assets.add_asset_form.yes')}
                        inactiveLabel={t('assets.add_asset_form.no')}
                        size="md"
                        minWidth="min-w-full"
                      />
                    </div>
                  </div>

                  {/* Depreciation Table Section */}
                  <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden mt-4">
                    {/* Table Header */}
                    <div className="flex items-center justify-between p-4 border-b border-[#e2e2e2]">
                      <h3 className="text-base font-medium text-gray-900 flex items-center gap-2">
                        <Package className="w-5 h-5" />
                        {t('assets.add_asset_form.depreciation_table')}
                      </h3>
                      <div className="flex items-center gap-3">
                        <Button
                          onClick={handleRecalculateDepreciation}
                          className="px-6 h-[38px] bg-[#11383f] hover:bg-[#0f2f35] text-white rounded-lg font-medium text-sm transition-colors"
                        >
                          {t('assets.add_asset_form.recalculate_depreciation')}
                        </Button>
                        <select
                          value={selectedMonths}
                          onChange={(e) => setSelectedMonths(Number(e.target.value))}
                          className="h-[38px] px-3 border border-[#e2e2e2] rounded-lg bg-white text-gray-900 text-sm"
                          dir={dir}
                        >
                          <option value={3}>
                            {t('assets.add_asset_form.select_months').replace('{count}', '3')}
                          </option>
                          <option value={6}>
                            {t('assets.add_asset_form.select_months').replace('{count}', '6')}
                          </option>
                          <option value={12}>
                            {t('assets.add_asset_form.select_months').replace('{count}', '12')}
                          </option>
                        </select>
                      </div>
                    </div>

                    {/* Table Content */}
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-3 text-right text-xs font-medium text-gray-700">
                              {t('assets.add_asset_form.month')}
                            </th>
                            <th className="px-4 py-3 text-right text-xs font-medium text-gray-700">
                              {t('assets.add_asset_form.depreciation_value')}
                            </th>
                            <th className="px-4 py-3 text-right text-xs font-medium text-gray-700">
                              {t('assets.add_asset_form.book_value')}
                            </th>
                            <th className="px-4 py-3 text-right text-xs font-medium text-gray-700">
                              {t('assets.add_asset_form.accounting_entry')}
                            </th>
                            <th className="px-4 py-3 text-right text-xs font-medium text-gray-700">
                              {t('assets.add_asset_form.status_label')}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {depreciationTableData.map((row, index) => (
                            <tr key={index} className="border-t border-gray-100 hover:bg-gray-50">
                              <td className="px-4 py-3 text-right text-sm text-gray-900">
                                {row.month}
                              </td>
                              <td className="px-4 py-3 text-right text-sm text-gray-900">
                                {row.depValue}
                              </td>
                              <td className="px-4 py-3 text-right text-sm text-gray-900">
                                {row.bookValue}
                              </td>
                              <td className="px-4 py-3 text-right text-sm text-gray-900">
                                {row.entry}
                              </td>
                              <td className="px-4 py-3 text-right">
                                <span
                                  className={`inline-block px-3 py-1 rounded-md text-xs font-medium ${
                                    row.status === 'completed'
                                      ? 'bg-green-100 text-green-700'
                                      : 'bg-yellow-100 text-yellow-700'
                                  }`}
                                >
                                  {row.status === 'completed'
                                    ? t('assets.add_asset_form.completed')
                                    : t('assets.add_asset_form.pending_approval')}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="flex-1">
                  <div className="grid grid-cols-3 gap-6">
                    {/* First Row */}
                    {/* القيمة الأصلية - Position 1 */}
                    <div className="flex flex-col gap-1.5">
                      <Label
                        htmlFor="originalValue"
                        className="text-sm font-medium text-gray-700 text-right"
                      >
                        {t('assets.add_asset_form.original_value')}
                      </Label>
                      <select
                        id="originalValue"
                        value={formData.originalValue}
                        onChange={(e) => handleInputChange('originalValue', e.target.value)}
                        className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg bg-white text-gray-900 text-right"
                        dir={dir}
                      >
                        <option value="">{t('assets.add_asset_form.select_original_value')}</option>
                        <option value="15000">ر.س 15,000</option>
                        <option value="20000">ر.س 20,000</option>
                        <option value="25000">ر.س 25,000</option>
                      </select>
                    </div>

                    {/* القيمة الحالية - Position 2 */}
                    <div className="flex flex-col gap-1.5">
                      <Label
                        htmlFor="currentValue"
                        className="text-sm font-medium text-gray-700 text-right"
                      >
                        {t('assets.add_asset_form.current_value')}
                      </Label>
                      <select
                        id="currentValue"
                        value={formData.currentValue}
                        onChange={(e) => handleInputChange('currentValue', e.target.value)}
                        className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg bg-white text-gray-900 text-right"
                        dir={dir}
                      >
                        <option value="">{t('assets.add_asset_form.select_current_value')}</option>
                        <option value="12000">ر.س 12,000</option>
                        <option value="15000">ر.س 15,000</option>
                        <option value="18000">ر.س 18,000</option>
                      </select>
                    </div>

                    {/* تاريخ الشراء - Position 3 */}
                    <div className="flex flex-col gap-1.5">
                      <Label
                        htmlFor="purchaseDate"
                        className="text-sm font-medium text-gray-700 text-right"
                      >
                        {t('assets.add_asset_form.purchase_date')}
                      </Label>
                      <Input
                        id="purchaseDate"
                        type="date"
                        value={formData.purchaseDate}
                        onChange={(e) => handleInputChange('purchaseDate', e.target.value)}
                        className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg bg-white text-gray-900 text-right"
                        dir={dir}
                        placeholder={t('assets.add_asset_form.select_purchase_date')}
                      />
                    </div>

                    {/* Second Row */}
                    {/* المورد (إن وجد) - Position 4 */}
                    <div className="flex flex-col gap-1.5">
                      <Label
                        htmlFor="supplierOptional"
                        className="text-sm font-medium text-gray-700 text-right"
                      >
                        {t('assets.add_asset_form.supplier_optional')}
                      </Label>
                      <select
                        id="supplierOptional"
                        value={formData.supplierOptional}
                        onChange={(e) => handleInputChange('supplierOptional', e.target.value)}
                        className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg bg-white text-gray-900 text-right"
                        dir={dir}
                      >
                        <option value="">{t('assets.add_asset_form.select_supplier')}</option>
                        <option value="supplier1">{t('assets.add_asset_form.supplier_1')}</option>
                        <option value="supplier2">{t('assets.add_asset_form.supplier_2')}</option>
                        <option value="supplier3">{t('assets.add_asset_form.supplier_3')}</option>
                      </select>
                    </div>

                    {/* حساب الأصل - Position 5 */}
                    <div className="flex flex-col gap-1.5">
                      <Label
                        htmlFor="assetAccount"
                        className="text-sm font-medium text-gray-700 text-right"
                      >
                        {t('assets.add_asset_form.asset_account')}
                      </Label>
                      <select
                        id="assetAccount"
                        value={formData.assetAccount}
                        onChange={(e) => handleInputChange('assetAccount', e.target.value)}
                        className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg bg-white text-gray-900 text-right"
                        dir={dir}
                      >
                        <option value="">{t('assets.add_asset_form.select_asset_account')}</option>
                        <option value="account1">{t('assets.add_asset_form.account_1')}</option>
                        <option value="account2">{t('assets.add_asset_form.account_2')}</option>
                        <option value="account3">{t('assets.add_asset_form.account_3')}</option>
                      </select>
                    </div>

                    {/* حساب الإهلاك المتراكم - Position 6 */}
                    <div className="flex flex-col gap-1.5">
                      <Label
                        htmlFor="accumulatedDepreciationAccount"
                        className="text-sm font-medium text-gray-700 text-right"
                      >
                        {t('assets.add_asset_form.accumulated_depreciation_account')}
                      </Label>
                      <select
                        id="accumulatedDepreciationAccount"
                        value={formData.accumulatedDepreciationAccount}
                        onChange={(e) => handleInputChange('accumulatedDepreciationAccount', e.target.value)}
                        className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg bg-white text-gray-900 text-right"
                        dir={dir}
                      >
                        <option value="">{t('assets.add_asset_form.select_accumulated_depreciation_account')}</option>
                        <option value="depAccount1">{t('assets.add_asset_form.depreciation_account_1')}</option>
                        <option value="depAccount2">{t('assets.add_asset_form.depreciation_account_2')}</option>
                        <option value="depAccount3">{t('assets.add_asset_form.depreciation_account_3')}</option>
                      </select>
                    </div>

                    {/* Third Row */}
                    {/* القيمة بعد الاستهلاك - Position 7 */}
                    <div className="flex flex-col gap-1.5">
                      <Label
                        htmlFor="valueAfterDepreciation"
                        className="text-sm font-medium text-gray-700 text-right"
                      >
                        {t('assets.add_asset_form.value_after_depreciation')}
                      </Label>
                      <div className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg bg-gray-100 flex items-center justify-start gap-2">
                        <span className="text-xl font-bold ">{formData.valueAfterDepreciation}</span>
                        <img src="/images/currency/saudi-riyal.svg" alt="SAR" className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Attachments */}
              {currentStep === 5 && (
                <div className="flex-1 flex flex-col">
                  <div className="flex flex-col gap-6">
                    {/* Upload Zone */}
                    <div className="flex flex-col gap-3">
                      <label
                        htmlFor="file-upload"
                        className="w-full h-[180px] border-2 border-dashed border-[#e2e2e2] rounded-lg bg-white hover:bg-gray-50 cursor-pointer flex flex-col items-center justify-center gap-3 transition-colors"
                      >
                        <Upload className="w-12 h-12 text-gray-400" />
                        <span className="text-gray-500 text-base">
                          {t('assets.add_asset_form.drag_drop_upload')}
                        </span>
                      </label>
                      <input
                        id="file-upload"
                        type="file"
                        multiple
                        className="hidden"
                        onChange={handleFileUpload}
                      />
                    </div>

                    {/* Uploaded Files List */}
                    {uploadedFiles.length > 0 && (
                      <div className="flex flex-col gap-3">
                        <h3 className="text-base font-medium text-gray-700 text-right">
                          {t('assets.add_asset_form.uploaded_files')}
                        </h3>
                        <div className="flex flex-col gap-2">
                          {uploadedFiles.map((file) => (
                            <div
                              key={file.id}
                              className="w-full px-4 py-3 border border-[#e2e2e2] rounded-lg bg-white flex items-center justify-between"
                            >
                              <div className="flex items-center gap-3">
                                <Paperclip className="w-5 h-5 text-gray-400" />
                                <div className="flex flex-col gap-1 text-right">
                                  <span className="text-base font-medium text-gray-800">
                                    {file.name}
                                  </span>
                                  <div className="flex items-center gap-2 text-xs text-gray-400">
                                    <span>{file.size}</span>
                                    <span>|</span>
                                    <span>{file.date}</span>
                                    <span>|</span>
                                    <span>{file.type}</span>
                                  </div>
                                </div>
                              </div>

                              <div className="flex gap-2">
                                <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 transition-colors">
                                  <Eye className="w-4 h-4 text-gray-500" />
                                </button>
                                <button
                                  onClick={() => handleDeleteFile(file.id)}
                                  className="w-8 h-8 flex items-center justify-center rounded hover:bg-red-50 transition-colors"
                                >
                                  <Trash2 className="w-4 h-4 text-red-500" />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Placeholder for other steps */}
              {currentStep > 5 && (
                <div className="flex-1 text-center py-12 text-gray-500">
                  {t('assets.add_asset_form.step_placeholder').replace(
                    '{step}',
                    currentStep.toString()
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Navigation Buttons - Always at Bottom */}
        <div className="flex-grow"></div>
        <div className="flex flex-row-reverse justify-between items-center pb-6 mt-4">
          <div className="flex gap-3">
            {currentStep > 1 && (
              <Button
                onClick={handleSaveAsDraft}
                className="px-10 h-[42px] bg-white border border-[#e2e2e2] hover:bg-gray-50 text-gray-700 rounded-lg font-medium transition-colors"
              >
                {t('assets.add_asset_form.save_as_draft')}
              </Button>
            )}
            <Button
              onClick={handleNext}
              disabled={currentStep === steps.length}
              className="px-10 h-[42px] bg-[#11383f] hover:bg-[#0f2f35] text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {currentStep === 5 ? t('assets.add_asset_form.submit_request') : t('assets.add_asset_form.next')}
            </Button>
          </div>

          {currentStep > 1 && (
            <Button
              onClick={handlePrevious}
              className="px-10 h-[42px] bg-white border border-[#e2e2e2] hover:bg-gray-50 text-gray-700 rounded-lg font-medium transition-colors"
            >
              {t('assets.add_asset_form.previous')}
            </Button>
          )}
        </div>
      </div>
    </Layout>
  );
}
