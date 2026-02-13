import { useState, useRef, useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AdvancedTable } from '@/components/ui/Table';
import { SideDrawer } from '@/components/ui/SideDrawer';
import { buttonClasses } from '@/styles';
import {
  Search,
  Filter,
  Download,
  Columns3,
  Edit2,
  Trash2,
  MoreVertical,
  ChevronDown,
} from 'lucide-react';
import { useTaxTemplatesData } from '@/hooks/useTaxTemplatesData';
import type { TaxTemplate } from '@/data/templates/tax-templates.data';

export const TaxTemplates = (): JSX.Element => {
  const { taxTemplates, setTaxTemplates } = useTaxTemplatesData();
  const [searchQuery, setSearchQuery] = useState('');
  const [showColumnsFilter, setShowColumnsFilter] = useState(false);
  const [showExportOptions, setShowExportOptions] = useState(false);
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [showOperationsMenu, setShowOperationsMenu] = useState(false);
  const [openActionMenuId, setOpenActionMenuId] = useState<number | null>(null);
  const [isAddDrawerOpen, setIsAddDrawerOpen] = useState(false);
  const [formData, setFormData] = useState({
    taxName: '',
    percentage: '',
    accountName: '',
  });

  const columnsRef = useRef<HTMLDivElement>(null);
  const exportRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);
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
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setShowFilterOptions(false);
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

  const filteredTemplates = taxTemplates.filter((template) => {
    const matchesSearch =
      template.taxName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.accountName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.percentage.toString().includes(searchQuery);

    return matchesSearch;
  });

  const handleCreateNew = () => {
    setFormData({ taxName: '', percentage: '', accountName: '' });
    setIsAddDrawerOpen(true);
    setShowOperationsMenu(false);
  };

  const handleSaveNewTemplate = () => {
    if (!formData.taxName || !formData.percentage || !formData.accountName) {
      alert('يرجى ملء جميع الحقول');
      return;
    }

    const newTemplate: TaxTemplate = {
      id: Math.max(0, ...taxTemplates.map((t) => t.id)) + 1,
      taxName: formData.taxName,
      percentage: parseFloat(formData.percentage),
      accountName: formData.accountName,
    };

    setTaxTemplates([...taxTemplates, newTemplate]);
    setIsAddDrawerOpen(false);
    setFormData({ taxName: '', percentage: '', accountName: '' });
  };

  const handleEdit = (template: TaxTemplate) => {
    console.log('Edit tax template:', template);
    setOpenActionMenuId(null);
  };

  const handleDelete = (id: number) => {
    if (confirm('هل أنت متأكد من حذف قالب الضريبة هذا؟')) {
      setTaxTemplates(taxTemplates.filter((template) => template.id !== id));
    }
    setOpenActionMenuId(null);
  };

  const columns = [
    {
      key: 'taxName',
      label: 'اسم الضريبة',
      sortable: true,
      render: (template: TaxTemplate) => (
        <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium text-[#0e0d24]">
          {template.taxName}
        </span>
      ),
    },
    {
      key: 'percentage',
      label: 'النسبة',
      sortable: true,
      render: (template: TaxTemplate) => (
        <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-gray-600">
          {template.percentage}%
        </span>
      ),
    },
    {
      key: 'accountName',
      label: 'اسم الحساب',
      sortable: true,
      render: (template: TaxTemplate) => (
        <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-gray-600">
          {template.accountName}
        </span>
      ),
    },
    {
      key: 'actions',
      label: '',
      render: (template: TaxTemplate) => (
        <div className="relative" ref={(el) => (actionMenuRefs.current[template.id] = el)}>
          <button
            onClick={() =>
              setOpenActionMenuId(openActionMenuId === template.id ? null : template.id)
            }
            className="p-1 hover:bg-gray-100 rounded"
          >
            <MoreVertical className="w-5 h-5 text-gray-600" />
          </button>

          {openActionMenuId === template.id && (
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50 [direction:rtl]">
              <div className="py-1">
                <button
                  onClick={() => handleEdit(template)}
                  className="w-full px-4 py-2 text-right hover:bg-gray-50 flex items-center gap-2 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                >
                  <Edit2 className="w-4 h-4" />
                  تعديل
                </button>
                <button
                  onClick={() => handleDelete(template.id)}
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
              placeholder="ابحث من هنا (اسم الضريبة, اسم الحساب...)"
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
                تصدير
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

            {/* Filter Button */}
            <div ref={filterRef} className="relative">
              <Button
                onClick={() => setShowFilterOptions(!showFilterOptions)}
                className={`${buttonClasses.secondary} gap-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]`}
              >
                <Filter className="w-4 h-4" />
                فلتر
              </Button>

              {showFilterOptions && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 p-3 z-50 [direction:rtl]">
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      لا توجد فلاتر متاحة حالياً
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Operations Menu Button */}
            <div ref={operationsRef} className="relative">
              <Button
                onClick={() => setShowOperationsMenu(!showOperationsMenu)}
                className={`${buttonClasses.primary} gap-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]`}
              >
                قالب ضريبية جديد
                <ChevronDown className="w-4 h-4" />
              </Button>

              {showOperationsMenu && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50 [direction:rtl]">
                  <button
                    onClick={handleCreateNew}
                    className="w-full px-4 py-2 text-right hover:bg-gray-50 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                  >
                    إنشاء قالب ضريبي جديد
                  </button>
                  <button
                    onClick={() => {
                      console.log('Print report');
                      setShowOperationsMenu(false);
                    }}
                    className="w-full px-4 py-2 text-right hover:bg-gray-50 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                  >
                    طباعة تقرير القوالب
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Table */}
        <AdvancedTable data={filteredTemplates} columns={columns} />
      </div>

      {/* Add Tax Template SideDrawer */}
      <SideDrawer
        isOpen={isAddDrawerOpen}
        onClose={() => {
          setIsAddDrawerOpen(false);
          setFormData({ taxName: '', percentage: '', accountName: '' });
        }}
        title="إضافة قالب ضريبة جديد"
        footer={
          <div className="flex gap-3 justify-end">
            <button
              onClick={() => {
                setIsAddDrawerOpen(false);
                setFormData({ taxName: '', percentage: '', accountName: '' });
              }}
              className="flex-1 px-4 py-2 h-[43px] max-w-[8rem] rounded-lg border border-[#e2e2e2] text-[#093738] hover:bg-gray-50 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
            >
              إلغاء
            </button>
            <button
              onClick={handleSaveNewTemplate}
              className="flex-1 px-4 py-2 h-[43px] max-w-[8rem] rounded-lg bg-[#0c4749] hover:bg-[#093738] text-white transition-colors [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
            >
              حفظ
            </button>
          </div>
        }
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
              اسم الضريبة <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="اسم الضريبة هنا ..."
              value={formData.taxName}
              onChange={(e) => setFormData({ ...formData, taxName: e.target.value })}
              className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] focus:border-[#0c4749] focus:outline-none"
              dir="rtl"
            />
          </div>

          <div>
            <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
              نسبة الضريبة (%) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              placeholder="نسبة الضريبة هنا ..."
              value={formData.percentage}
              onChange={(e) => setFormData({ ...formData, percentage: e.target.value })}
              className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] focus:border-[#0c4749] focus:outline-none"
              dir="rtl"
              min="0"
              max="100"
              step="0.01"
            />
          </div>

          <div>
            <label className="block text-sm text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-1.5">
              اسم الحساب <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="اسم الحساب هنا ..."
              value={formData.accountName}
              onChange={(e) => setFormData({ ...formData, accountName: e.target.value })}
              className="w-full h-[45px] px-3 bg-white border border-[#cfcfcf] rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] focus:border-[#0c4749] focus:outline-none"
              dir="rtl"
            />
          </div>
        </div>
      </SideDrawer>
    </Layout>
  );
};
