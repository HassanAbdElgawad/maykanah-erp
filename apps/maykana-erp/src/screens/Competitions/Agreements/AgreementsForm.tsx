import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Layout } from '../../../components/Layout';
import { Button } from '../../../components/ui/button';
import { Label } from '../../../components/ui/label';
import { Input } from '../../../components/ui/input';
import { useLanguage } from '../../../contexts/LanguageContext';
import { buttonClasses } from '../../../styles';

export function AgreementsForm() {
  const navigate = useNavigate();
  const { t, dir } = useLanguage();

  // Collapsible sections state
  const [sections, setSections] = useState({
    basicInfo: true,
    subsequentInfo: true,
    clauses: true,
  });

  // Form data
  const [formData, setFormData] = useState({
    // بيانات الاتفاقية الأساسية
    agreementNumber: '',
    agreementDate: '',
    agreementType: '',
    startDate: '',
    endDate: '',
    description: '',
    supplier: '',
    firstPartyArabic: '',
    firstPartyEnglish: '',
    secondPartyArabic: '',
    secondPartyEnglish: '',
    
    // بيانات الاتفاقية اللاحقة
    entity: '',
    value: '',
    taxPercentage: '',
    taxAmount: '',
    totalAmount: '',
    attachments: '',
    
    // بنود الاتفاقية
    itemName: '',
    quantity: '',
    unitPrice: '',
    discountAmount: '',
    discountPercentage: '',
    totalAfterDiscount: '',
    totalBeforeDiscount: '',
    attachmentName: '',
    attachmentDate: '',
  });

  const toggleSection = (section: keyof typeof sections) => {
    setSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted:', formData);
    navigate('/competitions/agreements');
  };

  const handleCancel = () => {
    navigate('/competitions/agreements');
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
                onClick={() => navigate('/competitions/agreements')}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <ArrowRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <h1 className="text-xl font-medium text-gray-900">
              {t('competitions.agreements.title')}
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

        {/* بيانات الاتفاقية الأساسية */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <button
            onClick={() => toggleSection('basicInfo')}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-lg font-medium text-gray-900">
              {t('competitions.agreements.basic_info')}
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
                    {t('competitions.agreements.agreement_number')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('competitions.agreements.agreement_number')}
                    value={formData.agreementNumber}
                    onChange={(e) => handleInputChange('agreementNumber', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.agreements.agreement_type')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('competitions.agreements.agreement_type')}
                    value={formData.agreementType}
                    onChange={(e) => handleInputChange('agreementType', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.agreements.agreement_date')}
                  </Label>
                  <Input
                    type="date"
                    value={formData.agreementDate}
                    onChange={(e) => handleInputChange('agreementDate', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.agreements.start_date')}
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
                    {t('competitions.agreements.end_date')}
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
                    {t('competitions.agreements.supplier')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('competitions.agreements.supplier')}
                    value={formData.supplier}
                    onChange={(e) => handleInputChange('supplier', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5 col-span-2">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.agreements.description')}
                  </Label>
                  <textarea
                    placeholder={t('competitions.agreements.description')}
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    className="w-full min-h-[100px] px-3 py-2 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.agreements.first_party_arabic')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('competitions.agreements.first_party_arabic')}
                    value={formData.firstPartyArabic}
                    onChange={(e) => handleInputChange('firstPartyArabic', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.agreements.first_party_english')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('competitions.agreements.first_party_english')}
                    value={formData.firstPartyEnglish}
                    onChange={(e) => handleInputChange('firstPartyEnglish', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.agreements.second_party_arabic')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('competitions.agreements.second_party_arabic')}
                    value={formData.secondPartyArabic}
                    onChange={(e) => handleInputChange('secondPartyArabic', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.agreements.second_party_english')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('competitions.agreements.second_party_english')}
                    value={formData.secondPartyEnglish}
                    onChange={(e) => handleInputChange('secondPartyEnglish', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* بيانات الاتفاقية اللاحقة */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <button
            onClick={() => toggleSection('subsequentInfo')}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-lg font-medium text-gray-900">
              {t('competitions.agreements.subsequent_info')}
            </h2>
            {sections.subsequentInfo ? (
              <ChevronUp className="w-5 h-5 text-gray-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-600" />
            )}
          </button>

          {sections.subsequentInfo && (
            <div className="p-6 border-t border-[#e2e2e2]">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.agreements.entity')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('competitions.agreements.entity')}
                    value={formData.entity}
                    onChange={(e) => handleInputChange('entity', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.agreements.value')}
                  </Label>
                  <Input
                    type="number"
                    placeholder={t('competitions.agreements.value')}
                    value={formData.value}
                    onChange={(e) => handleInputChange('value', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.agreements.tax_percentage')}
                  </Label>
                  <Input
                    type="number"
                    placeholder={t('competitions.agreements.tax_percentage')}
                    value={formData.taxPercentage}
                    onChange={(e) => handleInputChange('taxPercentage', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.agreements.tax_amount')}
                  </Label>
                  <Input
                    type="number"
                    placeholder={t('competitions.agreements.tax_amount')}
                    value={formData.taxAmount}
                    onChange={(e) => handleInputChange('taxAmount', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.agreements.total_amount')}
                  </Label>
                  <Input
                    type="number"
                    placeholder={t('competitions.agreements.total_amount')}
                    value={formData.totalAmount}
                    onChange={(e) => handleInputChange('totalAmount', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* بنود الاتفاقية */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <button
            onClick={() => toggleSection('clauses')}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-lg font-medium text-gray-900">
              {t('competitions.agreements.clauses')}
            </h2>
            {sections.clauses ? (
              <ChevronUp className="w-5 h-5 text-gray-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-600" />
            )}
          </button>

          {sections.clauses && (
            <div className="p-6 border-t border-[#e2e2e2]">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.agreements.item_name')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('competitions.agreements.item_name')}
                    value={formData.itemName}
                    onChange={(e) => handleInputChange('itemName', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.agreements.quantity')}
                  </Label>
                  <Input
                    type="number"
                    placeholder={t('competitions.agreements.quantity')}
                    value={formData.quantity}
                    onChange={(e) => handleInputChange('quantity', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.agreements.unit_price')}
                  </Label>
                  <Input
                    type="number"
                    placeholder={t('competitions.agreements.unit_price')}
                    value={formData.unitPrice}
                    onChange={(e) => handleInputChange('unitPrice', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.agreements.discount_amount')}
                  </Label>
                  <Input
                    type="number"
                    placeholder={t('competitions.agreements.discount_amount')}
                    value={formData.discountAmount}
                    onChange={(e) => handleInputChange('discountAmount', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.agreements.discount_percentage')}
                  </Label>
                  <Input
                    type="number"
                    placeholder={t('competitions.agreements.discount_percentage')}
                    value={formData.discountPercentage}
                    onChange={(e) => handleInputChange('discountPercentage', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.agreements.total_before_discount')}
                  </Label>
                  <Input
                    type="number"
                    placeholder={t('competitions.agreements.total_before_discount')}
                    value={formData.totalBeforeDiscount}
                    onChange={(e) => handleInputChange('totalBeforeDiscount', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.agreements.total_after_discount')}
                  </Label>
                  <Input
                    type="number"
                    placeholder={t('competitions.agreements.total_after_discount')}
                    value={formData.totalAfterDiscount}
                    onChange={(e) => handleInputChange('totalAfterDiscount', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* بيانات الملفات */}
        <div className="bg-white p-6 rounded-xl border border-[#e2e2e2]">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            {t('competitions.agreements.attachments_data')}
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <Label className="text-sm font-medium text-gray-700">
                {t('competitions.agreements.attachment_name')}
              </Label>
              <Input
                type="text"
                placeholder={t('competitions.agreements.attachment_name')}
                value={formData.attachmentName}
                onChange={(e) => handleInputChange('attachmentName', e.target.value)}
                className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label className="text-sm font-medium text-gray-700">
                {t('competitions.agreements.attachment_date')}
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
      </div>
    </Layout>
  );
}
