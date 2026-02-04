import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../../components/Layout';
import { useLanguage } from '../../../contexts/LanguageContext';
import { Button } from '../../../components/ui/button';
import { ChevronRight, Paperclip } from 'lucide-react';

export function NewAlert() {
  const { dir, t } = useLanguage();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [recipientEntity, setRecipientEntity] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('');
  const [attachmentsCount] = useState(0);

  const handleSubmit = () => {
    console.log('Submit alert request:', {
      employee,
      title,
      message,
      recipientEntity,
      deliveryMethod,
    });
  };

  return (
    <Layout>
      <div
        className={`flex flex-col gap-4 ${dir === 'rtl' ? "font-['IBM_Plex_Sans_Arabic']" : ''}`}
        dir={dir}
      >
        {/* Header */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] p-4">
          <div className="flex items-center justify-between">
            {/* Right Side: Back Button + Title */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate(-1)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
              <h1 className="text-xl font-semibold text-[#11383f]">{t('hr.add_alerts')}</h1>
            </div>

            {/* Left Side: Buttons */}
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2"
              >
                <Paperclip className="w-4 h-4" />
                {t('hr.add_attachments')}
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-xs">
                  {attachmentsCount}
                </span>
              </Button>
              <Button
                onClick={handleSubmit}
                className="bg-[#11383f] hover:bg-[#0f2f35] text-white px-6 py-2 rounded-lg"
              >
                {t('hr.submit_request')}
              </Button>
            </div>
          </div>
        </div>

        {/* Employee Information Card */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] p-6">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-[#11383f]">
              {t('hr.employee_information')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Employee */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">{t('hr.employee')}</label>
                <input
                  type="text"
                  value={employee}
                  onChange={(e) => setEmployee(e.target.value)}
                  placeholder={t('hr.employee')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Other Information Card */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] p-6">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-[#11383f]">
              {t('hr.other_information')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Title */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">{t('hr.title')}</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder={t('hr.title')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">{t('hr.message')}</label>
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t('hr.message')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
                />
              </div>

              {/* Recipient Entity */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">{t('hr.recipient_entity')}</label>
                <input
                  type="text"
                  value={recipientEntity}
                  onChange={(e) => setRecipientEntity(e.target.value)}
                  placeholder={t('hr.recipient_entity')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
                />
              </div>

              {/* Delivery Method */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">{t('hr.delivery_method')}</label>
                <select
                  value={deliveryMethod}
                  onChange={(e) => setDeliveryMethod(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] focus:border-transparent bg-white"
                >
                  <option value="">{t('hr.delivery_method')}</option>
                  <option value="email">البريد الإلكتروني</option>
                  <option value="sms">رسالة نصية</option>
                  <option value="notification">إشعار داخلي</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default NewAlert;
