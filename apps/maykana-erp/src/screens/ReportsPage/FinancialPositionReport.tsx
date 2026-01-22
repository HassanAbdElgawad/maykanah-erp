import { useState } from 'react';
import { Layout } from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { Download, Filter } from 'lucide-react';
import { buttonClasses } from '../../styles';
import { 
  getFinancialPositionSampleData,
  type FinancialPositionEntry 
} from '../../data/financial-position.data';

export const FinancialPositionReport = (): JSX.Element => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';
  
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [period, setPeriod] = useState('half-year');
  const [showFilters, setShowFilters] = useState(false);
  
  const data = getFinancialPositionSampleData();

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('ar-SA', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num);
  };

  const getRowStyle = (entry: FinancialPositionEntry) => {
    if (entry.isTotal) {
      return 'bg-gray-100 font-semibold';
    }
    if (entry.level === 2) {
      return 'pr-8';
    }
    return '';
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
              {t('reports.financial_position.title') || 'تقرير المركز المالي'}
            </h1>
            <p className="text-sm text-gray-500 mt-1" dir={isRTL ? 'rtl' : 'ltr'}>
              {t('reports.financial_position.subtitle') || 'الميزانية العمومية'}
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4" dir={isRTL ? 'rtl' : 'ltr'}>
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
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('reports.financial_position.period') || 'الفترة'}
                </label>
                <select 
                  value={period}
                  onChange={(e) => setPeriod(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="quarter">{t('reports.financial_position.quarter') || 'ربع سنة'}</option>
                  <option value="half-year">{t('reports.financial_position.half_year') || 'نصف سنة'}</option>
                  <option value="year">{t('reports.financial_position.year') || 'سنة'}</option>
                </select>
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
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700 text-right">الحساب</th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700 text-right">المبلغ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {data.map((entry) => (
                  <tr key={entry.id} className={`hover:bg-gray-50 ${getRowStyle(entry)}`}>
                    <td className={`px-4 py-3 text-sm text-gray-900 ${entry.level === 2 ? 'pr-8' : ''}`}>
                      {entry.account}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900 text-right">
                      {entry.amount > 0 ? formatNumber(entry.amount) : '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};
