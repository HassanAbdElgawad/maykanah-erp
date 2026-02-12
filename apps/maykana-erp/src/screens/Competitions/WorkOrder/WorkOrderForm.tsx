import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';
import { buttonClasses } from '@/styles';

export function WorkOrderForm() {
  const navigate = useNavigate();
  const { t, dir } = useLanguage();

  // Collapsible sections state
  const [sections, setSections] = useState({
    basicInfo: true,
    itemsInfo: true,
    filesInfo: true,
  });

  // Form data
  const [formData, setFormData] = useState({
    // بيانات أمر العمل الأساسية
    workOrderNumber: '',
    workOrderDate: '',
    agreementType: '',
    agreement: '',
    startDate: '',
    endDate: '',
    executionLocation: '',
    executionLocationArabic: '',
    executionLocationEnglish: '',
    project: '',
    description: '',
    termsAndConditions: '',
    
    // بيانات البنود
    itemName: '',
    itemNumber: '',
    quantity: '',
    unit: '',
    unitPrice: '',
    discountPercentage: '',
    taxPercentage: '',
    taxValue: '',
    total: '',
    net: '',
    
    // بيانات الملفات
    attachmentName: '',
    attachmentDate: '',
    notificationNumber: '',
  });

  const toggleSection = (section: keyof typeof sections) => {
    setSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    navigate('/competitions/work-order');
  };

  const handleCancel = () => {
    navigate('/competitions/work-order');
  };

  return (
    <Layout>
      <div
        className={`flex flex-col gap-4 ${dir === 'rtl' ? "font-['IBM_Plex_Sans_Arabic']" : ''}`}
        dir={dir}
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-[#e2e2e2]">
          <div className="flex items-center gap-3">
            <div className="relative w-[42px] h-[42px] bg-[#f0f4f7] rounded-lg">
              <button
                onClick={() => navigate('/competitions/work-order')}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <ArrowRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <h1 className="text-xl font-medium text-gray-900">
              {t('competitions.work_order.title')}
            </h1>
          </div>

          <div className="flex gap-2">
            <Button
              onClick={handleCancel}
              variant="outline"
              className={buttonClasses.outline}
            >
              {t('common.cancel')}
            </Button>
            <Button
              onClick={handleSubmit}
              className={buttonClasses.primary}
            >
              {t('common.save')}
            </Button>
          </div>
        </div>

        {/* بيانات أمر العمل الأساسية */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <button
            onClick={() => toggleSection('basicInfo')}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-lg font-medium text-gray-900">
              {t('competitions.work_order.basic_info')}
            </h2>
            {sections.basicInfo ? (
              <ChevronUp className="w-5 h-5 text-gray-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-600" />
            )}
          </button>

          {sections.basicInfo && (
            <div className="p-6 border-t border-[#e2e2e2]">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.work_order.work_order_number')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('competitions.work_order.work_order_number')}
                    value={formData.workOrderNumber}
                    onChange={(e) => handleInputChange('workOrderNumber', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.work_order.agreement_type')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('competitions.work_order.agreement_type')}
                    value={formData.agreementType}
                    onChange={(e) => handleInputChange('agreementType', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.work_order.work_order_date')}
                  </Label>
                  <Input
                    type="date"
                    value={formData.workOrderDate}
                    onChange={(e) => handleInputChange('workOrderDate', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.work_order.agreement')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('competitions.work_order.agreement')}
                    value={formData.agreement}
                    onChange={(e) => handleInputChange('agreement', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.work_order.start_date')}
                  </Label>
                  <Input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => handleInputChange('startDate', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.work_order.project')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('competitions.work_order.project')}
                    value={formData.project}
                    onChange={(e) => handleInputChange('project', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.work_order.end_date')}
                  </Label>
                  <Input
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => handleInputChange('endDate', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.work_order.execution_location')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('competitions.work_order.execution_location')}
                    value={formData.executionLocation}
                    onChange={(e) => handleInputChange('executionLocation', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5 col-span-2">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.work_order.description')}
                  </Label>
                  <textarea
                    placeholder={t('competitions.work_order.description')}
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    className="w-full min-h-[100px] px-3 py-2 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.work_order.execution_location_arabic')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('competitions.work_order.execution_location_arabic')}
                    value={formData.executionLocationArabic}
                    onChange={(e) => handleInputChange('executionLocationArabic', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.work_order.execution_location_english')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('competitions.work_order.execution_location_english')}
                    value={formData.executionLocationEnglish}
                    onChange={(e) => handleInputChange('executionLocationEnglish', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5 col-span-2">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.work_order.terms_and_conditions')}
                  </Label>
                  <textarea
                    placeholder={t('competitions.work_order.terms_and_conditions')}
                    value={formData.termsAndConditions}
                    onChange={(e) => handleInputChange('termsAndConditions', e.target.value)}
                    className="w-full min-h-[100px] px-3 py-2 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* بيانات البنود */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <button
            onClick={() => toggleSection('itemsInfo')}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-lg font-medium text-gray-900">
              {t('competitions.work_order.items_info')}
            </h2>
            {sections.itemsInfo ? (
              <ChevronUp className="w-5 h-5 text-gray-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-600" />
            )}
          </button>

          {sections.itemsInfo && (
            <div className="p-6 border-t border-[#e2e2e2]">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.work_order.item_name')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('competitions.work_order.item_name')}
                    value={formData.itemName}
                    onChange={(e) => handleInputChange('itemName', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.work_order.quantity')}
                  </Label>
                  <Input
                    type="number"
                    placeholder={t('competitions.work_order.quantity')}
                    value={formData.quantity}
                    onChange={(e) => handleInputChange('quantity', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.work_order.item_number')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('competitions.work_order.item_number')}
                    value={formData.itemNumber}
                    onChange={(e) => handleInputChange('itemNumber', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.work_order.unit')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('competitions.work_order.unit')}
                    value={formData.unit}
                    onChange={(e) => handleInputChange('unit', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.work_order.unit_price')}
                  </Label>
                  <Input
                    type="number"
                    placeholder={t('competitions.work_order.unit_price')}
                    value={formData.unitPrice}
                    onChange={(e) => handleInputChange('unitPrice', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.work_order.total')}
                  </Label>
                  <Input
                    type="number"
                    placeholder={t('competitions.work_order.total')}
                    value={formData.total}
                    onChange={(e) => handleInputChange('total', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.work_order.discount_percentage')}
                  </Label>
                  <Input
                    type="number"
                    placeholder={t('competitions.work_order.discount_percentage')}
                    value={formData.discountPercentage}
                    onChange={(e) => handleInputChange('discountPercentage', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.work_order.tax_percentage')}
                  </Label>
                  <Input
                    type="number"
                    placeholder={t('competitions.work_order.tax_percentage')}
                    value={formData.taxPercentage}
                    onChange={(e) => handleInputChange('taxPercentage', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.work_order.tax_value')}
                  </Label>
                  <Input
                    type="number"
                    placeholder={t('competitions.work_order.tax_value')}
                    value={formData.taxValue}
                    onChange={(e) => handleInputChange('taxValue', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.work_order.net')}
                  </Label>
                  <Input
                    type="number"
                    placeholder={t('competitions.work_order.net')}
                    value={formData.net}
                    onChange={(e) => handleInputChange('net', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* بيانات الملفات */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <button
            onClick={() => toggleSection('filesInfo')}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-lg font-medium text-gray-900">
              {t('competitions.work_order.files_info')}
            </h2>
            {sections.filesInfo ? (
              <ChevronUp className="w-5 h-5 text-gray-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-600" />
            )}
          </button>

          {sections.filesInfo && (
            <div className="p-6 border-t border-[#e2e2e2]">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.work_order.attachment_name')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('competitions.work_order.attachment_name')}
                    value={formData.attachmentName}
                    onChange={(e) => handleInputChange('attachmentName', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.work_order.notification_number')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('competitions.work_order.notification_number')}
                    value={formData.notificationNumber}
                    onChange={(e) => handleInputChange('notificationNumber', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.work_order.attachment_date')}
                  </Label>
                  <Input
                    type="date"
                    value={formData.attachmentDate}
                    onChange={(e) => handleInputChange('attachmentDate', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
