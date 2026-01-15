import { useState, useRef, useEffect } from 'react';
import { Layout } from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { 
  Search, 
  Filter, 
  Download, 
  Columns3, 
  MoreVertical, 
  Edit2, 
  Trash2,
  X
} from 'lucide-react';

interface Supplier {
  id: number;
  name: string;
  type: string;
  country: string;
  currency: string;
  paymentTerms: string;
  phone: string;
  taxNumber: string;
  status: string;
}

const mockSuppliers: Supplier[] = [
  {
    id: 1,
    name: 'المالكي',
    type: 'فرد',
    country: 'جمهورية مصر العربية',
    currency: 'SAR',
    paymentTerms: 'مجموعه 1',
    phone: '+966 50 123 4567',
    taxNumber: '123456789',
    status: 'active'
  },
  {
    id: 2,
    name: 'شركة التمويل العربية',
    type: 'شركة',
    country: 'المملكة العربية السعودية',
    currency: 'SAR',
    paymentTerms: 'مجموعه الرياض',
    phone: '+966 50 234 5678',
    taxNumber: '234567890',
    status: 'active'
  },
  {
    id: 3,
    name: 'شركة مرعي العربية',
    type: 'شركة',
    country: 'دولة الإمارات العربية المتحدة',
    currency: 'USD',
    paymentTerms: 'مجموعه القصيم',
    phone: '+971 50 345 6789',
    taxNumber: '345678901',
    status: 'active'
  },
  {
    id: 4,
    name: 'شركة التهامي',
    type: 'شركة',
    country: 'دولة قطر',
    currency: 'USD',
    paymentTerms: 'مجموعه محددة',
    phone: '+974 50 456 7890',
    taxNumber: '456789012',
    status: 'active'
  },
  {
    id: 5,
    name: 'شركة التوريد',
    type: 'شركة',
    country: 'دولة الكويت',
    currency: 'USD',
    paymentTerms: 'مجموعه البناء',
    phone: '+965 50 567 8901',
    taxNumber: '567890123',
    status: 'inactive'
  },
  {
    id: 6,
    name: 'شركة التوحيد والنور',
    type: 'شركة',
    country: 'مملكة البحرين',
    currency: 'EGP',
    paymentTerms: 'مجموعه أخري',
    phone: '+973 50 678 9012',
    taxNumber: '678901234',
    status: 'active'
  },
  {
    id: 7,
    name: 'شركة عطفان',
    type: 'شركة',
    country: 'سلطنة عمان',
    currency: 'SAR',
    paymentTerms: 'مجموعه 5',
    phone: '+968 50 789 0123',
    taxNumber: '789012345',
    status: 'active'
  },
  {
    id: 8,
    name: 'شركة المتحدة',
    type: 'شركة',
    country: 'المملكة الأردنية الهاشمية',
    currency: 'USD',
    paymentTerms: 'معدات',
    phone: '+962 50 890 1234',
    taxNumber: '890123456',
    status: 'active'
  },
];

