import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import InitialFilters from '@/components/InitialFilters';
import { Download, Filter, Plus, MoreVertical, Edit2, Ban, Play } from 'lucide-react';
import { buttonClasses } from '@/styles/components/buttons';
import { getUnitOfMeasuresSampleData, type UnitOfMeasure } from '@/data/settings/unit-of-measures.data';

export const UnitOfMeasures = (): JSX.Element => {
  const navigate = useNavigate();
  const [units, setUnits] = useState<UnitOfMeasure[]>(() => getUnitOfMeasuresSampleData());

  const [searchQuery, setSearchQuery] = useState('');
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [menuPosition, setMenuPosition] = useState<{ top: number; left: number } | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'inactive'>('all');

  // Toggle modals
  const [isDeactivateModalOpen, setIsDeactivateModalOpen] = useState(false);
  const [isActivateModalOpen, setIsActivateModalOpen] = useState(false);
  const [unitToToggle, setUnitToToggle] = useState<UnitOfMeasure | null>(null);

  // Toast notification state
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const filteredUnits = units.filter((unit) => {
    const matchesSearch = unit.name.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      filterStatus === 'all' ||
      (filterStatus === 'active' && unit.isActive) ||
      (filterStatus === 'inactive' && !unit.isActive);

    return matchesSearch && matchesStatus;
  });

  const handleEdit = (id: string) => {
    navigate(`/settings/warehouses/unit-of-measures/edit/${id}`);
  };

  const handleDeactivateClick = (unit: UnitOfMeasure) => {
    setUnitToToggle(unit);
    setIsDeactivateModalOpen(true);
    setOpenMenuId(null);
  };

  const handleActivateClick = (unit: UnitOfMeasure) => {
    setUnitToToggle(unit);
    setIsActivateModalOpen(true);
    setOpenMenuId(null);
  };

  const confirmDeactivate = () => {
    if (unitToToggle) {
      setUnits((prev) =>
        prev.map((unit) => (unit.id === unitToToggle.id ? { ...unit, isActive: false } : unit))
      );
      setToastMessage('تم تعطيل وحدة القياس');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
    setIsDeactivateModalOpen(false);
    setUnitToToggle(null);
  };

  const confirmActivate = () => {
    if (unitToToggle) {
      setUnits((prev) =>
        prev.map((unit) => (unit.id === unitToToggle.id ? { ...unit, isActive: true } : unit))
      );
      setToastMessage('تم تفعيل وحدة القياس');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
    setIsActivateModalOpen(false);
    setUnitToToggle(null);
  };

  const applyFilters = () => {
    setIsFilterOpen(false);
  };

  const clearFilters = () => {
    setFilterStatus('all');
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setOpenMenuId(null);
      setMenuPosition(null);
    };
    if (openMenuId) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [openMenuId]);

  return (
    <Layout>
      <div className="space-y-4">
        {/* Initial Filters */}
        <InitialFilters>
          <div className="flex items-center justify-between gap-3 w-full">
            <div className="flex-1 max-w-xl">
              <input
                type="text"
                placeholder="ابحث هنا (رقم شريط الباركود، اسم الوحدة...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-[38px] px-3 bg-white border border-[#e2e2e2] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] focus:outline-none focus:ring-1 focus:ring-[#0c4749] focus:border-[#0c4749] text-right"
                dir="rtl"
              />
            </div>

            <div className="flex gap-3">
              <div className="relative">
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className={`${buttonClasses.outline} flex items-center gap-2 h-[38px]`}
                >
                  <Filter className="w-4 h-4" />
                  <span>فلتر</span>
                </button>

                {isFilterOpen && (
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-[#e2e2e2] p-4 z-50">
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
                          className={`${buttonClasses.primary} flex-1 h-[36px]`}
                        >
                          تطبيق
                        </button>
                        <button
                          onClick={clearFilters}
                          className={`${buttonClasses.outline} flex-1 h-[36px]`}
                        >
                          مسح
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <button className={`${buttonClasses.outline} flex items-center gap-2 h-[38px]`}>
                <Download className="w-4 h-4" />
                <span>تحميل</span>
              </button>

              <button
                className={`${buttonClasses.primary} flex items-center gap-2 h-[38px]`}
                onClick={() => navigate('/settings/warehouses/unit-of-measures/create')}
              >
                <Plus className="w-4 h-4" />
                <span>إضافة وحدات القياس</span>
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
                    اسم الوحدة
                  </th>
                  <th className="text-center py-4 px-6 text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    الحالة
                  </th>
                  <th className="w-12"></th>
                </tr>
              </thead>
              <tbody>
                {filteredUnits.map((unit) => (
                  <tr key={unit.id} className="border-b border-[#e2e2e2] hover:bg-gray-50">
                    <td className="py-4 px-6">
                      <span className="text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium">
                        {unit.name}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                          unit.isActive
                            ? 'bg-green-100 text-green-600'
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {unit.isActive ? 'مفعلة' : 'غير مفعلة'}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="relative">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            const rect = e.currentTarget.getBoundingClientRect();
                            setMenuPosition({
                              top: rect.bottom + window.scrollY,
                              left: rect.left + window.scrollX,
                            });
                            setOpenMenuId(openMenuId === unit.id ? null : unit.id);
                          }}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <MoreVertical className="w-5 h-5 text-[#093738]" />
                        </button>

                        {openMenuId === unit.id && menuPosition && (
                          <div
                            className="fixed bg-white rounded-lg shadow-lg border border-[#e2e2e2] py-1 z-50 min-w-[160px]"
                            style={{
                              top: `${menuPosition.top}px`,
                              left: `${menuPosition.left - 160}px`,
                            }}
                          >
                            <button
                              onClick={() => handleEdit(unit.id)}
                              className="w-full px-4 py-2 text-right hover:bg-gray-50 flex items-center gap-2 text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                            >
                              <Edit2 className="w-4 h-4" />
                              <span>تعديل</span>
                            </button>
                            {unit.isActive ? (
                              <button
                                onClick={() => handleDeactivateClick(unit)}
                                className="w-full px-4 py-2 text-right hover:bg-gray-50 flex items-center gap-2 text-red-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                              >
                                <Ban className="w-4 h-4" />
                                <span>تعطيل</span>
                              </button>
                            ) : (
                              <button
                                onClick={() => handleActivateClick(unit)}
                                className="w-full px-4 py-2 text-right hover:bg-gray-50 flex items-center gap-2 text-green-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                              >
                                <Play className="w-4 h-4" />
                                <span>تفعيل</span>
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-[#e2e2e2]">
            <button className="px-4 py-2 text-sm text-[#093738] hover:bg-gray-50 rounded-lg [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              السابق
            </button>
            <div className="flex gap-2">
              <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#093738] text-white text-sm">
                1
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-50 text-[#093738] text-sm">
                2
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-50 text-[#093738] text-sm">
                3
              </button>
            </div>
            <button className="px-4 py-2 text-sm text-[#093738] hover:bg-gray-50 rounded-lg [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              التالي
            </button>
          </div>
        </div>
      </div>

      {/* Deactivate Confirmation Modal */}
      {isDeactivateModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold text-[#093738] mb-4 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              تأكيد التعطيل
            </h3>
            <p className="text-[#093738] mb-6 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              هل أنت متأكد من تعطيل وحدة القياس "{unitToToggle?.name}"؟
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setIsDeactivateModalOpen(false)}
                className="px-4 py-2 text-[#093738] hover:bg-gray-100 rounded-lg [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              >
                إلغاء
              </button>
              <button
                onClick={confirmDeactivate}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              >
                تعطيل
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Activate Confirmation Modal */}
      {isActivateModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold text-[#093738] mb-4 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              تأكيد التفعيل
            </h3>
            <p className="text-[#093738] mb-6 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              هل أنت متأكد من تفعيل وحدة القياس "{unitToToggle?.name}"؟
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setIsActivateModalOpen(false)}
                className="px-4 py-2 text-[#093738] hover:bg-gray-100 rounded-lg [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              >
                إلغاء
              </button>
              <button
                onClick={confirmActivate}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              >
                تفعيل
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-4 right-4 bg-[#093738] text-white px-6 py-3 rounded-lg shadow-lg z-50 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
          {toastMessage}
        </div>
      )}
    </Layout>
  );
};
