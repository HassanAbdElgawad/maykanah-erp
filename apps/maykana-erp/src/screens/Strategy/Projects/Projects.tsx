import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../../components/Layout';
import { Button } from '../../../components/ui/button';
import { Download, Filter, ChevronDown, MoreVertical, Plus, Eye, Edit2, Trash2 } from 'lucide-react';

interface Project {
  id: string;
  projectNumber: string;
  projectName: string;
  currentStage: string;
  projectManager: string;
  startDate: string;
  endDate: string;
  projectType: string;
  progress: number;
  isActive: boolean;
}

export function Projects() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [showColumnSelector, setShowColumnSelector] = useState(false);
  const [menuPosition, setMenuPosition] = useState<{ top: number; left: number } | null>(null);

  const mockProjects: Project[] = [
    {
      id: '1',
      projectNumber: 'PRJ-001-2025',
      projectName: 'منصة الخدمات',
      currentStage: 'التنفيذ',
      projectManager: 'خالد الذبيحي',
      startDate: '01/03/2025',
      endDate: '30/12/2025',
      projectType: 'مشروع',
      progress: 40,
      isActive: true,
    },
  ];

  const filteredProjects = mockProjects.filter(project =>
    project.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.projectNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.projectManager.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getProgressColor = (progress: number) => {
    if (progress >= 75) return 'bg-green-500';
    if (progress >= 50) return 'bg-blue-500';
    if (progress >= 25) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const toggleProjectStatus = (id: string) => {
    // Handle toggle status
    console.log('Toggle status for project:', id);
  };

  const handleMenuClick = (e: React.MouseEvent, projectId: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const menuWidth = 180;
    
    // Calculate position - menu should appear to the left of the button (RTL)
    let left = rect.left + window.scrollX - menuWidth;
    
    // Make sure menu doesn't go off-screen to the left
    if (left < 10) {
      left = 10;
    }
    
    // Make sure menu doesn't go off-screen to the right
    if (left + menuWidth > window.innerWidth - 10) {
      left = window.innerWidth - menuWidth - 10;
    }
    
    setMenuPosition({
      top: rect.bottom + window.scrollY + 4,
      left: left,
    });
    setOpenMenuId(openMenuId === projectId ? null : projectId);
  };

  return (
    <Layout>
      <div className="space-y-4">
        {/* Header with Search and Actions */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] p-4">
          <div className="flex items-center justify-between gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="البحث عن اسم المشروع، الرقم، المدير..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 pr-10 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11383f] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              />
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <div className="relative">
                <Button
                  variant="outline"
                  onClick={() => setShowColumnSelector(!showColumnSelector)}
                  className="gap-2 border-[#e2e2e2] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                >
                  إظهار/إخفاء أعمدة
                  <ChevronDown className="w-4 h-4" />
                </Button>
                {showColumnSelector && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-[#e2e2e2] z-10 p-2">
                    <div className="text-sm text-gray-700">خيارات الأعمدة</div>
                  </div>
                )}
              </div>

              <Button
                variant="outline"
                className="gap-2 border-[#e2e2e2] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              >
                <Download className="w-4 h-4" />
                تحميل
              </Button>

              <Button
                variant="outline"
                className="gap-2 border-[#e2e2e2] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              >
                <Filter className="w-4 h-4" />
                فلتر
              </Button>

              <Button
                onClick={() => navigate('/strategy/projects/new')}
                className="gap-2 bg-[#11383f] hover:bg-[#0d2b30] text-white [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              >
                <Plus className="w-4 h-4" />
                مشروع جديد
              </Button>
            </div>
          </div>
        </div>

        {/* Projects Table */}
        <div className="bg-white rounded-xl border border-[#e2e2e2]">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-[#e2e2e2]">
                <tr>
                  <th className="px-4 py-3 text-right text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    رقم المشروع
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    اسم المشروع
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    الدرجة الحالية
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    مدير المشروع
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    تاريخ البداية
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    تاريخ النهاية
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    نوع المشروع
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    حالة المشروع
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    حالة المشروع
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-[#e2e2e2]">
                {filteredProjects.map((project) => (
                  <tr key={project.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="text-sm text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">{project.projectNumber}</div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="text-sm text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">{project.projectName}</div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="text-sm text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">{project.currentStage}</div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="text-sm text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">{project.projectManager}</div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="text-sm text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">{project.startDate}</div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="text-sm text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">{project.endDate}</div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="text-sm text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">{project.projectType}</div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] min-w-[45px]">
                          {project.progress}%
                        </span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[150px]">
                          <div
                            className={`h-2 rounded-full transition-all ${getProgressColor(project.progress)}`}
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">نشط</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={project.isActive}
                            onChange={() => toggleProjectStatus(project.id)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                        </label>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-center">
                      <button
                        onClick={(e) => handleMenuClick(e, project.id)}
                        className="p-1 hover:bg-gray-100 rounded inline-flex items-center"
                      >
                        <MoreVertical className="h-5 w-5 text-gray-500" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-2">لا توجد مشاريع</div>
              <p className="text-sm text-gray-500">
                لم يتم العثور على أي مشاريع. جرب تعديل البحث أو أضف مشروعاً جديداً.
              </p>
            </div>
          )}
        </div>

        {/* Dropdown Menu - Fixed Position Outside Table */}
        {openMenuId && menuPosition && (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={() => setOpenMenuId(null)}
            />
            <div 
              className="fixed bg-white border border-[#e2e2e2] rounded-lg shadow-lg py-1 z-50 min-w-[180px]"
              style={{
                top: `${menuPosition.top}px`,
                left: `${menuPosition.left}px`,
              }}
            >
              <button
                onClick={() => {
                  navigate(`/strategy/projects/${openMenuId}`);
                  setOpenMenuId(null);
                }}
                className="w-full px-4 py-2 text-right text-sm text-[#0e0d24] hover:bg-gray-50 transition-colors [font-family:'IBM_Plex_Sans_Arabic',Helvetica] flex items-center gap-2"
              >
                <Eye className="h-4 w-4" />
                عرض التفاصيل
              </button>
              <button
                onClick={() => {
                  navigate(`/strategy/projects/${openMenuId}/edit`);
                  setOpenMenuId(null);
                }}
                className="w-full px-4 py-2 text-right text-sm text-[#0e0d24] hover:bg-gray-50 transition-colors [font-family:'IBM_Plex_Sans_Arabic',Helvetica] flex items-center gap-2"
              >
                <Edit2 className="h-4 w-4" />
                تعديل
              </button>
              <button
                onClick={() => {
                  if (confirm('هل أنت متأكد من حذف هذا المشروع؟')) {
                    setOpenMenuId(null);
                  }
                }}
                className="w-full px-4 py-2 text-right text-sm text-red-600 hover:bg-gray-50 transition-colors [font-family:'IBM_Plex_Sans_Arabic',Helvetica] flex items-center gap-2"
              >
                <Trash2 className="h-4 w-4" />
                حذف
              </button>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
