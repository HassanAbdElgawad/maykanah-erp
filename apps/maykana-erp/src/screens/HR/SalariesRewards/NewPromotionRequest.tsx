import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../../components/Layout';
import { useLanguage } from '../../../contexts/LanguageContext';
import { Button } from '../../../components/ui/button';
import { ChevronRight } from 'lucide-react';

export function NewPromotionRequest() {
  const { dir, t } = useLanguage();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'accept' | 'reject'>('accept');
  const [job, setJob] = useState('');
  const [reason, setReason] = useState('');
  const [modificationType, setModificationType] = useState('');
  const [birthDate, setBirthDate] = useState('');

  const handleSubmit = () => {
    console.log('Submit promotion request:', {
      job,
      reason,
      modificationType,
      birthDate,
    });
  };

  return (
    <Layout>
      <div
        className={`flex flex-col gap-4 ${dir === 'rtl' ? "font-['IBM_Plex_Sans_Arabic']" : ''}`}
        dir={dir}
      >
        {/* Initial Filter Header with Tabs */}
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
              <h1 className="text-xl font-semibold text-[#11383f]">{t('hr.promotion_requests')}</h1>
            </div>

            {/* Left Side: Tabs */}
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('accept')}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === 'accept'
                    ? 'bg-[#11383f] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                قبول
              </button>
              <button
                onClick={() => setActiveTab('reject')}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === 'reject'
                    ? 'bg-[#11383f] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                رفض
              </button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        {activeTab === 'accept' && (
          <>
            {/* Employee Information Card */}
            <div className="bg-white rounded-xl border border-[#e2e2e2] p-6">
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-[#11383f]">
                  {t('hr.employee_information')}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {/* Job */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">{t('hr.job')}</label>
                    <input
                      type="text"
                      value={job}
                      onChange={(e) => setJob(e.target.value)}
                      placeholder={t('hr.job')}
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
                  {/* Reason */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">{t('hr.reason')}</label>
                    <input
                      type="text"
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      placeholder={t('hr.reason')}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
                    />
                  </div>

                  {/* Modification Type */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      {t('hr.modification_type')}
                    </label>
                    <select
                      value={modificationType}
                      onChange={(e) => setModificationType(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
                    >
                      <option value="">{t('hr.modification_type')}</option>
                      <option value="نوع 1">نوع 1</option>
                      <option value="نوع 2">نوع 2</option>
                      <option value="نوع 3">نوع 3</option>
                    </select>
                  </div>

                  {/* Birth Date */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      {t('hr.birth_date')}
                    </label>
                    <input
                      type="date"
                      value={birthDate}
                      onChange={(e) => setBirthDate(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'reject' && (
          <div className="bg-white rounded-xl border border-[#e2e2e2] p-8">
            <div className="text-center text-gray-500">
              <p>قسم الرفض</p>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
