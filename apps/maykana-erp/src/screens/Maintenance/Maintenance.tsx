import { useState } from 'react';
import { Layout } from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import {
  Search,
  SlidersHorizontal,
  ChevronDown,
  Download,
  Columns3,
  X,
} from 'lucide-react';

interface MaintenanceRecord {
  id: string;
  maintenanceNumber: string;
  assetName: string;
  maintenanceType: string;
  maintenanceDate: string;
  team: string;
  assignedTechnician: string;
  duration: string;
  cost: string;
  status: 'completed' | 'in_progress';
}

export const Maintenance = (): JSX.Element => {
  const { t, dir } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [showAddMaintenanceModal, setShowAddMaintenanceModal] = useState(false);
  const [showAddRecordModal, setShowAddRecordModal] = useState(false);
  const [showColumnsModal, setShowColumnsModal] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);

  const mockData: MaintenanceRecord[] = [
    {
      id: '1',
      maintenanceNumber: 'MN-12345',
      assetName: 'جهاز الكمبيوتر المحمول',
      maintenanceType: 'تصليح الشاشة',
      maintenanceDate: '2023-10-01',
      team: 'فريق التقنية المتقدمة',
      assignedTechnician: 'أحمد السعيدي',
      duration: '3 أيام',
      cost: '1500',
      status: 'completed',
    },
    {
      id: '2',
      maintenanceNumber: 'MN-67890',
      assetName: 'اسم الأصل',
      maintenanceType: 'تحديث البرمجيات',
      maintenanceDate: '2023-10-05',
      team: 'فريق الدعم الفني',
      assignedTechnician: 'ليلى العلي',
      duration: 'يوم واحد',
      cost: '500',
      status: 'completed',
    },
    {
      id: '3',
      maintenanceNumber: 'MN-54321',
      assetName: 'الطابعة',
      maintenanceType: 'استبدال الحبر',
      maintenanceDate: '2023-10-10',
      team: 'فريق الصيانة السريعة',
      assignedTechnician: 'سامي الجابري',
      duration: 'ساعتان',
      cost: '200',
      status: 'in_progress',
    },
    {
      id: '4',
      maintenanceNumber: 'MN-98765',
      assetName: 'جهاز التوجيه',
      maintenanceType: 'إعادة ضبط المصنع',
      maintenanceDate: '2023-10-15',
      team: 'فريق الشبكات',
      assignedTechnician: 'فاطمة الزهراء',
      duration: '4 ساعات',
      cost: '300',
      status: 'in_progress',
    },
  ];

  const getStatusBadge = (status: MaintenanceRecord['status']) => {
    if (status === 'completed') {
      return (
        <div className="inline-flex items-center justify-center gap-1.5 p-1.5 bg-[#07b6640f] rounded-lg">
          <div className="font-normal text-[#07b664] text-sm" dir={dir}>
            {t('maintenance.status_completed')}
          </div>
        </div>
      );
    }
    return (
      <div className="inline-flex items-center justify-center gap-1.5 p-1.5 bg-[#edc5000f] rounded-lg">
        <div className="font-normal text-[#b99d0c] text-sm" dir={dir}>
          {t('maintenance.status_in_progress')}
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <div className="flex flex-col gap-4" dir={dir}>
        {/* Header */}
        <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-[#e2e2e2]">
          <div className={`flex items-center gap-3 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
            <div className="relative">
              <Input
                type="text"
                placeholder={t('maintenance.search_placeholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-[500px] bg-white border-[#cfcfcf] ${dir === 'rtl' ? 'pr-10 text-right' : 'pl-10 text-left'}`}
                dir={dir}
              />
              <Search
                className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 ${dir === 'rtl' ? 'right-3' : 'left-3'}`}
              />
            </div>
          </div>

          <div className="flex gap-2">
            {dir === 'ltr' ? (
              <>
                <Button
                  onClick={() => setShowAddMaintenanceModal(true)}
                  className="bg-[#093738] hover:bg-[#0d4849] text-white px-4 py-2 rounded-lg shadow-[0px_4px_4px_#0000001a] font-['IBM_Plex_Sans_Arabic']"
                >
                  {t('maintenance.add_new')}
                </Button>
                <Button
                  onClick={() => setShowAddRecordModal(true)}
                  className="bg-slate-50 hover:bg-slate-100 text-[#092e32] px-4 py-2 rounded-lg shadow-[0px_4px_4px_#0000001a] font-['IBM_Plex_Sans_Arabic']"
                >
                  {t('maintenance.add_record')}
                </Button>
                <Button
                  onClick={() => setShowFilters(!showFilters)}
                  variant="outline"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-lg font-['IBM_Plex_Sans_Arabic']"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  {t('maintenance.filter')}
                </Button>
                <Button
                  onClick={() => setShowExportModal(!showExportModal)}
                  variant="outline"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-lg font-['IBM_Plex_Sans_Arabic']"
                >
                  <Download className="w-4 h-4" />
                  {t('maintenance.download')}
                  <ChevronDown className="w-3 h-3" />
                </Button>
                <Button
                  onClick={() => setShowColumnsModal(!showColumnsModal)}
                  variant="outline"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-lg font-['IBM_Plex_Sans_Arabic']"
                >
                  <Columns3 className="w-4 h-4" />
                  {t('maintenance.show_hide_columns')}
                  <ChevronDown className="w-3 h-3" />
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={() => setShowColumnsModal(!showColumnsModal)}
                  variant="outline"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-lg font-['IBM_Plex_Sans_Arabic']"
                >
                  <Columns3 className="w-4 h-4" />
                  {t('maintenance.show_hide_columns')}
                  <ChevronDown className="w-3 h-3" />
                </Button>
                <Button
                  onClick={() => setShowExportModal(!showExportModal)}
                  variant="outline"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-lg font-['IBM_Plex_Sans_Arabic']"
                >
                  <Download className="w-4 h-4" />
                  {t('maintenance.download')}
                  <ChevronDown className="w-3 h-3" />
                </Button>
                <Button
                  onClick={() => setShowFilters(!showFilters)}
                  variant="outline"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-lg font-['IBM_Plex_Sans_Arabic']"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  {t('maintenance.filter')}
                </Button>
                <Button
                  onClick={() => setShowAddRecordModal(true)}
                  className="bg-slate-50 hover:bg-slate-100 text-[#092e32] px-4 py-2 rounded-lg shadow-[0px_4px_4px_#0000001a] font-['IBM_Plex_Sans_Arabic']"
                >
                  {t('maintenance.add_record')}
                </Button>
                <Button
                  onClick={() => setShowAddMaintenanceModal(true)}
                  className="bg-[#093738] hover:bg-[#0d4849] text-white px-4 py-2 rounded-lg shadow-[0px_4px_4px_#0000001a] font-['IBM_Plex_Sans_Arabic']"
                >
                  {t('maintenance.add_new')}
                </Button>
              </>
            )}
          </div>
        </div>

        {/* Filters Section */}
        {showFilters && (
          <div className="bg-white p-6 rounded-xl border border-[#e2e2e2] animate-fade-in">
            <div className="grid grid-cols-4 gap-4" dir={dir}>
              <div className="flex flex-col gap-1.5">
                <Label
                  className={`text-[#00000099] font-['IBM_Plex_Sans_Arabic'] ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
                >
                  {t('maintenance.asset_name')}
                </Label>
                <select
                  className={`w-full h-[45px] border border-[#cfcfcf] rounded-lg px-3 bg-white font-['IBM_Plex_Sans_Arabic'] ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
                  dir={dir}
                >
                  <option value="">{t('select')}</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <Label
                  className={`text-[#00000099] font-['IBM_Plex_Sans_Arabic'] ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
                >
                  {t('maintenance.maintenance_type')}
                </Label>
                <select
                  className={`w-full h-[45px] border border-[#cfcfcf] rounded-lg px-3 bg-white font-['IBM_Plex_Sans_Arabic'] ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
                  dir={dir}
                >
                  <option value="">{t('select')}</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <Label
                  className={`text-[#00000099] font-['IBM_Plex_Sans_Arabic'] ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
                >
                  {t('maintenance.team')}
                </Label>
                <select
                  className={`w-full h-[45px] border border-[#cfcfcf] rounded-lg px-3 bg-white font-['IBM_Plex_Sans_Arabic'] ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
                  dir={dir}
                >
                  <option value="">{t('select')}</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <Label
                  className={`text-[#00000099] font-['IBM_Plex_Sans_Arabic'] ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
                >
                  {t('maintenance.status')}
                </Label>
                <select
                  className={`w-full h-[45px] border border-[#cfcfcf] rounded-lg px-3 bg-white font-['IBM_Plex_Sans_Arabic'] ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
                  dir={dir}
                >
                  <option value="">{t('select')}</option>
                  <option value="completed">{t('maintenance.status_completed')}</option>
                  <option value="in_progress">{t('maintenance.status_in_progress')}</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Table */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <div className="overflow-x-auto" dir={dir}>
            <table className="w-full" style={{ direction: dir }}>
              <thead>
                <tr className="bg-[#f1f5f980] border-b border-slate-100">
                  <th className={`px-6 py-4 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                    <span className="font-semibold text-[#0e0d24] text-base font-['IBM_Plex_Sans_Arabic']">
                      {t('maintenance.maintenance_number')}
                    </span>
                  </th>
                  <th className={`px-6 py-4 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                    <span className="font-semibold text-[#0e0d24] text-base font-['IBM_Plex_Sans_Arabic']">
                      {t('maintenance.asset_name')}
                    </span>
                  </th>
                  <th className={`px-6 py-4 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                    <span className="font-semibold text-[#0e0d24] text-base font-['IBM_Plex_Sans_Arabic']">
                      {t('maintenance.maintenance_type')}
                    </span>
                  </th>
                  <th className={`px-6 py-4 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                    <span className="font-semibold text-[#0e0d24] text-base font-['IBM_Plex_Sans_Arabic']">
                      {t('maintenance.maintenance_date')}
                    </span>
                  </th>
                  <th className={`px-6 py-4 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                    <span className="font-semibold text-[#0e0d24] text-base font-['IBM_Plex_Sans_Arabic']">
                      {t('maintenance.team')}
                    </span>
                  </th>
                  <th className={`px-6 py-4 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                    <span className="font-semibold text-[#0e0d24] text-base font-['IBM_Plex_Sans_Arabic']">
                      {t('maintenance.assigned_technician')}
                    </span>
                  </th>
                  <th className={`px-6 py-4 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                    <span className="font-semibold text-[#0e0d24] text-base font-['IBM_Plex_Sans_Arabic']">
                      {t('maintenance.duration')}
                    </span>
                  </th>
                  <th className={`px-6 py-4 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                    <span className="font-semibold text-[#0e0d24] text-base font-['IBM_Plex_Sans_Arabic']">
                      {t('maintenance.cost')}
                    </span>
                  </th>
                  <th className={`px-6 py-4 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                    <span className="font-semibold text-[#0e0d24] text-base font-['IBM_Plex_Sans_Arabic']">
                      {t('maintenance.status')}
                    </span>
                  </th>
                  <th className={`px-6 py-4 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                    <span className="font-semibold text-[#0e0d24] text-base font-['IBM_Plex_Sans_Arabic']">
                      {t('maintenance.actions')}
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {mockData.map((record) => (
                  <tr
                    key={record.id}
                    className="border-b border-gray-100 hover:bg-gray-50/50 cursor-pointer"
                  >
                    <td className={`px-6 py-4 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                      <span className="font-normal text-[#0e0d24] text-base font-['IBM_Plex_Sans_Arabic']">
                        {record.maintenanceNumber}
                      </span>
                    </td>
                    <td className={`px-6 py-4 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                      <span className="font-normal text-[#0e0d24] text-base font-['IBM_Plex_Sans_Arabic']">
                        {record.assetName}
                      </span>
                    </td>
                    <td className={`px-6 py-4 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                      <span className="font-normal text-[#0e0d24] text-base font-['IBM_Plex_Sans_Arabic']">
                        {record.maintenanceType}
                      </span>
                    </td>
                    <td className={`px-6 py-4 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                      <span className="font-normal text-[#0e0d24] text-base font-['IBM_Plex_Sans_Arabic']">
                        {record.maintenanceDate}
                      </span>
                    </td>
                    <td className={`px-6 py-4 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                      <span className="font-normal text-[#0e0d24] text-base font-['IBM_Plex_Sans_Arabic']">
                        {record.team}
                      </span>
                    </td>
                    <td className={`px-6 py-4 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                      <span className="font-normal text-[#0e0d24] text-base font-['IBM_Plex_Sans_Arabic']">
                        {record.assignedTechnician}
                      </span>
                    </td>
                    <td className={`px-6 py-4 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                      <span className="font-normal text-[#0e0d24] text-base font-['IBM_Plex_Sans_Arabic']">
                        {t('maintenance.duration_label')}: {record.duration}
                      </span>
                    </td>
                    <td className={`px-6 py-4 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                      <span className="font-normal text-[#0e0d24] text-base font-['IBM_Plex_Sans_Arabic']">
                        {record.cost} {t('common.currency')}
                      </span>
                    </td>
                    <td className={`px-6 py-4 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                      {getStatusBadge(record.status)}

                      {/* Add Maintenance Modal */}
                      {showAddMaintenanceModal && (
                        <div
                          className="fixed inset-0 bg-black/20 flex items-center justify-center z-50"
                          onClick={() => setShowAddMaintenanceModal(false)}
                        >
                          <div
                            className="bg-white rounded-xl w-[601px] max-h-[85vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
                            dir={dir}
                            onClick={(e) => e.stopPropagation()}
                          >
                            {/* Modal Header */}
                            <div className="flex items-center justify-between bg-slate-100 rounded-t-xl px-5 py-4">
                              <div
                                className={`flex items-center gap-3 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}
                              >
                                <h2 className="font-['IBM_Plex_Sans_Arabic'] font-medium text-black text-xl">
                                  إنشاء طلب صيانة
                                </h2>
                              </div>
                              <button
                                onClick={() => setShowAddMaintenanceModal(false)}
                                className="w-[42px] h-[42px] bg-white rounded-lg border border-[#cfcfcf] flex items-center justify-center hover:bg-gray-50 transition-colors"
                              >
                                <X className="w-5 h-5 text-gray-600" />
                              </button>
                            </div>

                            {/* Modal Body */}
                            <div className="p-3 space-y-4">
                              {/* Request Type */}
                              <div className="space-y-2">
                                <Label
                                  className={`text-[#00000099] font-['IBM_Plex_Sans_Arabic'] ${dir === 'rtl' ? 'text-right' : 'text-left'} block`}
                                >
                                  نوع الطلب
                                </Label>
                                <div className="relative">
                                  <Input
                                    defaultValue="عطل"
                                    className={`w-full h-[45px] border border-[#cfcfcf] rounded-lg bg-white font-['IBM_Plex_Sans_Arabic'] ${dir === 'rtl' ? 'text-right pr-3' : 'text-left pl-3'}`}
                                    dir={dir}
                                  />
                                  <ChevronDown
                                    className={`absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 ${dir === 'rtl' ? 'left-6' : 'right-6'}`}
                                  />
                                </div>
                              </div>

                              {/* Request Owner */}
                              <div className="space-y-2">
                                <Label
                                  className={`text-[#00000099] font-['IBM_Plex_Sans_Arabic'] ${dir === 'rtl' ? 'text-right' : 'text-left'} block`}
                                >
                                  صاحب الطلب
                                </Label>
                                <div className="relative">
                                  <Input
                                    defaultValue="يوسف العمراني"
                                    className={`w-full h-[45px] border border-[#cfcfcf] rounded-lg bg-white font-['IBM_Plex_Sans_Arabic'] ${dir === 'rtl' ? 'text-right pr-3' : 'text-left pl-3'}`}
                                    dir={dir}
                                  />
                                  <ChevronDown
                                    className={`absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 ${dir === 'rtl' ? 'left-6' : 'right-6'}`}
                                  />
                                </div>
                              </div>

                              {/* Priority Level */}
                              <div className="space-y-2">
                                <Label
                                  className={`text-[#00000099] font-['IBM_Plex_Sans_Arabic'] ${dir === 'rtl' ? 'text-right' : 'text-left'} block`}
                                >
                                  مستوى الأهمية
                                </Label>
                                <div className="relative">
                                  <Input
                                    className={`w-full h-[45px] border border-[#cfcfcf] rounded-lg bg-white font-['IBM_Plex_Sans_Arabic'] ${dir === 'rtl' ? 'text-right pr-3' : 'text-left pl-3'}`}
                                    dir={dir}
                                  />
                                  <ChevronDown
                                    className={`absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 ${dir === 'rtl' ? 'left-6' : 'right-6'}`}
                                  />
                                  <div
                                    className={`absolute top-1/2 -translate-y-1/2 ${dir === 'rtl' ? 'left-12' : 'right-12'}`}
                                  >
                                    <div className="inline-flex items-center justify-center gap-1.5 p-1.5 bg-[#ff00000f] rounded-lg">
                                      <div className="text-[#ff0000] text-center text-sm font-normal font-['IBM_Plex_Sans_Arabic']">
                                        عالي
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Maintenance Team */}
                              <div className="space-y-2">
                                <Label
                                  className={`text-[#00000099] font-['IBM_Plex_Sans_Arabic'] ${dir === 'rtl' ? 'text-right' : 'text-left'} block`}
                                >
                                  فريق الصيانة
                                </Label>
                                <div className="relative">
                                  <Input
                                    defaultValue="يوسف العمراني"
                                    className={`w-full h-[45px] border border-[#cfcfcf] rounded-lg bg-white font-['IBM_Plex_Sans_Arabic'] ${dir === 'rtl' ? 'text-right pr-3' : 'text-left pl-3'}`}
                                    dir={dir}
                                  />
                                  <ChevronDown
                                    className={`absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 ${dir === 'rtl' ? 'left-6' : 'right-6'}`}
                                  />
                                </div>
                              </div>

                              {/* Issue Description */}
                              <div className="space-y-2">
                                <Label
                                  className={`text-[#00000099] font-['IBM_Plex_Sans_Arabic'] ${dir === 'rtl' ? 'text-right' : 'text-left'} block`}
                                >
                                  وصف العطل
                                </Label>
                                <textarea
                                  defaultValue="عطل في تشغيل الحاسوب"
                                  className={`w-full h-[123px] border border-[#cfcfcf] rounded-lg bg-white p-3 resize-none font-['IBM_Plex_Sans_Arabic'] ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
                                  dir={dir}
                                />
                              </div>

                              {/* File Upload Section */}
                              <div className="space-y-2">
                                <Label
                                  className={`text-[#00000099] font-['IBM_Plex_Sans_Arabic'] ${dir === 'rtl' ? 'text-right' : 'text-left'} block`}
                                >
                                  صور أو مرفقات
                                </Label>

                                {/* Upload Area */}
                                <div className="w-full h-24 flex items-center justify-center bg-[#bdc4cf0a] rounded-xl border-2 border-dashed border-[#bdc4cfc9]">
                                  <div className="flex flex-col items-center gap-2.5">
                                    <svg
                                      className="w-[22px] h-[22px]"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                    >
                                      <path
                                        d="M9 17V11L7 13"
                                        stroke="#092e32"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M9 11L11 13"
                                        stroke="#092e32"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14"
                                        stroke="#092e32"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M22 10H18C15 10 14 9 14 6V2L22 10Z"
                                        stroke="#092e32"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                    <p
                                      className="text-base text-center font-['IBM_Plex_Sans_Arabic']"
                                      dir={dir}
                                    >
                                      <span className="text-black">سحب وإفلات أو </span>
                                      <span className="text-[#092e32]">إختر ملف</span>
                                      <span className="text-black"> للتحميل</span>
                                    </p>
                                  </div>
                                </div>

                                {/* Uploaded File Preview */}
                                <div className="w-full h-[90px] flex items-center gap-3 bg-slate-50 rounded-xl p-5">
                                  <button className="w-[53px] h-[50px] flex items-center justify-center bg-[#e83d401a] rounded-lg hover:bg-[#e83d402a]">
                                    <svg
                                      className="w-[28px] h-[26px]"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                    >
                                      <path
                                        d="M21 5.98C17.67 5.65 14.32 5.48 10.98 5.48C9 5.48 7.02 5.58 5.04 5.78L3 5.98"
                                        stroke="#e83d40"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97"
                                        stroke="#e83d40"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M18.85 9.14L18.2 19.21C18.09 20.78 18 22 15.21 22H8.79C6 22 5.91 20.78 5.8 19.21L5.15 9.14"
                                        stroke="#e83d40"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </button>

                                  <div className="w-[53px] h-[50px] bg-[#bdc4cf21] rounded-[7px] flex items-center justify-center">
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                                      <path
                                        d="M21.6505 14.79L20.6105 19.75C20.1305 22.23 18.9405 23 16.4305 23H7.56046C5.05046 23 3.86046 22.23 3.38046 19.75L2.34046 14.79C2.05046 13.38 2.39046 12.17 3.18046 11.37C3.21046 11.34 3.25046 11.31 3.28046 11.28C4.18046 10.45 5.48046 10 7.06046 10H16.9405C18.5205 10 19.8205 10.45 20.7205 11.28C20.7505 11.31 20.7805 11.34 20.8205 11.37C21.6105 12.17 21.9505 13.38 21.6505 14.79Z"
                                        stroke="#092e32"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                      />
                                      <path
                                        d="M3.5 10.1199V6.9299C3.5 4.3199 4.35 2.5699 7.47 2.3099L7.7 2.2899C8.21 2.2399 8.69 2.4499 9.02 2.8199L10.51 4.5199C10.77 4.8199 11.21 4.9999 11.67 4.9999H16.51C18.64 4.9999 20.15 6.1299 20.46 7.9099"
                                        stroke="#092e32"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </div>

                                  <div
                                    className={`flex-1 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
                                  >
                                    <div className="font-['IBM_Plex_Sans_Arabic'] font-semibold text-black text-base mb-1">
                                      صورة - شاشة زرقاء
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-[#9ea5b0] font-['IBM_Plex_Sans_Arabic']">
                                      <span>455 كيلو بيت</span>
                                      <span>•</span>
                                      <span>JPEG</span>
                                      <span>•</span>
                                      <span>‎23 يناير 2025 - 09:23‎</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Modal Footer */}
                            <div className="border-t border-gray-200 p-3">
                              <div className="flex gap-2 justify-start">
                                <Button
                                  onClick={() => setShowAddMaintenanceModal(false)}
                                  className="bg-[#093738] hover:bg-[#0d4849] text-white px-4 py-2.5 rounded-lg shadow-[0px_4px_4px_#0000001a] font-['IBM_Plex_Sans_Arabic']"
                                >
                                  إرسال الطلب
                                </Button>
                                <Button
                                  onClick={() => setShowAddMaintenanceModal(false)}
                                  variant="outline"
                                  className="bg-[#e6ebeb] hover:bg-[#d6dfe0] text-[#092e32] px-4 py-2.5 rounded-lg font-['IBM_Plex_Sans_Arabic']"
                                >
                                  إغلاق
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Add Record Modal */}
                      {showAddRecordModal && (
                        <div
                          className="fixed inset-0 bg-black/20 flex items-center justify-center z-50"
                          onClick={() => setShowAddRecordModal(false)}
                        >
                          <div
                            className="bg-white rounded-xl w-[601px] max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
                            dir={dir}
                            onClick={(e) => e.stopPropagation()}
                          >
                            {/* Modal Header */}
                            <div className="flex items-center justify-between bg-slate-100 rounded-t-xl px-5 py-4">
                              <div
                                className={`flex items-center gap-3 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}
                              >
                                <h2 className="font-['IBM_Plex_Sans_Arabic'] font-medium text-black text-xl">
                                  إضافة سجل صيانة
                                </h2>
                              </div>
                              <button
                                onClick={() => setShowAddRecordModal(false)}
                                className="w-[42px] h-[42px] bg-white rounded-lg border border-[#cfcfcf] flex items-center justify-center hover:bg-gray-50 transition-colors"
                              >
                                <X className="w-5 h-5 text-gray-600" />
                              </button>
                            </div>

                            {/* Modal Body */}
                            <div className="p-3 space-y-4">
                              {/* Maintenance Type */}
                              <div className="space-y-2">
                                <Label
                                  className={`text-[#00000099] font-['IBM_Plex_Sans_Arabic'] ${dir === 'rtl' ? 'text-right' : 'text-left'} block`}
                                >
                                  نوع الصيانة
                                </Label>
                                <div className="relative">
                                  <Input
                                    defaultValue="خارجية"
                                    className={`w-full h-[45px] border border-[#cfcfcf] rounded-lg bg-white font-['IBM_Plex_Sans_Arabic'] ${dir === 'rtl' ? 'text-right pr-3' : 'text-left pl-3'}`}
                                    dir={dir}
                                  />
                                  <ChevronDown
                                    className={`absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 ${dir === 'rtl' ? 'left-6' : 'right-6'}`}
                                  />
                                </div>
                              </div>

                              {/* Maintenance Team */}
                              <div className="space-y-2">
                                <Label
                                  className={`text-[#00000099] font-['IBM_Plex_Sans_Arabic'] ${dir === 'rtl' ? 'text-right' : 'text-left'} block`}
                                >
                                  فريق الصيانة
                                </Label>
                                <div className="relative">
                                  <Input
                                    defaultValue="شركة الوفاء لصيانة الحواسيب"
                                    className={`w-full h-[45px] border border-[#cfcfcf] rounded-lg bg-white font-['IBM_Plex_Sans_Arabic'] ${dir === 'rtl' ? 'text-right pr-3' : 'text-left pl-3'}`}
                                    dir={dir}
                                  />
                                  <ChevronDown
                                    className={`absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 ${dir === 'rtl' ? 'left-6' : 'right-6'}`}
                                  />
                                </div>
                              </div>

                              {/* Cost */}
                              <div className="space-y-2">
                                <Label
                                  className={`text-[#00000099] font-['IBM_Plex_Sans_Arabic'] ${dir === 'rtl' ? 'text-right' : 'text-left'} block`}
                                >
                                  التكلفة
                                </Label>
                                <Input
                                  defaultValue="450"
                                  type="number"
                                  className={`w-full h-[45px] border border-[#cfcfcf] rounded-lg bg-white font-['IBM_Plex_Sans_Arabic'] font-semibold text-xl ${dir === 'rtl' ? 'text-right pr-3' : 'text-left pl-3'}`}
                                  dir={dir}
                                />
                              </div>

                              {/* Maintenance Description */}
                              <div className="space-y-2">
                                <Label
                                  className={`text-[#00000099] font-['IBM_Plex_Sans_Arabic'] ${dir === 'rtl' ? 'text-right' : 'text-left'} block`}
                                >
                                  وصف الصيانة
                                </Label>
                                <textarea
                                  defaultValue="صيانة عطل في ذاكرة الحاسوب"
                                  className={`w-full h-[123px] border border-[#cfcfcf] rounded-lg bg-white p-3 resize-none font-['IBM_Plex_Sans_Arabic'] ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
                                  dir={dir}
                                />
                              </div>

                              {/* File Upload Section */}
                              <div className="space-y-2">
                                <Label
                                  className={`text-[#00000099] font-['IBM_Plex_Sans_Arabic'] ${dir === 'rtl' ? 'text-right' : 'text-left'} block`}
                                >
                                  صور أو مرفقات
                                </Label>

                                {/* Upload Area */}
                                <div className="w-full h-24 flex items-center justify-center bg-[#bdc4cf0a] rounded-xl border-2 border-dashed border-[#bdc4cfc9]">
                                  <div className="flex flex-col items-center gap-2.5">
                                    <svg
                                      className="w-[22px] h-[22px]"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                    >
                                      <path
                                        d="M9 17V11L7 13"
                                        stroke="#092e32"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M9 11L11 13"
                                        stroke="#092e32"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14"
                                        stroke="#092e32"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M22 10H18C15 10 14 9 14 6V2L22 10Z"
                                        stroke="#092e32"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                    <p
                                      className="text-base text-center font-['IBM_Plex_Sans_Arabic']"
                                      dir={dir}
                                    >
                                      <span className="text-black">سحب وإفلات أو </span>
                                      <span className="text-[#092e32]">إختر ملف</span>
                                      <span className="text-black"> للتحميل</span>
                                    </p>
                                  </div>
                                </div>

                                {/* Uploaded File Preview */}
                                <div className="w-full h-[90px] flex items-center gap-3 bg-slate-50 rounded-xl p-5">
                                  <button className="w-[53px] h-[50px] flex items-center justify-center bg-[#e83d401a] rounded-lg hover:bg-[#e83d402a]">
                                    <svg
                                      className="w-[28px] h-[26px]"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                    >
                                      <path
                                        d="M21 5.98C17.67 5.65 14.32 5.48 10.98 5.48C9 5.48 7.02 5.58 5.04 5.78L3 5.98"
                                        stroke="#e83d40"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97"
                                        stroke="#e83d40"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M18.85 9.14L18.2 19.21C18.09 20.78 18 22 15.21 22H8.79C6 22 5.91 20.78 5.8 19.21L5.15 9.14"
                                        stroke="#e83d40"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </button>

                                  <div className="w-[53px] h-[50px] bg-[#bdc4cf21] rounded-[7px] flex items-center justify-center">
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                                      <path
                                        d="M21.6505 14.79L20.6105 19.75C20.1305 22.23 18.9405 23 16.4305 23H7.56046C5.05046 23 3.86046 22.23 3.38046 19.75L2.34046 14.79C2.05046 13.38 2.39046 12.17 3.18046 11.37C3.21046 11.34 3.25046 11.31 3.28046 11.28C4.18046 10.45 5.48046 10 7.06046 10H16.9405C18.5205 10 19.8205 10.45 20.7205 11.28C20.7505 11.31 20.7805 11.34 20.8205 11.37C21.6105 12.17 21.9505 13.38 21.6505 14.79Z"
                                        stroke="#092e32"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                      />
                                      <path
                                        d="M3.5 10.1199V6.9299C3.5 4.3199 4.35 2.5699 7.47 2.3099L7.7 2.2899C8.21 2.2399 8.69 2.4499 9.02 2.8199L10.51 4.5199C10.77 4.8199 11.21 4.9999 11.67 4.9999H16.51C18.64 4.9999 20.15 6.1299 20.46 7.9099"
                                        stroke="#092e32"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </div>

                                  <div
                                    className={`flex-1 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
                                  >
                                    <div className="font-['IBM_Plex_Sans_Arabic'] font-semibold text-black text-base mb-1">
                                      صورة - شاشة زرقاء
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-[#9ea5b0] font-['IBM_Plex_Sans_Arabic']">
                                      <span>455 كيلو بيت</span>
                                      <span>•</span>
                                      <span>JPEG</span>
                                      <span>•</span>
                                      <span>‎23 يناير 2025 - 09:23‎</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Modal Footer */}
                            <div className="border-t border-gray-200 p-3">
                              <div className="flex gap-2 justify-start">
                                <Button
                                  onClick={() => setShowAddRecordModal(false)}
                                  className="bg-[#093738] hover:bg-[#0d4849] text-white px-4 py-2.5 rounded-lg shadow-[0px_4px_4px_#0000001a] font-['IBM_Plex_Sans_Arabic']"
                                >
                                  إرسال الطلب
                                </Button>
                                <Button
                                  onClick={() => setShowAddRecordModal(false)}
                                  variant="outline"
                                  className="bg-[#e6ebeb] hover:bg-[#d6dfe0] text-[#092e32] px-4 py-2.5 rounded-lg font-['IBM_Plex_Sans_Arabic']"
                                >
                                  إغلاق
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </td>
                    <td className={`px-6 py-4 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                      <div className="flex items-center gap-2">
                        <img
                          src="https://c.animaapp.com/mkfsucexRBifOq/img/group-20960.png"
                          alt="action"
                          className="w-[35px] h-[35px]"
                        />
                      </div>
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
};
