import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MoreVertical, Filter, Download, Plus, Edit2, Trash2 } from 'lucide-react';
import { Layout } from '../../components/Layout';
import InitialFilters from '../../components/InitialFilters';

interface Warehouse {
  id: string;
  code: string;
  name: string;
  date: string;
  accountName: string;
  isActive: boolean;
}

const buttonClasses = {
  base: 'h-[40px] px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 font-medium text-sm whitespace-nowrap [font-family:"IBM_Plex_Sans_Arabic",Helvetica]',
  primary:
    'bg-[#093738] hover:bg-[#0a4849] text-white shadow-sm hover:shadow-md active:scale-[0.98]',
  secondary:
    'bg-white hover:bg-gray-50 text-[#093738] border border-[#e2e2e2] shadow-sm hover:shadow active:scale-[0.98]',
  icon: 'w-[40px] h-[40px] rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-gray-100 active:scale-95',
};

export const WarehouseManagement = () => {
  const navigate = useNavigate();
  const [warehouses, setWarehouses] = useState<Warehouse[]>([
    {
      id: '1',
      code: 'MR-001',
      name: 'المستودع A',
      date: '13/11/2025',
      accountName: 'اسم الحساب',
      isActive: true,
    },
    {
      id: '2',
      code: 'MR-002',
      name: 'المستودع Aa',
      date: '01/11/2025',
      accountName: 'اسم الحساب',
      isActive: true,
    },
    {
      id: '3',
      code: 'MR-003',
      name: 'المستودع ة',
      date: '10/04/2025',
      accountName: 'اسم الحساب',
      isActive: true,
    },
    {
      id: '4',
      code: 'MR-004',
      name: 'المستودع Add',
      date: '10/05/2025',
      accountName: 'اسم الحساب',
      isActive: true,
    },
    {
      id: '5',
      code: 'MR-005',
      name: 'المستودع A4',
      date: '11/03/2025',
      accountName: 'اسم الحساب',
      isActive: true,
    },
    {
      id: '6',
      code: 'MR-006',
      name: 'المستودع Av',
      date: '10/01/2025',
      accountName: 'اسم الحساب',
      isActive: true,
    },
    {
      id: '7',
      code: 'MR-007',
      name: 'المستودع Z',
      date: '10/03/2025',
      accountName: 'اسم الحساب',
      isActive: true,
    },
    {
      id: '8',
      code: 'MR-008',
      name: 'المستودع And',
      date: '10/05/2025',
      accountName: 'اسم الحساب',
      isActive: true,
    },
  ]);

  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const [currentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'inactive'>('all');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [warehouseToDelete, setWarehouseToDelete] = useState<Warehouse | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setOpenDropdownId(null);
      setIsFilterOpen(false);
    };
    if (openDropdownId || isFilterOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [openDropdownId, isFilterOpen]);

  const toggleDropdown = (id: string, event: React.MouseEvent) => {
    event.stopPropagation();
    const rect = event.currentTarget.getBoundingClientRect();
    setDropdownPosition({
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX - 150,
    });
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  const handleEdit = (warehouse: Warehouse) => {
    navigate(`/settings/warehouses/warehouse-management/edit/${warehouse.id}`);
    setOpenDropdownId(null);
  };

  const handleDeleteClick = (warehouse: Warehouse) => {
    setWarehouseToDelete(warehouse);
    setShowDeleteModal(true);
    setOpenDropdownId(null);
  };

  const handleDeleteConfirm = () => {
    if (warehouseToDelete) {
      setWarehouses(warehouses.filter((w) => w.id !== warehouseToDelete.id));
      setToastMessage('تم حذف المستودع بنجاح');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
    setShowDeleteModal(false);
    setWarehouseToDelete(null);
  };

  const handleAddNew = () => {
    navigate('/settings/warehouses/warehouse-management/create');
  };

  const applyFilters = () => {
    setIsFilterOpen(false);
  };

  const clearFilters = () => {
    setFilterStatus('all');
  };

  const filteredWarehouses = warehouses.filter((warehouse) => {
    const matchesSearch =
      warehouse.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      warehouse.code.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      filterStatus === 'all' ||
      (filterStatus === 'active' && warehouse.isActive) ||
      (filterStatus === 'inactive' && !warehouse.isActive);

    return matchesSearch && matchesStatus;
  });

  return (
    <Layout>
      <div className="space-y-4">
        {/* Initial Filters */}
        <InitialFilters>
          <div className="flex items-center justify-between gap-3 w-full">
            <div className="flex-1 max-w-xl">
              <input
                type="text"
                placeholder="ابحث هنا (رقم شيرا الدفع، رقم الموافقة للدفع، تاريخ ...)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-[38px] px-3 bg-white border border-[#e2e2e2] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] focus:outline-none focus:ring-1 focus:ring-[#0c4749] focus:border-[#0c4749] text-right"
                dir="rtl"
              />
            </div>

            <div className="flex gap-3">
              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsFilterOpen(!isFilterOpen);
                  }}
                  className={`${buttonClasses.base} ${buttonClasses.secondary} flex items-center gap-2 h-[38px]`}
                >
                  <Filter className="w-4 h-4" />
                  <span>فلتر</span>
                </button>

                {isFilterOpen && (
                  <div 
                    onClick={(e) => e.stopPropagation()}
                    className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-[#e2e2e2] p-4 z-50"
                  >
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          الحالة
                        </label>
                        <select
                          value={filterStatus}
                          onChange={(e) =>
                            setFilterStatus(e.target.value as 'all' | 'active' | 'inactive')
                          }
                          className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                        >
                          <option value="all">الكل</option>
                          <option value="active">مفعلة</option>
                          <option value="inactive">غير مفعلة</option>
                        </select>
                      </div>

                      <div className="flex gap-2 pt-2">
                        <button
                          onClick={applyFilters}
                          className={`${buttonClasses.base} ${buttonClasses.primary} flex-1 h-[36px]`}
                        >
                          تطبيق
                        </button>
                        <button
                          onClick={clearFilters}
                          className={`${buttonClasses.base} ${buttonClasses.secondary} flex-1 h-[36px]`}
                        >
                          مسح
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <button className={`${buttonClasses.base} ${buttonClasses.secondary} flex items-center gap-2 h-[38px]`}>
                <Download className="w-4 h-4" />
                <span>تحميل</span>
              </button>

              <button
                className={`${buttonClasses.base} ${buttonClasses.primary} flex items-center gap-2 h-[38px]`}
                onClick={handleAddNew}
              >
                <Plus className="w-4 h-4" />
                <span>إضافة</span>
              </button>
            </div>
          </div>
        </InitialFilters>

        {/* Table Container */}
        <div className="bg-white rounded-lg border border-[#e2e2e2]">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#e2e2e2]">
                  <th className="text-right py-4 px-6 text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    الكود
                  </th>
                  <th className="text-right py-4 px-6 text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    اسم المستودع
                  </th>
                  <th className="text-right py-4 px-6 text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    التاريخ
                  </th>
                  <th className="text-right py-4 px-6 text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    اسم الحساب
                  </th>
                  <th className="text-center py-4 px-6 text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    إجراءات
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2e2e2]">
                {filteredWarehouses.map((warehouse) => (
                  <tr key={warehouse.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {warehouse.code}
                    </td>
                    <td className="px-6 py-4 text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {warehouse.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {warehouse.date}
                    </td>
                    <td className="px-6 py-4 text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {warehouse.accountName}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center">
                        <button
                          onClick={(e) => toggleDropdown(warehouse.id, e)}
                          className="p-1 hover:bg-gray-100 rounded transition-colors"
                        >
                          <MoreVertical className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-[#e2e2e2]">
            <button className={`${buttonClasses.base} ${buttonClasses.secondary}`}>السابق</button>
            <div className="flex items-center gap-2">
              <button
                className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium transition-all ${
                  currentPage === 1
                    ? 'bg-[#093738] text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-[#e2e2e2]'
                }`}
              >
                1
              </button>
              <button
                className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium transition-all ${
                  currentPage === 2
                    ? 'bg-[#093738] text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-[#e2e2e2]'
                }`}
              >
                2
              </button>
              <button
                className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium transition-all ${
                  currentPage === 3
                    ? 'bg-[#093738] text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-[#e2e2e2]'
                }`}
              >
                3
              </button>
            </div>
            <button className={`${buttonClasses.base} ${buttonClasses.secondary}`}>التالي</button>
          </div>
        </div>

        {/* Dropdown Menu */}
        {openDropdownId && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setOpenDropdownId(null)}></div>
            <div
              className="fixed z-20 w-48 bg-white rounded-lg shadow-lg border border-[#e2e2e2] py-2"
              style={{ top: dropdownPosition.top, left: dropdownPosition.left }}
            >
              <button
                onClick={() => {
                  const warehouse = warehouses.find((w) => w.id === openDropdownId);
                  if (warehouse) handleEdit(warehouse);
                }}
                className="w-full px-4 py-2 text-right text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              >
                <Edit2 className="w-4 h-4" />
                تعديل
              </button>
              <button
                onClick={() => {
                  const warehouse = warehouses.find((w) => w.id === openDropdownId);
                  if (warehouse) handleDeleteClick(warehouse);
                }}
                className="w-full px-4 py-2 text-right text-sm text-red-600 hover:bg-red-50 flex items-center gap-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              >
                <Trash2 className="w-4 h-4" />
                حذف
              </button>
            </div>
          </>
        )}

        {/* Delete Confirmation Modal */}
        {showDeleteModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
              <h3 className="text-lg font-semibold text-[#093738] mb-4 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                تأكيد الحذف
              </h3>
              <p className="text-gray-600 mb-6 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                هل أنت متأكد من حذف "{warehouseToDelete?.name}"؟
              </p>
              <div className="flex gap-3 justify-end">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className={`${buttonClasses.base} ${buttonClasses.secondary}`}
                >
                  إلغاء
                </button>
                <button
                  onClick={handleDeleteConfirm}
                  className={`${buttonClasses.base} bg-red-600 hover:bg-red-700 text-white`}
                >
                  حذف
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Toast Notification */}
        {showToast && (
          <div className="fixed bottom-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
            {toastMessage}
          </div>
        )}
      </div>
    </Layout>
  );
};
