import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ChevronRight, Download, MoreVertical } from 'lucide-react';
import { AddPolicyModal } from './AddPolicyModal';

interface Communication {
  id: string;
  title: string;
  effectiveDate: string;
  expiryDate: string;
  targetAudience: string;
}

interface Form {
  id: string;
  title: string;
  file: string;
}

interface Policy {
  id: string;
  title: string;
  effectiveDate: string;
  description: string;
}

export function CommunicationLibrary() {
  const { dir, t } = useLanguage();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('communication');
  const [showMenu, setShowMenu] = useState<string | null>(null);
  const [showPolicyModal, setShowPolicyModal] = useState(false);

  const communications: Communication[] = [
    {
      id: '1',
      title: 'أحمد عبد السلام',
      effectiveDate: '9 - 12 - 2023',
      expiryDate: '9 - 12 - 2023',
      targetAudience: 'نشط',
    },
    {
      id: '2',
      title: 'عمر السعيد',
      effectiveDate: '20 - 2 - 2023',
      expiryDate: '20 - 2 - 2023',
      targetAudience: 'منتهي الخدمة',
    },
    {
      id: '3',
      title: 'يوسف النجار',
      effectiveDate: '15 - 2 - 2023',
      expiryDate: '15 - 2 - 2023',
      targetAudience: 'نشط',
    },
    {
      id: '4',
      title: 'خالد فؤاد',
      effectiveDate: '10 - 2 - 2020',
      expiryDate: '10 - 2 - 2020',
      targetAudience: 'منتهي الخدمة',
    },
  ];

  const forms: Form[] = [
    {
      id: '1',
      title: 'أحمد عبد السلام',
      file: 'نشط',
    },
    {
      id: '2',
      title: 'عمر السعيد',
      file: 'منتهي الخدمة',
    },
    {
      id: '3',
      title: 'يوسف النجار',
      file: 'نشط',
    },
    {
      id: '4',
      title: 'خالد فؤاد',
      file: 'منتهي الخدمة',
    },
  ];

  const policies: Policy[] = [
    {
      id: '1',
      title: 'القسم السياسات العربية',
      effectiveDate: '20-2-2025',
      description: 'موظف',
    },
    {
      id: '2',
      title: 'القسم السياسات العربية',
      effectiveDate: '20-2-2025',
      description: 'موظف',
    },
    {
      id: '3',
      title: 'القسم السياسات العربية',
      effectiveDate: '20-2-2025',
      description: 'موظف',
    },
  ];

  const tabs = [
    { id: 'communication', label: 'التواصل والمكتبة' },
    { id: 'forms', label: 'النماذج' },
    { id: 'policies', label: 'السياسات' },
  ];

  return (
    <Layout>
      <div
        className={`flex flex-col gap-4 ${dir === 'rtl' ? "font-['IBM_Plex_Sans_Arabic']" : ''}`}
        dir={dir}
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-[#e2e2e2]">
          {/* Right Side: Back Button + Title */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/hr')}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
            <h1 className="text-xl font-semibold text-[#11383f]">{t('hr.communication_library')}</h1>
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
              onClick={() => {
                if (activeTab === 'communication') {
                  navigate('/hr/communication-library/new-announcement');
                } else if (activeTab === 'policies') {
                  setShowPolicyModal(true);
                }
              }}
              className="bg-[#11383f] hover:bg-[#0f2f35] text-white px-6 py-2 rounded-lg"
            >
              {t('hr.new_request')}
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl border border-[#e2e2e2]">
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

          {/* Communication Table */}
          {activeTab === 'communication' && (
            <div className="overflow-x-auto overflow-visible">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                      {t('hr.title')}
                    </th>
                    <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                      {t('hr.effective_date')}
                    </th>
                    <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                      {t('hr.expiry_date')}
                    </th>
                    <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                      {t('hr.target_audience')}
                    </th>
                    <th className="px-6 py-3 text-right text-sm font-medium text-gray-700"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {communications.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-900">{item.title}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{item.effectiveDate}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{item.expiryDate}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{item.targetAudience}</td>
                      <td className="px-6 py-4 relative">
                        <button
                          onClick={() => setShowMenu(showMenu === item.id ? null : item.id)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <MoreVertical className="w-5 h-5" />
                        </button>
                        {showMenu === item.id && (
                          <div className="fixed mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                            <button
                              onClick={() => {
                                navigate(`/hr/communication-library/${item.id}`);
                                setShowMenu(null);
                              }}
                              className="block w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-t-lg"
                            >
                              {t('hr.view_details')}
                            </button>
                            <button
                              onClick={() => {
                                console.log('Edit', item.id);
                                setShowMenu(null);
                              }}
                              className="block w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                            >
                              {t('hr.edit')}
                            </button>
                            <button
                              onClick={() => {
                                console.log('Delete', item.id);
                                setShowMenu(null);
                              }}
                              className="block w-full text-right px-4 py-2 text-sm text-red-600 hover:bg-gray-50 rounded-b-lg"
                            >
                              {t('hr.delete')}
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Forms Table */}
          {activeTab === 'forms' && (
            <div className="overflow-x-auto overflow-visible">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                      {t('hr.title')}
                    </th>
                    <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                      {t('hr.file')}
                    </th>
                    <th className="px-6 py-3 text-right text-sm font-medium text-gray-700"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {forms.map((form) => (
                    <tr key={form.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-900">{form.title}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{form.file}</td>
                      <td className="px-6 py-4 relative">
                        <button
                          onClick={() => setShowMenu(showMenu === form.id ? null : form.id)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <MoreVertical className="w-5 h-5" />
                        </button>
                        {showMenu === form.id && (
                          <div className="fixed mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                            <button
                              onClick={() => {
                                console.log('View', form.id);
                                setShowMenu(null);
                              }}
                              className="block w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-t-lg"
                            >
                              {t('hr.view_details')}
                            </button>
                            <button
                              onClick={() => {
                                console.log('Edit', form.id);
                                setShowMenu(null);
                              }}
                              className="block w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                            >
                              {t('hr.edit')}
                            </button>
                            <button
                              onClick={() => {
                                console.log('Delete', form.id);
                                setShowMenu(null);
                              }}
                              className="block w-full text-right px-4 py-2 text-sm text-red-600 hover:bg-gray-50 rounded-b-lg"
                            >
                              {t('hr.delete')}
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Policies Table */}
          {activeTab === 'policies' && (
            <div className="overflow-x-auto overflow-visible">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                      {t('hr.title')}
                    </th>
                    <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                      {t('hr.effective_date')}
                    </th>
                    <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                      {t('hr.description')}
                    </th>
                    <th className="px-6 py-3 text-right text-sm font-medium text-gray-700"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {policies.map((policy) => (
                    <tr key={policy.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-900">{policy.title}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{policy.effectiveDate}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{policy.description}</td>
                      <td className="px-6 py-4 relative">
                        <button
                          onClick={() => setShowMenu(showMenu === policy.id ? null : policy.id)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <MoreVertical className="w-5 h-5" />
                        </button>
                        {showMenu === policy.id && (
                          <div className="fixed mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                            <button
                              onClick={() => {
                                console.log('View', policy.id);
                                setShowMenu(null);
                              }}
                              className="block w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-t-lg"
                            >
                              {t('hr.view_details')}
                            </button>
                            <button
                              onClick={() => {
                                console.log('Edit', policy.id);
                                setShowMenu(null);
                              }}
                              className="block w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                            >
                              {t('hr.edit')}
                            </button>
                            <button
                              onClick={() => {
                                console.log('Delete', policy.id);
                                setShowMenu(null);
                              }}
                              className="block w-full text-right px-4 py-2 text-sm text-red-600 hover:bg-gray-50 rounded-b-lg"
                            >
                              {t('hr.delete')}
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
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
          <button className="px-4 py-2 rounded-lg bg-[#11383f] hover:bg-[#0f2f35] text-white text-sm">
            {t('hr.next')}
          </button>
        </div>
      </div>

      {/* Add Policy Modal */}
      {showPolicyModal && (
        <AddPolicyModal
          isOpen={showPolicyModal}
          onClose={() => setShowPolicyModal(false)}
        />
      )}
    </Layout>
  );
}
