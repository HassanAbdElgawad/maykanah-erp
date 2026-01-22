import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { Filter, Search, Upload, RowsIcon } from 'lucide-react';
import { buttonClasses } from '../../styles';
import { getCashCustodySampleData } from '../../data';

export const CashCustody = (): JSX.Element => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const isRTL = language === 'ar';
  
  const [searchTerm, setSearchTerm] = useState('');
  const [showDateFilter, setShowDateFilter] = useState(false);
  const [showColumnsFilter, setShowColumnsFilter] = useState(false);
  const [showExportOptions, setShowExportOptions] = useState(false);
  
  const advances = getCashCustodySampleData();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'text-green-600 bg-green-50';
      case 'pending':
        return 'text-yellow-600 bg-yellow-50';
      case 'rejected':
        return 'text-red-600 bg-red-50';
      case 'settled':
        return 'text-blue-600 bg-blue-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'approved':
        return 'معتمدة';
      case 'pending':
        return 'قيد المراجعة';
      case 'rejected':
        return 'غير معتمدة';
      case 'settled':
        return 'مسددة';
      default:
        return status;
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header with Actions */}
        <div className="flex items-center justify-end gap-3">
          {/* Show/Hide Columns Button */}
          <button
            onClick={() => {
              setShowColumnsFilter(!showColumnsFilter);
              setShowExportOptions(false);
              setShowDateFilter(false);
            }}
            className={`${buttonClasses.secondary} flex items-center gap-2`}
          >
            <RowsIcon className="w-4 h-4" />
            إظهار/إخفاء أعمدة
          </button>

          {/* Export Button */}
          <button
            onClick={() => {
              setShowExportOptions(!showExportOptions);
              setShowColumnsFilter(false);
              setShowDateFilter(false);
            }}
            className={`${buttonClasses.secondary} flex items-center gap-2`}
          >
            <Upload className="w-4 h-4" />
            تصدير
          </button>

          {/* Filter Button */}
          <button
            onClick={() => {
              setShowDateFilter(!showDateFilter);
              setShowColumnsFilter(false);
              setShowExportOptions(false);
            }}
            className={`${buttonClasses.secondary} flex items-center gap-2`}
          >
            <Filter className="w-4 h-4" />
            فلتر
          </button>

          {/* New Custody Button */}
          <button
            onClick={() => navigate('/accounting/cash-custody/create')}
            className={`${buttonClasses.primary} whitespace-nowrap`}
          >
            طلب عهدة جديدة
          </button>
        </div>

        {/* Search Filter */}
        {showDateFilter && (
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="relative">
              <Search className={`absolute top-3 ${isRTL ? 'right-3' : 'left-3'} w-5 h-5 text-gray-400`} />
              <input
                type="text"
                placeholder="ابحث من هنا (رقم العهدة، التاريخ، اسم الموظف، ...)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full ${isRTL ? 'pr-10 text-right' : 'pl-10'} py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                dir={isRTL ? 'rtl' : 'ltr'}
              />
            </div>
          </div>
        )}

        {/* Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full" dir={isRTL ? 'rtl' : 'ltr'}>
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    رقم العهدة
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    تاريخ الطلب
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    اسم الموظف
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    المبلغ المدفوع
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    حالة العهدة
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    آخر تحديث
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {advances.map((advance) => (
                  <tr key={advance.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {advance.advanceNumber}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {advance.requestDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {advance.employeeName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {advance.totalAmount.toLocaleString('ar-SA', { minimumFractionDigits: 2 })}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(advance.status)}`}>
                        {getStatusText(advance.status)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {advance.lastUpdate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="text-gray-600 hover:text-gray-900">⋮</button>
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
