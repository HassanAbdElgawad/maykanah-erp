import { useState } from 'react';
import { Layout } from '../../../components/Layout';
import { useLanguage } from '../../../contexts/LanguageContext';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Search, Download } from 'lucide-react';
import { RemoteWorkPolicySidebar } from './RemoteWorkPolicySidebar';

interface RemoteWorkPolicy {
  id: string;
  policyName: string;
  description: string;
  maxDaysAvailable: string;
  maxDaysPerMonth: string;
  departments: string;
}

export function RemoteWork() {
  const { dir, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedPolicy, setSelectedPolicy] = useState<RemoteWorkPolicy | null>(null);

  // Sample data
  const policies: RemoteWorkPolicy[] = [
    {
      id: '1',
      policyName: 'الاسم بالعربية',
      description: 'زيارة للسوق',
      maxDaysAvailable: '5 أيام',
      maxDaysPerMonth: '5 أيام',
      departments: 'كل الأقسام',
    },
    {
      id: '2',
      policyName: 'الاسم بالعربية',
      description: 'زيارة للسوق',
      maxDaysAvailable: '5 أيام',
      maxDaysPerMonth: '5 أيام',
      departments: 'كل الأقسام',
    },
    {
      id: '3',
      policyName: 'الاسم بالعربية',
      description: 'زيارة للسوق',
      maxDaysAvailable: '5 أيام',
      maxDaysPerMonth: '5 أيام',
      departments: 'كل الأقسام',
    },
  ];

  const handleAddPolicy = () => {
    setSelectedPolicy(null);
    setIsSidebarOpen(true);
  };

  const handleEditPolicy = (policy: RemoteWorkPolicy) => {
    setSelectedPolicy(policy);
    setIsSidebarOpen(true);
  };

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
                placeholder={t('hr.search_policies')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10 py-2 border border-gray-300 rounded-lg w-full"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2">
            <Button variant="outline" className="px-4 py-2 border border-gray-300 rounded-lg">
              {t('hr.filter')}
            </Button>
            <Button variant="outline" className="px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2">
              <Download className="w-4 h-4" />
              {t('hr.download')}
            </Button>
            <Button
              onClick={handleAddPolicy}
              className="bg-[#11383f] hover:bg-[#0f2f35] text-white px-6 py-2 rounded-lg"
            >
              {t('hr.add_remote_work_policy')}
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                    {t('hr.policy_name')}
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                    {t('hr.description')}
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                    {t('hr.max_days_available')}
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                    {t('hr.max_days_per_month')}
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                    {t('hr.departments')}
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-700"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {policies.map((policy) => (
                  <tr key={policy.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-900">{policy.policyName}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{policy.description}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{policy.maxDaysAvailable}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{policy.maxDaysPerMonth}</td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-[#11383f] font-medium">
                        {policy.departments}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleEditPolicy(policy)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        ⋮
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
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
      </div>

      {/* Sidebar */}
      <RemoteWorkPolicySidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        policy={selectedPolicy}
      />
    </Layout>
  );
}
