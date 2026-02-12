import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Download, Filter } from 'lucide-react';
import { buttonClasses } from '@/styles';
import { 
  getTrialBalanceSampleData
} from '@/data/reports/accounting/trial-balance.data';

export const TrialBalanceReport = (): JSX.Element => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';
  
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  
  const data = getTrialBalanceSampleData();
  
  // Calculate totals
  const totals = data.reduce((acc, entry) => ({
    debit: acc.debit + entry.debit,
    credit: acc.credit + entry.credit,
  }), { debit: 0, credit: 0 });

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('ar-SA', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num);
  };

  const handleExport = () => {
    console.log('Exporting report...');
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900" dir={isRTL ? 'rtl' : 'ltr'}>
              {t('reports.trial_balance.title') || 'ميزان المراجعة'}
            </h1>
            <p className="text-sm text-gray-500 mt-1" dir={isRTL ? 'rtl' : 'ltr'}>
              {t('reports.trial_balance.subtitle') || 'كشف الحسابات'}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`${buttonClasses.secondary} flex items-center gap-2`}
            >
              <Filter className="w-4 h-4" />
              {showFilters ? (t('common.hide_filters') || 'إخفاء الفلاتر') : (t('common.show_filters') || 'إظهار الفلاتر')}
            </button>
            <button
              onClick={handleExport}
              className={`${buttonClasses.primary} flex items-center gap-2`}
            >
              <Download className="w-4 h-4" />
              {t('common.download') || 'تحميل'}
            </button>
          </div>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4" dir={isRTL ? 'rtl' : 'ltr'}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('common.date_from') || 'تاريخ من'}
                </label>
                <input
                  type="date"
                  value={dateFrom}
                  onChange={(e) => setDateFrom(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('common.date_to') || 'تاريخ إلى'}
                </label>
                <input
                  type="date"
                  value={dateTo}
                  onChange={(e) => setDateTo(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        )}

        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full" dir={isRTL ? 'rtl' : 'ltr'}>
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700 text-right">رقم الحساب</th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700 text-right">اسم الحساب</th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700 text-right">مدين</th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700 text-right">دائن</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {data.map((entry) => (
                  <tr key={entry.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900">{entry.accountCode}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{entry.accountName}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 text-right">
                      {entry.debit > 0 ? formatNumber(entry.debit) : '-'}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900 text-right">
                      {entry.credit > 0 ? formatNumber(entry.credit) : '-'}
                    </td>
                  </tr>
                ))}
                {/* Totals Row */}
                <tr className="bg-gray-100 font-semibold">
                  <td className="px-4 py-3 text-sm text-gray-900" colSpan={2}>الإجمالي</td>
                  <td className="px-4 py-3 text-sm text-gray-900 text-right">{formatNumber(totals.debit)}</td>
                  <td className="px-4 py-3 text-sm text-gray-900 text-right">{formatNumber(totals.credit)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};
