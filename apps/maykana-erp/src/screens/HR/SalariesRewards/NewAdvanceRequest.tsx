import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../../components/Layout';
import { useLanguage } from '../../../contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';

export function NewAdvanceRequest() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('accept');

  // Form state
  const [employee, setEmployee] = useState('');
  const [amount, setAmount] = useState('');
  const [reason, setReason] = useState('');
  const [paymentPlan, setPaymentPlan] = useState('');
  const [installments, setInstallments] = useState('');

  const tabs = [
    { id: 'reject', label: 'رفض' },
    { id: 'accept', label: 'قبول' },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header with Back Button and Tabs in Initial Filter */}
        <div className="bg-white rounded-xl border border-[#e2e2e2]">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate('/hr/salaries-rewards')}
                className="text-gray-600 hover:text-gray-800"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
              <h1 className="text-xl font-bold text-[#11383f]">{t('hr.advance_requests')}</h1>
            </div>

            {/* Tabs in Initial Filter */}
            <div className="flex gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? 'bg-[#11383f] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Form Content - Two Separate Cards */}
        {activeTab === 'accept' && (
          <>
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
                  {/* Amount */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">{t('hr.amount')}</label>
                    <input
                      type="text"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder={t('hr.amount')}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
                    />
                  </div>

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

                  {/* Payment Plan */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      {t('hr.payment_plan')}
                    </label>
                    <input
                      type="text"
                      value={paymentPlan}
                      onChange={(e) => setPaymentPlan(e.target.value)}
                      placeholder={t('hr.payment_plan')}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
                    />
                  </div>

                  {/* Installments Count */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      {t('hr.installments_count')}
                    </label>
                    <select
                      value={installments}
                      onChange={(e) => setInstallments(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
                    >
                      <option value="">{t('hr.installments_count')}</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="12">12</option>
                    </select>
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
