import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Layout } from '../../../components/Layout';
import { Button } from '../../../components/ui/button';
import { Label } from '../../../components/ui/label';
import { Input } from '../../../components/ui/input';
import { useLanguage } from '../../../contexts/LanguageContext';
import { buttonClasses } from '../../../styles';

export function BankGuaranteesForm() {
  const navigate = useNavigate();
  const { t, dir } = useLanguage();

  // Collapsible sections state
  const [sections, setSections] = useState({
    basicInfo: true,
    bankInfo: true,
    filesInfo: true,
  });

  // Form data
  const [formData, setFormData] = useState({
    // بيانات الضمانات البنكية الأساسية
    guaranteeNumber: '',
    guaranteeDate: '',
    guaranteeType: '',
    guaranteeValue: '',
    supplier: '',
    project: '',
    startDate: '',
    endDate: '',
    notes: '',
    
    // بيانات البنك
    bankName: '',
    bankBranch: '',
    accountNumber: '',
    swiftCode: '',
    ibanNumber: '',
    contactPerson: '',
    
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
    navigate('/competitions/bank-guarantees');
  };

  const handleCancel = () => {
    navigate('/competitions/bank-guarantees');
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
                onClick={() => navigate('/competitions/bank-guarantees')}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <ArrowRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <h1 className="text-xl font-medium text-gray-900">
              {t('competitions.bank_guarantees.title')}
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

        {/* بيانات الضمانات البنكية الأساسية */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <button
            onClick={() => toggleSection('basicInfo')}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-lg font-medium text-gray-900">
              {t('competitions.bank_guarantees.basic_info')}
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
                    {t('competitions.bank_guarantees.guarantee_number')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('competitions.bank_guarantees.guarantee_number')}
                    value={formData.guaranteeNumber}
                    onChange={(e) => handleInputChange('guaranteeNumber', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.bank_guarantees.guarantee_type')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('competitions.bank_guarantees.guarantee_type')}
                    value={formData.guaranteeType}
                    onChange={(e) => handleInputChange('guaranteeType', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.bank_guarantees.guarantee_date')}
                  </Label>
                  <Input
                    type="date"
                    value={formData.guaranteeDate}
                    onChange={(e) => handleInputChange('guaranteeDate', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.bank_guarantees.guarantee_value')}
                  </Label>
                  <Input
                    type="number"
                    placeholder={t('competitions.bank_guarantees.guarantee_value')}
                    value={formData.guaranteeValue}
                    onChange={(e) => handleInputChange('guaranteeValue', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.bank_guarantees.supplier')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('competitions.bank_guarantees.supplier')}
                    value={formData.supplier}
                    onChange={(e) => handleInputChange('supplier', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.bank_guarantees.start_date')}
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
                    {t('competitions.bank_guarantees.project')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('competitions.bank_guarantees.project')}
                    value={formData.project}
                    onChange={(e) => handleInputChange('project', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.bank_guarantees.end_date')}
                  </Label>
                  <Input
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => handleInputChange('endDate', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5 col-span-2">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.bank_guarantees.notes')}
                  </Label>
                  <textarea
                    placeholder={t('competitions.bank_guarantees.notes')}
                    value={formData.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    className="w-full min-h-[100px] px-3 py-2 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* بيانات البنك */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <button
            onClick={() => toggleSection('bankInfo')}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-lg font-medium text-gray-900">
              {t('competitions.bank_guarantees.bank_info')}
            </h2>
            {sections.bankInfo ? (
              <ChevronUp className="w-5 h-5 text-gray-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-600" />
            )}
          </button>

          {sections.bankInfo && (
            <div className="p-6 border-t border-[#e2e2e2]">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.bank_guarantees.bank_name')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('competitions.bank_guarantees.bank_name')}
                    value={formData.bankName}
                    onChange={(e) => handleInputChange('bankName', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.bank_guarantees.account_number')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('competitions.bank_guarantees.account_number')}
                    value={formData.accountNumber}
                    onChange={(e) => handleInputChange('accountNumber', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.bank_guarantees.bank_branch')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('competitions.bank_guarantees.bank_branch')}
                    value={formData.bankBranch}
                    onChange={(e) => handleInputChange('bankBranch', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.bank_guarantees.swift_code')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('competitions.bank_guarantees.swift_code')}
                    value={formData.swiftCode}
                    onChange={(e) => handleInputChange('swiftCode', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.bank_guarantees.iban_number')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('competitions.bank_guarantees.iban_number')}
                    value={formData.ibanNumber}
                    onChange={(e) => handleInputChange('ibanNumber', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.bank_guarantees.contact_person')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('competitions.bank_guarantees.contact_person')}
                    value={formData.contactPerson}
                    onChange={(e) => handleInputChange('contactPerson', e.target.value)}
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
              {t('competitions.bank_guarantees.files_info')}
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
                    {t('competitions.bank_guarantees.attachment_name')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('competitions.bank_guarantees.attachment_name')}
                    value={formData.attachmentName}
                    onChange={(e) => handleInputChange('attachmentName', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.bank_guarantees.notification_number')}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t('competitions.bank_guarantees.notification_number')}
                    value={formData.notificationNumber}
                    onChange={(e) => handleInputChange('notificationNumber', e.target.value)}
                    className="w-full h-[42px] px-3 border border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    {t('competitions.bank_guarantees.attachment_date')}
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
