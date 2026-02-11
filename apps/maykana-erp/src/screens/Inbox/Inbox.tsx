import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import {
  Search,
  Filter,
  Download,
  Columns3,
  Plus,
  MoreVertical,
  RefreshCw,
  Clock,
  Send,
} from 'lucide-react';

// Types
interface InboxRequest {
  id: string;
  requestOwner: {
    name: string;
    role: string;
  };
  requestType: string;
  requestName: string;
  requestDate: string;
  branch: string;
  department: string;
  status: 'approved' | 'rejected' | 'under_review';
}

// Tab types
type TabType = 'incoming' | 'delayed' | 'outgoing';

// Mock data for incoming requests
const incomingRequests: InboxRequest[] = [
  {
    id: '1',
    requestOwner: { name: 'حسن محسن', role: 'مدير الموارد البشرية' },
    requestType: 'قائمة تحقق',
    requestName: 'قائمة التحقق من الضيافة العامة',
    requestDate: '2023-11-01',
    branch: 'فرع 1',
    department: 'قسم 1',
    status: 'approved',
  },
  {
    id: '2',
    requestOwner: { name: 'حسن محسن', role: 'مدير الموارد البشرية' },
    requestType: 'قائمة تحقق',
    requestName: 'قائمة التحقق من الضيافة العامة',
    requestDate: '2023-11-05',
    branch: 'فرع 1',
    department: 'قسم 1',
    status: 'approved',
  },
  {
    id: '3',
    requestOwner: { name: 'حسن محسن', role: 'مدير الموارد البشرية' },
    requestType: 'قائمة تحقق',
    requestName: 'قائمة التحقق من الضيافة العامة',
    requestDate: '2023-11-10',
    branch: 'فرع 1',
    department: 'قسم 1',
    status: 'rejected',
  },
  {
    id: '4',
    requestOwner: { name: 'حسن محسن', role: 'مدير الموارد البشرية' },
    requestType: 'قائمة تحقق',
    requestName: 'قائمة التحقق من الضيافة العامة',
    requestDate: '2023-11-15',
    branch: 'فرع 1',
    department: 'قسم 1',
    status: 'under_review',
  },
  {
    id: '5',
    requestOwner: { name: 'حسن محسن', role: 'مدير الموارد البشرية' },
    requestType: 'قائمة تحقق',
    requestName: 'قائمة التحقق من الضيافة العامة',
    requestDate: '2023-11-20',
    branch: 'فرع 1',
    department: 'قسم 1',
    status: 'under_review',
  },
  {
    id: '6',
    requestOwner: { name: 'حسن محسن', role: 'مدير الموارد البشرية' },
    requestType: 'قائمة تحقق',
    requestName: 'قائمة التحقق من الضيافة العامة',
    requestDate: '2023-11-30',
    branch: 'فرع 1',
    department: 'قسم 1',
    status: 'approved',
  },
  {
    id: '7',
    requestOwner: { name: 'حسن محسن', role: 'مدير الموارد البشرية' },
    requestType: 'قائمة تحقق',
    requestName: 'قائمة التحقق من الضيافة العامة',
    requestDate: '2023-11-25',
    branch: 'فرع 1',
    department: 'قسم 1',
    status: 'approved',
  },
  {
    id: '8',
    requestOwner: { name: 'حسن محسن', role: 'مدير الموارد البشرية' },
    requestType: 'قائمة تحقق',
    requestName: 'قائمة التحقق من الضيافة العامة',
    requestDate: '2023-12-01',
    branch: 'فرع 1',
    department: 'قسم 1',
    status: 'approved',
  },
];

// Mock data for delayed requests
const delayedRequests: InboxRequest[] = [
  {
    id: 'd1',
    requestOwner: { name: 'أحمد علي', role: 'مدير المشتريات' },
    requestType: 'قائمة تحقق',
    requestName: 'طلب شراء متأخر',
    requestDate: '2023-10-15',
    branch: 'فرع 2',
    department: 'قسم 2',
    status: 'under_review',
  },
  {
    id: 'd2',
    requestOwner: { name: 'محمد سعيد', role: 'مدير المالية' },
    requestType: 'قائمة تحقق',
    requestName: 'موافقة مالية متأخرة',
    requestDate: '2023-10-20',
    branch: 'فرع 1',
    department: 'قسم 3',
    status: 'under_review',
  },
];

