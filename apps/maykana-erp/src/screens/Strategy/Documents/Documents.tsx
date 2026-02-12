import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Download, Filter, ChevronDown, MoreVertical, Plus } from 'lucide-react';

interface Document {
  id: string;
  name: string;
  type: string;
  linkedTo: string;
  date: string;
  size: string;
  access: boolean;
  version: string;
  status: string;
}

const mockDocuments: Document[] = [
  {
    id: '1',
    name: 'عقد التوريد',
    type: 'PDF',
    linkedTo: 'مشروع: منصة الخدمات',
    date: '01/03/2025',
    size: '10 MB',
    access: true,
    version: 'v1.01',
    status: 'فريق المبرمج',
  },
];

export function Documents() {
  const navigate = useNavigate();
  const { dir, t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

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
                onClick={() => navigate('/strategy/documents/new')}
                className="gap-2 bg-[#11383f] hover:bg-[#0d2b30] text-white [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              >
                <Plus className="w-4 h-4" />
                مستند جديد
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
                    اسم المستند
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    النوع
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    اتخاذ الربط
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    التاريخ
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    الحجم
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    الوصول
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    النسخة
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
                {mockDocuments.map((doc) => (
                  <tr
                    key={doc.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-4 py-4 text-sm text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {doc.name}
                    </td>
                    <td className="px-4 py-4 text-sm text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {doc.type}
                    </td>
                    <td className="px-4 py-4 text-sm text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {doc.linkedTo}
                    </td>
                    <td className="px-4 py-4 text-sm text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {doc.date}
                    </td>
                    <td className="px-4 py-4 text-sm text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {doc.size}
                    </td>
                    <td className="px-4 py-4">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={doc.access}
                          className="sr-only peer"
                          readOnly
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                        <span className="ms-3 text-sm font-medium text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          نشط
                        </span>
                      </label>
                    </td>
                    <td className="px-4 py-4 text-sm text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {doc.version}
                    </td>
                    <td className="px-4 py-4 text-sm text-[#0e0d24] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {doc.status}
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
