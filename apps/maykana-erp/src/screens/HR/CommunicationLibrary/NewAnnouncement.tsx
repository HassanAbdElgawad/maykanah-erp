import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../../components/Layout';
import { useLanguage } from '../../../contexts/LanguageContext';
import { Button } from '../../../components/ui/button';
import { ChevronRight, Paperclip } from 'lucide-react';

export function NewAnnouncement() {
  const { dir, t } = useLanguage();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [policyTitle, setPolicyTitle] = useState('');
  const [description, setDescription] = useState('');
  const [effectiveDate, setEffectiveDate] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [attachmentsCount, setAttachmentsCount] = useState(0);

  const handleSubmit = () => {
    console.log('Submit announcement:', {
      title,
      policyTitle,
      description,
      effectiveDate,
      expiryDate,
      targetAudience,
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
              <h1 className="text-xl font-semibold text-[#11383f]">{t('hr.new_announcement')}</h1>
            </div>

            {/* Left Side: Buttons */}
            <div className="flex gap-2">
              <Button
                onClick={handleSubmit}
                className="bg-[#11383f] hover:bg-[#0f2f35] text-white px-6 py-2 rounded-lg"
              >
                {t('hr.send_request')}
              </Button>
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

              {/* Policy Title */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  {t('hr.policy_title')}
                </label>
                <input
                  type="text"
                  value={policyTitle}
                  onChange={(e) => setPolicyTitle(e.target.value)}
                  placeholder={t('hr.policy_title')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  {t('hr.description')}
                </label>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder={t('hr.description')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
                />
              </div>

              {/* Effective Date */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  {t('hr.effective_date')}
                </label>
                <input
                  type="date"
                  value={effectiveDate}
                  onChange={(e) => setEffectiveDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
                />
              </div>

              {/* Expiry Date */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  {t('hr.expiry_date')}
                </label>
                <input
                  type="date"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
                />
              </div>

              {/* Target Audience */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  {t('hr.target_audience')}
                </label>
                <select
                  value={targetAudience}
                  onChange={(e) => setTargetAudience(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
                >
                  <option value="">{t('hr.target_audience')}</option>
                  <option value="نشط">نشط</option>
                  <option value="منتهي الخدمة">منتهي الخدمة</option>
                  <option value="الكل">الكل</option>
                </select>
              </div>

              {/* Attachments */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  {t('hr.attachments')}
                </label>
                <input
                  type="text"
                  placeholder={t('hr.attachments')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
