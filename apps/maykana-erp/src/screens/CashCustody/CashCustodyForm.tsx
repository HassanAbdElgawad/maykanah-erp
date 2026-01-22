import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { buttonClasses } from '../../styles';
import { getCustodyItemsSampleData } from '../../data';

export const CashCustodyForm = (): JSX.Element => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const isRTL = language === 'ar';
  
  const [advanceNumber, setAdvanceNumber] = useState('ADV-0005');
  const [employee, setEmployee] = useState('');
  const [date, setDate] = useState('');
  const [requestedAmount, setRequestedAmount] = useState('5,000');
  const [employeeBalance, setEmployeeBalance] = useState('500');
  
  const custodyItems = getCustodyItemsSampleData();

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900" dir={isRTL ? 'rtl' : 'ltr'}>
            طلب عهدة نقدية جديدة
          </h1>
          <div className="flex gap-2">
            <button className={buttonClasses.secondary}>
              أضف مرفقات
              <span className="mr-2 bg-gray-200 text-gray-700 px-2 py-0.5 rounded text-xs">2</span>
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" dir={isRTL ? 'rtl' : 'ltr'}>
            {/* رقم العهدة */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                رقم العهدة
              </label>
              <input
                type="text"
                value={advanceNumber}
                onChange={(e) => setAdvanceNumber(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                dir={isRTL ? 'rtl' : 'ltr'}
              />
            </div>

            {/* اسم الموظف */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                اسم الموظف
              </label>
              <select
                value={employee}
                onChange={(e) => setEmployee(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                <option value="">محمد الحمادي</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6" dir={isRTL ? 'rtl' : 'ltr'}>
            {/* تاريخ الاستلام */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                تاريخ الاستلام
              </label>
              <input
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="09:30 -- 10/11/2025"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                dir={isRTL ? 'rtl' : 'ltr'}
              />
            </div>

            <div></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6" dir={isRTL ? 'rtl' : 'ltr'}>
            {/* المبلغ المطلوب */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                المبلغ المطلوب
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={requestedAmount}
                  onChange={(e) => setRequestedAmount(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  dir={isRTL ? 'rtl' : 'ltr'}
                />
                <span className="absolute left-3 top-2.5 text-gray-500">ر.س</span>
              </div>
            </div>

            {/* المبلغ المتبقي في عهدة الموظف */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                المبلغ المتبقي في عهدة الموظف
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={employeeBalance}
                  onChange={(e) => setEmployeeBalance(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  dir={isRTL ? 'rtl' : 'ltr'}
                />
                <span className="absolute left-3 top-2.5 text-gray-500">ر.س</span>
              </div>
            </div>
          </div>
        </div>

        {/* Custody Items Section */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between mb-4" dir={isRTL ? 'rtl' : 'ltr'}>
            <h2 className="text-lg font-semibold text-gray-900">بنود العهدة</h2>
            <button className={buttonClasses.secondary}>إظهار/إخفاء أعمدة</button>
          </div>

          {/* Items Table */}
          <div className="overflow-x-auto">
            <table className="w-full" dir={isRTL ? 'rtl' : 'ltr'}>
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    بند العهدة
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    المبلغ المخصص
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    تعليق
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {custodyItems.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                        <option>{item.item}</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <input
                        type="text"
                        value={item.amount.toLocaleString('ar-SA')}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        dir={isRTL ? 'rtl' : 'ltr'}
                      />
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <input
                        type="text"
                        value={item.description}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        dir={isRTL ? 'rtl' : 'ltr'}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary */}
          <div className="mt-6 grid grid-cols-2 gap-4" dir={isRTL ? 'rtl' : 'ltr'}>
            <div></div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>إجمالي المبالغ الفعلية</span>
                <span className="font-semibold">ر.س 2,000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>إجمالي المبالغ المتوزعة</span>
                <span className="font-semibold">ر.س 2,000</span>
              </div>
              <div className="flex justify-between text-sm text-green-600">
                <span>المتبقي</span>
                <span className="font-semibold">ر.س 3,000.0</span>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="mt-6" dir={isRTL ? 'rtl' : 'ltr'}>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              ملاحظات عامة
            </label>
            <textarea
              rows={3}
              placeholder="ملاحظاتك هنا ..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              dir={isRTL ? 'rtl' : 'ltr'}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-between">
          <button
            onClick={() => navigate('/accounting/cash-custody')}
            className={buttonClasses.secondary}
          >
            إرسال الطلب
          </button>
        </div>
      </div>
    </Layout>
  );
};
