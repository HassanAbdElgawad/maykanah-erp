import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../../components/Layout';
import { useLanguage } from '../../../contexts/LanguageContext';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Search } from 'lucide-react';

interface LeaveRequest {
  id: string;
  employee: string;
  employeeId: string;
  department: string;
  leaveType: string;
  date: string;
  status: 'مقبول' | 'مرفوض' | 'قيد المراجعة';
}

export function LeavesAttendance() {
  const { dir, t } = useLanguage();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('leave-requests');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample data
  const leaveRequests: LeaveRequest[] = [
    {
      id: '1',
      employee: 'أحمد عبد السلام',
      employeeId: '2522169654126',
      department: 'الالكتروني',
      leaveType: 'نوع الأجازة',
      date: '2023-12-9',
      status: 'مقبول',
    },
    {
      id: '2',
      employee: 'عمر السعيد',
      employeeId: '2511685255556',
      department: 'التقني',
      leaveType: 'نوع الأجازة',
      date: '2023-2-20',
      status: 'مقبول',
    },
    {
      id: '3',
      employee: 'يوسف الحجار',
      employeeId: '251165552256',
      department: 'التقني',
      leaveType: 'نوع الأجازة',
      date: '2023-2-15',
      status: 'مرفوض',
    },
    {
      id: '4',
      employee: 'خالد فؤاد',
      employeeId: '2511636985216',
      department: 'التقني',
      leaveType: 'نوع الأجازة',
      date: '2020-2-10',
      status: 'مقبول',
    },
  ];

  const tabs = [
    { id: 'leave-requests', label: 'طلبات الأجازة' },
    { id: 'compensatory-leaves', label: 'إجازات التعويضية' },
    { id: 'attendance-permission', label: 'الحضور والاستئذان' },
  ];

  return (
    <Layout>
      <div
        className={`flex flex-col gap-4 ${dir === 'rtl' ? "font-['IBM_Plex_Sans_Arabic']" : ''}`}
        dir={dir}
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-[#e2e2e2]">
          {/* Search Bar */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="ابحث عن هنا..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10 py-2 border border-gray-300 rounded-lg w-full"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2">
            <Button variant="outline" className="px-4 py-2 border border-gray-300 rounded-lg">
              فلتر
            </Button>
            <Button variant="outline" className="px-4 py-2 border border-gray-300 rounded-lg">
              تحميل
            </Button>
            <Button
              onClick={() => navigate('/hr/leaves-attendance/new')}
              className="bg-[#11383f] hover:bg-[#0f2f35] text-white px-6 py-2 rounded-lg"
            >
              طلب جديد
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <div className="flex border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 text-sm font-medium transition-colors border-b-4 ${
                  activeTab === tab.id
                    ? 'border-[#11383f] text-[#11383f]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Table */}
          {activeTab === 'leave-requests' && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                      الموظف
                    </th>
                    <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                      الرقم الوظيفي
                    </th>
                    <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                      القسم
                    </th>
                    <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                      نوع الأجازة
                    </th>
                    <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                      التاريخ
                    </th>
                    <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                      حالة الطلب
                    </th>
                    <th className="px-6 py-3 text-right text-sm font-medium text-gray-700"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {leaveRequests.map((request) => (
                    <tr key={request.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-900">{request.employee}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{request.employeeId}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{request.department}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{request.leaveType}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{request.date}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            request.status === 'مقبول'
                              ? 'bg-green-100 text-green-700'
                              : request.status === 'مرفوض'
                                ? 'bg-red-100 text-red-700'
                                : 'bg-yellow-100 text-yellow-700'
                          }`}
                        >
                          {request.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-gray-400 hover:text-gray-600">⋮</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'compensatory-leaves' && (
            <div className="p-8 text-center text-gray-500">
              <p>لا توجد بيانات لإجازات التعويضية</p>
            </div>
          )}

          {activeTab === 'attendance-permission' && (
            <div className="p-8 text-center text-gray-500">
              <p>لا توجد بيانات للحضور والاستئذان</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {activeTab === 'leave-requests' && (
          <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-[#e2e2e2]">
            <button className="text-sm text-gray-600 hover:text-gray-800">{t('hr.previous')}</button>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-lg bg-[#11383f] text-white">1</button>
              <button className="w-8 h-8 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50">
                2
              </button>
              <button className="w-8 h-8 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50">
                3
              </button>
            </div>
            <button className="px-4 py-2 rounded-lg bg-[#11383f] hover:bg-[#0f2f35] text-white text-sm">{t('hr.next')}</button>
          </div>
        )}
      </div>
    </Layout>
  );
}
