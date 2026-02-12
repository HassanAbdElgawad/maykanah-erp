import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, Download, Columns3, MoreVertical, Eye, Edit, XCircle, CheckCircle } from 'lucide-react';
import { buttonClasses } from '@/styles';

interface OpeningBalance {
  id: string;
  code: string;
  productName: string;
  date: string;
  accountName: string;
  balance: number;
  isActive: boolean;
}

export const OpeningBalances = (): JSX.Element => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [menuPosition, setMenuPosition] = useState<{ top: number; left: number } | null>(null);
  const [selectedBalance, setSelectedBalance] = useState<OpeningBalance | null>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [actionType, setActionType] = useState<'activate' | 'deactivate'>('deactivate');
  const menuRef = useRef<HTMLDivElement>(null);

  const [balances, setBalances] = useState<OpeningBalance[]>([
    { id: '1', code: '344390ff', productName: 'مستودع مبين A', date: '13/11/2025', accountName: 'حساب A', balance: 502, isActive: true },
    { id: '2', code: '86A390ff', productName: 'مستودع مبين h', date: '01/11/2025', accountName: 'حساب h', balance: 502, isActive: true },
    { id: '3', code: '225A390ff', productName: 'مستودع مبين ة', date: '10/04/2025', accountName: 'حساب ة', balance: 502, isActive: true },
    { id: '4', code: '42A390ff', productName: 'مستودع مبين f', date: '10/05/2025', accountName: 'حساب f', balance: 502, isActive: true },
    { id: '5', code: '34A390ff', productName: 'مستودع مبين d', date: '11/03/2025', accountName: 'حساب d', balance: 3443, isActive: true },
    { id: '6', code: 'AA390ff', productName: 'مستودع مبين ى', date: '10/01/2025', accountName: 'حساب ى', balance: 744, isActive: true },
    { id: '7', code: 'AA3sd90ff', productName: 'مستودع مبين d', date: '10/03/2025', accountName: 'حساب d', balance: 133, isActive: false },
    { id: '8', code: 'A2230ff', productName: 'مستودع مبين V', date: '10/05/2025', accountName: 'حساب V', balance: 977, isActive: true },
  ]);

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

  const handleMenuClick = (e: React.MouseEvent, balance: OpeningBalance) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const menuWidth = 192;
    const menuHeight = balance.isActive ? 140 : 100;

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
    setOpenMenuId(balance.id);
    setSelectedBalance(balance);
  };

  const handleViewDetails = () => {
    setIsDetailsModalOpen(true);
    setOpenMenuId(null);
  };

  const handleEdit = () => {
    if (selectedBalance) {
      navigate(`/warehouses/opening-balances/edit/${selectedBalance.id}`);
    }
  };

  const handleStatusChange = (type: 'activate' | 'deactivate') => {
    setActionType(type);
    setIsConfirmModalOpen(true);
    setOpenMenuId(null);
  };

  const confirmStatusChange = () => {
    if (selectedBalance) {
      setBalances(balances.map(bal =>
        bal.id === selectedBalance.id
          ? { ...bal, isActive: actionType === 'activate' }
          : bal
      ));
    }
    setIsConfirmModalOpen(false);
  };

  const filteredBalances = balances.filter(balance =>
    balance.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    balance.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
    balance.accountName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div className="space-y-6">
        {/* Action Bar */}
        <div className="flex items-center justify-between gap-2 mb-4" dir="rtl">
          <div className="relative flex-1 max-w-[450px]">
            <Input
              type="text"
              placeholder="ابحث عن منا (حركة المنتوج، نوع المنتوج، المنتوج ...)"
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
              onClick={() => navigate('/warehouses/opening-balances/create')}
              className={buttonClasses.primary}
            >
              + إضافة أرصدة افتتاحية
            </button>
          </div>
        </div>

        {/* Table */}
        <Card className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full" dir="rtl">
              <thead>
                <tr className="bg-[#F1F5F980] border-b border-gray-200">
                  <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">الكود</th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">اسم المنتوج</th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">التاريخ</th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">اسم الحساب</th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">الرصيد</th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">العمليات</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredBalances.map((balance) => (
                  <tr key={balance.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900">{balance.code}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{balance.productName}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{balance.date}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{balance.accountName}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{balance.balance}</td>
                    <td className="px-4 py-3">
                      <button
                        onClick={(e) => handleMenuClick(e, balance)}
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

          {filteredBalances.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              لا توجد أرصدة افتتاحية
            </div>
          )}
        </Card>

        {/* Dropdown Menu */}
        {openMenuId && menuPosition && selectedBalance && (
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
              {selectedBalance.isActive && (
                <button
                  onClick={handleEdit}
                  className="w-full px-4 py-2 text-right text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                >
                  <Edit className="w-4 h-4" />
                  تعديل
                </button>
              )}
              {selectedBalance.isActive ? (
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
        {isDetailsModalOpen && selectedBalance && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" dir="rtl">
            <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-[#093738]">تفاصيل الرصيد الافتتاحي</h2>
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
                    <label className="text-sm font-medium text-gray-700">الكود</label>
                    <p className="mt-1 text-sm text-gray-900">{selectedBalance.code}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">اسم المنتوج</label>
                    <p className="mt-1 text-sm text-gray-900">{selectedBalance.productName}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">التاريخ</label>
                    <p className="mt-1 text-sm text-gray-900">{selectedBalance.date}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">اسم الحساب</label>
                    <p className="mt-1 text-sm text-gray-900">{selectedBalance.accountName}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">الرصيد</label>
                    <p className="mt-1 text-sm text-gray-900">{selectedBalance.balance}</p>
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
        {isConfirmModalOpen && selectedBalance && (
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
                  {actionType === 'activate' ? 'تفعيل الرصيد' : 'إلغاء تفعيل الرصيد'}
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  {actionType === 'activate'
                    ? `هل أنت متأكد من تفعيل الرصيد "${selectedBalance.productName}"؟`
                    : `هل أنت متأكد من إلغاء تفعيل الرصيد "${selectedBalance.productName}"؟`
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
