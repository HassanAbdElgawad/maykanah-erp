import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown, Paperclip, ArrowRight } from 'lucide-react';
import { buttonClasses } from '@/styles';

export const AddEditVendorUser: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    establishment: '',
    branch: '',
    vendorName: '',
    vendorNumber: '',
    email: '',
    userName: '',
    password: '',
    status: 'active',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    navigate('/competitions/vendor-users');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header with Action Buttons */}
        <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-[#e2e2e2]">
          <div className="flex items-center gap-3">
            <div className="relative w-[42px] h-[42px] bg-[#f0f4f7] rounded-lg">
              <button
                onClick={() => navigate('/competitions/vendor-users')}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <ArrowRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <h1 className="text-xl font-medium text-gray-900">
              {t('vendor_users.basic_data_form')}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="flex items-center gap-2 px-6 py-2.5 bg-slate-50 text-gray-700 rounded-lg hover:bg-slate-100 transition-colors border border-[#e7e7e7]"
            >
              <Paperclip className="w-4 h-4" />
              {t('vendor_users.add_attachments')}
            </button>
            <button onClick={handleSubmit} className={buttonClasses.primary}>
              {t('vendor_users.submit_request')}
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Vendor Data Section */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-medium text-gray-900">{t('vendor_users.vendor_data')}</h2>
              <button
                type="button"
                className="w-10 h-10 flex items-center justify-center bg-[#f0f4f7] rounded-lg"
              >
                <ChevronDown className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Establishment */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#00000099] text-base">
                  {t('vendor_users.establishment')}
                </label>
                <div className="relative">
                  <select
                    name="establishment"
                    value={formData.establishment}
                    onChange={handleInputChange}
                    className="w-full h-[45px] px-2.5 bg-white rounded-lg border border-[#cfcfcf] appearance-none"
                  >
                    <option value="">{t('vendor_users.establishment')}</option>
                    <option value="est1">منشأة 1</option>
                    <option value="est2">منشأة 2</option>
                  </select>
                  <ChevronDown className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Branch */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#00000099] text-base">{t('vendor_users.branch')}</label>
                <div className="relative">
                  <select
                    name="branch"
                    value={formData.branch}
                    onChange={handleInputChange}
                    className="w-full h-[45px] px-2.5 bg-white rounded-lg border border-[#cfcfcf] appearance-none"
                  >
                    <option value="">{t('vendor_users.branch')}</option>
                    <option value="branch1">فرع 1</option>
                    <option value="branch2">فرع 2</option>
                  </select>
                  <ChevronDown className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Vendor Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#00000099] text-base">
                  {t('vendor_users.vendor_name')}
                </label>
                <input
                  type="text"
                  name="vendorName"
                  value={formData.vendorName}
                  onChange={handleInputChange}
                  placeholder={t('vendor_users.vendor_name')}
                  className="w-full h-[45px] px-2.5 bg-white rounded-lg border border-[#cfcfcf]"
                />
              </div>

              {/* Vendor Number */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#00000099] text-base">
                  {t('vendor_users.vendor_number')}
                </label>
                <input
                  type="text"
                  name="vendorNumber"
                  value={formData.vendorNumber}
                  onChange={handleInputChange}
                  placeholder={t('vendor_users.vendor_number')}
                  className="w-full h-[45px] px-2.5 bg-white rounded-lg border border-[#cfcfcf] text-left"
                  dir="ltr"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#00000099] text-base">{t('vendor_users.email')}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t('vendor_users.email')}
                  className="w-full h-[45px] px-2.5 bg-white rounded-lg border border-[#cfcfcf] text-left"
                  dir="ltr"
                />
              </div>

              {/* User Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#00000099] text-base">{t('vendor_users.user_name')}</label>
                <input
                  type="text"
                  name="userName"
                  value={formData.userName}
                  onChange={handleInputChange}
                  placeholder={t('vendor_users.user_name')}
                  className="w-full h-[45px] px-2.5 bg-white rounded-lg border border-[#cfcfcf]"
                />
              </div>

              {/* Password */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#00000099] text-base">{t('vendor_users.password')}</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder={t('vendor_users.password')}
                  className="w-full h-[45px] px-2.5 bg-white rounded-lg border border-[#cfcfcf]"
                />
              </div>

              {/* Status */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#00000099] text-base">{t('vendor_users.status')}</label>
                <div className="relative">
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="w-full h-[45px] px-2.5 bg-white rounded-lg border border-[#cfcfcf] appearance-none"
                  >
                    <option value="active">{t('vendor_users.status_active')}</option>
                    <option value="inactive">{t('vendor_users.status_inactive')}</option>
                  </select>
                  <ChevronDown className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};
