import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Card } from '@/components/ui/card';
import InitialFilters from '@/components/InitialFilters';
import { Download, Filter, Plus, MoreVertical, Eye, Edit2, Ban, Play, X } from 'lucide-react';
import { buttonClasses } from '@/styles/components/buttons';
import { getMaintenanceTeamsListSampleData, type MaintenanceTeamListItem } from '@/data/settings/maintenance-team.data';

export const MaintenanceTeam = (): JSX.Element => {
  const navigate = useNavigate();
  const [teams, setTeams] = useState<MaintenanceTeamListItem[]>(() => getMaintenanceTeamsListSampleData());

  const [searchQuery, setSearchQuery] = useState('');
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [menuPosition, setMenuPosition] = useState<{ top: number; left: number } | null>(null);

  // Modals for deactivate/activate confirmation
  const [isDeactivateModalOpen, setIsDeactivateModalOpen] = useState(false);
  const [isActivateModalOpen, setIsActivateModalOpen] = useState(false);
  const [teamToToggle, setTeamToToggle] = useState<MaintenanceTeamListItem | null>(null);

  // Toast notification state
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Filter state
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'inactive'>('all');
  const [filterType, setFilterType] = useState<string>('all');

  const filteredTeams = teams.filter((team) => {
    const matchesSearch =
      team.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      team.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      team.leaderName.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      filterStatus === 'all' ||
      (filterStatus === 'active' && team.isActive) ||
      (filterStatus === 'inactive' && !team.isActive);

    const matchesType = filterType === 'all' || team.type === filterType;

    return matchesSearch && matchesStatus && matchesType;
  });

  const handleViewDetails = (team: MaintenanceTeamListItem) => {
    navigate(`/settings/assets/maintenance-team/view/${team.id}`);
  };

  const handleEdit = (id: string) => {
    navigate(`/settings/assets/maintenance-team/edit/${id}`);
  };

  const handleDeactivateClick = (team: MaintenanceTeamListItem) => {
    setTeamToToggle(team);
    setIsDeactivateModalOpen(true);
    setOpenMenuId(null);
  };

  const handleActivateClick = (team: MaintenanceTeamListItem) => {
    setTeamToToggle(team);
    setIsActivateModalOpen(true);
    setOpenMenuId(null);
  };

  const confirmDeactivate = () => {
    if (teamToToggle) {
      setTeams((prev) =>
        prev.map((team) => (team.id === teamToToggle.id ? { ...team, isActive: false } : team))
      );
      setToastMessage('تم تعطيل الفريق');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
    setIsDeactivateModalOpen(false);
    setTeamToToggle(null);
  };

  const confirmActivate = () => {
    if (teamToToggle) {
      setTeams((prev) =>
        prev.map((team) => (team.id === teamToToggle.id ? { ...team, isActive: true } : team))
      );
      setToastMessage('تم تفعيل الفريق');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
    setIsActivateModalOpen(false);
    setTeamToToggle(null);
  };

  const applyFilters = () => {
    setIsFilterOpen(false);
  };

  const clearFilters = () => {
    setFilterStatus('all');
    setFilterType('all');
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

                      {/* نوع الفريق */}
                      <div>
                        <label className="block text-sm font-medium text-[#093738] mb-1">نوع الفريق</label>
                        <select
                          value={filterType}
                          onChange={(e) => setFilterType(e.target.value)}
                          className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg text-sm"
                        >
                          <option value="all">الكل</option>
                          <option value="داخلي">داخلي</option>
                          <option value="خارجي">خارجي</option>
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
                onClick={() => navigate('/settings/assets/maintenance-team/create')}
                className={`${buttonClasses.primary} flex items-center gap-2 h-[38px]`}
              >
                <Plus className="w-4 h-4" />
                <span>إضافة فريق جديد</span>
              </button>
            </div>
          </div>
        </InitialFilters>

        {/* Table or Empty State */}
        {filteredTeams.length === 0 && searchQuery === '' && filterStatus === 'all' ? (
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
                لا توجد فرق صيانة مضافة بعد
              </h3>
              <p className="text-[#6B7280] mb-6 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                قم بإضافة فرق الصيانة لإدارة عمليات الصيانة بكفاءة.
              </p>
              <button
                onClick={() => navigate('/settings/assets/maintenance-team/create')}
                className="px-6 py-3 bg-[#093738] text-white rounded-lg hover:bg-[#0a4849] transition-colors [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium"
              >
                إضافة أول فريق صيانة
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
                      إضافة فريق
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-semibold text-[#093738] border-b border-[#e2e2e2]">
                      اسم الفريق
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-semibold text-[#093738] border-b border-[#e2e2e2]">
                      اسم قائد الفريق
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-semibold text-[#093738] border-b border-[#e2e2e2]">
                      عدد أعضاء الفريق
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-semibold text-[#093738] border-b border-[#e2e2e2]">
                      نوع الفريق
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-semibold text-[#093738] border-b border-[#e2e2e2]">
                      الحالة
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-[#093738] border-b border-[#e2e2e2] w-[50px]"></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTeams.map((team) => (
                    <tr key={team.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 text-sm text-[#093738] border-b border-[#e2e2e2]">
                        {team.code}
                      </td>
                      <td className="px-4 py-3 text-sm text-[#093738] border-b border-[#e2e2e2]">
                        {team.name}
                      </td>
                      <td className="px-4 py-3 text-sm text-[#093738] border-b border-[#e2e2e2]">
                        {team.leaderName}
                      </td>
                      <td className="px-4 py-3 text-sm text-[#093738] border-b border-[#e2e2e2]">
                        {team.memberCount}
                      </td>
                      <td className="px-4 py-3 text-sm text-[#093738] border-b border-[#e2e2e2]">
                        {team.type}
                      </td>
                      <td className="px-4 py-3 text-sm border-b border-[#e2e2e2]">
                        <span
                          className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                            team.isActive
                              ? 'bg-green-100 text-green-600'
                              : 'bg-red-100 text-red-600'
                          }`}
                        >
                          {team.isActive ? 'نشط' : 'غير نشط'}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm border-b border-[#e2e2e2]">
                        <div className="relative">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              const rect = e.currentTarget.getBoundingClientRect();
                              const menuWidth = 192;
                              const menuHeight = team.isActive ? 140 : 100;
                              
                              let left = rect.left + window.scrollX - menuWidth + 40;
                              let top = rect.bottom + window.scrollY + 4;
                              
                              if (left < 10) {
                                left = 10;
                              }
                              
                              const rightEdge = left + menuWidth;
                              if (rightEdge > window.innerWidth - 10) {
                                left = window.innerWidth - menuWidth - 10;
                              }
                              
                              if (top + menuHeight > window.innerHeight + window.scrollY - 10) {
                                top = rect.top + window.scrollY - menuHeight - 4;
                              }
                              
                              setMenuPosition({ top, left });
                              setOpenMenuId(openMenuId === team.id ? null : team.id);
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

        {/* Dropdown Menu */}
        {openMenuId && menuPosition && (
          <div 
            className="fixed w-48 bg-white rounded-lg shadow-lg border border-[#e2e2e2] z-[100] py-1"
            style={{
              top: `${menuPosition.top}px`,
              left: `${menuPosition.left}px`,
            }}
          >
            {(() => {
              const team = teams.find(t => t.id === openMenuId);
              if (!team) return null;
              
              return (
                <>
                  {/* عرض التفاصيل */}
                  <button
                    onClick={() => handleViewDetails(team)}
                    className="w-full px-4 py-2 text-right text-sm text-[#093738] hover:bg-gray-50 flex items-center gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    <span>عرض التفاصيل</span>
                  </button>

                  {/* تعديل */}
                  {team.isActive && (
                    <button
                      onClick={() => handleEdit(team.id)}
                      className="w-full px-4 py-2 text-right text-sm text-[#093738] hover:bg-gray-50 flex items-center gap-2"
                    >
                      <Edit2 className="w-4 h-4" />
                      <span>تعديل موقع الأصل</span>
                    </button>
                  )}

                  {/* تعطيل */}
                  {team.isActive && (
                    <button
                      onClick={() => handleDeactivateClick(team)}
                      className="w-full px-4 py-2 text-right text-sm text-[#093738] hover:bg-gray-50 flex items-center gap-2 border-t border-[#e2e2e2]"
                    >
                      <Ban className="w-4 h-4 text-red-600" />
                      <span className="text-red-600">تعطيل الموقع</span>
                    </button>
                  )}

                  {/* تفعيل */}
                  {!team.isActive && (
                    <button
                      onClick={() => handleActivateClick(team)}
                      className="w-full px-4 py-2 text-right text-sm text-[#093738] hover:bg-gray-50 flex items-center gap-2 border-t border-[#e2e2e2]"
                    >
                      <Play className="w-4 h-4 text-green-600" />
                      <span className="text-green-600">تفعيل الفريق</span>
                    </button>
                  )}
                </>
              );
            })()}
          </div>
        )}

        {/* Deactivate Confirmation Modal */}
        {isDeactivateModalOpen && teamToToggle && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg w-full max-w-md p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <Ban className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  هل أنت متأكد من تعطيل هذا الفريق؟
                </h3>
                <p className="text-sm text-gray-600 mb-6 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  لن يكون متاحاً للاستخدام في العمليات الجديدة.
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
        {isActivateModalOpen && teamToToggle && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg w-full max-w-md p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Play className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  هل أنت متأكد من تفعيل هذا الفريق؟
                </h3>
                <p className="text-sm text-gray-600 mb-6 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  سيصبح متاحاً للاستخدام في العمليات الجديدة.
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
