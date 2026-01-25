import { useState, useEffect } from 'react';
import { Layout } from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { Card } from '../../components/ui/card';
import { SideDrawer } from '../../components/ui/SideDrawer';
import InitialFilters from '../../components/InitialFilters';
import { Download, Filter, Plus, Search, MoreVertical, Lock, LockOpen } from 'lucide-react';
import { buttonClasses } from '../../styles';

interface AccountingPeriod {
  id: string;
  fiscalYear: string;
  startDate: string;
  endDate: string;
  isLocked: boolean;
  hasLinkedData?: boolean;
}

export const AccountingPeriods = (): JSX.Element => {
  const { dir } = useLanguage();

  const [periods, setPeriods] = useState<AccountingPeriod[]>([
    {
      id: '1',
      fiscalYear: '2025',
      startDate: '01/01/2025',
      endDate: '31/03/2025',
      isLocked: false,
      hasLinkedData: true,
    },
    {
      id: '2',
      fiscalYear: '2025',
      startDate: '01/04/2025',
      endDate: '31/06/2025',
      isLocked: true,
      hasLinkedData: false,
    },
    {
      id: '3',
      fiscalYear: '2025',
      startDate: '01/07/2025',
      endDate: '31/09/2025',
      isLocked: false,
      hasLinkedData: false,
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState<AccountingPeriod | null>(null);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [isConfirmCloseModalOpen, setIsConfirmCloseModalOpen] = useState(false);
  const [periodToClose, setPeriodToClose] = useState<string | null>(null);

  const handleToggleLock = (id: string) => {
    const period = periods.find((p) => p.id === id);
    if (period && !period.isLocked) {
      // If trying to lock (close) the period, show confirmation
      setPeriodToClose(id);
      setIsConfirmCloseModalOpen(true);
    } else {
      // If trying to unlock (open) the period, do it directly
      setPeriods((prev) => prev.map((p) => (p.id === id ? { ...p, isLocked: !p.isLocked } : p)));
    }
  };

  const confirmClosePeriod = () => {
    if (periodToClose) {
      setPeriods((prev) =>
        prev.map((p) => (p.id === periodToClose ? { ...p, isLocked: true } : p))
      );
      setIsConfirmCloseModalOpen(false);
      setPeriodToClose(null);
    }
  };

  const handleEditPeriod = (period: AccountingPeriod) => {
    setSelectedPeriod(period);
    setIsEditModalOpen(true);
    setOpenMenuId(null);
  };

  const toggleMenu = (periodId: string) => {
    setOpenMenuId(openMenuId === periodId ? null : periodId);
  };

  const filteredPeriods = periods.filter(
    (period) =>
      period.fiscalYear.toLowerCase().includes(searchQuery.toLowerCase()) ||
      period.startDate.includes(searchQuery) ||
      period.endDate.includes(searchQuery)
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (openMenuId && !target.closest('.dropdown-menu-container')) {
        setOpenMenuId(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openMenuId]);

  return (
    <Layout>
      <div className="space-y-4">
        {/* Header Section with InitialFilters */}
        <InitialFilters>
          <div className="flex items-center justify-between gap-3 w-full">
            {/* Search box */}
            <div className="flex-1 max-w-xl">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="ابحث من هنا (السنة المالية، بداية الفترة، نهاية الفترة...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-[38px] pr-9 pl-3 bg-white border border-[#e2e2e2] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] focus:outline-none focus:ring-1 focus:ring-[#0c4749] focus:border-[#0c4749] text-right"
                  dir="rtl"
                />
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3">
              <button className="bg-white hover:bg-gray-50 px-3 py-2 h-[38px] rounded-lg border border-[#e2e2e2] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm flex items-center gap-2">
                <span>تصدير</span>
                <Download className="h-3.5 w-3.5" />
              </button>

              <button className="bg-white hover:bg-gray-50 px-3 py-2 h-[38px] rounded-lg gap-2 border border-[#e2e2e2] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm flex items-center">
                <span>فلاتر</span>
                <Filter className="h-3.5 w-3.5" />
              </button>

              <button
                className={buttonClasses.primary}
                onClick={() => setIsAddModalOpen(true)}
                style={{ height: '38px', fontSize: '14px' }}
              >
                <Plus className="h-3.5 w-3.5" />
                فترة محاسبية جديدة
              </button>
            </div>
          </div>
        </InitialFilters>

        {/* Table Card */}
        <Card className="bg-white rounded-xl border border-[#e2e2e2]">
          <div className="overflow-x-auto">
            <table className="w-full" dir={dir}>
              <thead>
                <tr className="border-b border-[#e2e2e2]" style={{ backgroundColor: '#F1F5F980' }}>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                    السنة المالية
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                    بداية الفترة المحاسبية
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                    نهاية الفترة المحاسبية
                  </th>
                  <th className="px-6 py-4 text-start text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    إغلاق / فتح الفترة
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredPeriods.map((period) => (
                  <tr
                    key={period.id}
                    className="border-b border-[#e2e2e2] hover:bg-gray-50 transition-colors bg-white"
                  >
                    <td className="px-6 py-4 text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                      {period.fiscalYear}
                    </td>
                    <td className="px-6 py-4 text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                      {period.startDate}
                    </td>
                    <td className="px-6 py-4 text-sm text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] border-l border-[#F1F5F9]">
                      {period.endDate}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-3">
                        {/* Toggle Switch Container */}
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-[#F5F5F5]">
                          <span
                            className={`text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica] ${
                              period.isLocked ? 'text-red-600' : 'text-green-600'
                            }`}
                          >
                            {period.isLocked ? 'مغلقة' : 'مفتوحة'}
                          </span>

                          <button
                            onClick={() => handleToggleLock(period.id)}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                              period.isLocked ? 'bg-red-500' : 'bg-green-500'
                            }`}
                          >
                            <span
                              className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition-transform ${
                                period.isLocked ? 'translate-x-0' : 'translate-x-[-24px]'
                              }`}
                            />
                          </button>
                        </div>

                        {/* Lock Icon if has linked data */}
                        {period.hasLinkedData && (
                          <div
                            className="p-2 text-gray-500"
                            title="الفترة مربوطة بمستندات لا يمكن حذفها"
                          >
                            <LockOpen className="w-5 h-5" />
                          </div>
                        )}

                        {/* More options button with dropdown */}
                        <div className="relative dropdown-menu-container">
                          <button
                            onClick={() => toggleMenu(period.id)}
                            className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                            title="المزيد"
                          >
                            <MoreVertical className="w-4 h-4 text-[#093738]" />
                          </button>

                          {openMenuId === period.id && (
                            <div className="absolute left-0 top-full mt-1 w-32 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                              <button
                                onClick={() => handleEditPeriod(period)}
                                className="w-full px-4 py-2 text-right text-sm text-gray-700 hover:bg-gray-100 transition-colors rounded-lg [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                              >
                                تعديل
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      {/* Confirmation Modal for Closing Period */}
      {isConfirmCloseModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4" dir="rtl">
            <div className="flex flex-col items-center text-center gap-4">
              {/* Warning Icon */}
              <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>

              {/* Message */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  هل أنت متأكد؟
                </h3>
                <p className="text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  هل تريد تأكيد إغلاق الفترة؟
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 w-full">
                <button
                  onClick={() => {
                    setIsConfirmCloseModalOpen(false);
                    setPeriodToClose(null);
                  }}
                  className="flex-1 px-6 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium"
                >
                  لا أريد
                </button>
                <button
                  onClick={confirmClosePeriod}
                  className="flex-1 px-6 py-2.5 bg-[#0c4749] text-white rounded-lg hover:bg-[#093738] transition-colors [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium"
                >
                  نعم تم إغلاق الفترة
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Period SideDrawer */}
      <SideDrawer
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="إضافة فترة محاسبية جديدة"
        footer={
          <div className="flex gap-3 justify-end">
            <button
              onClick={() => setIsAddModalOpen(false)}
              className="flex-1 px-4 py-2 h-[43px] max-w-[8rem] rounded-lg border border-[#e2e2e2] text-[#093738] hover:bg-gray-50 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
            >
              إغلاق
            </button>
            <button
              className="flex-1 px-4 py-2 h-[43px] max-w-[8rem] rounded-lg bg-[#0c4749] hover:bg-[#093738] text-white transition-colors [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              onClick={() => setIsAddModalOpen(false)}
            >
              حفظ
            </button>
          </div>
        }
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
              السنة المالية
            </label>
            <input
              type="text"
              placeholder="2025"
              className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              dir="rtl"
            />
          </div>

          <div>
            <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
              بداية الفترة المحاسبية
            </label>
            <input
              type="date"
              className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right [direction:rtl]"
              style={{ textAlign: 'right' }}
              dir="rtl"
            />
          </div>

          <div>
            <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
              نهاية الفترة المحاسبية
            </label>
            <input
              type="date"
              className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right [direction:rtl]"
              style={{ textAlign: 'right' }}
              dir="rtl"
            />
          </div>
        </div>
      </SideDrawer>

      {/* Edit Period SideDrawer */}
      <SideDrawer
        isOpen={isEditModalOpen && selectedPeriod !== null}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedPeriod(null);
          setOpenMenuId(null);
        }}
        title="تعديل الفترة المحاسبية"
        footer={
          <div className="flex gap-3 justify-end">
            <button
              onClick={() => {
                setIsEditModalOpen(false);
                setSelectedPeriod(null);
                setOpenMenuId(null);
              }}
              className="flex-1 px-4 py-2 h-[43px] max-w-[8rem] rounded-lg border border-[#e2e2e2] text-[#093738] hover:bg-gray-50 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
            >
              إغلاق
            </button>
            <button
              className="flex-1 px-4 py-2 h-[43px] max-w-[8rem] rounded-lg bg-[#0c4749] hover:bg-[#093738] text-white transition-colors [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
              onClick={() => {
                setIsEditModalOpen(false);
                setSelectedPeriod(null);
                setOpenMenuId(null);
              }}
            >
              حفظ
            </button>
          </div>
        }
      >
        {selectedPeriod && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
                السنة المالية
              </label>
              <input
                type="text"
                defaultValue={selectedPeriod.fiscalYear}
                className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                dir="rtl"
              />
            </div>

            <div>
              <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
                بداية الفترة المحاسبية
              </label>
              <input
                type="date"
                defaultValue={selectedPeriod.startDate.split('/').reverse().join('-')}
                className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right [direction:rtl]"
                style={{ textAlign: 'right' }}
                dir="rtl"
              />
            </div>

            <div>
              <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
                نهاية الفترة المحاسبية
              </label>
              <input
                type="date"
                defaultValue={selectedPeriod.endDate.split('/').reverse().join('-')}
                className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right [direction:rtl]"
                style={{ textAlign: 'right' }}
                dir="rtl"
              />
            </div>
          </div>
        )}
      </SideDrawer>
    </Layout>
  );
};

export default AccountingPeriods;
