import { useState } from 'react';
import { Layout } from '../../components/Layout';

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
                <p className="text-gray-900 text-base">
                  السماح في طلب استلام المواد باستلام كميات سواء بالزيادة او بالنقصان
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">نعم</span>
                <button
                  onClick={() => setAllowQuantityVariation(!allowQuantityVariation)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    allowQuantityVariation ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      allowQuantityVariation ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Setting 2 */}
            <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-between">
              <div className="flex-1">
                <p className="text-gray-900 text-base">هل امر الشراء مطلوب لإنشاء فاتورة</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">نعم</span>
                <button
                  onClick={() => setRequirePurchaseOrder(!requirePurchaseOrder)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    requirePurchaseOrder ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      requirePurchaseOrder ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Setting 3 */}
            <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-between">
              <div className="flex-1">
                <p className="text-gray-900 text-base">حافظ على نفس السعر طوال دورة المشتريات</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">نعم</span>
                <button
                  onClick={() => setMaintainSamePrice(!maintainSamePrice)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    maintainSamePrice ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      maintainSamePrice ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
