import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronDown, Paperclip } from 'lucide-react';
import { Layout } from '../../../components/Layout';
import { useLanguage } from '../../../contexts/LanguageContext';
import { buttonClasses } from '../../../styles';

export function AddEditVendorNotification() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    vendorNumber: '',
    notificationNumber: '',
    notificationDate: '',
    notificationType: '',
    supplierName: '',
    notificationStatus: 'active',
    notificationDetails: '',
    notificationTitle: '',
    attachmentName: '',
    attachmentDate: '',
    attachment: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate('/competitions/vendor-notifications');
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header with Action Buttons */}
        <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-[#e2e2e2]">
          <div className="flex items-center gap-3">
            <div className="relative w-[42px] h-[42px] bg-[#f0f4f7] rounded-lg">
              <button
                onClick={() => navigate('/competitions/vendor-notifications')}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <ArrowRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <h1 className="text-xl font-medium text-gray-900">
              {t('vendor_notifications.basic_data_form')}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="flex items-center gap-2 px-6 py-2.5 bg-slate-50 text-gray-700 rounded-lg hover:bg-slate-100 transition-colors border border-[#e7e7e7]"
            >
              <Paperclip className="w-4 h-4" />
              {t('vendor_notifications.add_attachments')}
            </button>
            <button onClick={handleSubmit} className={buttonClasses.primary}>
              {t('vendor_notifications.submit_request')}
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Vendor Data Section */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-medium text-gray-900">{t('vendor_notifications.vendor_data')}</h2>
              <button
                type="button"
                className="w-10 h-10 flex items-center justify-center bg-[#f0f4f7] rounded-lg"
              >
                <ChevronDown className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Vendor Number */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#00000099] text-base">
                  {t('vendor_notifications.vendor_number')}
                </label>
                <input
                  type="text"
                  name="vendorNumber"
                  value={formData.vendorNumber}
                  onChange={handleInputChange}
                  placeholder={t('vendor_notifications.vendor_number')}
                  className="w-full h-[45px] px-2.5 bg-white rounded-lg border border-[#cfcfcf] text-left"
                  dir="ltr"
                />
              </div>

              {/* Notification Number */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#00000099] text-base">
                  {t('vendor_notifications.notification_number')}
                </label>
                <input
                  type="text"
                  name="notificationNumber"
                  value={formData.notificationNumber}
                  onChange={handleInputChange}
                  placeholder={t('vendor_notifications.notification_number')}
                  className="w-full h-[45px] px-2.5 bg-white rounded-lg border border-[#cfcfcf] text-left"
                  dir="ltr"
                />
              </div>

              {/* Notification Date */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#00000099] text-base">
                  {t('vendor_notifications.notification_date')}
                </label>
                <div className="relative">
                  <input
                    type="date"
                    name="notificationDate"
                    value={formData.notificationDate}
                    onChange={handleInputChange}
                    className="w-full h-[45px] px-2.5 bg-white rounded-lg border border-[#cfcfcf]"
                  />
                </div>
              </div>

              {/* Notification Type */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#00000099] text-base">
                  {t('vendor_notifications.notification_type')}
                </label>
                <div className="relative">
                  <select
                    name="notificationType"
                    value={formData.notificationType}
                    onChange={handleInputChange}
                    className="w-full h-[45px] px-2.5 bg-white rounded-lg border border-[#cfcfcf] appearance-none"
                  >
                    <option value="">{t('vendor_notifications.notification_type')}</option>
                    <option value="type1">حرية حكومية</option>
                    <option value="type2">نوع 2</option>
                  </select>
                  <ChevronDown className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Supplier Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#00000099] text-base">
                  {t('vendor_notifications.supplier_name')}
                </label>
                <input
                  type="text"
                  name="supplierName"
                  value={formData.supplierName}
                  onChange={handleInputChange}
                  placeholder={t('vendor_notifications.supplier_name')}
                  className="w-full h-[45px] px-2.5 bg-white rounded-lg border border-[#cfcfcf]"
                />
              </div>

              {/* Notification Status */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#00000099] text-base">
                  {t('vendor_notifications.notification_status')}
                </label>
                <div className="relative">
                  <select
                    name="notificationStatus"
                    value={formData.notificationStatus}
                    onChange={handleInputChange}
                    className="w-full h-[45px] px-2.5 bg-white rounded-lg border border-[#cfcfcf] appearance-none"
                  >
                    <option value="active">{t('vendor_notifications.status_active')}</option>
                    <option value="inactive">
                      {t('vendor_notifications.status_inactive')}
                    </option>
                  </select>
                  <ChevronDown className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Notification Details */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#00000099] text-base">
                  {t('vendor_notifications.notification_details')}
                </label>
                <input
                  type="text"
                  name="notificationDetails"
                  value={formData.notificationDetails}
                  onChange={handleInputChange}
                  placeholder={t('vendor_notifications.notification_details')}
                  className="w-full h-[45px] px-2.5 bg-white rounded-lg border border-[#cfcfcf]"
                />
              </div>

              {/* Notification Title */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#00000099] text-base">
                  {t('vendor_notifications.notification_title')}
                </label>
                <input
                  type="text"
                  name="notificationTitle"
                  value={formData.notificationTitle}
                  onChange={handleInputChange}
                  placeholder={t('vendor_notifications.notification_title')}
                  className="w-full h-[45px] px-2.5 bg-white rounded-lg border border-[#cfcfcf]"
                />
              </div>
            </div>
          </div>

          {/* Files Data Section */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-medium text-gray-900">
                {t('vendor_notifications.files_data')}
              </h2>
              <button
                type="button"
                className="w-10 h-10 flex items-center justify-center bg-[#f0f4f7] rounded-lg"
              >
                <ChevronDown className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Attachment Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#00000099] text-base">
                  {t('vendor_notifications.attachment_name')}
                </label>
                <input
                  type="text"
                  name="attachmentName"
                  value={formData.attachmentName}
                  onChange={handleInputChange}
                  placeholder={t('vendor_notifications.attachment_name')}
                  className="w-full h-[45px] px-2.5 bg-white rounded-lg border border-[#cfcfcf]"
                />
              </div>

              {/* Attachment Date */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#00000099] text-base">
                  {t('vendor_notifications.attachment_date')}
                </label>
                <div className="relative">
                  <input
                    type="date"
                    name="attachmentDate"
                    value={formData.attachmentDate}
                    onChange={handleInputChange}
                    className="w-full h-[45px] px-2.5 bg-white rounded-lg border border-[#cfcfcf]"
                  />
                </div>
              </div>

              {/* Attachment */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#00000099] text-base">
                  {t('vendor_notifications.attachment')}
                </label>
                <div className="relative">
                  <select
                    name="attachment"
                    value={formData.attachment}
                    onChange={handleInputChange}
                    className="w-full h-[45px] px-2.5 bg-white rounded-lg border border-[#cfcfcf] appearance-none"
                  >
                    <option value="">{t('vendor_notifications.attachment')}</option>
                    <option value="attachment1">مرفق 1</option>
                    <option value="attachment2">مرفق 2</option>
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
}
