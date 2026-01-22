import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { buttonClasses } from '../../styles';
import { getAccountsSampleData } from '../../data';

export const PaymentVoucherForm = (): JSX.Element => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const isRTL = language === 'ar';
  
  const [voucherNumber, setVoucherNumber] = useState('PAY-0005');
  const [beneficiary, setBeneficiary] = useState('');
  const [paymentType, setPaymentType] = useState('');
  const [totalAmount, setTotalAmount] = useState('2,000');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [costCenter, setCostCenter] = useState('');
  
  const accounts = getAccountsSampleData();

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900" dir={isRTL ? 'rtl' : 'ltr'}>
            إنشاء سند دفع جديد
          </h1>
          <div className="flex gap-2">
            <button className={buttonClasses.secondary}>
              أضف مرفقات
              <span className="mr-2 bg-gray-200 text-gray-700 px-2 py-0.5 rounded text-xs">0</span>
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" dir={isRTL ? 'rtl' : 'ltr'}>
            {/* رقم السند */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                رقم السند
              </label>
              <input
                type="text"
                value={voucherNumber}
                onChange={(e) => setVoucherNumber(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                dir={isRTL ? 'rtl' : 'ltr'}
              />
            </div>

            {/* نوع السند */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                نوع السند
              </label>
              <select
                value={paymentType}
                onChange={(e) => setPaymentType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                <option value="">مورد</option>
                <option value="internal">تحويل داخلي</option>
              </select>
            </div>

            {/* طريقة الدفع */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                طريقة الدفع
              </label>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                <option value="">بنكي</option>
                <option value="cash">نقدي</option>
                <option value="check">شيك</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6" dir={isRTL ? 'rtl' : 'ltr'}>
            {/* اسم المستفيد */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                اسم المستفيد
              </label>
              <select
                value={beneficiary}
                onChange={(e) => setBeneficiary(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                <option value="">شركة فهد</option>
              </select>
            </div>

            {/* مركز التكلفة (اختياري) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                مركز التكلفة (اختياري)
              </label>
              <select
                value={costCenter}
                onChange={(e) => setCostCenter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                <option value="">مركز تكلفة - 1111</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6" dir={isRTL ? 'rtl' : 'ltr'}>
            {/* المبلغ المدفوع */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                المبلغ المدفوع
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={totalAmount}
                  onChange={(e) => setTotalAmount(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  dir={isRTL ? 'rtl' : 'ltr'}
                />
                <span className="absolute left-3 top-2.5 text-gray-500">ر.س</span>
              </div>
            </div>

            {/* هل توجد مصروفات بنكية؟ */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                هل توجد مصروفات بنكية ؟
              </label>
              <div className="flex gap-4 items-center mt-3">
                <label className="flex items-center">
                  <input type="radio" name="bankFees" value="yes" className="mr-2" />
                  <span>نعم</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="bankFees" value="no" className="mr-2" defaultChecked />
                  <span>لا</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Accounts Section */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between mb-4" dir={isRTL ? 'rtl' : 'ltr'}>
            <h2 className="text-lg font-semibold text-gray-900">الحسابات</h2>
          </div>

          {/* Accounts Table */}
          <div className="overflow-x-auto">
            <table className="w-full" dir={isRTL ? 'rtl' : 'ltr'}>
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    الحساب المحول منه
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    الحساب المحول اليه
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {accounts.map((account) => (
                  <tr key={account.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                        <option>{account.accountName} {account.accountNumber}</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <input
                        type="text"
                        value={account.debit.toLocaleString('ar-SA')}
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
                <span>إجمالي المبالغ للحصول</span>
                <span className="font-semibold">ر.س 2,000</span>
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
            onClick={() => navigate('/accounting/payment-vouchers')}
            className={buttonClasses.secondary}
          >
            إرسال الطلب
          </button>
        </div>
      </div>
    </Layout>
  );
};
