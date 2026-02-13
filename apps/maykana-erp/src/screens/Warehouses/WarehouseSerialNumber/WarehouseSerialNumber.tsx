import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, Download, Columns3, MoreVertical, Eye, Edit, XCircle, CheckCircle } from 'lucide-react';
import { buttonClasses } from '@/styles';
import { getWarehouseSerialNumberSampleData, type SerialNumber } from '@/data/warehouses/warehouse-serial-number.data';

export const WarehouseSerialNumber = (): JSX.Element => {
  const navigate = useNavigate();
  const [items, setItems] = useState<SerialNumber[]>(() => getWarehouseSerialNumberSampleData());
  const [searchQuery, setSearchQuery] = useState('');
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [menuPosition, setMenuPosition] = useState<{ top: number; left: number } | null>(null);
  const [selectedItem, setSelectedItem] = useState<SerialNumber | null>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [actionType, setActionType] = useState<'activate' | 'deactivate'>('deactivate');
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenuId(null);
        setMenuPosition(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMenuClick = (e: React.MouseEvent, item: SerialNumber) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const menuWidth = 192;
    const menuHeight = item.isActive ? 140 : 100;

    let left = rect.left + window.scrollX - menuWidth + 40;
    let top = rect.bottom + window.scrollY + 4;

    if (left < 0) left = rect.right + window.scrollX;
    if (left + menuWidth > window.innerWidth) {
      left = window.innerWidth - menuWidth - 10;
    }

    if (top + menuHeight > window.innerHeight + window.scrollY) {
      top = rect.top + window.scrollY - menuHeight - 4;
    }

    setMenuPosition({ top, left });
    setOpenMenuId(item.id);
    setSelectedItem(item);
  };

  const handleViewDetails = () => {
    setIsDetailsModalOpen(true);
    setOpenMenuId(null);
  };

  const handleEdit = () => {
    if (selectedItem) {
      navigate(`/warehouses/serial-number/edit/${selectedItem.id}`);
    }
  };

  const handleStatusChange = (type: 'activate' | 'deactivate') => {
    setActionType(type);
    setIsConfirmModalOpen(true);
    setOpenMenuId(null);
  };

  const confirmStatusChange = () => {
    if (selectedItem) {
      setItems(items.map(item =>
        item.id === selectedItem.id
          ? { ...item, isActive: actionType === 'activate' }
          : item
      ));
    }
    setIsConfirmModalOpen(false);
  };

  const filteredItems = items.filter(item =>
    item.serialNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.itemCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.itemName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('ar-SA');
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Action Bar */}
        <div className="flex items-center justify-between gap-2 mb-4" dir="rtl">
          <div className="relative flex-1 max-w-[450px]">
            <Input
              type="text"
              placeholder="ابحث من هنا (الرقم المتسلسل، كود الصنف، اسم الصنف ...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-[43px] pr-10 bg-white border-[#e2e2e2] rounded-lg text-sm"
            />
            <Search className="absolute top-1/2 -translate-y-1/2 right-3 w-4 h-4 text-[#99a09e]" />
          </div>

          <div className="flex items-center gap-2">
            <Button className="h-[43px] px-[13px] bg-slate-50 hover:bg-slate-100 text-[#092e32] gap-2 rounded-lg border border-[#e2e2e2]">
              <Columns3 className="w-3.5 h-3.5" />
              <span className="text-base">إظهار/إخفاء أعمدة</span>
            </Button>

            <Button className="h-[43px] px-[10px] bg-slate-50 hover:bg-slate-100 text-[#092e32] gap-1.5 rounded-lg border border-[#e2e2e2]">
              <Filter className="w-[18px] h-[18px]" />
              <span className="text-base">فلتر</span>
            </Button>

            <Button className="h-[43px] px-[10px] bg-slate-50 hover:bg-slate-100 text-[#092e32] gap-[5px] rounded-lg border border-[#e2e2e2]">
              <Download className="w-4 h-4" />
              <span className="text-base">تحميل</span>
            </Button>

            <button
              onClick={() => navigate('/warehouses/serial-number/create')}
              className={buttonClasses.primary}
            >
              + إضافة رقم متسلسل
            </button>
          </div>
        </div>

        {/* Table */}
        <Card className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full" dir="rtl">
              <thead>
                <tr className="bg-[#F1F5F980] border-b border-gray-200">
                  <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">الرقم المتسلسل</th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">كود الصنف</th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">اسم الصنف</th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">تاريخ انتهاء الضمان</th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">تاريخ انتهاء الاشتراك</th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">الحالة</th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">العمليات</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredItems.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900">{item.serialNumber}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{item.itemCode}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{item.itemName}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{formatDate(item.warrantyExpiryDate)}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{formatDate(item.subscriptionExpiryDate)}</td>
                    <td className="px-4 py-3 text-sm">
                      {item.isActive ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          نشط
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                          غير نشط
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={(e) => handleMenuClick(e, item)}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <MoreVertical className="w-5 h-5 text-gray-600" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              لا توجد أرقام متسلسلة
            </div>
          )}
        </Card>

        {/* Dropdown Menu */}
        {openMenuId && menuPosition && selectedItem && (
          <div
            ref={menuRef}
            className="fixed w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-[100]"
            style={{ top: `${menuPosition.top}px`, left: `${menuPosition.left}px` }}
          >
            <div className="py-1">
              <button
                onClick={handleViewDetails}
                className="w-full px-4 py-2 text-right text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
              >
                <Eye className="w-4 h-4" />
                عرض التفاصيل
              </button>
              {selectedItem.isActive && (
                <button
                  onClick={handleEdit}
                  className="w-full px-4 py-2 text-right text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                >
                  <Edit className="w-4 h-4" />
                  تعديل
                </button>
              )}
              {selectedItem.isActive ? (
                <button
                  onClick={() => handleStatusChange('deactivate')}
                  className="w-full px-4 py-2 text-right text-sm text-red-600 hover:bg-gray-100 flex items-center gap-2"
                >
                  <XCircle className="w-4 h-4" />
                  إلغاء التفعيل
                </button>
              ) : (
                <button
                  onClick={() => handleStatusChange('activate')}
                  className="w-full px-4 py-2 text-right text-sm text-green-600 hover:bg-gray-100 flex items-center gap-2"
                >
                  <CheckCircle className="w-4 h-4" />
                  تفعيل
                </button>
              )}
            </div>
          </div>
        )}

        {/* Details Modal */}
        {isDetailsModalOpen && selectedItem && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" dir="rtl">
            <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-[#093738]">تفاصيل الرقم المتسلسل</h2>
                <button
                  onClick={() => setIsDetailsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <XCircle className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">الرقم المتسلسل</label>
                    <p className="mt-1 text-sm text-gray-900">{selectedItem.serialNumber}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">كود الصنف</label>
                    <p className="mt-1 text-sm text-gray-900">{selectedItem.itemCode}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">اسم الصنف</label>
                    <p className="mt-1 text-sm text-gray-900">{selectedItem.itemName}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">تاريخ انتهاء الضمان</label>
                    <p className="mt-1 text-sm text-gray-900">{formatDate(selectedItem.warrantyExpiryDate)}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">تاريخ انتهاء الاشتراك</label>
                    <p className="mt-1 text-sm text-gray-900">{formatDate(selectedItem.subscriptionExpiryDate)}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">الحالة</label>
                    <p className="mt-1 text-sm text-gray-900">{selectedItem.isActive ? 'نشط' : 'غير نشط'}</p>
                  </div>
                </div>
              </div>

              <div className="sticky bottom-0 bg-gray-50 px-6 py-4 flex justify-end gap-3 border-t border-gray-200">
                <Button
                  onClick={() => setIsDetailsModalOpen(false)}
                  variant="outline"
                  className="border-[#e2e2e2]"
                >
                  إغلاق
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Confirmation Modal */}
        {isConfirmModalOpen && selectedItem && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" dir="rtl">
            <div className="bg-white rounded-lg w-full max-w-md p-6">
              <div className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                  actionType === 'activate' ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  {actionType === 'activate' ? (
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  ) : (
                    <XCircle className="w-8 h-8 text-red-600" />
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {actionType === 'activate' ? 'تفعيل الرقم المتسلسل' : 'إلغاء تفعيل الرقم المتسلسل'}
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  {actionType === 'activate'
                    ? `هل أنت متأكد من تفعيل "${selectedItem.serialNumber}"؟`
                    : `هل أنت متأكد من إلغاء تفعيل "${selectedItem.serialNumber}"؟`
                  }
                </p>
                <div className="flex gap-3 w-full">
                  <Button
                    onClick={confirmStatusChange}
                    className={actionType === 'activate' ? buttonClasses.primary : 'bg-red-600 hover:bg-red-700 text-white'}
                  >
                    تأكيد
                  </Button>
                  <Button
                    onClick={() => setIsConfirmModalOpen(false)}
                    variant="outline"
                    className="flex-1 border-[#e2e2e2]"
                  >
                    إلغاء
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};
