import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { buttonClasses } from '@/styles';
import { getInvoicesSampleData } from '@/data';

export const ReceiptVoucherForm = (): JSX.Element => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const isRTL = language === 'ar';
  
  const [voucherNumber, setVoucherNumber] = useState('RCV-0005');
  const [client, setClient] = useState('');
  const [date, setDate] = useState('');
  const [totalAmount, setTotalAmount] = useState('2,000');
  const [paymentMethod, setPaymentMethod] = useState('');
  
  const invoices = getInvoicesSampleData();

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900" dir={isRTL ? 'rtl' : 'ltr'}>
            إنشاء سند قبض جديد
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

            {/* العميل */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                العميل
              </label>
              <select
                value={client}
                onChange={(e) => setClient(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                <option value="">نقدي</option>
                <option value="محمد الحمادي">محمد الحمادي</option>
              </select>
            </div>

            {/* طريقة الاستلام */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                طريقة الاستلام
              </label>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                <option value="">نقدي</option>
                <option value="bank">بنكي</option>
                <option value="check">شيك</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6" dir={isRTL ? 'rtl' : 'ltr'}>
            {/* تاريخ إنشاء السند */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                تاريخ إنشاء السند
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

            {/* المبلغ الإجمالي */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                المبلغ الإجمالي
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
          </div>
        </div>

        {/* Invoices Section */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between mb-4" dir={isRTL ? 'rtl' : 'ltr'}>
            <h2 className="text-lg font-semibold text-gray-900">الفواتير المرتبطة</h2>
            <div className="flex gap-2">
              <button className={buttonClasses.secondary}>توزيع تلقائي للمبالغ</button>
              <button className={buttonClasses.secondary}>مسح التوزيع التلقائي</button>
              <button className={buttonClasses.secondary}>إظهار/إخفاء أعمدة</button>
            </div>
          </div>

          {/* Invoices Table */}
          <div className="overflow-x-auto">
            <table className="w-full" dir={isRTL ? 'rtl' : 'ltr'}>
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    فاتورة
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    تاريخ الإصدار
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    تاريخ الاستحقاق
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    إجمالي الفاتورة
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    المتبقي
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    المدفوع الآن
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    الحالة
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {invoices.map((invoice, _index) => (
                  <tr key={invoice.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {invoice.invoiceNumber}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {invoice.issueDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {invoice.dueDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {invoice.totalAmount.toLocaleString('ar-SA')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {invoice.paidAmount.toLocaleString('ar-SA')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <input
                        type="text"
                        value={invoice.paidAmount.toLocaleString('ar-SA')}
                        className="w-24 px-2 py-1 border border-gray-300 rounded"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        invoice.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {invoice.status === 'completed' ? 'مكتمل' : 'مدفوع جزئيا'}
                      </span>
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
                <span>إجمالي المبالغ المتوزعة</span>
                <span className="font-semibold">ر.س 2,000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>المبلغ المدفوع</span>
                <span className="font-semibold">ر.س 2,000</span>
              </div>
              <div className="flex justify-between text-sm text-green-600">
                <span>المتبقي</span>
                <span className="font-semibold">ر.س 00.0</span>
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
            onClick={() => navigate('/accounting/receipt-vouchers')}
            className={buttonClasses.secondary}
          >
            إرسال الطلب
          </button>
        </div>
      </div>
    </Layout>
  );
};
