import { useState } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { Button } from '../../../components/ui/button';
import { X, Paperclip } from 'lucide-react';

interface AddPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AddPolicyModal({ isOpen, onClose }: AddPolicyModalProps) {
  const { dir, t } = useLanguage();
  const [policyTitle, setPolicyTitle] = useState('');
  const [policyTitle2, setPolicyTitle2] = useState('');
  const [description, setDescription] = useState('');
  const [effectiveDate, setEffectiveDate] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [attachmentsCount, setAttachmentsCount] = useState(0);

  const handleSave = () => {
    console.log('Save policy:', {
      policyTitle,
      policyTitle2,
      description,
      effectiveDate,
      expiryDate,
      targetAudience,
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-end z-50">
      <div
        className={`bg-white h-full w-full max-w-md overflow-y-auto ${dir === 'rtl' ? "font-['IBM_Plex_Sans_Arabic']" : ''}`}
        dir={dir}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-[#11383f]">{t('hr.add_new_policy')}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Policy Title */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">{t('hr.policy_title')}</label>
            <input
              type="text"
              value={policyTitle}
              onChange={(e) => setPolicyTitle(e.target.value)}
              placeholder={t('hr.policy_title')}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
            />
          </div>

          {/* Policy Title 2 */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">{t('hr.policy_title')}</label>
            <input
              type="text"
              value={policyTitle2}
              onChange={(e) => setPolicyTitle2(e.target.value)}
              placeholder={t('hr.policy_title')}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">{t('hr.description')}</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={t('hr.description')}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
            />
          </div>

          {/* Row with 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            <label className="text-sm font-medium text-gray-700">{t('hr.attachments')}</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder={t('hr.attachments')}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
              />
              <Button
                variant="outline"
                className="px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2"
              >
                <Paperclip className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-2 p-6 border-t border-gray-200">
         
          <Button
            onClick={onClose}
            variant="outline"
            className="px-6 py-2 border border-gray-300 rounded-lg"
          >
            {t('hr.cancel')}
          </Button>
           <Button
            onClick={handleSave}
            className="bg-[#11383f] hover:bg-[#0f2f35] text-white px-6 py-2 rounded-lg"
          >
            {t('hr.save')}
          </Button>
        </div>
      </div>
    </div>
  );
}
