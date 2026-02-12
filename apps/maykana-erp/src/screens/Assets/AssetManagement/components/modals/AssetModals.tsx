import { Button } from '@/components/ui/button';
import { TogglerWithLabel } from '@/components/ui/TogglerWithLabel';

interface AssetModalsProps {
  // Reset Depreciation Modal
  isResetDepreciationModalOpen: boolean;
  onCloseResetDepreciation: () => void;

  // Change Method Modal
  isChangeMethodModalOpen: boolean;
  onCloseChangeMethod: () => void;
  depreciationMethod: string;
  setDepreciationMethod: (value: string) => void;

  // Change Payments Modal
  isChangePaymentsModalOpen: boolean;
  onCloseChangePayments: () => void;
  paymentMonths: number;
  setPaymentMonths: (value: number) => void;

  // Create Maintenance Request Modal
  isCreateMaintenanceModalOpen: boolean;
  onCloseCreateMaintenance: () => void;

  // Add Maintenance Record Modal
  isAddMaintenanceRecordModalOpen: boolean;
  onCloseAddMaintenanceRecord: () => void;

  // Edit Asset Value Modal
  isEditAssetValueModalOpen: boolean;
  onCloseEditAssetValue: () => void;

  // Disposal Modal
  isDisposalModalOpen: boolean;
  onCloseDisposal: () => void;

  // Utility function
  formatCurrency: (value: number) => React.ReactNode;
}

