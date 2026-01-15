import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ChevronDown, ChevronUp, Paperclip } from 'lucide-react';
import { Layout } from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';

export const AddEditVendorQualification = () => {
  const navigate = useNavigate();
  const { t, dir } = useLanguage();

  const [openSections, setOpenSections] = useState({
    basicInfo: true,
    contactInfo: true,
    activityInfo: true,
    financialInfo: true,
  });

  const [formData, setFormData] = useState({
    // Basic Info
    vendorName: '',
    vendorCode: '',
    registrationNumber: '',
    vendorType: '',
    nationality: '',
    country: '',
    city: '',
    status: '',

    // Contact Info
    email: '',
    phone: '',
    fax: '',
    website: '',
    addressLine1: '',
    addressLine2: '',
    postalCode: '',
    contactPerson: '',

    // Activity Info
    hasTaxNumber: '',
    activityType: '',
    activityDescription: '',

    // Financial Info
    currency: '',
    paymentTerms: '',
    accountNumber: '',
    bankName: '',
    bankBranch: '',
    iban: '',
    swiftCode: '',
    commercialRegisterDate: '',
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    console.log('Saving vendor:', formData);
    navigate('/competitions/vendor-qualification');
  };

  const handleBack = () => {
    navigate('/competitions/vendor-qualification');
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
            <button
              onClick={handleBack}
              className="w-[42px] h-[42px] flex items-center justify-center bg-[#f0f4f7] rounded-lg hover:bg-gray-200 transition-colors"
            >
              {dir === 'rtl' ? (
                <ArrowRight className="w-6 h-6 " />
              ) : (
                <ArrowLeft className="w-6 h-6" />
              )}
            </button>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-lg">
              <Paperclip className="w-4 h-4" />
              <span className="text-[#092e32]">{t('add_attachments')}</span>
              <div className="bg-[#092e321f] px-2 py-1 rounded-md text-[#0000005e] text-sm">0</div>
            </div>
            <Button
              onClick={handleSave}
              className="bg-[#093738] hover:bg-[#0d4849] text-white px-4 py-2 rounded-lg shadow-[0px_4px_4px_#0000001a]"
            >
              {t('save')}
            </Button>

            {/* <h1 className="text-xl font-medium" dir={dir}> */}
            {/* {isEditMode ? t("vendor_qualification.edit_vendor") : t("vendor_qualification.add_vendor")} */}
            {/* </h1> */}
          </div>
        </div>

        {/* Basic Info Section */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <button
            onClick={() => toggleSection('basicInfo')}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
          >
            <div className="w-[42px] h-[42px] flex items-center justify-center bg-[#f0f4f7] rounded-lg">
              {openSections.basicInfo ? (
                <ChevronUp className="w-6 h-6" />
              ) : (
                <ChevronDown className="w-6 h-6" />
              )}
            </div>
            <h2 className="text-xl font-medium" dir={dir}>
              {t('vendor_qualification.basic_info')}
            </h2>
          </button>

          {openSections.basicInfo && (
            <>
              <div className="border-t border-[#e2e2e2]"></div>
              <div className="p-5">
                <div className="grid grid-cols-4 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <Label className="text-[#00000099]" dir={dir}>
                      {t('vendor_qualification.vendor_name')}
                    </Label>
                    <Input
                      type="text"
                      value={formData.vendorName}
                      onChange={(e) => handleChange('vendorName', e.target.value)}
                      className="h-[45px] border-[#cfcfcf]"
                      placeholder={t('enter_text')}
                      dir={dir}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label className="text-[#00000099]" dir={dir}>
                      {t('vendor_qualification.vendor_code')}
                    </Label>
                    <Input
                      type="text"
                      value={formData.vendorCode}
                      onChange={(e) => handleChange('vendorCode', e.target.value)}
                      className="h-[45px] border-[#cfcfcf]"
                      placeholder={t('enter_text')}
                      dir={dir}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label className="text-[#00000099]" dir={dir}>
                      {t('vendor_qualification.registration_number')}
                    </Label>
                    <Input
                      type="text"
                      value={formData.registrationNumber}
                      onChange={(e) => handleChange('registrationNumber', e.target.value)}
                      className="h-[45px] border-[#cfcfcf]"
                      placeholder={t('enter_text')}
                      dir={dir}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label className="text-[#00000099]" dir={dir}>
                      {t('vendor_qualification.vendor_type')}
                    </Label>
                    <select
                      value={formData.vendorType}
                      onChange={(e) => handleChange('vendorType', e.target.value)}
                      className="h-[45px] border border-[#cfcfcf] rounded-lg px-3 bg-white"
                    >
                      <option value="">{t('select')}</option>
                      <option value="government">{t('vendor_qualification.government_entity')}</option>
                      <option value="private">{t('vendor_qualification.private_sector')}</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label className="text-[#00000099]" dir={dir}>
                      {t('vendor_qualification.nationality')}
                    </Label>
                    <select
                      value={formData.nationality}
                      onChange={(e) => handleChange('nationality', e.target.value)}
                      className="h-[45px] border border-[#cfcfcf] rounded-lg px-3 bg-white"
                    >
                      <option value="">{t('select')}</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label className="text-[#00000099]" dir={dir}>
                      {t('country')}
                    </Label>
                    <select
                      value={formData.country}
                      onChange={(e) => handleChange('country', e.target.value)}
                      className="h-[45px] border border-[#cfcfcf] rounded-lg px-3 bg-white"
                    >
                      <option value="">{t('select')}</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label className="text-[#00000099]" dir={dir}>
                      {t('city')}
                    </Label>
                    <select
                      value={formData.city}
                      onChange={(e) => handleChange('city', e.target.value)}
                      className="h-[45px] border border-[#cfcfcf] rounded-lg px-3 bg-white"
                    >
                      <option value="">{t('select')}</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label className="text-[#00000099]" dir={dir}>
                      {t('vendor_qualification.status')}
                    </Label>
                    <select
                      value={formData.status}
                      onChange={(e) => handleChange('status', e.target.value)}
                      className="h-[45px] border border-[#cfcfcf] rounded-lg px-3 bg-white"
                    >
                      <option value="">{t('select')}</option>
                      <option value="active">{t('vendor_qualification.active')}</option>
                      <option value="inactive">{t('vendor_qualification.inactive')}</option>
                    </select>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Contact Info Section */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <button
            onClick={() => toggleSection('contactInfo')}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
          >
            <div className="w-[42px] h-[42px] flex items-center justify-center bg-[#f0f4f7] rounded-lg">
              {openSections.contactInfo ? (
                <ChevronUp className="w-6 h-6" />
              ) : (
                <ChevronDown className="w-6 h-6" />
              )}
            </div>
            <h2 className="text-xl font-medium" dir={dir}>
              {t('vendor_qualification.contact_info')}
            </h2>
          </button>

          {openSections.contactInfo && (
            <>
              <div className="border-t border-[#e2e2e2]"></div>
              <div className="p-5">
                <div className="grid grid-cols-4 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <Label className="text-[#00000099]" dir={dir}>
                      {t('email')}
                    </Label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="h-[45px] border-[#cfcfcf]"
                      placeholder={t('enter_text')}
                      dir={dir}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label className="text-[#00000099]" dir={dir}>
                      {t('phone')}
                    </Label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className="h-[45px] border-[#cfcfcf]"
                      placeholder={t('enter_text')}
                      dir={dir}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label className="text-[#00000099]" dir={dir}>
                      {t('vendor_qualification.fax')}
                    </Label>
                    <Input
                      type="tel"
                      value={formData.fax}
                      onChange={(e) => handleChange('fax', e.target.value)}
                      className="h-[45px] border-[#cfcfcf]"
                      placeholder={t('enter_text')}
                      dir={dir}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label className="text-[#00000099]" dir={dir}>
                      {t('vendor_qualification.website')}
                    </Label>
                    <Input
                      type="url"
                      value={formData.website}
                      onChange={(e) => handleChange('website', e.target.value)}
                      className="h-[45px] border-[#cfcfcf]"
                      placeholder={t('enter_text')}
                      dir={dir}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label className="text-[#00000099]" dir={dir}>
                      {t('vendor_qualification.address_line1')}
                    </Label>
                    <Input
                      type="text"
                      value={formData.addressLine1}
                      onChange={(e) => handleChange('addressLine1', e.target.value)}
                      className="h-[45px] border-[#cfcfcf]"
                      placeholder={t('enter_text')}
                      dir={dir}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label className="text-[#00000099]" dir={dir}>
                      {t('vendor_qualification.address_line2')}
                    </Label>
                    <Input
                      type="text"
                      value={formData.addressLine2}
                      onChange={(e) => handleChange('addressLine2', e.target.value)}
                      className="h-[45px] border-[#cfcfcf]"
                      placeholder={t('enter_text')}
                      dir={dir}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label className="text-[#00000099]" dir={dir}>
                      {t('vendor_qualification.postal_code')}
                    </Label>
                    <Input
                      type="text"
                      value={formData.postalCode}
                      onChange={(e) => handleChange('postalCode', e.target.value)}
                      className="h-[45px] border-[#cfcfcf]"
                      placeholder={t('enter_text')}
                      dir={dir}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label className="text-[#00000099]" dir={dir}>
                      {t('vendor_qualification.contact_person')}
                    </Label>
                    <Input
                      type="text"
                      value={formData.contactPerson}
                      onChange={(e) => handleChange('contactPerson', e.target.value)}
                      className="h-[45px] border-[#cfcfcf]"
                      placeholder={t('enter_text')}
                      dir={dir}
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Activity Info Section */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <button
            onClick={() => toggleSection('activityInfo')}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
          >
            <div className="w-[42px] h-[42px] flex items-center justify-center bg-[#f0f4f7] rounded-lg">
              {openSections.activityInfo ? (
                <ChevronUp className="w-6 h-6" />
              ) : (
                <ChevronDown className="w-6 h-6" />
              )}
            </div>
            <h2 className="text-xl font-medium" dir={dir}>
              {t('vendor_qualification.activity_info')}
            </h2>
          </button>

          {openSections.activityInfo && (
            <>
              <div className="border-t border-[#e2e2e2]"></div>
              <div className="p-5">
                <div className="grid grid-cols-4 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <Label className="text-[#00000099]" dir={dir}>
                      {t('vendor_qualification.has_tax_number')}
                    </Label>
                    <select
                      value={formData.hasTaxNumber}
                      onChange={(e) => handleChange('hasTaxNumber', e.target.value)}
                      className="h-[45px] border border-[#cfcfcf] rounded-lg px-3 bg-white"
                    >
                      <option value="">{t('select')}</option>
                      <option value="yes">{t('vendor_qualification.yes')}</option>
                      <option value="no">{t('vendor_qualification.no')}</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label className="text-[#00000099]" dir={dir}>
                      {t('vendor_qualification.activity_type')}
                    </Label>
                    <select
                      value={formData.activityType}
                      onChange={(e) => handleChange('activityType', e.target.value)}
                      className="h-[45px] border border-[#cfcfcf] rounded-lg px-3 bg-white"
                    >
                      <option value="">{t('select')}</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5 col-span-2">
                    <Label className="text-[#00000099]" dir={dir}>
                      {t('vendor_qualification.activity_description')}
                    </Label>
                    <Input
                      type="text"
                      value={formData.activityDescription}
                      onChange={(e) => handleChange('activityDescription', e.target.value)}
                      className="h-[45px] border-[#cfcfcf]"
                      placeholder={t('enter_text')}
                      dir={dir}
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Financial Info Section */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <button
            onClick={() => toggleSection('financialInfo')}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
          >
            <div className="w-[42px] h-[42px] flex items-center justify-center bg-[#f0f4f7] rounded-lg">
              {openSections.financialInfo ? (
                <ChevronUp className="w-6 h-6" />
              ) : (
                <ChevronDown className="w-6 h-6" />
              )}
            </div>
            <h2 className="text-xl font-medium" dir={dir}>
              {t('vendor_qualification.financial_info')}
            </h2>
          </button>

          {openSections.financialInfo && (
            <>
              <div className="border-t border-[#e2e2e2]"></div>
              <div className="p-5">
                <div className="grid grid-cols-4 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <Label className="text-[#00000099]" dir={dir}>
                      {t('currency')}
                    </Label>
                    <select
                      value={formData.currency}
                      onChange={(e) => handleChange('currency', e.target.value)}
                      className="h-[45px] border border-[#cfcfcf] rounded-lg px-3 bg-white"
                    >
                      <option value="">{t('select')}</option>
                      <option value="SAR">{t('vendor_qualification.sar')}</option>
                      <option value="USD">{t('vendor_qualification.usd')}</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label className="text-[#00000099]" dir={dir}>
                      {t('payment_terms')}
                    </Label>
                    <select
                      value={formData.paymentTerms}
                      onChange={(e) => handleChange('paymentTerms', e.target.value)}
                      className="h-[45px] border border-[#cfcfcf] rounded-lg px-3 bg-white"
                    >
                      <option value="">{t('select')}</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label className="text-[#00000099]" dir={dir}>
                      {t('vendor_qualification.account_number')}
                    </Label>
                    <Input
                      type="text"
                      value={formData.accountNumber}
                      onChange={(e) => handleChange('accountNumber', e.target.value)}
                      className="h-[45px] border-[#cfcfcf]"
                      placeholder={t('enter_text')}
                      dir={dir}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label className="text-[#00000099]" dir={dir}>
                      {t('vendor_qualification.bank_name')}
                    </Label>
                    <select
                      value={formData.bankName}
                      onChange={(e) => handleChange('bankName', e.target.value)}
                      className="h-[45px] border border-[#cfcfcf] rounded-lg px-3 bg-white"
                    >
                      <option value="">{t('select')}</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label className="text-[#00000099]" dir={dir}>
                      {t('vendor_qualification.bank_branch')}
                    </Label>
                    <Input
                      type="text"
                      value={formData.bankBranch}
                      onChange={(e) => handleChange('bankBranch', e.target.value)}
                      className="h-[45px] border-[#cfcfcf]"
                      placeholder={t('enter_text')}
                      dir={dir}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label className="text-[#00000099]" dir={dir}>
                      {t('vendor_qualification.iban')}
                    </Label>
                    <Input
                      type="text"
                      value={formData.iban}
                      onChange={(e) => handleChange('iban', e.target.value)}
                      className="h-[45px] border-[#cfcfcf]"
                      placeholder={t('enter_text')}
                      dir={dir}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label className="text-[#00000099]" dir={dir}>
                      {t('vendor_qualification.swift_code')}
                    </Label>
                    <Input
                      type="text"
                      value={formData.swiftCode}
                      onChange={(e) => handleChange('swiftCode', e.target.value)}
                      className="h-[45px] border-[#cfcfcf]"
                      placeholder={t('enter_text')}
                      dir={dir}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label className="text-[#00000099]" dir={dir}>
                      {t('vendor_qualification.commercial_register')}
                    </Label>
                    <Input
                      type="date"
                      value={formData.commercialRegisterDate}
                      onChange={(e) => handleChange('commercialRegisterDate', e.target.value)}
                      className="h-[45px] border-[#cfcfcf]"
                      dir={dir}
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};
