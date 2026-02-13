import { useState, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { ArrowRight, ChevronUp, ChevronDown, ChevronLeft } from 'lucide-react';
import { buttonClasses } from '@/styles/components/buttons';
import { getMaintenanceTeamById } from '@/data/settings/maintenance-team.data';

export const MaintenanceTeamView = (): JSX.Element => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const team = useMemo(() => (id ? getMaintenanceTeamById(id) : null), [id]);

  const [expandedSections, setExpandedSections] = useState({
    definition: true,
    members: true,
  });

  const toggleSection = (section: 'definition' | 'members') => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleEdit = () => {
    navigate(`/settings/assets/maintenance-team/edit/${id}`);
  };

  if (!team) {
    return (
      <Layout>
        <div className="text-center py-12">
          <p className="text-[#093738]">الفريق غير موجود</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/settings/assets/maintenance-team')}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              title="رجوع"
            >
              <ArrowRight className="w-5 h-5 text-[#093738]" />
            </button>
            <h1 className="text-2xl font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              تفاصيل فريق الصيانة - {team.name}
            </h1>
          </div>
          <div className="flex gap-3">
            <button
              className="px-4 py-2 h-[38px] rounded-lg border border-[#e2e2e2] text-[#093738] hover:bg-gray-50 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm"
              onClick={handleEdit}
            >
              تعديل
            </button>
            <button className="px-4 py-2 h-[38px] rounded-lg border border-[#e2e2e2] text-[#093738] hover:bg-gray-50 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm">
              تعطيل الموثق
            </button>
            <button
              className={`${buttonClasses.primary} flex items-center gap-2 h-[38px]`}
              onClick={() => navigate('/settings/assets/maintenance-team')}
            >
              <span>حفظ</span>
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-lg border border-[#e2e2e2]">
          {/* Definition Section */}
          <div className="border-b border-[#e2e2e2]">
            <button
              onClick={() => toggleSection('definition')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span className="text-lg font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                معلومات فريق الصيانة
              </span>
              {expandedSections.definition ? (
                <ChevronUp className="w-5 h-5 text-[#093738]" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[#093738]" />
              )}
            </button>
            {expandedSections.definition && (
              <div className="px-6 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Row 1 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      كود الفريق
                    </label>
                    <div className="text-[#093738] font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {team.code}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      اسم الفريق
                    </label>
                    <div className="text-[#093738] font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {team.name}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      نوع الفريق
                    </label>
                    <div className="text-[#093738] font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {team.type}
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      الجهة / الشركة
                    </label>
                    <div className="text-[#093738] font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {team.company}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      حالة الموثق
                    </label>
                    <div className="flex items-center">
                      <div
                        className={`inline-flex px-4 py-2 rounded-lg text-sm font-medium ${
                          team.status === 'active'
                            ? 'bg-green-100 text-green-600'
                            : 'bg-red-100 text-red-600'
                        }`}
                      >
                        {team.status === 'active' ? 'نشط' : 'غير نشط'}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      تاريخ الإنشاء
                    </label>
                    <div className="text-[#093738] font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {team.createdDate}
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      آخر تعديل
                    </label>
                    <div className="text-[#093738] font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {team.lastModified}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Members Section */}
          <div className="border-b border-[#e2e2e2]">
            <button
              onClick={() => toggleSection('members')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  الأعضاء
                </span>
                <span className="text-sm text-gray-500 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  عضو {team.members.length}
                </span>
              </div>
              {expandedSections.members ? (
                <ChevronUp className="w-5 h-5 text-[#093738]" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[#093738]" />
              )}
            </button>
            {expandedSections.members && (
              <div className="px-6 pb-6">
                {/* Members Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-[#e2e2e2]">
                        <th className="text-right py-3 px-4 text-sm font-medium text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          الاسم
                        </th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          الدور داخل الفريق
                        </th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          نوع الفريق
                        </th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          البريد الإلكتروني
                        </th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          الحالة
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {team.members.map((member) => (
                        <tr key={member.id} className="border-b border-[#e2e2e2] hover:bg-gray-50">
                          <td className="py-3 px-4">
                            <div className="text-[#093738] font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                              {member.fullName}
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <div className="text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                              {member.role}
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <div className="text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                              {member.phone}
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <div className="text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                              {member.email}
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <div
                              className={`inline-flex px-3 py-1 rounded-lg text-xs font-medium ${
                                member.status === 'active'
                                  ? 'bg-green-100 text-green-600'
                                  : 'bg-red-100 text-red-600'
                              }`}
                            >
                              {member.status === 'active' ? 'نشط' : 'غير نشط'}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};
