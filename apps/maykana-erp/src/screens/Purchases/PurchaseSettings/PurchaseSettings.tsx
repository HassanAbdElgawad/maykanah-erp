import { useState } from 'react';
import { Layout } from '@/components/Layout';

export function PurchaseSettings() {
  const [allowQuantityVariation, setAllowQuantityVariation] = useState(true);
  const [requirePurchaseOrder, setRequirePurchaseOrder] = useState(true);
  const [maintainSamePrice, setMaintainSamePrice] = useState(true);

  return (
    <Layout>
      <div className="min-h-screen bg-[#f8faf9] font-['IBM_Plex_Sans_Arabic']">
        <div className="p-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">اعدادات الشراء</h1>
          </div>

          {/* Settings List */}
          <div className="space-y-4">
            {/* Setting 1 */}
            <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-between">
              <div className="flex-1">
                <label
                  htmlFor="allowQuantityVariation"
                  className="text-gray-900 text-base cursor-pointer"
                >
                  السماح في طلب استلام المواد باستلام كميات سواء بالزيادة او بالنقصان
                </label>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">نعم</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    id="allowQuantityVariation"
                    type="checkbox"
                    checked={allowQuantityVariation}
                    onChange={(e) => setAllowQuantityVariation(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                </label>
              </div>
            </div>

            {/* Setting 2 */}
            <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-between">
              <div className="flex-1">
                <label
                  htmlFor="requirePurchaseOrder"
                  className="text-gray-900 text-base cursor-pointer"
                >
                  هل امر الشراء مطلوب لإنشاء فاتورة
                </label>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">نعم</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    id="requirePurchaseOrder"
                    type="checkbox"
                    checked={requirePurchaseOrder}
                    onChange={(e) => setRequirePurchaseOrder(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                </label>
              </div>
            </div>

            {/* Setting 3 */}
            <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-between">
              <div className="flex-1">
                <label
                  htmlFor="maintainSamePrice"
                  className="text-gray-900 text-base cursor-pointer"
                >
                  حافظ على نفس السعر طوال دورة المشتريات
                </label>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">نعم</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    id="maintainSamePrice"
                    type="checkbox"
                    checked={maintainSamePrice}
                    onChange={(e) => setMaintainSamePrice(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