export function AssetModals({
  isResetDepreciationModalOpen,
  onCloseResetDepreciation,
  isChangeMethodModalOpen,
  onCloseChangeMethod,
  depreciationMethod,
  setDepreciationMethod,
  isChangePaymentsModalOpen,
  onCloseChangePayments,
  paymentMonths,
  setPaymentMonths,
  isCreateMaintenanceModalOpen,
  onCloseCreateMaintenance,
  isAddMaintenanceRecordModalOpen,
  onCloseAddMaintenanceRecord,
  isEditAssetValueModalOpen,
  onCloseEditAssetValue,
  isDisposalModalOpen,
  onCloseDisposal,
  formatCurrency,
}: AssetModalsProps) {
  return (
    <>
      {/* Reset Depreciation Modal */}
      {isResetDepreciationModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">⚠️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">هل تريد إعادة الضبط؟</h3>
              <p className="text-gray-600 mb-6">
                سيتم حذف كل سجلات الإهلاك للأصل، ولا يمكن التراجع
              </p>
              <div className="flex gap-3 w-full">
                <Button
                  className="flex-1 bg-[#11383f] hover:bg-[#0f2f35] text-white"
                  onClick={onCloseResetDepreciation}
                >
                  إعادة ضبط الإهلاك
                </Button>
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={onCloseResetDepreciation}
                >
                  لا أريد
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Change Method Modal */}
      {isChangeMethodModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">تغيير طريقة الإهلاك</h3>
              <button
                onClick={onCloseChangeMethod}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                طريقة الإهلاك
              </label>
              <select
                value={depreciationMethod}
                onChange={(e) => setDepreciationMethod(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
              >
                <option value="مستقيمة">مستقيمة</option>
                <option value="متناقصة">متناقصة</option>
              </select>
            </div>
            <div className="flex gap-3">
              <Button
                className="flex-1 bg-[#11383f] hover:bg-[#0f2f35] text-white"
                onClick={onCloseChangeMethod}
              >
                حفظ
              </Button>
              <Button
                variant="outline"
                className="flex-1"
                onClick={onCloseChangeMethod}
              >
                إغلاق
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Change Payments Modal */}
      {isChangePaymentsModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">تغيير عدد الدفعات</h3>
              <button
                onClick={onCloseChangePayments}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                عدد الأشهر/السنوات الذي سيتم الإهلاك حاليًا
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={paymentMonths}
                  onChange={(e) => setPaymentMonths(Number(e.target.value))}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
                />
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11383f] focus:border-transparent">
                  <option value="شهر">شهر</option>
                  <option value="سنة">سنة</option>
                </select>
              </div>
              <p className="text-xs text-gray-500 mt-2">يتم تحديث الدفعات القادمة تلقائيًا</p>
            </div>
            <div className="mb-6 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-gray-700">
                بمجرد ضغطك على حفظ سيتم إعادة احتساب الإهلاك على اللغة الجديدة.
              </p>
            </div>
            <div className="flex gap-3">
              <Button
                className="flex-1 bg-[#11383f] hover:bg-[#0f2f35] text-white"
                onClick={onCloseChangePayments}
              >
                حفظ
              </Button>
              <Button
                variant="outline"
                className="flex-1"
                onClick={onCloseChangePayments}
              >
                إغلاق
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Create Maintenance Request Modal */}
      {isCreateMaintenanceModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">إنشاء طلب صيانة</h3>
              <button
                onClick={onCloseCreateMaintenance}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              {/* نوع الطلب */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">نوع الطلب</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11383f] focus:border-transparent">
                  <option>عطل</option>
                  <option>صيانة دورية</option>
                  <option>فحص</option>
                </select>
              </div>

              {/* صاحب الطلب */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">صاحب الطلب</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11383f] focus:border-transparent">
                  <option>يوسف الحمراني</option>
                  <option>أحمد السعيد</option>
                </select>
              </div>

              {/* مستوى الأهمية */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">مستوى الأهمية</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11383f] focus:border-transparent">
                  <option className="text-red-600">عالي</option>
                  <option>متوسط</option>
                  <option>منخفض</option>
                </select>
              </div>

              {/* فريق الصيانة */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">فريق الصيانة</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11383f] focus:border-transparent">
                  <option>يوسف الحمراني</option>
                  <option>فريق الصيانة الداخلي</option>
                </select>
              </div>

              {/* وصف العطل */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">وصف العطل</label>
                <textarea
                  rows={4}
                  placeholder="عطل في تشغيل الحاسوب"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11383f] focus:border-transparent resize-none"
                ></textarea>
              </div>

              {/* صور أو مرفقات */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">صور أو مرفقات</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <svg className="w-10 h-10 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="text-sm text-gray-600">سحب وإفلات أو إضغط هنا للتحميل</p>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
                      <span className="text-sm text-gray-700">صورة - شاشة رفام</span>
                      <span className="text-xs text-gray-500">JPEG 09:23 - 2025 فبراير 2ت</span>
                      <button className="text-red-500 hover:text-red-700">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                      <button className="text-gray-500 hover:text-gray-700">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <Button
                className="flex-1 bg-[#11383f] hover:bg-[#0f2f35] text-white"
                onClick={onCloseCreateMaintenance}
              >
                إرسال الطلب
              </Button>
              <Button
                variant="outline"
                className="flex-1"
                onClick={onCloseCreateMaintenance}
              >
                إغلاق
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Add Maintenance Record Modal */}
      {isAddMaintenanceRecordModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">إضافة سجل صيانة</h3>
              <button
                onClick={onCloseAddMaintenanceRecord}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              {/* نوع الصيانة */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">نوع الصيانة</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11383f] focus:border-transparent">
                  <option>خارجية</option>
                  <option>داخلية</option>
                </select>
              </div>

              {/* فريق الصيانة */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">فريق الصيانة</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11383f] focus:border-transparent">
                  <option>شركة الوفاء لصيانة الحواسيب</option>
                  <option>فريق الصيانة الداخلي</option>
                </select>
              </div>

              {/* التكلفة */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">التكلفة</label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    defaultValue="450"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
                  />
                  <span className="text-gray-700">ر</span>
                </div>
              </div>

              {/* وصف الصيانة */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">وصف الصيانة</label>
                <textarea
                  rows={4}
                  placeholder="صيانة عطل في ذاكرة الحاسوب"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11383f] focus:border-transparent resize-none"
                ></textarea>
              </div>

              {/* صور أو مرفقات */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">صور أو مرفقات</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <svg className="w-10 h-10 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="text-sm text-gray-600">سحب وإفلات أو إضغط هنا للتحميل</p>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
                      <span className="text-sm text-gray-700">صورة - شاشة رفام</span>
                      <span className="text-xs text-gray-500">JPEG 09:23 - 2025 فبراير 2ت</span>
                      <button className="text-red-500 hover:text-red-700">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                      <button className="text-gray-500 hover:text-gray-700">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <Button
                className="flex-1 bg-[#11383f] hover:bg-[#0f2f35] text-white"
                onClick={onCloseAddMaintenanceRecord}
              >
                إرسال الطلب
              </Button>
              <Button
                variant="outline"
                className="flex-1"
                onClick={onCloseAddMaintenanceRecord}
              >
                إغلاق
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Asset Value Modal */}
      {isEditAssetValueModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">تعديل قيمة الأصل</h3>
              <button
                onClick={onCloseEditAssetValue}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              {/* القيمة الحالية والجديدة */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">القيمة الحالية</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      defaultValue="6,790"
                      disabled
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
                    />
                    <span className="text-gray-700">ر</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">القيمة الجديدة</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      defaultValue="9,790"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
                    />
                    <span className="text-gray-700">ر</span>
                  </div>
                </div>
              </div>

              {/* مقدار التعديل وقيمة الزيادة */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">مقدار التعديل</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11383f] focus:border-transparent">
                    <option>زيادة القيمة</option>
                    <option>نقصان القيمة</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">قيمة الزيادة</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      defaultValue="3,000"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
                    />
                    <span className="text-gray-700">ر</span>
                  </div>
                </div>
              </div>

              {/* سبب التعديل وتاريخ التعديل */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">سبب التعديل</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11383f] focus:border-transparent">
                    <option>زيادة القيمة</option>
                    <option>تحسينات</option>
                    <option>إصلاح</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">تاريخ التعديل</label>
                  <input
                    type="date"
                    defaultValue="2025-11-30"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
                  />
                </div>
              </div>

              {/* التأثير على الإهلاك */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">التأثير على الإهلاك</span>
                <TogglerWithLabel
                  isActive={true}
                  onToggle={() => {}}
                  activeLabel="نعم"
                  inactiveLabel="لا"
                />
              </div>

              {/* سبب التعديل */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">سبب التعديل</label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11383f] focus:border-transparent resize-none"
                ></textarea>
              </div>

              {/* زيادة القيمة */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">زيادة القيمة</label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11383f] focus:border-transparent resize-none"
                ></textarea>
              </div>

              {/* صور أو مرفقات */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">صور أو مرفقات</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <svg className="w-10 h-10 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="text-sm text-gray-600">سحب وإفلات أو إضغط هنا للتحميل</p>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
                      <span className="text-sm text-gray-700">صورة - شاشة رفام</span>
                      <span className="text-xs text-gray-500">JPEG 09:23 - 2025 فبراير 2ت</span>
                      <button className="text-red-500 hover:text-red-700">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                      <button className="text-gray-500 hover:text-gray-700">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <Button
                className="flex-1 bg-[#11383f] hover:bg-[#0f2f35] text-white"
                onClick={onCloseEditAssetValue}
              >
                حفظ التعديل
              </Button>
              <Button
                variant="outline"
                className="flex-1"
                onClick={onCloseEditAssetValue}
              >
                إغلاق
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Disposal Modal */}
      {isDisposalModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">تعديل قيمة الأصل</h3>
              <button
                onClick={onCloseDisposal}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              {/* نوع الاستبعاد وسبب البيع */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">نوع الاستبعاد</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11383f] focus:border-transparent">
                    <option>بيع</option>
                    <option>استبعاد</option>
                    <option>تلف</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">سبب البيع</label>
                  <input
                    type="text"
                    defaultValue="بيع"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
                  />
                </div>
              </div>

              {/* القيمة الدفترية الحالية والشركة الشارية */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">القيمة الدفترية الحالية</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      defaultValue="2,000"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
                    />
                    <span className="text-gray-700">ر</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">الشركة الشارية</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      defaultValue="3,000"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
                    />
                    <span className="text-gray-700">ر</span>
                  </div>
                </div>
              </div>

              {/* التاريخ */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">التاريخ</label>
                <input
                  type="date"
                  defaultValue="2025-11-30"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11383f] focus:border-transparent"
                />
              </div>

              {/* سبب الاستبعاد */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">سبب الاستبعاد</label>
                <textarea
                  rows={3}
                  placeholder="بيع الأصل"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11383f] focus:border-transparent resize-none"
                ></textarea>
              </div>

              {/* صور أو مرفقات */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">صور أو مرفقات</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <svg className="w-10 h-10 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="text-sm text-gray-600">سحب وإفلات أو إضغط هنا للتحميل</p>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
                      <span className="text-sm text-gray-700">فاتورة بيع</span>
                      <span className="text-xs text-gray-500">PDF 09:23 - 2025 فبراير 2ت</span>
                      <button className="text-red-500 hover:text-red-700">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                      <button className="text-gray-500 hover:text-gray-700">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Summary Section */}
              <div className="border-t border-gray-200 pt-4 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">القيمة الدفترية</span>
                  <span className="text-base font-semibold text-gray-900">{formatCurrency(1200)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">سعر البيع (بدون ضريبة)</span>
                  <span className="text-base font-semibold text-gray-900">{formatCurrency(2000)}</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                  <span className="text-sm font-medium text-gray-700">ربح/خسارة</span>
                  <span className="text-base font-bold text-green-600">+ {formatCurrency(400)}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <Button
                className="flex-1 bg-[#11383f] hover:bg-[#0f2f35] text-white"
                onClick={onCloseDisposal}
              >
                حفظ
              </Button>
              <Button
                variant="outline"
                className="flex-1"
                onClick={onCloseDisposal}
              >
                إغلاق
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
