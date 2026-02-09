import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { ChevronDown, ChevronUp, ChevronLeft, ArrowRight, X, Trash2, Edit, Copy } from 'lucide-react';
import { buttonClasses } from '../../styles/components/buttons';

interface TeamMember {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  isLeader: boolean;
  status: 'active' | 'inactive';
}

export const MaintenanceTeamForm = (): JSX.Element => {
  const navigate = useNavigate();
  const [expandedSections, setExpandedSections] = useState({
    definition: true,
    members: true,
    additionalInfo: false,
  });

  const [members, setMembers] = useState<TeamMember[]>([
    {
      id: 'member-1',
      fullName: 'علي السعيدي',
      phone: '+1234567890',
      email: 'alex.johnson@example.com',
      isLeader: false,
      status: 'active',
    },
    {
      id: 'member-2',
      fullName: 'فريد الجوهري',
      phone: '+1987654321',
      email: 'sara.connor@fakemail.com',
      isLeader: true,
      status: 'inactive',
    },
    {
      id: 'member-3',
      fullName: 'عمر الفريق',
      phone: '+1678901234',
      email: 'emily.jones@fauxmail.com',
      isLeader: false,
      status: 'inactive',
    },
    {
      id: 'member-4',
      fullName: 'سامي الحميدي',
      phone: '+1456789012',
      email: 'mike.brown@samplemail.com',
      isLeader: false,
      status: 'active',
    },
    {
      id: 'member-5',
      fullName: 'سامي النعيمي',
      phone: '+1123456789',
      email: 'mike.brown@samplemail.com',
      isLeader: false,
      status: 'active',
    },
    {
      id: 'member-6',
      fullName: 'سامي النعيمي',
      phone: '+1098765432',
      email: 'mike.brown@samplemail.com',
      isLeader: false,
      status: 'active',
    },
    {
      id: 'member-7',
      fullName: 'عمر الفريق',
      phone: '+1234509876',
      email: 'emily.jones@fauxmail.com',
      isLeader: false,
      status: 'inactive',
    },
    {
      id: 'member-8',
      fullName: 'عمر الفريق',
      phone: '+1678901235',
      email: 'emily.jones@fauxmail.com',
      isLeader: false,
      status: 'inactive',
    },
    {
      id: 'member-9',
      fullName: 'سامي النعيمي',
      phone: '+1456789013',
      email: 'mike.brown@samplemail.com',
      isLeader: false,
      status: 'active',
    },
    {
      id: 'member-10',
      fullName: 'سامي النعيمي',
      phone: '+1098765433',
      email: 'mike.brown@samplemail.com',
      isLeader: false,
      status: 'active',
    },
  ]);
  const [isAddMemberModalOpen, setIsAddMemberModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  
  const [memberForm, setMemberForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    isLeader: false,
    status: 'active' as 'active' | 'inactive',
  });

  const toggleSection = (section: 'definition' | 'members' | 'additionalInfo') => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const openAddMemberModal = () => {
    setMemberForm({
      fullName: '',
      phone: '',
      email: '',
      isLeader: false,
      status: 'active',
    });
    setEditingMember(null);
    setIsAddMemberModalOpen(true);
  };

  const openEditMemberModal = (member: TeamMember) => {
    setMemberForm({
      fullName: member.fullName,
      phone: member.phone,
      email: member.email,
      isLeader: member.isLeader,
      status: member.status,
    });
    setEditingMember(member);
    setIsAddMemberModalOpen(true);
  };

  const handleAddOrUpdateMember = () => {
    if (editingMember) {
      // Update existing member
      setMembers(members.map(m => 
        m.id === editingMember.id 
          ? { ...editingMember, ...memberForm }
          : m
      ));
    } else {
      // Add new member
      const newMember: TeamMember = {
        id: `member-${Date.now()}`,
        ...memberForm,
      };
      setMembers([...members, newMember]);
    }
    setIsAddMemberModalOpen(false);
  };

  const handleDeleteMember = (id: string) => {
    setMembers(members.filter(m => m.id !== id));
  };

  const handleSubmit = () => {
    console.log('Form submitted');
    navigate('/settings/assets/maintenance-team');
  };

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
              إضافة فريق جديد
            </h1>
          </div>
          <div className="flex gap-3">
            <button
              className="px-4 py-2 h-[38px] rounded-lg border border-[#e2e2e2] text-[#093738] hover:bg-gray-50 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm"
              onClick={() => navigate('/settings/assets/maintenance-team')}
            >
              إلغاء
            </button>
            <button
              className={`${buttonClasses.primary} flex items-center gap-2 h-[38px]`}
              onClick={handleSubmit}
            >
              <span>ارسل الطلب</span>
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
                بيانات تعريف موقع الأصل
              </span>
              {expandedSections.definition ? (
                <ChevronUp className="w-5 h-5 text-[#093738]" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[#093738]" />
              )}
            </button>
            {expandedSections.definition && (
              <div className="px-6 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* كود الفريق */}
                  <div>
                    <label className="block text-sm font-medium text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      كود الفريق
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      placeholder="أدخل كود الفريق"
                    />
                  </div>

                  {/* اسم الفريق */}
                  <div>
                    <label className="block text-sm font-medium text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      اسم الفريق
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      placeholder="أدخل اسم الفريق"
                    />
                  </div>

                  {/* نوع الفريق */}
                  <div>
                    <label className="block text-sm font-medium text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      نوع الفريق
                    </label>
                    <select className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      <option value="">اختر نوع الفريق</option>
                      <option value="داخلي">داخلي</option>
                      <option value="خارجي">خارجي</option>
                    </select>
                  </div>

                  {/* الجهة / الشركة */}
                  <div>
                    <label className="block text-sm font-medium text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      الجهة / الشركة
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      placeholder="أدخل اسم الجهة أو الشركة"
                    />
                  </div>

                  {/* حالة الفريق */}
                  <div>
                    <label className="block text-sm font-medium text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      حالة الفريق
                    </label>
                    <div className="flex items-center h-[42px]">
                      <div className="inline-flex px-4 py-2 bg-green-100 text-green-600 rounded-lg text-sm font-medium">
                        نشط
                      </div>
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
                  {members.length} عضو
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
                {members.length === 0 ? (
                  <div className="text-center py-8 mb-4">
                    <div className="text-gray-400 mb-2">
                      <svg
                        className="w-16 h-16 mx-auto mb-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-500 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      لا يوجد أعضاء حالياً
                    </p>
                    <p className="text-gray-400 text-xs mt-1 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      ابدأ بإضافة الأعضاء إلى الفريق
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Add Member Card */}
                    <button
                      onClick={openAddMemberModal}
                      className="relative bg-white border-2 border-dashed border-[#e2e2e2] rounded-lg p-4 hover:bg-gray-50 hover:border-[#093738] transition-all  flex flex-col items-center justify-center"
                    >
                      <div className="w-12 h-12 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center text-2xl mb-3">
                        +
                      </div>
                      <span className="text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm font-medium">
                        إضافة عضو جديد
                      </span>
                    </button>

                    {members.map((member) => {
                      const initials = member.fullName
                        .split(' ')
                        .map(n => n[0])
                        .join('')
                        .substring(0, 2);
                      
                      return (
                        <div
                          key={member.id}
                          className="relative bg-white border border-[#e2e2e2] rounded-lg p-4 hover:shadow-md transition-shadow"
                        >
                          {/* Header with Name and Actions */}
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3 flex-1">
                              {/* Avatar */}
                              <div className="w-12 h-12 rounded-full bg-[#093738] text-white flex items-center justify-center text-lg font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica] flex-shrink-0">
                                {initials}
                              </div>
                              
                              {/* Name and Status */}
                              <div className="flex-1 min-w-0">
                                <div className="text-base font-semibold text-[#093738] mb-1 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                                  {member.fullName}
                                </div>
                                <div className="flex items-center gap-2 flex-wrap">
                                  {member.isLeader && (
                                    <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded text-xs font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                                      مسؤول
                                    </span>
                                  )}
                                  <span
                                    className={`px-2 py-0.5 rounded text-xs font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica] ${
                                      member.status === 'active'
                                        ? 'bg-green-100 text-green-600'
                                        : 'bg-red-100 text-red-600'
                                    }`}
                                  >
                                    {member.status === 'active' ? 'نشط' : 'غير نشط'}
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-1 flex-shrink-0">
                              <button
                                onClick={() => openEditMemberModal(member)}
                                className="p-1.5 hover:bg-gray-100 rounded transition-colors"
                                title="تعديل"
                              >
                                <Edit className="w-4 h-4 text-gray-600" />
                              </button>
                              <button
                                onClick={() => handleDeleteMember(member.id)}
                                className="p-1.5 hover:bg-red-50 rounded transition-colors"
                                title="حذف"
                              >
                                <Trash2 className="w-4 h-4 text-red-600" />
                              </button>
                            </div>
                          </div>

                          {/* Contact Info */}
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]" dir="ltr">
                              <button
                                onClick={() => navigator.clipboard.writeText(member.email)}
                                className="p-1 hover:bg-gray-100 rounded transition-colors flex-shrink-0"
                                title="نسخ"
                              >
                                <Copy className="w-4 h-4 text-gray-400" />
                              </button>
                              <span className="truncate">{member.email}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]" dir="ltr">
                              <button
                                onClick={() => navigator.clipboard.writeText(member.phone)}
                                className="p-1 hover:bg-gray-100 rounded transition-colors flex-shrink-0"
                                title="نسخ"
                              >
                                <Copy className="w-4 h-4 text-gray-400" />
                              </button>
                              <span>{member.phone}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Additional Info Section */}
          <div>
            <button
              onClick={() => toggleSection('additionalInfo')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span className="text-lg font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                ملاحظات
              </span>
              {expandedSections.additionalInfo ? (
                <ChevronUp className="w-5 h-5 text-[#093738]" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[#093738]" />
              )}
            </button>
            {expandedSections.additionalInfo && (
              <div className="px-6 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {/* ملاحظات */}
                  <div className="md:col-span-4">
                    <label className="block text-sm font-medium text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      ملاحظات
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      placeholder="أدخل ملاحظات إضافية..."
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Add/Edit Member Modal */}
        {isAddMemberModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#e2e2e2]">
                <h2 className="text-lg font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  {editingMember ? 'تعديل عضو' : 'إضافة عضو'}
                </h2>
                <button
                  onClick={() => setIsAddMemberModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-[#093738]" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="px-6 py-4 space-y-4">
                {/* الاسم الكامل */}
                <div>
                  <label className="block text-sm font-medium text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    value={memberForm.fullName}
                    onChange={(e) => setMemberForm({ ...memberForm, fullName: e.target.value })}
                    className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    placeholder="أدخل الاسم الكامل"
                  />
                </div>

                {/* رقم الهاتف */}
                <div>
                  <label className="block text-sm font-medium text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    رقم الهاتف
                  </label>
                  <input
                    type="text"
                    value={memberForm.phone}
                    onChange={(e) => setMemberForm({ ...memberForm, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    placeholder="+1234567890"
                    dir="ltr"
                  />
                </div>

                {/* البريد الإلكتروني */}
                <div>
                  <label className="block text-sm font-medium text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    البريد الإلكتروني
                  </label>
                  <div className="space-y-2">
                    <input
                      type="email"
                      value={memberForm.email}
                      onChange={(e) => setMemberForm({ ...memberForm, email: e.target.value })}
                      className="w-full px-3 py-2 border border-[#e2e2e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      placeholder="example@domain.com"
                      dir="ltr"
                    />
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={memberForm.isLeader}
                        onChange={(e) => setMemberForm({ ...memberForm, isLeader: e.target.checked })}
                        className="w-4 h-4 text-[#093738] border-[#e2e2e2] rounded focus:ring-2 focus:ring-[#093738]"
                      />
                      <span className="text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        مسؤول الفريق
                      </span>
                    </label>
                  </div>
                </div>

                {/* حالة الموقع */}
                <div>
                  <label className="block text-sm font-medium text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    حالة الموقع
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        checked={memberForm.status === 'active'}
                        onChange={() => setMemberForm({ ...memberForm, status: 'active' })}
                        className="w-4 h-4 text-[#093738] border-[#e2e2e2] focus:ring-2 focus:ring-[#093738]"
                      />
                      <span className="text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        نشط
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        checked={memberForm.status === 'inactive'}
                        onChange={() => setMemberForm({ ...memberForm, status: 'inactive' })}
                        className="w-4 h-4 text-[#093738] border-[#e2e2e2] focus:ring-2 focus:ring-[#093738]"
                      />
                      <span className="text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        غير نشط
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex gap-3 px-6 py-4 border-t border-[#e2e2e2]">
                <button
                  onClick={() => setIsAddMemberModalOpen(false)}
                  className="flex-1 px-4 py-2 rounded-lg border border-[#e2e2e2] text-[#093738] hover:bg-gray-50 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm"
                >
                  إلغاء
                </button>
                <button
                  onClick={handleAddOrUpdateMember}
                  className={`flex-1 ${buttonClasses.primary}`}
                  disabled={!memberForm.fullName || !memberForm.phone || !memberForm.email}
                >
                  {editingMember ? 'تحديث' : 'إضافة'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};