// Mock data for outgoing requests
const outgoingRequests: InboxRequest[] = [
  {
    id: 'o1',
    requestOwner: { name: 'سارة أحمد', role: 'موظف' },
    requestType: 'قائمة تحقق',
    requestName: 'طلب إجازة',
    requestDate: '2023-11-28',
    branch: 'فرع 1',
    department: 'قسم 1',
    status: 'approved',
  },
  {
    id: 'o2',
    requestOwner: { name: 'خالد محمد', role: 'موظف' },
    requestType: 'قائمة تحقق',
    requestName: 'طلب سلفة',
    requestDate: '2023-11-30',
    branch: 'فرع 3',
    department: 'قسم 2',
    status: 'rejected',
  },
];

export const Inbox = (): JSX.Element => {
  const { t, dir } = useLanguage();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabType>('incoming');
  const [searchQuery, setSearchQuery] = useState('');

  // Get data based on active tab
  const getRequestsData = (): InboxRequest[] => {
    switch (activeTab) {
      case 'incoming':
        return incomingRequests;
      case 'delayed':
        return delayedRequests;
      case 'outgoing':
        return outgoingRequests;
      default:
        return incomingRequests;
    }
  };

  // Filter data based on search
  const filteredRequests = getRequestsData().filter((request) => {
    const query = searchQuery.toLowerCase();
    return (
      request.requestOwner.name.toLowerCase().includes(query) ||
      request.requestName.toLowerCase().includes(query) ||
      request.department.toLowerCase().includes(query) ||
      request.branch.toLowerCase().includes(query)
    );
  });

  // Status badge component
  const StatusBadge = ({ status }: { status: InboxRequest['status'] }) => {
    const statusConfig = {
      approved: {
        label: t('inbox.approved'),
        bgColor: 'bg-[#E8F5E9]',
        textColor: 'text-[#2E7D32]',
      },
      rejected: {
        label: t('inbox.rejected'),
        bgColor: 'bg-[#FFEBEE]',
        textColor: 'text-[#C62828]',
      },
      under_review: {
        label: t('inbox.under_review'),
        bgColor: 'bg-[#FFF3E0]',
        textColor: 'text-[#E65100]',
      },
    };

    const config = statusConfig[status];

    return (
      <span
        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${config.bgColor} ${config.textColor} [font-family:'IBM_Plex_Sans_Arabic',Helvetica]`}
      >
        {config.label}
      </span>
    );
  };

  // Tab configuration
  const tabs: { id: TabType; label: string; icon: React.ElementType; count?: number }[] = [
    { id: 'incoming', label: t('inbox.incoming_requests'), icon: RefreshCw, count: incomingRequests.length },
    { id: 'delayed', label: t('inbox.delayed_requests'), icon: Clock, count: delayedRequests.length },
    { id: 'outgoing', label: t('inbox.outgoing_requests'), icon: Send, count: outgoingRequests.length },
  ];

  return (
    <Layout>
      <div className="flex flex-col gap-4 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]" dir={dir}>
        {/* Header with Search and Actions */}
        <div className="flex items-center justify-between gap-4 bg-white p-4 rounded-xl border border-[#e2e2e2]">
          {/* Right Side - Search */}
          <div className="flex-1 max-w-lg">
            <div className="relative">
              <Search className={`absolute ${dir === 'rtl' ? 'right-3' : 'left-3'} top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5`} />
              <Input
                type="text"
                placeholder={t('inbox.search_placeholder_alt')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`${dir === 'rtl' ? 'pr-10' : 'pl-10'} py-2 border border-gray-300 rounded-lg w-full`}
              />
            </div>
          </div>
          {/* Left Side - Actions */}
          <div className="flex items-center gap-2">
            {/* Show/Hide Columns Button */}
            <Button
              variant="outline"
              className="px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2"
            >
              <Columns3 className="w-4 h-4" />
              <span>{t('inbox.show_hide_columns')}</span>
            </Button>
            {/* Download Button */}
            <Button
              variant="outline"
              className="px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>{t('inbox.download')}</span>
            </Button>
            {/* Filter Button */}
            <Button
              variant="outline"
              className="px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2"
            >
              <Filter className="w-4 h-4" />
              <span>{t('inbox.filter')}</span>
            </Button>
            {/* New Entry Button */}
            <Button
              onClick={() => navigate('/inbox/new')}
              className="bg-[#093738] hover:bg-[#0b4a4c] text-white px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>{t('inbox.new_entry')}</span>
            </Button>
          </div>
        </div>

        {/* Tabs and Table Container */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-gray-200 bg-[#0C47490F]">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-all border-b-2 ${
                    isActive
                      ? 'border-[#093738] text-[#093738] bg-[#093738]/5'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#093738]' : 'text-gray-400'}`} />
                  <span>{tab.label}</span>
                  {tab.count !== undefined && (
                    <span
                      className={`inline-flex items-center justify-center min-w-[24px] h-6 px-2 rounded-full text-xs font-semibold ${
                        isActive ? 'bg-[#093738] text-white' : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {tab.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full" dir={dir}>
              <thead className="bg-[#F8FAFC] border-b border-gray-200">
                <tr>
                  <th className={`px-4 py-4 ${dir === 'rtl' ? 'text-right' : 'text-left'} text-sm font-semibold text-[#0e0d24]`}>
                    {t('inbox.request_owner')}
                  </th>
                  <th className={`px-4 py-4 ${dir === 'rtl' ? 'text-right' : 'text-left'} text-sm font-semibold text-[#0e0d24]`}>
                    {t('inbox.request_type')}
                  </th>
                  <th className={`px-4 py-4 ${dir === 'rtl' ? 'text-right' : 'text-left'} text-sm font-semibold text-[#0e0d24]`}>
                    {t('inbox.request_name')}
                  </th>
                  <th className={`px-4 py-4 ${dir === 'rtl' ? 'text-right' : 'text-left'} text-sm font-semibold text-[#0e0d24]`}>
                    {t('inbox.request_date')}
                  </th>
                  <th className={`px-4 py-4 ${dir === 'rtl' ? 'text-right' : 'text-left'} text-sm font-semibold text-[#0e0d24]`}>
                    {t('inbox.branch')}
                  </th>
                  <th className={`px-4 py-4 ${dir === 'rtl' ? 'text-right' : 'text-left'} text-sm font-semibold text-[#0e0d24]`}>
                    {t('inbox.department')}
                  </th>
                  <th className={`px-4 py-4 ${dir === 'rtl' ? 'text-right' : 'text-left'} text-sm font-semibold text-[#0e0d24]`}>
                    {t('inbox.request_status')}
                  </th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-[#0e0d24] w-12"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredRequests.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="px-6 py-12 text-center text-gray-500">
                      {t('inbox.no_requests')}
                    </td>
                  </tr>
                ) : (
                  filteredRequests.map((request) => (
                    <tr
                      key={request.id}
                      onClick={() => navigate(`/inbox/checklist/${request.id}`)}
                      className="hover:bg-gray-50/50 transition-colors cursor-pointer"
                    >
                      {/* Request Owner */}
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          {/* Avatar */}
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#093738] to-[#0d5556] flex items-center justify-center text-white font-semibold flex-shrink-0">
                            {request.requestOwner.name.charAt(0)}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {request.requestOwner.name}
                            </p>
                            <p className="text-xs text-gray-500">{request.requestOwner.role}</p>
                          </div>
                        </div>
                      </td>

                      {/* Request Type with Link */}
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <button className="text-[#093738] hover:text-[#0b5556] text-sm font-medium flex items-center gap-1 hover:underline">
                            <RefreshCw className="w-4 h-4" />
                            <span>{request.requestType}</span>
                          </button>
                        </div>
                      </td>

                      {/* Request Name */}
                      <td className="px-4 py-4 text-sm text-gray-700">{request.requestName}</td>

                      {/* Request Date */}
                      <td className="px-4 py-4 text-sm text-gray-700">{request.requestDate}</td>

                      {/* Branch */}
                      <td className="px-4 py-4 text-sm text-gray-700">{request.branch}</td>

                      {/* Department */}
                      <td className="px-4 py-4 text-sm text-gray-700">{request.department}</td>

                      {/* Status */}
                      <td className="px-4 py-4">
                        <StatusBadge status={request.status} />
                      </td>

                      {/* More Options */}
                      <td className="px-4 py-4">
                        <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
                          <MoreVertical className="w-5 h-5 text-gray-400" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination / Footer (optional) */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 bg-gray-50">
            <div className="text-sm text-gray-500">
              {t('inbox.showing')} {filteredRequests.length} {t('inbox.of')} {getRequestsData().length} {t('inbox.requests')}
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="px-3 py-1">
                {t('inbox.previous')}
              </Button>
              <Button variant="outline" size="sm" className="px-3 py-1 bg-[#093738] text-white">
                1
              </Button>
              <Button variant="outline" size="sm" className="px-3 py-1">
                2
              </Button>
              <Button variant="outline" size="sm" className="px-3 py-1">
                {t('inbox.next')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
