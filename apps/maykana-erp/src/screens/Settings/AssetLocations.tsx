import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { Card } from '../../components/ui/card';
import InitialFilters from '../../components/InitialFilters';
import { Download, Filter, Plus, MoreVertical, Eye, Edit2, Ban, Play, X, ChevronDown, ChevronUp } from 'lucide-react';
import { buttonClasses } from '../../styles/components/buttons';

interface AssetLocation {
  id: string;
  code: string;
  name: string;
  city: string;
  branch: string;
  department: string;
  isActive: boolean;
}

export const AssetLocations = (): JSX.Element => {
  const navigate = useNavigate();

  const [locations, setLocations] = useState<AssetLocation[]>([
    {
      id: '1',
      code: 'LOC-RYD-001',
      name: 'مستودع الرياض',
      city: 'الرياض',
      branch: 'الفرع الرئيسي',
      department: 'تقنية المعلومات',
      isActive: false,
    },
    {
      id: '2',
      code: 'LOC-JED-002',
      name: 'مستودع جدة',
      city: 'جدة',
      branch: 'جدة الرئيسي',
      department: 'المالية',
      isActive: true,
    },
    {
      id: '3',
      code: 'LOC-RYD-003',
      name: 'مستودع الرياض',
      city: 'الرياض',
      branch: 'الفرع الرئيسي',
      department: 'التشغيل',
      isActive: true,
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<AssetLocation | null>(null);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [menuPosition, setMenuPosition] = useState<{ top: number; left: number } | null>(null);
  const [expandedSections, setExpandedSections] = useState({
    definition: true,
    additionalInfo: false,
  });

  // Modals for deactivate/activate confirmation
  const [isDeactivateModalOpen, setIsDeactivateModalOpen] = useState(false);
  const [isActivateModalOpen, setIsActivateModalOpen] = useState(false);
  const [locationToToggle, setLocationToToggle] = useState<AssetLocation | null>(null);

  // Toast notification state
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Filter state
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'inactive'>('all');
  const [filterDepartment, setFilterDepartment] = useState<string>('all');
  const [filterBranch, setFilterBranch] = useState<string>('all');
  const [filterCity, setFilterCity] = useState<string>('all');

  const filteredLocations = locations.filter((location) => {
    const matchesSearch =
      location.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      location.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      location.branch.toLowerCase().includes(searchQuery.toLowerCase()) ||
      location.department.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      filterStatus === 'all' ||
      (filterStatus === 'active' && location.isActive) ||
      (filterStatus === 'inactive' && !location.isActive);

    const matchesDepartment = filterDepartment === 'all' || location.department === filterDepartment;
    const matchesBranch = filterBranch === 'all' || location.branch === filterBranch;
    const matchesCity = filterCity === 'all' || location.city === filterCity;

    return matchesSearch && matchesStatus && matchesDepartment && matchesBranch && matchesCity;
  });

  const toggleSection = (section: 'definition' | 'additionalInfo') => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleViewDetails = (location: AssetLocation) => {
    setSelectedLocation(location);
    setIsDetailsModalOpen(true);
    setOpenMenuId(null);
  };

  const handleEdit = (id: string) => {
    navigate(`/settings/assets/asset-locations/edit/${id}`);
  };

  const handleDeactivateClick = (location: AssetLocation) => {
    setLocationToToggle(location);
    setIsDeactivateModalOpen(true);
    setOpenMenuId(null);
  };

  const handleActivateClick = (location: AssetLocation) => {
    setLocationToToggle(location);
    setIsActivateModalOpen(true);
    setOpenMenuId(null);
  };

  const confirmDeactivate = () => {
    if (locationToToggle) {
      setLocations((prev) =>
        prev.map((loc) => (loc.id === locationToToggle.id ? { ...loc, isActive: false } : loc))
      );
      setToastMessage('تم تعطيل الموقع');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
    setIsDeactivateModalOpen(false);
    setLocationToToggle(null);
  };

  const confirmActivate = () => {
    if (locationToToggle) {
      setLocations((prev) =>
        prev.map((loc) => (loc.id === locationToToggle.id ? { ...loc, isActive: true } : loc))
      );
      setToastMessage('تم تفعيل الموقع');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
    setIsActivateModalOpen(false);
    setLocationToToggle(null);
  };

  const applyFilters = () => {
    setIsFilterOpen(false);
  };

  const clearFilters = () => {
    setFilterStatus('all');
    setFilterDepartment('all');
    setFilterBranch('all');
    setFilterCity('all');
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
                placeholder="ابحث هنا (كود، الاسم، الأصل، الوثيقة...)"
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

                {/* Filter Dropdown */}
                {isFilterOpen && (
                  <div className="absolute left-0 mt-2 w-[250px] bg-white rounded-lg shadow-lg border border-[#e2e2e2] z-50 p-4">
                    <div className="space-y-3">
                      {/* الحالة */}
                      <div>
                        <label className="block text-sm font-medium text-[#093738] mb-1">الحالة</label>
                        <select
                          value={filterStatus}
                          onChange={(e) => setFilterStatus(e.target.value as 'all' | 'active' | 'inactive')}
                          className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg text-sm"
                        >
                          <option value="all">الكل</option>
                          <option value="active">نشط</option>
                          <option value="inactive">غير نشط</option>
                        </select>
                      </div>

                      {/* القسم */}
                      <div>
                        <label className="block text-sm font-medium text-[#093738] mb-1">القسم</label>
                        <select
                          value={filterDepartment}
                          onChange={(e) => setFilterDepartment(e.target.value)}
                          className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg text-sm"
                        >
                          <option value="all">الكل</option>
                          <option value="تقنية المعلومات">تقنية المعلومات</option>
                          <option value="المالية">المالية</option>
                          <option value="التشغيل">التشغيل</option>
                        </select>
                      </div>

                      {/* الفرع */}
                      <div>
                        <label className="block text-sm font-medium text-[#093738] mb-1">الفرع</label>
                        <select
                          value={filterBranch}
                          onChange={(e) => setFilterBranch(e.target.value)}
                          className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg text-sm"
                        >
                          <option value="all">الكل</option>
                          <option value="الفرع الرئيسي">الفرع الرئيسي</option>
                          <option value="جدة الرئيسي">جدة الرئيسي</option>
                        </select>
                      </div>

                      {/* المدينة */}
                      <div>
                        <label className="block text-sm font-medium text-[#093738] mb-1">المدينة</label>
                        <select
                          value={filterCity}
                          onChange={(e) => setFilterCity(e.target.value)}
                          className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg text-sm"
                        >
                          <option value="all">الكل</option>
                          <option value="الرياض">الرياض</option>
                          <option value="جدة">جدة</option>
                        </select>
                      </div>

                      {/* Buttons */}
                      <div className="flex gap-2 pt-2">
                        <button
                          onClick={applyFilters}
                          className="flex-1 px-4 py-2 bg-[#093738] text-white rounded-lg text-sm hover:bg-[#0a4849]"
                        >
                          تطبيق
                        </button>
                        <button
                          onClick={clearFilters}
                          className="flex-1 px-4 py-2 border border-[#e2e2e2] text-[#093738] rounded-lg text-sm hover:bg-gray-50"
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
                onClick={() => navigate('/settings/assets/asset-locations/create')}
                className={`${buttonClasses.primary} flex items-center gap-2 h-[38px]`}
              >
                <Plus className="w-4 h-4" />
                <span>إضافة موقع جديد</span>
              </button>
            </div>
          </div>
        </InitialFilters>

        {/* Table or Empty State */}
        {filteredLocations.length === 0 && searchQuery === '' && filterStatus === 'all' ? (
          /* Empty State */
          <Card className="p-12">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="w-48 h-48 mb-6 relative">
                {/* Empty illustration */}
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <rect x="40" y="60" width="120" height="100" rx="8" fill="#f3f4f6" />
                  <rect x="50" y="70" width="100" height="6" rx="3" fill="#e5e7eb" />
                  <rect x="50" y="85" width="80" height="6" rx="3" fill="#e5e7eb" />
                  <rect x="50" y="100" width="90" height="6" rx="3" fill="#e5e7eb" />
                  <circle cx="100" cy="130" r="20" fill="#d1d5db" opacity="0.5" />
                  <path d="M100 120 L100 135 M95 130 L105 130" stroke="#9ca3af" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                لا توجد مواقع أصول مضافة بعد
              </h3>
              <p className="text-[#6B7280] mb-6 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                قم بإضافة مواقع الأصول للتمكن من ربطها بالأصول وتتبع حركتها.
              </p>
              <button
                onClick={() => navigate('/settings/assets/asset-locations/create')}
                className="px-6 py-3 bg-[#093738] text-white rounded-lg hover:bg-[#0a4849] transition-colors [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium"
              >
                إضافة أول موقع
              </button>
            </div>
          </Card>
        ) : (
          /* Table */
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                <thead>
                  <tr className="bg-[#F1F5F980]">
                    <th className="px-4 py-3 text-right text-sm font-semibold text-[#093738] border-b border-[#e2e2e2]">
                      كود الموقع
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-semibold text-[#093738] border-b border-[#e2e2e2]">
                      اسم الموقع
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-semibold text-[#093738] border-b border-[#e2e2e2]">
                      المدينة
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-semibold text-[#093738] border-b border-[#e2e2e2]">
                      الفرع
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-semibold text-[#093738] border-b border-[#e2e2e2]">
                      القسم
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-semibold text-[#093738] border-b border-[#e2e2e2]">
                      الحالة
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-[#093738] border-b border-[#e2e2e2] w-[50px]"></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLocations.map((location) => (
                    <tr key={location.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 text-sm text-[#093738] border-b border-[#e2e2e2]">
                        {location.code}
                      </td>
                      <td className="px-4 py-3 text-sm text-[#093738] border-b border-[#e2e2e2]">
                        {location.name}
                      </td>
                      <td className="px-4 py-3 text-sm text-[#093738] border-b border-[#e2e2e2]">
                        {location.city}
                      </td>
                      <td className="px-4 py-3 text-sm text-[#093738] border-b border-[#e2e2e2]">
                        {location.branch}
                      </td>
                      <td className="px-4 py-3 text-sm text-[#093738] border-b border-[#e2e2e2]">
                        {location.department}
                      </td>
                      <td className="px-4 py-3 text-sm border-b border-[#e2e2e2]">
                        <span
                          className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                            location.isActive
                              ? 'bg-green-100 text-green-600'
                              : 'bg-red-100 text-red-600'
                          }`}
                        >
                          {location.isActive ? 'نشط' : 'غير نشط'}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm border-b border-[#e2e2e2]">
                        <div className="relative">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              const rect = e.currentTarget.getBoundingClientRect();
                              const menuWidth = 192; // 48 * 4 = 192px (w-48)
                              const menuHeight = location.isActive ? 140 : 100; // Approximate height
                              
                              // Calculate position
                              let left = rect.left + window.scrollX - menuWidth + 40; // Align to right of button
                              let top = rect.bottom + window.scrollY + 4;
                              
                              // Adjust if menu goes off right edge
                              if (left < 10) {
                                left = 10;
                              }
                              
                              // Adjust if menu goes off left edge  
                              const rightEdge = left + menuWidth;
                              if (rightEdge > window.innerWidth - 10) {
                                left = window.innerWidth - menuWidth - 10;
                              }
                              
                              // Adjust if menu goes off bottom edge
                              if (top + menuHeight > window.innerHeight + window.scrollY - 10) {
                                top = rect.top + window.scrollY - menuHeight - 4; // Position above button
                              }
                              
                              setMenuPosition({ top, left });
                              setOpenMenuId(openMenuId === location.id ? null : location.id);
                            }}
                            className="p-1 hover:bg-gray-200 rounded transition-colors"
                          >
                            <MoreVertical className="w-5 h-5 text-[#093738]" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        {/* Dropdown Menu - Rendered outside table with fixed positioning */}
        {openMenuId && menuPosition && (
          <div 
            className="fixed w-48 bg-white rounded-lg shadow-lg border border-[#e2e2e2] z-[100] py-1"
            style={{
              top: `${menuPosition.top}px`,
              left: `${menuPosition.left}px`,
            }}
          >
            {(() => {
              const location = locations.find(loc => loc.id === openMenuId);
              if (!location) return null;
              
              return (
                <>
                  {/* عرض التفاصيل - Always available */}
                  <button
                    onClick={() => handleViewDetails(location)}
                    className="w-full px-4 py-2 text-right text-sm text-[#093738] hover:bg-gray-50 flex items-center gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    <span>عرض التفاصيل</span>
                  </button>

                  {/* تعديل - Only for active locations */}
                  {location.isActive && (
                    <button
                      onClick={() => handleEdit(location.id)}
                      className="w-full px-4 py-2 text-right text-sm text-[#093738] hover:bg-gray-50 flex items-center gap-2"
                    >
                      <Edit2 className="w-4 h-4" />
                      <span>تعديل بيانات الموقع</span>
                    </button>
                  )}

                  {/* تعطيل - Only for active locations */}
                  {location.isActive && (
                    <button
                      onClick={() => handleDeactivateClick(location)}
                      className="w-full px-4 py-2 text-right text-sm text-[#093738] hover:bg-gray-50 flex items-center gap-2 border-t border-[#e2e2e2]"
                    >
                      <Ban className="w-4 h-4 text-red-600" />
                      <span className="text-red-600">تعطيل الموقع</span>
                    </button>
                  )}

                  {/* تفعيل - Only for inactive locations */}
                  {!location.isActive && (
                    <button
                      onClick={() => handleActivateClick(location)}
                      className="w-full px-4 py-2 text-right text-sm text-[#093738] hover:bg-gray-50 flex items-center gap-2 border-t border-[#e2e2e2]"
                    >
                      <Play className="w-4 h-4 text-green-600" />
                      <span className="text-green-600">تفعيل الموقع</span>
                    </button>
                  )}
                </>
              );
            })()}
          </div>
        )}

        {/* Details Modal */}
        {isDetailsModalOpen && selectedLocation && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-[#e2e2e2] px-6 py-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  تفاصيل الموقع
                </h2>
                <button
                  onClick={() => setIsDetailsModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-[#093738]" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-4">
                {/* Definition Section */}
                <div className="border border-[#e2e2e2] rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection('definition')}
                    className="w-full px-4 py-3 bg-[#F1F5F980] flex items-center justify-between hover:bg-[#e8ecec] transition-colors"
                  >
                    <span className="font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      التعريف
                    </span>
                    {expandedSections.definition ? (
                      <ChevronUp className="w-5 h-5 text-[#093738]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#093738]" />
                    )}
                  </button>
                  {expandedSections.definition && (
                    <div className="p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">
                          كود الموقع
                        </label>
                        <p className="text-sm text-[#093738] font-medium">{selectedLocation.code}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">
                          اسم الموقع
                        </label>
                        <p className="text-sm text-[#093738] font-medium">{selectedLocation.name}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">
                          المدينة
                        </label>
                        <p className="text-sm text-[#093738] font-medium">{selectedLocation.city}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">الفرع</label>
                        <p className="text-sm text-[#093738] font-medium">{selectedLocation.branch}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">القسم</label>
                        <p className="text-sm text-[#093738] font-medium">
                          {selectedLocation.department}
                        </p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">الحالة</label>
                        <span
                          className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                            selectedLocation.isActive
                              ? 'bg-green-100 text-green-600'
                              : 'bg-red-100 text-red-600'
                          }`}
                        >
                          {selectedLocation.isActive ? 'نشط' : 'غير نشط'}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Additional Info Section */}
                <div className="border border-[#e2e2e2] rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection('additionalInfo')}
                    className="w-full px-4 py-3 bg-[#F1F5F980] flex items-center justify-between hover:bg-[#e8ecec] transition-colors"
                  >
                    <span className="font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      معلومات إضافية
                    </span>
                    {expandedSections.additionalInfo ? (
                      <ChevronUp className="w-5 h-5 text-[#093738]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#093738]" />
                    )}
                  </button>
                  {expandedSections.additionalInfo && (
                    <div className="p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">
                          ملاحظات
                        </label>
                        <p className="text-sm text-[#093738]">-</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Deactivate Confirmation Modal */}
        {isDeactivateModalOpen && locationToToggle && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg w-full max-w-md p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <Ban className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  هل أنت متأكد من تعطيل هذا الموقع؟
                </h3>
                <p className="text-sm text-gray-600 mb-6 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  لن يمكن استخدامه للأصول الجديدة.
                </p>
                <div className="flex gap-3 w-full">
                  <button
                    onClick={confirmDeactivate}
                    className="flex-1 px-4 py-2 bg-[#093738] text-white rounded-lg hover:bg-[#0a4849] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                  >
                    نعم، أريد تعطيله
                  </button>
                  <button
                    onClick={() => setIsDeactivateModalOpen(false)}
                    className="flex-1 px-4 py-2 border border-[#e2e2e2] text-[#093738] rounded-lg hover:bg-gray-50 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                  >
                    إلغاء
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Activate Confirmation Modal */}
        {isActivateModalOpen && locationToToggle && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg w-full max-w-md p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Play className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  هل أنت متأكد من تفعيل هذا الموقع؟
                </h3>
                <p className="text-sm text-gray-600 mb-6 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  سيصبح متاحاً للاستخدام.
                </p>
                <div className="flex gap-3 w-full">
                  <button
                    onClick={confirmActivate}
                    className="flex-1 px-4 py-2 bg-[#093738] text-white rounded-lg hover:bg-[#0a4849] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                  >
                    نعم، أريد تفعيله
                  </button>
                  <button
                    onClick={() => setIsActivateModalOpen(false)}
                    className="flex-1 px-4 py-2 border border-[#e2e2e2] text-[#093738] rounded-lg hover:bg-gray-50 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                  >
                    إلغاء
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Toast Notification */}
        {showToast && (
          <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
            <div className="bg-green-50 border border-green-200 rounded-lg px-6 py-3 flex items-center gap-3 shadow-lg">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <p className="text-sm font-medium text-green-800 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {toastMessage}
              </p>
              <button
                onClick={() => setShowToast(false)}
                className="mr-2 text-green-600 hover:text-green-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};
