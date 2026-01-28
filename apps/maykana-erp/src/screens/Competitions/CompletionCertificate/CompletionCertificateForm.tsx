import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Layout } from '../../../components/Layout';
import { Button } from '../../../components/ui/button';
import { Label } from '../../../components/ui/label';
import { Input } from '../../../components/ui/input';
import { useLanguage } from '../../../contexts/LanguageContext';
import { buttonClasses } from '../../../styles';

export function CompletionCertificateForm() {
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
    // بيانات شهادة الإنجاز
    certificateNumber: '',
    certificateDate: '',
    contract: '',
    supplier: '',
    startDate: '',
    endDate: '',
    executionLocationAr: '',
    executionLocationEn: '',
    description: '',
    
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
    navigate('/competitions/completion-certificate');
  };

  const handleCancel = () => {
    navigate('/competitions/completion-certificate');
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
                onClick={() => navigate('/competitions/completion-certificate')}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <ArrowRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <h1 className="text-xl font-medium text-gray-900">
              {t('competitions.completion_certificate.title')}
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

        {/* بيانات شهادة الإنجاز */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <button
            onClick={() => toggleSection('basicInfo')}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-lg font-medium text-gray-900">
              {t('competitions.completion_certificate.basic_info')}
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
                    {t('competitions.completion_certificate.certificate_number')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('competitions.completion_certificate.certificate_number')}
                    value={formData.certificateNumber}
                    onChange={(e) => handleInputChange('certificateNumber', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.completion_certificate.contract')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('competitions.completion_certificate.contract')}
                    value={formData.contract}
                    onChange={(e) => handleInputChange('contract', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.completion_certificate.certificate_date')}
                  </Label>
                  <Input
                    type="date"
                    value={formData.certificateDate}
                    onChange={(e) => handleInputChange('certificateDate', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.completion_certificate.supplier')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('competitions.completion_certificate.supplier')}
                    value={formData.supplier}
                    onChange={(e) => handleInputChange('supplier', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.completion_certificate.start_date')}
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
                    {t('competitions.completion_certificate.execution_location_ar')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('competitions.completion_certificate.execution_location_ar')}
                    value={formData.executionLocationAr}
                    onChange={(e) => handleInputChange('executionLocationAr', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.completion_certificate.end_date')}
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
                    {t('competitions.completion_certificate.execution_location_en')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('competitions.completion_certificate.execution_location_en')}
                    value={formData.executionLocationEn}
                    onChange={(e) => handleInputChange('executionLocationEn', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5 col-span-2">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.completion_certificate.description')}
                  </Label>
                  <textarea
                    placeholder={t('competitions.completion_certificate.description')}
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
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
              {t('competitions.completion_certificate.items_info')}
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
                    {t('competitions.completion_certificate.item_name')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('competitions.completion_certificate.item_name')}
                    value={formData.itemName}
                    onChange={(e) => handleInputChange('itemName', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.completion_certificate.quantity')}
                  </Label>
                  <Input
                    type="number"
                    placeholder={t('competitions.completion_certificate.quantity')}
                    value={formData.quantity}
                    onChange={(e) => handleInputChange('quantity', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.completion_certificate.item_number')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('competitions.completion_certificate.item_number')}
                    value={formData.itemNumber}
                    onChange={(e) => handleInputChange('itemNumber', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.completion_certificate.unit')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('competitions.completion_certificate.unit')}
                    value={formData.unit}
                    onChange={(e) => handleInputChange('unit', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.completion_certificate.unit_price')}
                  </Label>
                  <Input
                    type="number"
                    placeholder={t('competitions.completion_certificate.unit_price')}
                    value={formData.unitPrice}
                    onChange={(e) => handleInputChange('unitPrice', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.completion_certificate.total')}
                  </Label>
                  <Input
                    type="number"
                    placeholder={t('competitions.completion_certificate.total')}
                    value={formData.total}
                    onChange={(e) => handleInputChange('total', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.completion_certificate.discount_percentage')}
                  </Label>
                  <Input
                    type="number"
                    placeholder={t('competitions.completion_certificate.discount_percentage')}
                    value={formData.discountPercentage}
                    onChange={(e) => handleInputChange('discountPercentage', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.completion_certificate.tax_value')}
                  </Label>
                  <Input
                    type="number"
                    placeholder={t('competitions.completion_certificate.tax_value')}
                    value={formData.taxValue}
                    onChange={(e) => handleInputChange('taxValue', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.completion_certificate.tax_percentage')}
                  </Label>
                  <Input
                    type="number"
                    placeholder={t('competitions.completion_certificate.tax_percentage')}
                    value={formData.taxPercentage}
                    onChange={(e) => handleInputChange('taxPercentage', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.completion_certificate.net')}
                  </Label>
                  <Input
                    type="number"
                    placeholder={t('competitions.completion_certificate.net')}
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
              {t('competitions.completion_certificate.files_info')}
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
                    {t('competitions.completion_certificate.attachment_name')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('competitions.completion_certificate.attachment_name')}
                    value={formData.attachmentName}
                    onChange={(e) => handleInputChange('attachmentName', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.completion_certificate.notification_number')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('competitions.completion_certificate.notification_number')}
                    value={formData.notificationNumber}
                    onChange={(e) => handleInputChange('notificationNumber', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.completion_certificate.attachment_date')}
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
