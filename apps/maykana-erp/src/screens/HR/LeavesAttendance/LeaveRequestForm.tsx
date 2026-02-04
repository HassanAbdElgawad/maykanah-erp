import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Layout } from '../../../components/Layout';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { useLanguage } from '../../../contexts/LanguageContext';

export function LeaveRequestForm() {
  const { dir, t } = useLanguage();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    employee: '',
    leaveDaysBefore: '15',
    leaveDaysAfter: '12',
    leaveType: '',
    startDate: '',
    endDate: '',
    substituteEmployee: '',
    notes: '',
  });

  const handleSubmit = (action: 'accept' | 'reject') => {
    console.log('Form submitted:', { action, ...formData });
    navigate('/hr/leaves-attendance');
  };

  return (
    <Layout>
      <div
        className={`flex flex-col gap-6 ${dir === 'rtl' ? "font-['IBM_Plex_Sans_Arabic']" : ''}`}
        dir={dir}
      >
        {/* Header */}
        <div className="bg-white p-6 rounded-xl border border-[#e2e2e2]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate('/hr/leaves-attendance')}
                className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                <ArrowRight className="w-5 h-5 text-gray-600" />
              </button>
              <h1 className="text-2xl font-bold text-gray-900">{t('hr.leave_request')}</h1>
            </div>
            <div className="flex items-center gap-3">
              <Button
                onClick={() => handleSubmit('reject')}
                variant="outline"
                className="px-8 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                {t('hr.reject')}
              </Button>
              <Button
                onClick={() => handleSubmit('accept')}
                className="bg-[#11383f] hover:bg-[#0f2f35] text-white px-8 py-2"
              >
                {t('hr.accept')}
              </Button>
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] p-6 space-y-6">
          {/* Employee Information Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-200">
              {t('hr.employee_information')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('hr.employee')}
                </label>
                <Input
                  type="text"
                  value={formData.employee}
                  onChange={(e) =>
                    setFormData({ ...formData, employee: e.target.value })
                  }
                  placeholder={t('hr.enter_employee_name')}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('hr.leave_balance_before')}
                </label>
                <div className="flex items-center gap-2">
                  <Input
                    type="text"
                    value={formData.leaveDaysBefore}
                    onChange={(e) =>
                      setFormData({ ...formData, leaveDaysBefore: e.target.value })
                    }
                    className="w-full"
                  />
                  <span className="text-sm text-gray-600 whitespace-nowrap min-w-[40px]">
                    12 {t('hr.day')}
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('hr.leave_balance_after')}
                </label>
                <div className="flex items-center gap-2">
                  <Input
                    type="text"
                    value={formData.leaveDaysAfter}
                    onChange={(e) =>
                      setFormData({ ...formData, leaveDaysAfter: e.target.value })
                    }
                    className="w-full"
                  />
                  <span className="text-sm text-gray-600 whitespace-nowrap min-w-[40px]">
                    15 {t('hr.day')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Other Information Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-200">
              {t('hr.other_information')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('hr.leave_type')}
                </label>
                <select
                  value={formData.leaveType}
                  onChange={(e) =>
                    setFormData({ ...formData, leaveType: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] bg-white"
                >
                  <option value="">{t('hr.select_leave_type')}</option>
                  <option value="annual">{t('hr.annual')}</option>
                  <option value="sick">{t('hr.sick')}</option>
                  <option value="emergency">{t('hr.emergency')}</option>
                  <option value="unpaid">{t('hr.unpaid')}</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('hr.start_date')}
                </label>
                <Input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) =>
                    setFormData({ ...formData, startDate: e.target.value })
                  }
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('hr.end_date')}
                </label>
                <Input
                  type="date"
                  value={formData.endDate}
                  onChange={(e) =>
                    setFormData({ ...formData, endDate: e.target.value })
                  }
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('hr.substitute_employee')}
                </label>
                <Input
                  type="text"
                  value={formData.substituteEmployee}
                  onChange={(e) =>
                    setFormData({ ...formData, substituteEmployee: e.target.value })
                  }
                  placeholder={t('hr.enter_substitute_employee')}
                  className="w-full"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('hr.notes')}
                </label>
                <textarea
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  placeholder={t('hr.add_notes')}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] resize-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
