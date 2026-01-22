import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { AdvancedTable } from '../../components/ui/Table';
import { buttonClasses } from '../../styles';
import { 
  Search, 
  Filter, 
  Download, 
  Columns3, 
  Edit2, 
  Trash2,
  UserPlus
} from 'lucide-react';
import { useCustomersData } from '../../hooks/useCustomersData';
import type { Customer } from '../../data/customers.data';

export const Customers = (): JSX.Element => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { customers, setCustomers } = useCustomersData();
  const [searchQuery, setSearchQuery] = useState('');
  const [showColumnsFilter, setShowColumnsFilter] = useState(false);
  const [showExportOptions, setShowExportOptions] = useState(false);
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [openActionMenuId, setOpenActionMenuId] = useState<number | null>(null);

  const columnsRef = useRef<HTMLDivElement>(null);
  const exportRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);
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

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.currency.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCreateNew = () => {
    navigate('/sales/customers/add');
  };

  const handleEdit = (customer: Customer) => {
    navigate(`/sales/customers/edit/${customer.id}`);
    setOpenActionMenuId(null);
  };

  const handleDelete = (id: number) => {
    setCustomers(customers.filter(c => c.id !== id));
    setOpenActionMenuId(null);
  };

  return (
    <Layout>
      <div className="relative">
        {/* Action Bar */}
        <div className="flex items-center gap-2 mb-4 justify-between">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-[533px]">
            <Input
              type="text"
              placeholder={t('customers.search_placeholder') || 'ابحث من هنا (عميل، نوع العميل، العملة، ...)'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-[43px] pr-10 bg-[#f8f8f8] border-[#e2e2e2] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm [direction:rtl]"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Filter Button */}
            <div className="relative" ref={filterRef}>
              <Button
                variant="outline"
                className="h-[43px] gap-2 bg-[#f8f8f8] border-[#e2e2e2] hover:bg-gray-100 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]"
                onClick={() => setShowFilterOptions(!showFilterOptions)}
              >
                <Filter className="w-4 h-4" />
                <span className="text-sm">فلتر</span>
              </Button>

              {showFilterOptions && (
                <div className="absolute left-0 mt-2 w-[250px] bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-50 [direction:rtl]">
                  <div className="space-y-3">
                    <div>
                      <Label className="text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        نوع العميل
                      </Label>
                      <Select>
                        <SelectTrigger className="w-full mt-1 [direction:rtl]">
                          <SelectValue placeholder="اختر النوع" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="individual">فرد</SelectItem>
                          <SelectItem value="company">شركة</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        الدولة
                      </Label>
                      <Select>
                        <SelectTrigger className="w-full mt-1 [direction:rtl]">
                          <SelectValue placeholder="اختر الدولة" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sa">المملكة العربية السعودية</SelectItem>
                          <SelectItem value="ae">دولة الإمارات العربية المتحدة</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <button className={buttonClasses.primary + " w-full"}>
                      تطبيق
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Export Button */}
            <div className="relative" ref={exportRef}>
              <Button
                variant="outline"
                className="h-[43px] gap-2 bg-[#f8f8f8] border-[#e2e2e2] hover:bg-gray-100 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]"
                onClick={() => setShowExportOptions(!showExportOptions)}
              >
                <Download className="w-4 h-4" />
                <span className="text-sm">تصدير</span>
              </Button>

              {showExportOptions && (
                <div className="absolute left-0 mt-2 w-[180px] bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50 [direction:rtl]">
                  <button className="w-full px-4 py-2 text-right hover:bg-gray-50 text-xs [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    تصدير إلى Excel
                  </button>
                  <button className="w-full px-4 py-2 text-right hover:bg-gray-50 text-xs [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    تصدير إلى PDF
                  </button>
                  <button className="w-full px-4 py-2 text-right hover:bg-gray-50 text-xs [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    تصدير إلى CSV
                  </button>
                </div>
              )}
            </div>

            {/* Columns Button */}
            <div className="relative" ref={columnsRef}>
              <Button
                variant="outline"
                className="h-[43px] gap-2 bg-[#f8f8f8] border-[#e2e2e2] hover:bg-gray-100"
                onClick={() => setShowColumnsFilter(!showColumnsFilter)}
              >
                <Columns3 className="w-4 h-4" />
              </Button>

              {showColumnsFilter && (
                <div className="absolute left-0 mt-2 w-[200px] bg-white rounded-lg shadow-lg border border-gray-200 p-3 z-50 [direction:rtl]">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">الاسم</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">النوع</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">الدولة</span>
                    </label>
                  </div>
                </div>
              )}
            </div>

            {/* Add Customer Button */}
            <button
              className={buttonClasses.primary}
              onClick={handleCreateNew}
            >
              <UserPlus className="w-4 h-4" />
              <span>عميل جديد</span>
            </button>
          </div>
        </div>

        {/* Table */}
        {filteredCustomers.length === 0 ? (
          <div className="bg-white rounded-xl border border-[#e2e2e2] p-12 text-center">
            <div className="flex flex-col items-center gap-4">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
                <UserPlus className="w-12 h-12 text-gray-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  لا يوجد عملاء
                </h3>
                <p className="text-gray-500 mb-4 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  ابدأ بإضافة عميل جديد لإدارة عملائك
                </p>
                <button
                  className={buttonClasses.primary}
                  onClick={handleCreateNew}
                >
                  <UserPlus className="w-4 h-4 ml-2" />
                  إضافة عميل جديد
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
            <AdvancedTable
              data={filteredCustomers}
              columns={[
                {
                  key: 'name',
                  label: 'اسم العميل',
                },
                {
                  key: 'type',
                  label: 'نوع العميل',
                },
                {
                  key: 'country',
                  label: 'الدولة',
                },
                {
                  key: 'taxNumber',
                  label: 'الرقم الضريبي',
                },
                {
                  key: 'postalCode',
                  label: 'الرمز البريدي',
                },
                {
                  key: 'currency',
                  label: 'العملة',
                },
                {
                  key: 'paymentTerms',
                  label: 'شروط الدفع',
                },
                {
                  key: 'phone',
                  label: 'رقم الجوال',
                },
              ]}
              actions={[
                {
                  icon: Edit2,
                  label: 'تعديل',
                  onClick: (customer) => handleEdit(customer),
                  color: 'blue',
                },
                {
                  icon: Trash2,
                  label: 'حذف',
                  onClick: (customer) => handleDelete(customer.id),
                  color: 'red',
                },
              ]}
            />
          </div>
        )}
      </div>
    </Layout>
  );
};
