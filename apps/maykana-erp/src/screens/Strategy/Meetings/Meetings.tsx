import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../../components/Layout';
import { Button } from '../../../components/ui/button';
import { useLanguage } from '../../../contexts/LanguageContext';
import { Download, Filter, ChevronDown, MoreVertical, Plus } from 'lucide-react';

interface Meeting {
  id: string;
  meetingNumber: string;
  title: string;
  date: string;
  type: string;
  facilitator: string;
  linkedTo: string;
  attendees: number;
  attachments: number;
  status: string;
}

const mockMeetings: Meeting[] = [
  {
    id: '1',
    meetingNumber: 'MTG-004-2025',
    title: 'اجتماع متابعة المشروع الفصلية',
    date: '15/09/2025',
    type: 'متابعة تنفيذ',
    facilitator: 'خالد',
    linkedTo: 'مشروع: منصة الخدمات',
    attendees: 6,
    attachments: 2,
    status: 'مكتمل',
  },
];

export function Meetings() {
  const navigate = useNavigate();
  const { dir, t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'مكتمل':
        return 'bg-[#e8f5e9] text-[#2e7d32]';
      case 'قيد التنفيذ':
        return 'bg-[#fff3e0] text-[#e65100]';
      case 'ملغي':
        return 'bg-[#ffebee] text-[#c62828]';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout>
      <div className="space-y-4" dir={dir}>
        {/* Header with Search and Actions */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] p-4">
          <div className="flex items-center justify-between gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder={t('common.search_placeholder')}
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
              <Button
                variant="outline"
                className="gap-2 border-[#e2e2e2] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              >
                إخفاء/إظهار أعمدة
                <ChevronDown className="w-4 h-4" />
              </Button>

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
                onClick={() => navigate('/strategy/meetings/new')}
                className="gap-2 bg-[#11383f] hover:bg-[#0d2b30] text-white [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              >
                <Plus className="w-4 h-4" />
                اجتماع جديد
              </Button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#f8f9fa] border-b border-[#e2e2e2]">
                <tr>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    رقم الاجتماع
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    عنوان الاجتماع
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    التاريخ
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    النوع
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    الميسر
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    اتخاذ الربط
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    الحضور
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    المرفقات
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    الحالة
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-[#0e0d24] w-16">
                    ...
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2e2e2]">
                {mockMeetings.map((meeting) => (
                  <tr
                    key={meeting.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-4 py-4 text-sm text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {meeting.meetingNumber}
                    </td>
                    <td className="px-4 py-4 text-sm text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {meeting.title}
                    </td>
                    <td className="px-4 py-4 text-sm text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {meeting.date}
                    </td>
                    <td className="px-4 py-4 text-sm text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {meeting.type}
                    </td>
                    <td className="px-4 py-4 text-sm text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {meeting.facilitator}
                    </td>
                    <td className="px-4 py-4 text-sm text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {meeting.linkedTo}
                    </td>
                    <td className="px-4 py-4 text-sm text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {meeting.attendees}
                    </td>
                    <td className="px-4 py-4 text-sm text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {meeting.attachments}
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica] ${getStatusColor(meeting.status)}`}
                      >
                        {meeting.status}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                        <MoreVertical className="w-5 h-5 text-gray-600" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}