export const Suppliers = (): JSX.Element => {
  const { t, dir } = useLanguage();
  const [suppliers, setSuppliers] = useState<Supplier[]>(mockSuppliers);
  const [searchQuery, setSearchQuery] = useState('');
  const [showColumnsFilter, setShowColumnsFilter] = useState(false);
  const [showExportOptions, setShowExportOptions] = useState(false);
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [openActionMenuId, setOpenActionMenuId] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState<'create' | 'edit'>('create');
  const [selectedSupplier, setSelectedSupplier] = useState<Supplier | null>(null);

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

  const filteredSuppliers = suppliers.filter(supplier =>
    supplier.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    supplier.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    supplier.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
    supplier.currency.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCreateNew = () => {
    setModalMode('create');
    setSelectedSupplier(null);
    setShowModal(true);
  };

  const handleEdit = (supplier: Supplier) => {
    setModalMode('edit');
    setSelectedSupplier(supplier);
    setShowModal(true);
    setOpenActionMenuId(null);
  };

  const handleDelete = (id: number) => {
    setSuppliers(suppliers.filter(s => s.id !== id));
    setOpenActionMenuId(null);
  };

  const handleSaveSupplier = () => {
    // Implementation for saving supplier
    setShowModal(false);
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
              placeholder={t('suppliers.search_placeholder') || 'ابحث من هنا (مورد، نوع المورد، العملة ، ...)'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`h-[45px] ${dir === 'rtl' ? 'pr-10' : 'pl-10'} bg-white border-[#cfcfcf]`}
            />
            <Search className={`absolute top-1/2 -translate-y-1/2 ${dir === 'rtl' ? 'right-3' : 'left-3'} w-4 h-4 text-[#99a09e]`} />
          </div>

          {/* Action Buttons Group */}
          <div className="flex items-center gap-2">
            {/* Show/Hide Columns */}
            <div className="relative" ref={columnsRef}>
              <Button
                onClick={() => setShowColumnsFilter(!showColumnsFilter)}
                className="h-[43px] px-[13px] bg-slate-50 hover:bg-slate-100 text-[#092e32] gap-2"
              >
                <Columns3 className="w-3.5 h-3.5" />
                <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-base">
                  {t('common.show_hide_columns') || 'إظهار/إخفاء أعمدة'}
                </span>
              </Button>
              {showColumnsFilter && (
                <div className={`absolute top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 p-2 z-10 ${dir === 'rtl' ? 'right-0' : 'left-0'}`}>
                  <div className="text-sm text-gray-600 p-2">{t('common.show_hide_columns') || 'إظهار/إخفاء أعمدة'}</div>
                </div>
              )}
            </div>

            {/* Filter Button */}
            <div className="relative" ref={filterRef}>
              <Button
                onClick={() => setShowFilterOptions(!showFilterOptions)}
                className="h-[43px] px-[10px] bg-slate-50 hover:bg-slate-100 text-[#092e32] gap-1.5"
              >
                <Filter className="w-[18px] h-[18px]" />
                <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-base">
                  {t('common.filter') || 'فلتر'}
                </span>
              </Button>
              {showFilterOptions && (
                <div className={`absolute top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 p-2 z-10 ${dir === 'rtl' ? 'right-0' : 'left-0'}`}>
                  <div className="text-sm text-gray-600 p-2">{t('common.filter_options') || 'خيارات الفلتر'}</div>
                </div>
              )}
            </div>

            {/* Export Button */}
            <div className="relative" ref={exportRef}>
              <Button
                onClick={() => setShowExportOptions(!showExportOptions)}
                className="h-[43px] px-[10px] bg-slate-50 hover:bg-slate-100 text-[#092e32] gap-[5px]"
              >
                <Download className="w-4 h-4" />
                <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-base">
                  {t('common.export') || 'تصدير'}
                </span>
              </Button>
              {showExportOptions && (
                <div className={`absolute top-full mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 p-2 z-10 ${dir === 'rtl' ? 'right-0' : 'left-0'}`}>
                  <button className="w-full text-right px-3 py-2 hover:bg-gray-100 rounded">PDF</button>
                  <button className="w-full text-right px-3 py-2 hover:bg-gray-100 rounded">Excel</button>
                  <button className="w-full text-right px-3 py-2 hover:bg-gray-100 rounded">CSV</button>
                </div>
              )}
            </div>

            {/* Create New Button */}
            <Button
              onClick={handleCreateNew}
              className="h-[43px] px-[18px] py-[9px] bg-[#093738] hover:bg-[#0a4546] text-white shadow-[0px_4px_4px_#0000001a]"
            >
              <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-base">
                مورّد جديد
              </span>
            </Button>
          </div>
        </div>

        {/* Table or Empty State */}
        {filteredSuppliers.length === 0 ? (
          /* Empty State */
          <div className="bg-white rounded-xl border border-[#e2e2e2] p-12">
            <div className="flex flex-col items-center justify-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <p className="text-xl font-semibold text-[#092e32] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                لا توجد موردين
              </p>
              <p className="text-[#5f6c72] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                ابدأ بإضافة موردين جدد لتتمكن من إدارتهم
              </p>
            </div>
          </div>
        ) : (
          /* Table */
          <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
            {/* Table Header */}
            <div className="bg-[#f1f5f980] border-b border-slate-100 h-[54px] flex items-center px-4">
              <div className="grid gap-4 w-full [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#0e0d24] text-base" style={{gridTemplateColumns: '1fr 1fr 1.2fr 0.8fr 1fr 1.5fr 1.5fr 0.8fr 0.5fr'}}>
                <div className="text-right">الاسم</div>
                <div className="text-right">نوع المورد</div>
                <div className="text-right">الدولة</div>
                <div className="text-right">العملة</div>
                <div className="text-right">شروط الدفع</div>
                <div className="text-right" dir="ltr">رقم الهاتف</div>
                <div className="text-right" dir="ltr">الرقم الضريبي</div>
                <div className="text-right">الحالة</div>
                <div className="text-center"></div>
              </div>
            </div>

            {/* Table Body */}
            <div>
              {filteredSuppliers.map((supplier, index) => (
                <div
                  key={supplier.id}
                  className={`grid gap-4 px-4 py-4 items-center border-b border-gray-100 ${
                    index % 2 === 0 ? 'bg-white' : 'bg-[#f7f7f9]'
                  }`}
                  style={{gridTemplateColumns: '1fr 1fr 1.2fr 0.8fr 1fr 1.5fr 1.5fr 0.8fr 0.5fr'}}
                >
                  <div className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#0e0d24] text-base text-right">
                    {supplier.name}
                  </div>
                  <div className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#0e0d24] text-base text-right">
                    {supplier.type}
                  </div>
                  <div className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#0e0d24] text-base text-right">
                    {supplier.country}
                  </div>
                  <div className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#0e0d24] text-base text-right">
                    {supplier.currency}
                  </div>
                  <div className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#0e0d24] text-base text-right">
                    {supplier.paymentTerms}
                  </div>
                  <div className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#0e0d24] text-base text-right" dir="ltr">
                    {supplier.phone}
                  </div>
                  <div className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#0e0d24] text-base text-right" dir="ltr">
                    {supplier.taxNumber}
                  </div>
                  <div className="text-right">
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                      supplier.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {supplier.status === 'active' ? 'نشط' : 'غير نشط'}
                    </span>
                  </div>
                  <div className="relative flex justify-center">
                    <button
                      onClick={() => setOpenActionMenuId(openActionMenuId === supplier.id ? null : supplier.id)}
                      className="p-1 hover:bg-gray-200 rounded"
                    >
                      <MoreVertical className="w-5 h-5 text-gray-600" />
                    </button>
                    {openActionMenuId === supplier.id && (
                      <div
                        ref={(el) => (actionMenuRefs.current[supplier.id] = el)}
                        className={`absolute top-8 ${dir === 'rtl' ? 'left-0' : 'right-0'} w-32 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10`}
                      >
                        <button
                          onClick={() => handleEdit(supplier)}
                          className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-right"
                        >
                          <Edit2 className="w-4 h-4" />
                          <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm">تعديل</span>
                        </button>
                        <button
                          onClick={() => handleDelete(supplier.id)}
                          className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-right text-red-600"
                        >
                          <Trash2 className="w-4 h-4" />
                          <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-sm">حذف</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Slide-in Modal */}
        {showModal && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setShowModal(false)}
            />

            {/* Modal Content */}
            <div
              className={`fixed top-0 ${dir === 'rtl' ? 'left-0' : 'right-0'} h-full w-[600px] bg-white shadow-2xl z-50 transform transition-transform duration-300`}
              style={{ transform: showModal ? 'translateX(0)' : dir === 'rtl' ? 'translateX(-100%)' : 'translateX(100%)' }}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  {modalMode === 'create' ? 'إضافة مورّد جديد' : 'تعديل مورّد'}
                </h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto h-[calc(100vh-140px)]">
                <div className="space-y-4">
                  {/* Supplier Name */}
                  <div>
                    <Label htmlFor="supplierName" className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-base mb-2">
                      اسم المورد <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="supplierName"
                      placeholder="أدخل اسم المورد"
                      defaultValue={selectedSupplier?.name}
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    />
                  </div>

                  {/* Supplier Type */}
                  <div>
                    <Label htmlFor="supplierType" className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-base mb-2">
                      نوع المورد <span className="text-red-500">*</span>
                    </Label>
                    <Select defaultValue={selectedSupplier?.type}>
                      <SelectTrigger className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        <SelectValue placeholder="اختر نوع المورد" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="فرد">فرد</SelectItem>
                        <SelectItem value="شركة">شركة</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Country */}
                  <div>
                    <Label htmlFor="country" className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-base mb-2">
                      الدولة <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="country"
                      placeholder="أدخل الدولة"
                      defaultValue={selectedSupplier?.country}
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    />
                  </div>

                  {/* Currency */}
                  <div>
                    <Label htmlFor="currency" className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-base mb-2">
                      العملة <span className="text-red-500">*</span>
                    </Label>
                    <Select defaultValue={selectedSupplier?.currency}>
                      <SelectTrigger className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        <SelectValue placeholder="اختر العملة" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="SAR">SAR - ريال سعودي</SelectItem>
                        <SelectItem value="USD">USD - دولار أمريكي</SelectItem>
                        <SelectItem value="EUR">EUR - يورو</SelectItem>
                        <SelectItem value="EGP">EGP - جنيه مصري</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Payment Terms */}
                  <div>
                    <Label htmlFor="paymentTerms" className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-base mb-2">
                      شروط الدفع
                    </Label>
                    <Input
                      id="paymentTerms"
                      placeholder="أدخل شروط الدفع"
                      defaultValue={selectedSupplier?.paymentTerms}
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <Label htmlFor="phone" className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-base mb-2">
                      رقم الهاتف <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      placeholder="أدخل رقم الهاتف"
                      defaultValue={selectedSupplier?.phone}
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    />
                  </div>

                  {/* Tax Number */}
                  <div>
                    <Label htmlFor="taxNumber" className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-base mb-2">
                      الرقم الضريبي
                    </Label>
                    <Input
                      id="taxNumber"
                      placeholder="أدخل الرقم الضريبي"
                      defaultValue={selectedSupplier?.taxNumber}
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    />
                  </div>

                  {/* Status */}
                  <div>
                    <Label htmlFor="status" className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-base mb-2">
                      الحالة <span className="text-red-500">*</span>
                    </Label>
                    <Select defaultValue={selectedSupplier?.status || 'active'}>
                      <SelectTrigger className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        <SelectValue placeholder="اختر الحالة" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">نشط</SelectItem>
                        <SelectItem value="inactive">غير نشط</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-white flex gap-3 justify-end">
                <Button
                  onClick={() => setShowModal(false)}
                  className="px-6 bg-gray-100 hover:bg-gray-200 text-gray-800 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                >
                  إلغاء
                </Button>
                <Button
                  onClick={handleSaveSupplier}
                  className="px-6 bg-[#093738] hover:bg-[#0a4546] text-white [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                >
                  {modalMode === 'create' ? 'إضافة المورّد' : 'حفظ التعديلات'}
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};
