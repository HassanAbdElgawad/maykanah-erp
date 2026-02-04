import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { useLanguage } from '../../../contexts/LanguageContext';

interface RemoteWorkPolicy {
  id: string;
  policyName: string;
  description: string;
  maxDaysAvailable: string;
  maxDaysPerMonth: string;
  departments: string;
}

interface RemoteWorkPolicySidebarProps {
  isOpen: boolean;
  onClose: () => void;
  policy: RemoteWorkPolicy | null;
}

export function RemoteWorkPolicySidebar({ isOpen, onClose, policy }: RemoteWorkPolicySidebarProps) {
  const { dir, t } = useLanguage();
  const [formData, setFormData] = useState({
    policyName: policy?.policyName || '',
    description: policy?.description || '',
    maxDaysAvailable: policy?.maxDaysAvailable || '',
    maxDaysPerMonth: policy?.maxDaysPerMonth || '',
    jobTitles: '',
    requiresApproval: true,
    periodCount: 2,
    period1Start: '',
    period1End: '',
    period2Start: '',
    period2End: '',
  });

  const handleSave = () => {
    console.log('Form saved:', formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 ${dir === 'rtl' ? 'left-0' : 'right-0'} h-full w-[500px] bg-white shadow-2xl z-50 flex flex-col ${dir === 'rtl' ? "font-['IBM_Plex_Sans_Arabic']" : ''}`}
        dir={dir}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            {t('hr.add_remote_work_policy')}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Policy Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('hr.policy_name')}
            </label>
            <Input
              type="text"
              value={formData.policyName}
              onChange={(e) => setFormData({ ...formData, policyName: e.target.value })}
              placeholder={t('hr.enter_policy_name')}
              className="w-full"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('hr.description')}
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder={t('hr.enter_description')}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] resize-none"
            />
          </div>

          {/* Max Days Available */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('hr.max_days_available')}
            </label>
            <Input
              type="text"
              value={formData.maxDaysAvailable}
              onChange={(e) =>
                setFormData({ ...formData, maxDaysAvailable: e.target.value })
              }
              placeholder={t('hr.enter_max_days')}
              className="w-full"
            />
          </div>

          {/* Max Days Per Month */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('hr.max_days_per_month')}
            </label>
            <Input
              type="text"
              value={formData.maxDaysPerMonth}
              onChange={(e) =>
                setFormData({ ...formData, maxDaysPerMonth: e.target.value })
              }
              placeholder={t('hr.enter_max_days_per_month')}
              className="w-full"
            />
          </div>

          {/* Job Titles */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('hr.job_titles')}
            </label>
            <Input
              type="text"
              value={formData.jobTitles}
              onChange={(e) => setFormData({ ...formData, jobTitles: e.target.value })}
              placeholder={t('hr.enter_job_titles')}
              className="w-full"
            />
          </div>

          {/* Requires Approval Toggle */}
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">
              {t('hr.requires_approval')}
            </label>
            <button
              onClick={() =>
                setFormData({ ...formData, requiresApproval: !formData.requiresApproval })
              }
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                formData.requiresApproval ? 'bg-[#11383f]' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  formData.requiresApproval ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* Period Count */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('hr.period_count')}
            </label>
            <Input
              type="number"
              value={formData.periodCount}
              onChange={(e) =>
                setFormData({ ...formData, periodCount: parseInt(e.target.value) || 0 })
              }
              className="w-full"
            />
          </div>

          {/* Period 1 */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">{t('hr.period')} 1</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-2">
                  {t('hr.effective_start_date')}
                </label>
                <Input
                  type="date"
                  value={formData.period1Start}
                  onChange={(e) =>
                    setFormData({ ...formData, period1Start: e.target.value })
                  }
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-2">
                  {t('hr.effective_end_date')}
                </label>
                <Input
                  type="date"
                  value={formData.period1End}
                  onChange={(e) =>
                    setFormData({ ...formData, period1End: e.target.value })
                  }
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Period 2 */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">{t('hr.period')} 2</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-2">
                  {t('hr.effective_start_date')}
                </label>
                <Input
                  type="date"
                  value={formData.period2Start}
                  onChange={(e) =>
                    setFormData({ ...formData, period2Start: e.target.value })
                  }
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-2">
                  {t('hr.effective_end_date')}
                </label>
                <Input
                  type="date"
                  value={formData.period2End}
                  onChange={(e) =>
                    setFormData({ ...formData, period2End: e.target.value })
                  }
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200">
          <Button
            onClick={onClose}
            variant="outline"
            className="px-6 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            {t('hr.cancel')}
          </Button>
          <Button
            onClick={handleSave}
            className="bg-[#11383f] hover:bg-[#0f2f35] text-white px-6 py-2"
          >
            {t('hr.save')}
          </Button>
        </div>
      </div>
    </>
  );
}
