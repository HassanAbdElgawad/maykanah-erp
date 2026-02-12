import { useState, useEffect } from 'react';
import { Layout } from '@/components/Layout';
import InitialFilters from '@/components/InitialFilters';
import { Download, Filter, Plus, MoreVertical, Edit2, Ban, Play, X, ChevronLeft } from 'lucide-react';
import { buttonClasses } from '@/styles/components/buttons';

interface ItemGroup {
  id: string;
  name: string;
  nameAr: string;
  status: string;
  owner: string;
  linkedAccount: string;
  inventoryAccount: string;
  salesAccount: string;
  costOfGoodsSoldAccount: string;
  importsAccount: string;
  expensesAccount: string;
  isActive: boolean;
}

export const ItemGroups = (): JSX.Element => {
  const [groups, setGroups] = useState<ItemGroup[]>([
    {
      id: '1',
      name: 'اسم المجموعة',
      nameAr: 'اسم المجموعة',
      status: 'حساب الخصومات او',
      owner: '',
      linkedAccount: '',
      inventoryAccount: 'حساب المخزون',
      salesAccount: 'حساب المبيعات',
      costOfGoodsSoldAccount: 'حساب تكلفة البضاعة المباعة',
      importsAccount: 'حساب الواردات',
      expensesAccount: 'حساب المروفات',
      isActive: true,
    },
    {
      id: '2',
      name: 'اسم المجموعة',
      nameAr: 'اسم المجموعة',
      status: 'حساب الخصومات او',
      owner: '',
      linkedAccount: '',
      inventoryAccount: 'حساب المخزون',
      salesAccount: 'حساب المبيعات',
      costOfGoodsSoldAccount: 'حساب تكلفة البضاعة المباعة',
      importsAccount: 'حساب الواردات',
      expensesAccount: 'حساب المروفات',
      isActive: true,
    },
    {
      id: '3',
      name: 'اسم المجموعة',
      nameAr: 'اسم المجموعة',
      status: 'حساب الخصومات او',
      owner: '',
      linkedAccount: '',
      inventoryAccount: 'حساب المخزون',
      salesAccount: 'حساب المبيعات',
      costOfGoodsSoldAccount: 'حساب تكلفة البضاعة المباعة',
      importsAccount: 'حساب الواردات',
      expensesAccount: 'حساب المروفات',
      isActive: false,
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [menuPosition, setMenuPosition] = useState<{ top: number; left: number } | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'inactive'>('all');

  // Side Modal states
  const [isSideModalOpen, setIsSideModalOpen] = useState(false);
  const [editingGroup, setEditingGroup] = useState<ItemGroup | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    nameAr: '',
    status: '',
    owner: '',
    linkedAccount: '',
    inventoryAccount: '',
    salesAccount: '',
    costOfGoodsSoldAccount: '',
    importsAccount: '',
    expensesAccount: '',
    isActive: true,
  });

  // Toggle modals
  const [isDeactivateModalOpen, setIsDeactivateModalOpen] = useState(false);
  const [isActivateModalOpen, setIsActivateModalOpen] = useState(false);
  const [groupToToggle, setGroupToToggle] = useState<ItemGroup | null>(null);

  // Toast notification state
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const filteredGroups = groups.filter((group) => {
    const matchesSearch =
      group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      group.inventoryAccount.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      filterStatus === 'all' ||
      (filterStatus === 'active' && group.isActive) ||
      (filterStatus === 'inactive' && !group.isActive);

    return matchesSearch && matchesStatus;
  });

  const openAddModal = () => {
    setEditingGroup(null);
    setFormData({
      name: '',
      nameAr: '',
      status: '',
      owner: '',
      linkedAccount: '',
      inventoryAccount: '',
      salesAccount: '',
      costOfGoodsSoldAccount: '',
      importsAccount: '',
      expensesAccount: '',
      isActive: true,
    });
    setIsSideModalOpen(true);
  };

  const openEditModal = (group: ItemGroup) => {
    setEditingGroup(group);
    setFormData({
      name: group.name,
      nameAr: group.nameAr,
      status: group.status,
      owner: group.owner,
      linkedAccount: group.linkedAccount,
      inventoryAccount: group.inventoryAccount,
      salesAccount: group.salesAccount,
      costOfGoodsSoldAccount: group.costOfGoodsSoldAccount,
      importsAccount: group.importsAccount,
      expensesAccount: group.expensesAccount,
      isActive: group.isActive,
    });
    setIsSideModalOpen(true);
    setOpenMenuId(null);
  };

  const closeSideModal = () => {
    setIsSideModalOpen(false);
    setEditingGroup(null);
  };

  const handleSaveGroup = () => {
    if (editingGroup) {
      // Update existing group
      setGroups((prev) =>
        prev.map((g) =>
          g.id === editingGroup.id
            ? { ...g, ...formData }
            : g
        )
      );
      setToastMessage('تم تحديث مجموعة الأصناف بنجاح');
    } else {
      // Add new group
      const newGroup: ItemGroup = {
        id: `group-${Date.now()}`,
        ...formData,
      };
      setGroups((prev) => [...prev, newGroup]);
      setToastMessage('تم إضافة مجموعة الأصناف بنجاح');
    }
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    closeSideModal();
  };

  const handleEdit = (id: string) => {
    const group = groups.find((g) => g.id === id);
    if (group) {
      openEditModal(group);
    }
  };

  const handleDeactivateClick = (group: ItemGroup) => {
    setGroupToToggle(group);
    setIsDeactivateModalOpen(true);
    setOpenMenuId(null);
  };

  const handleActivateClick = (group: ItemGroup) => {
    setGroupToToggle(group);
    setIsActivateModalOpen(true);
    setOpenMenuId(null);
  };

  const confirmDeactivate = () => {
    if (groupToToggle) {
      setGroups((prev) =>
        prev.map((group) => (group.id === groupToToggle.id ? { ...group, isActive: false } : group))
      );
      setToastMessage('تم تعطيل مجموعة الأصناف');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
    setIsDeactivateModalOpen(false);
    setGroupToToggle(null);
  };

  const confirmActivate = () => {
    if (groupToToggle) {
      setGroups((prev) =>
        prev.map((group) => (group.id === groupToToggle.id ? { ...group, isActive: true } : group))
      );
      setToastMessage('تم تفعيل مجموعة الأصناف');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
    setIsActivateModalOpen(false);
    setGroupToToggle(null);
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
                onClick={openAddModal}
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
                    اسم المجموعة
                  </th>
                  <th className="text-right py-4 px-6 text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    حساب الخصومات او
                  </th>
                  <th className="text-right py-4 px-6 text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    حساب المخزون
                  </th>
                  <th className="text-center py-4 px-6 text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    الحالة
                  </th>
                  <th className="w-12"></th>
                </tr>
              </thead>
              <tbody>
                {filteredGroups.map((group) => (
                  <tr key={group.id} className="border-b border-[#e2e2e2] hover:bg-gray-50">
                    <td className="py-4 px-6">
                      <span className="text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium">
                        {group.name}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {group.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {group.inventoryAccount}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                          group.isActive
                            ? 'bg-green-100 text-green-600'
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {group.isActive ? 'مفعلة' : 'غير مفعلة'}
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
                            setOpenMenuId(openMenuId === group.id ? null : group.id);
                          }}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <MoreVertical className="w-5 h-5 text-[#093738]" />
                        </button>

                        {openMenuId === group.id && menuPosition && (
                          <div
                            className="fixed bg-white rounded-lg shadow-lg border border-[#e2e2e2] py-1 z-50 min-w-[160px]"
                            style={{
                              top: `${menuPosition.top}px`,
                              left: `${menuPosition.left - 160}px`,
                            }}
                          >
                            <button
                              onClick={() => handleEdit(group.id)}
                              className="w-full px-4 py-2 text-right hover:bg-gray-50 flex items-center gap-2 text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                            >
                              <Edit2 className="w-4 h-4" />
                              <span>تعديل</span>
                            </button>
                            {group.isActive ? (
                              <button
                                onClick={() => handleDeactivateClick(group)}
                                className="w-full px-4 py-2 text-right hover:bg-gray-50 flex items-center gap-2 text-red-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                              >
                                <Ban className="w-4 h-4" />
                                <span>تعطيل</span>
                              </button>
                            ) : (
                              <button
                                onClick={() => handleActivateClick(group)}
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

      {/* Side Modal for Add/Edit */}
      {isSideModalOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={closeSideModal}
          ></div>

          {/* Side Panel */}
        <div className="absolute inset-y-0 left-0 max-w-xl w-full bg-white shadow-xl flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#e2e2e2]">
              <h2 className="text-xl font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {editingGroup ? 'تعديل مجموعة الاصناف' : 'إضافة مجموعة الاصناف'}
              </h2>
              <button
                onClick={closeSideModal}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-[#093738]" />
              </button>
            </div>

            {/* Form Content */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <div className="space-y-4">
                {/* اسم المجموعة */}
                <div>
                  <label className="block text-sm font-medium text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    اسم المجموعة
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right"
                    dir="rtl"
                  />
                </div>

                {/* اسم المجموعة (عربي) */}
                <div>
                  <label className="block text-sm font-medium text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    اسم المجموعة
                  </label>
                  <input
                    type="text"
                    value={formData.nameAr}
                    onChange={(e) => setFormData({ ...formData, nameAr: e.target.value })}
                    className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right"
                    dir="rtl"
                  />
                </div>

                {/* الحالة */}
                <div>
                  <label className="block text-sm font-medium text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    الحالة
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right"
                    dir="rtl"
                  >
                    <option value="">اختر الحالة</option>
                    <option value="حساب الخصومات او">حساب الخصومات او</option>
                  </select>
                </div>

                {/* المالك */}
                <div>
                  <label className="block text-sm font-medium text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    المالك
                  </label>
                  <input
                    type="text"
                    value={formData.owner}
                    onChange={(e) => setFormData({ ...formData, owner: e.target.value })}
                    className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right"
                    dir="rtl"
                  />
                </div>

                {/* الحسابات المحاسبية أو الربط */}
                <div className="pt-4">
                  <h3 className="text-base font-semibold text-[#093738] mb-4 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    الحسابات المحاسبية أو الربط
                  </h3>
                </div>

                {/* الحساب الربط */}
                <div>
                  <label className="block text-sm font-medium text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    الحساب الربط
                  </label>
                  <select
                    value={formData.linkedAccount}
                    onChange={(e) => setFormData({ ...formData, linkedAccount: e.target.value })}
                    className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right"
                    dir="rtl"
                  >
                    <option value="">اختر الحساب</option>
                  </select>
                </div>

                {/* حساب المخزون */}
                <div>
                  <label className="block text-sm font-medium text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    حساب المخزون
                  </label>
                  <select
                    value={formData.inventoryAccount}
                    onChange={(e) => setFormData({ ...formData, inventoryAccount: e.target.value })}
                    className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right"
                    dir="rtl"
                  >
                    <option value="">اختر الحساب</option>
                    <option value="حساب المخزون">حساب المخزون</option>
                  </select>
                </div>

                {/* حساب البيعات */}
                <div>
                  <label className="block text-sm font-medium text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    حساب البيعات
                  </label>
                  <select
                    value={formData.salesAccount}
                    onChange={(e) => setFormData({ ...formData, salesAccount: e.target.value })}
                    className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right"
                    dir="rtl"
                  >
                    <option value="">اختر الحساب</option>
                    <option value="حساب المبيعات">حساب المبيعات</option>
                  </select>
                </div>

                {/* حساب المبيعات */}
                <div>
                  <label className="block text-sm font-medium text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    حساب المبيعات
                  </label>
                  <select
                    className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right"
                    dir="rtl"
                  >
                    <option value="">اختر الحساب</option>
                  </select>
                </div>

                {/* حساب تكلفة البضاعة المباعة */}
                <div>
                  <label className="block text-sm font-medium text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    حساب تكلفة البضاعة المباعة
                  </label>
                  <select
                    value={formData.costOfGoodsSoldAccount}
                    onChange={(e) =>
                      setFormData({ ...formData, costOfGoodsSoldAccount: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right"
                    dir="rtl"
                  >
                    <option value="">اختر الحساب</option>
                    <option value="حساب تكلفة البضاعة المباعة">
                      حساب تكلفة البضاعة المباعة
                    </option>
                  </select>
                </div>

                {/* حساب تكلفة البضاعة المباعة (مكرر) */}
                <div>
                  <label className="block text-sm font-medium text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    حساب تكلفة البضاعة المباعة
                  </label>
                  <select
                    className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right"
                    dir="rtl"
                  >
                    <option value="">اختر الحساب</option>
                  </select>
                </div>

                {/* حساب الواردات */}
                <div>
                  <label className="block text-sm font-medium text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    حساب الواردات
                  </label>
                  <select
                    value={formData.importsAccount}
                    onChange={(e) => setFormData({ ...formData, importsAccount: e.target.value })}
                    className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right"
                    dir="rtl"
                  >
                    <option value="">اختر الحساب</option>
                    <option value="حساب الواردات">حساب الواردات</option>
                  </select>
                </div>

                {/* حساب الواردات (مكرر) */}
                <div>
                  <label className="block text-sm font-medium text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    حساب الواردات
                  </label>
                  <select
                    className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right"
                    dir="rtl"
                  >
                    <option value="">اختر الحساب</option>
                  </select>
                </div>

                {/* حساب المروفات */}
                <div>
                  <label className="block text-sm font-medium text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    حساب المروفات
                  </label>
                  <select
                    value={formData.expensesAccount}
                    onChange={(e) => setFormData({ ...formData, expensesAccount: e.target.value })}
                    className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right"
                    dir="rtl"
                  >
                    <option value="">اختر الحساب</option>
                    <option value="حساب المروفات">حساب المروفات</option>
                  </select>
                </div>

                {/* حساب المروفات (مكرر) */}
                <div>
                  <label className="block text-sm font-medium text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    حساب المروفات
                  </label>
                  <select
                    className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right"
                    dir="rtl"
                  >
                    <option value="">اختر الحساب</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-[#e2e2e2]">
              <button
                onClick={closeSideModal}
                className="px-4 py-2 text-[#093738] hover:bg-gray-100 rounded-lg [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm"
              >
                إلغاء
              </button>
              <button
                onClick={handleSaveGroup}
                className={`${buttonClasses.primary} flex items-center gap-2 h-[38px]`}
              >
                <span>حفظ</span>
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Deactivate Confirmation Modal */}
      {isDeactivateModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold text-[#093738] mb-4 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              تأكيد التعطيل
            </h3>
            <p className="text-[#093738] mb-6 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              هل أنت متأكد من تعطيل مجموعة الأصناف "{groupToToggle?.name}"؟
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
              هل أنت متأكد من تفعيل مجموعة الأصناف "{groupToToggle?.name}"؟
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
