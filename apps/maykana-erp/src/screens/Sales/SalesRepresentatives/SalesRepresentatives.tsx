import { useState, useRef, useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { buttonClasses } from '@/styles';
import {
  Search,
  Download,
  Columns3,
  Edit2,
  Trash2,
  MoreVertical,
  Eye,
  Copy,
  ChevronDown,
  Plus,
} from 'lucide-react';
import { AdvancedTable } from '@/components/ui/Table';
import { useSalesRepresentativesData } from '@/hooks/useSalesRepresentativesData';
import { AddEditSalesRepresentativeModal } from './AddEditSalesRepresentativeModal';
import type { SalesRepresentative } from '@/data/sales/sales-representatives.data';

export const SalesRepresentatives = (): JSX.Element => {
  const { representatives, setRepresentatives } = useSalesRepresentativesData();
  const [searchQuery, setSearchQuery] = useState('');
  const [showColumnsFilter, setShowColumnsFilter] = useState(false);
  const [showExportOptions, setShowExportOptions] = useState(false);
  const [showOperationsMenu, setShowOperationsMenu] = useState(false);
  const [openActionMenuId, setOpenActionMenuId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRepresentative, setSelectedRepresentative] = useState<SalesRepresentative | null>(null);

  const columnsRef = useRef<HTMLDivElement>(null);
  const exportRef = useRef<HTMLDivElement>(null);
  const operationsRef = useRef<HTMLDivElement>(null);
  const actionMenuRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (columnsRef.current && !columnsRef.current.contains(event.target as Node)) {
        setShowColumnsFilter(false);
      }
      if (exportRef.current && !exportRef.current.contains(event.target as Node)) {
        setShowExportOptions(false);
      }
      if (operationsRef.current && !operationsRef.current.contains(event.target as Node)) {
        setShowOperationsMenu(false);
      }

      if (openActionMenuId !== null) {
        const currentMenuRef = actionMenuRefs.current[openActionMenuId];
        if (currentMenuRef && !currentMenuRef.contains(event.target as Node)) {
          setOpenActionMenuId(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openActionMenuId]);

  const filteredRepresentatives = representatives.filter((rep) => {
    const matchesSearch =
      rep.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rep.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rep.mobileNumber.includes(searchQuery) ||
      rep.nationality.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesSearch;
  });

  const handleCreateNew = () => {
    setSelectedRepresentative(null);
    setIsModalOpen(true);
  };

  const handleEdit = (rep: SalesRepresentative) => {
    setSelectedRepresentative(rep);
    setIsModalOpen(true);
    setOpenActionMenuId(null);
  };

  const handleView = (rep: SalesRepresentative) => {
    console.log('View representative:', rep);
    setOpenActionMenuId(null);
  };

  const handleDelete = (id: number) => {
    if (confirm('هل أنت متأكد من حذف هذا المندوب؟')) {
      setRepresentatives(representatives.filter((rep) => rep.id !== id));
    }
    setOpenActionMenuId(null);
  };

  const handleDuplicate = (rep: SalesRepresentative) => {
    const newRep: SalesRepresentative = {
      ...rep,
      id: Math.max(...representatives.map((r) => r.id)) + 1,
      name: `${rep.name} (نسخة)`,
    };
    setRepresentatives([...representatives, newRep]);
    setOpenActionMenuId(null);
  };

  const handleSave = (rep: SalesRepresentative) => {
    if (selectedRepresentative) {
      setRepresentatives(
        representatives.map((r) => (r.id === rep.id ? rep : r))
      );
    } else {
      const newRep = {
        ...rep,
        id: Math.max(...representatives.map((r) => r.id), 0) + 1,
      };
      setRepresentatives([...representatives, newRep]);
    }
    setIsModalOpen(false);
  };

  const columns = [
    {
      key: 'name',
      label: 'اسم المندوب',
      sortable: true,
      render: (rep: SalesRepresentative) => (
        <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium text-[#0e0d24]">
          {rep.name}
        </span>
      ),
    },
    {
      key: 'commission',
      label: 'نسبة العمولة',
      sortable: true,
      render: (rep: SalesRepresentative) => (
        <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-gray-600">
          {rep.invoiceCommissionPercentage} %
        </span>
      ),
    },
    {
      key: 'nationality',
      label: 'الجنسية',
      sortable: true,
      render: (rep: SalesRepresentative) => (
        <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-gray-600">
          {rep.nationality}
        </span>
      ),
    },
    {
      key: 'mobileNumber',
      label: 'رقم الجوال',
      sortable: false,
      render: (rep: SalesRepresentative) => (
        <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-gray-600 text-right">
          {rep.mobileNumber}
        </span>
      ),
    },
    {
      key: 'email',
      label: 'الإيميل',
      sortable: false,
      render: (rep: SalesRepresentative) => (
        <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-gray-600">
          {rep.email}
        </span>
      ),
    },
    {
      key: 'actions',
      label: '',
      render: (rep: SalesRepresentative) => (
        <div className="relative" ref={(el) => (actionMenuRefs.current[rep.id] = el)}>
          <button
            onClick={() =>
              setOpenActionMenuId(openActionMenuId === rep.id ? null : rep.id)
            }
            className="p-1 hover:bg-gray-100 rounded"
          >
            <MoreVertical className="w-5 h-5 text-gray-600" />
          </button>

          {openActionMenuId === rep.id && (
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50 [direction:rtl]">
              <div className="py-1">
                <button
                  onClick={() => handleView(rep)}
                  className="w-full px-4 py-2 text-right hover:bg-gray-50 flex items-center gap-2 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                >
                  <Eye className="w-4 h-4" />
                  عرض التفاصيل
                </button>
                <button
                  onClick={() => handleEdit(rep)}
                  className="w-full px-4 py-2 text-right hover:bg-gray-50 flex items-center gap-2 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                >
                  <Edit2 className="w-4 h-4" />
                  تعديل
                </button>
                <button
                  onClick={() => handleDuplicate(rep)}
                  className="w-full px-4 py-2 text-right hover:bg-gray-50 flex items-center gap-2 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                >
                  <Copy className="w-4 h-4" />
                  نسخ
                </button>
                <button
                  onClick={() => handleDelete(rep.id)}
                  className="w-full px-4 py-2 text-right hover:bg-gray-50 flex items-center gap-2 text-sm text-red-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                >
                  <Trash2 className="w-4 h-4" />
                  حذف
                </button>
              </div>
            </div>
          )}
        </div>
      ),
    },
  ];

  return (
    <Layout>
      <div className="relative">
        {/* Action Bar */}
        <div className="flex items-center gap-2 mb-4 justify-between">
          <div className="relative flex-1 max-w-[533px]">
            <Input
              type="text"
              placeholder="ابحث من هنا (المندوب، الجنسية، الجوال، ...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-[43px] pr-10 bg-[#f8f8f8] border-[#e2e2e2] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm [direction:rtl]"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Columns Button */}
            <div ref={columnsRef} className="relative">
              <Button
                onClick={() => setShowColumnsFilter(!showColumnsFilter)}
                className={`${buttonClasses.secondary} gap-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]`}
              >
                <Columns3 className="w-4 h-4" />
                إظهار/إخفاء الأعمدة
              </Button>

              {showColumnsFilter && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 p-3 z-50 [direction:rtl]">
                  <div className="space-y-2">
                    {columns.slice(0, -1).map((col) => (
                      <label
                        key={col.key}
                        className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded"
                      >
                        <input type="checkbox" defaultChecked className="rounded" />
                        <span className="text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                          {col.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Download Button */}
            <div ref={exportRef} className="relative">
              <Button
                onClick={() => setShowExportOptions(!showExportOptions)}
                className={`${buttonClasses.secondary} gap-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]`}
              >
                <Download className="w-4 h-4" />
                تحميل
              </Button>

              {showExportOptions && (
                <div className="absolute left-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50 [direction:rtl]">
                  <button className="w-full px-4 py-2 text-right hover:bg-gray-50 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    إكسل
                  </button>
                  <button className="w-full px-4 py-2 text-right hover:bg-gray-50 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    PDF
                  </button>
                  <button className="w-full px-4 py-2 text-right hover:bg-gray-50 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    CSV
                  </button>
                </div>
              )}
            </div>

            {/* Operations Menu Button */}
            <div ref={operationsRef} className="relative">
              <Button
                onClick={() => setShowOperationsMenu(!showOperationsMenu)}
                className={`${buttonClasses.primary} gap-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]`}
              >
                العمليات
                <ChevronDown className="w-4 h-4" />
              </Button>

              {showOperationsMenu && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50 [direction:rtl]">
                  <button
                    onClick={() => {
                      handleCreateNew();
                      setShowOperationsMenu(false);
                    }}
                    className="w-full px-4 py-2 text-right hover:bg-gray-50 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] flex items-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    إضافة مندوب جديد
                  </button>
                  <button className="w-full px-4 py-2 text-right hover:bg-gray-50 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    طباعة تقرير المندوبين
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Table */}
        <AdvancedTable data={filteredRepresentatives} columns={columns} />

        {/* Modal */}
        <AddEditSalesRepresentativeModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          representative={selectedRepresentative}
          onSave={handleSave}
        />
      </div>
    </Layout>
  );
};
