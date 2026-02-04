import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import { Textarea } from '../../components/ui/textarea';
import { buttonClasses } from '../../styles';
import { ArrowRight, Plus, Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import { usePriceQuotesData } from '../../hooks/usePriceQuotesData';
import type { PriceQuote, PriceQuoteItem } from '../../data/price-quotes.data';

export const AddEditPriceQuote = (): JSX.Element => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { priceQuotes, setPriceQuotes } = usePriceQuotesData();

  const isEditMode = Boolean(id);
  const existingQuote = isEditMode ? priceQuotes.find((q) => q.id === Number(id)) : null;

  // Form State
  const [quoteNumber, setQuoteNumber] = useState(existingQuote?.quoteNumber || '');
  const [customer, setCustomer] = useState(existingQuote?.customer || '');
  const [quoteDate, setQuoteDate] = useState(
    existingQuote?.quoteDate || new Date().toISOString().split('T')[0]
  );
  const [validUntil, setValidUntil] = useState(existingQuote?.validUntil || '');
  const [salesRep, setSalesRep] = useState(existingQuote?.salesRep || '');
  const [items, setItems] = useState<PriceQuoteItem[]>(
    existingQuote?.items || [
      {
        id: 1,
        itemName: '',
        quantity: 1,
        unitPrice: 0,
        discount: 0,
        tax: 15,
        total: 0,
      },
    ]
  );
  const [discountPercent, setDiscountPercent] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(existingQuote?.discount || 0);
  const [terms, setTerms] = useState(existingQuote?.terms || '');
  const [notes, setNotes] = useState(existingQuote?.notes || '');

  // Sections State
  const [sectionsExpanded, setSectionsExpanded] = useState({
    supplierInfo: true,
    items: true,
    discount: true,
    termsAndConditions: true,
  });

  useEffect(() => {
    if (!isEditMode) {
      // Generate new quote number
      const maxNumber = Math.max(
        ...priceQuotes.map((q) => parseInt(q.quoteNumber.split('-')[1])),
        0
      );
      setQuoteNumber(`RFQ-${String(maxNumber + 1).padStart(3, '0')}`);
    }
  }, [isEditMode, priceQuotes]);

  const toggleSection = (section: keyof typeof sectionsExpanded) => {
    setSectionsExpanded((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const calculateItemTotal = (item: PriceQuoteItem) => {
    const subtotal = item.quantity * item.unitPrice;
    const afterDiscount = subtotal - item.discount;
    const taxAmount = (afterDiscount * item.tax) / 100;
    return afterDiscount + taxAmount;
  };

  const handleItemChange = (index: number, field: keyof PriceQuoteItem, value: any) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [field]: value };

    // Recalculate total
    newItems[index].total = calculateItemTotal(newItems[index]);

    setItems(newItems);
  };

  const addItem = () => {
    const newItem: PriceQuoteItem = {
      id: items.length + 1,
      itemName: '',
      quantity: 1,
      unitPrice: 0,
      discount: 0,
      tax: 15,
      total: 0,
    };
    setItems([...items, newItem]);
  };

  const removeItem = (index: number) => {
    if (items.length > 1) {
      setItems(items.filter((_, i) => i !== index));
    }
  };

  const calculateTotals = () => {
    const subtotal = items.reduce((sum, item) => {
      return sum + item.quantity * item.unitPrice;
    }, 0);

    const totalDiscount = items.reduce((sum, item) => sum + item.discount, 0) + discountAmount;

    const taxAmount = items.reduce((sum, item) => {
      const itemSubtotal = item.quantity * item.unitPrice - item.discount;
      return sum + (itemSubtotal * item.tax) / 100;
    }, 0);

    const total = subtotal - totalDiscount + taxAmount;

    return {
      subtotal,
      totalDiscount,
      taxAmount,
      total,
    };
  };

  const totals = calculateTotals();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const quoteData: PriceQuote = {
      id: isEditMode ? Number(id) : Math.max(...priceQuotes.map((q) => q.id)) + 1,
      quoteNumber,
      customer,
      quoteDate,
      validUntil,
      salesRep,
      status: 'pending',
      items,
      subtotal: totals.subtotal,
      discount: totals.totalDiscount,
      taxAmount: totals.taxAmount,
      total: totals.total,
      terms,
      notes,
    };

    if (isEditMode) {
      setPriceQuotes(priceQuotes.map((q) => (q.id === Number(id) ? quoteData : q)));
    } else {
      setPriceQuotes([...priceQuotes, quoteData]);
    }

    navigate('/sales/price-quotes');
  };

  const SectionHeader = ({
    title,
    section,
    icon,
  }: {
    title: string;
    section: keyof typeof sectionsExpanded;
    icon?: React.ReactNode;
  }) => (
    <div
      className="flex items-center justify-between p-4 bg-white border-b border-gray-200 cursor-pointer"
      onClick={() => toggleSection(section)}
    >
      <div className="flex items-center gap-2">
        {icon}
        <h3 className="text-base font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#0e0d24]">
          {title}
        </h3>
      </div>
      {sectionsExpanded[section] ? (
        <ChevronUp className="w-5 h-5 text-gray-600" />
      ) : (
        <ChevronDown className="w-5 h-5 text-gray-600" />
      )}
    </div>
  );

  return (
    <Layout>
      <div className="[direction:rtl]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Button 
              onClick={() => navigate('/sales/price-quotes')} 
              className="w-11 h-11 p-0 bg-white text-[#0e0d24] border border-[#e2e2e2] hover:bg-gray-50 rounded-lg shadow-[0px_4px_4px_#0000001a] flex items-center justify-center"
            >
              <ArrowRight className="w-5 h-5" />
            </Button>
            <h1 className="text-2xl font-bold [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#0e0d24]">
              {isEditMode ? 'تعديل عرض السعر' : 'عرض سعر'}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <Button
              type="button"
              onClick={() => navigate('/sales/price-quotes')}
              className={buttonClasses.secondary}
            >
              إلغاء
            </Button>
            <Button type="submit" form="quote-form" className={buttonClasses.primary}>
              حفظ
            </Button>
          </div>
        </div>

        <form id="quote-form" onSubmit={handleSubmit} className="space-y-4">
          {/* معلومات الورد (Supplier Information) */}
          <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
            <SectionHeader title="معلومات الورد" section="supplierInfo" />
            {sectionsExpanded.supplierInfo && (
              <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#00000099]">
                    رقم عرض السعر
                  </Label>
                  <Input
                    value={quoteNumber}
                    readOnly
                    className="bg-gray-50 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#00000099]">
                    الفصيل
                  </Label>
                  <Select value={customer} onValueChange={setCustomer}>
                    <SelectTrigger className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]">
                      <SelectValue placeholder="اختر العميل" />
                    </SelectTrigger>
                    <SelectContent className="[direction:rtl]">
                      <SelectItem
                        value="اللكنز"
                        className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      >
                        اللكنز
                      </SelectItem>
                      <SelectItem
                        value="شركة التمويل العربية"
                        className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      >
                        شركة التمويل العربية
                      </SelectItem>
                      <SelectItem
                        value="شركة مركز العربية"
                        className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      >
                        شركة مركز العربية
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#00000099]">
                    تاريخ العرض
                  </Label>
                  <Input
                    type="date"
                    value={quoteDate}
                    onChange={(e) => setQuoteDate(e.target.value)}
                    className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#00000099]">
                    مدة الصلاحية
                  </Label>
                  <div className="relative">
                    <Input
                      type="text"
                      value={validUntil}
                      onChange={(e) => setValidUntil(e.target.value)}
                      placeholder="09-30 - 10/11/2025"
                      className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#00000099]">
                    الفرع
                  </Label>
                  <Select>
                    <SelectTrigger className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]">
                      <SelectValue placeholder="اختر الفرع" />
                    </SelectTrigger>
                    <SelectContent className="[direction:rtl]">
                      <SelectItem
                        value="main"
                        className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      >
                        الفرع الرئيسي
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#00000099]">
                    مركز التكلفة
                  </Label>
                  <Select>
                    <SelectTrigger className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]">
                      <SelectValue placeholder="اختر مركز التكلفة" />
                    </SelectTrigger>
                    <SelectContent className="[direction:rtl]">
                      <SelectItem
                        value="center1"
                        className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      >
                        مركز التكلفة 1
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#00000099]">
                    المشروع
                  </Label>
                  <Select>
                    <SelectTrigger className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]">
                      <SelectValue placeholder="اختر المشروع" />
                    </SelectTrigger>
                    <SelectContent className="[direction:rtl]">
                      <SelectItem
                        value="project1"
                        className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      >
                        المشروع 1
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#00000099]">
                    الصنف
                  </Label>
                  <Select>
                    <SelectTrigger className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]">
                      <SelectValue placeholder="اختر الصنف" />
                    </SelectTrigger>
                    <SelectContent className="[direction:rtl]">
                      <SelectItem
                        value="category1"
                        className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      >
                        الصنف 1
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#00000099]">
                    مندوب المبيعات
                  </Label>
                  <Select value={salesRep} onValueChange={setSalesRep}>
                    <SelectTrigger className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]">
                      <SelectValue placeholder="اختر المندوب" />
                    </SelectTrigger>
                    <SelectContent className="[direction:rtl]">
                      <SelectItem
                        value="سالم"
                        className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      >
                        سالم
                      </SelectItem>
                      <SelectItem
                        value="عبد الرحمن المجيدة"
                        className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      >
                        عبد الرحمن المجيدة
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
          </div>

          {/* بنود الطلب والتدريب (Items) */}
          <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
            <SectionHeader title="بنود الطلب والتدريب" section="items" />
            {sectionsExpanded.items && (
              <div className="p-6">
                <div className="space-y-4">
                  {/* Table Header */}
                  <div className="grid grid-cols-12 gap-3 text-sm font-medium text-[#00000099] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] pb-2 border-b">
                    <div className="col-span-1 text-center">#</div>
                    <div className="col-span-4">الصنف / البند</div>
                    <div className="col-span-1 text-center">الكمية</div>
                    <div className="col-span-2 text-center">السعر الإفرادي</div>
                    <div className="col-span-1 text-center">الخصم</div>
                    <div className="col-span-2 text-center">الإجمالي الفرعي</div>
                    <div className="col-span-1 text-center">عمليات</div>
                  </div>

                  {/* Items */}
                  {items.map((item, index) => (
                    <div key={item.id} className="grid grid-cols-12 gap-3 items-center">
                      <div className="col-span-1 text-center text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {index + 1}
                      </div>
                      <div className="col-span-4">
                        <Input
                          value={item.itemName}
                          onChange={(e) => handleItemChange(index, 'itemName', e.target.value)}
                          placeholder="اكتب اسم الصنف"
                          className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]"
                        />
                      </div>
                      <div className="col-span-1">
                        <Input
                          type="number"
                          value={item.quantity}
                          onChange={(e) =>
                            handleItemChange(index, 'quantity', Number(e.target.value))
                          }
                          className="text-center [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                        />
                      </div>
                      <div className="col-span-2">
                        <Input
                          type="number"
                          step="0.01"
                          value={item.unitPrice}
                          onChange={(e) =>
                            handleItemChange(index, 'unitPrice', Number(e.target.value))
                          }
                          className="text-center [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                        />
                      </div>
                      <div className="col-span-1">
                        <Input
                          type="number"
                          step="0.01"
                          value={item.discount}
                          onChange={(e) =>
                            handleItemChange(index, 'discount', Number(e.target.value))
                          }
                          className="text-center [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                        />
                      </div>
                      <div className="col-span-2">
                        <div className="text-center font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica] flex items-center justify-center gap-1">
                          {item.total.toFixed(2)}
                          <img src="/images/currency/saudi-riyal.svg" alt="SAR" className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="col-span-1 flex justify-center">
                        <button
                          type="button"
                          onClick={() => removeItem(index)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded"
                          disabled={items.length === 1}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  type="button"
                  onClick={addItem}
                  className={`${buttonClasses.secondary} mt-4 gap-2`}
                >
                  <Plus className="w-4 h-4" />
                  إضافة بند
                </Button>

                {/* Totals Summary */}
                <div className="mt-6 flex justify-end">
                  <div className="w-full max-w-md space-y-3 bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      <span className="text-[#00000099]">إجمالي التكلفة</span>
                      <span className="font-medium flex items-center gap-1">{totals.subtotal.toFixed(2)}<img src="/images/currency/saudi-riyal.svg" alt="SAR" className="w-4 h-4" /></span>
                    </div>
                    <div className="flex justify-between text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      <span className="text-[#00000099]">قيمة الضريبة</span>
                      <span className="font-medium flex items-center gap-1">{totals.taxAmount.toFixed(2)}<img src="/images/currency/saudi-riyal.svg" alt="SAR" className="w-4 h-4" /></span>
                    </div>
                    <div className="flex justify-between text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      <span className="text-[#00000099]">إجمالي الخصومات</span>
                      <span className="font-medium flex items-center gap-1">{totals.totalDiscount.toFixed(2)}<img src="/images/currency/saudi-riyal.svg" alt="SAR" className="w-4 h-4" /></span>
                    </div>
                    <div className="flex justify-between text-base font-bold [font-family:'IBM_Plex_Sans_Arabic',Helvetica] pt-3 border-t">
                      <span>صافي شامل الضريبة</span>
                      <span className="flex items-center gap-1">{totals.total.toFixed(2)}<img src="/images/currency/saudi-riyal.svg" alt="SAR" className="w-4 h-4" /></span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* التخصيم (Discount) */}
          <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
            <SectionHeader title="التخصيم" section="discount" />
            {sectionsExpanded.discount && (
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#00000099]">
                      الحصم
                    </Label>
                    <Select>
                      <SelectTrigger className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl]">
                        <SelectValue placeholder="الخصم من قيم الضريبية" />
                      </SelectTrigger>
                      <SelectContent className="[direction:rtl]">
                        <SelectItem
                          value="before"
                          className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                        >
                          الخصم من قيم الضريبية
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#00000099]">
                      نسبة الخصم
                    </Label>
                    <div className="relative">
                      <Input
                        type="number"
                        step="0.01"
                        value={discountPercent}
                        onChange={(e) => setDiscountPercent(Number(e.target.value))}
                        placeholder="15%"
                        className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] pr-10"
                      />
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        %
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#00000099]">
                      قيمة الخصم
                    </Label>
                    <div className="relative">
                      <Input
                        type="number"
                        step="0.01"
                        value={discountAmount}
                        onChange={(e) => setDiscountAmount(Number(e.target.value))}
                        placeholder="30 ريال"
                        className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] pr-16"
                      />
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        ريال
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* الشروط والأحكام والملاحظات الداخلية */}
          <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
            <SectionHeader
              title="الشروط والأحكام والملاحظات الداخلية"
              section="termsAndConditions"
            />
            {sectionsExpanded.termsAndConditions && (
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <Label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#00000099]">
                    الشروط والأحكام
                  </Label>
                  <Textarea
                    value={terms}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                      setTerms(e.target.value)
                    }
                    placeholder="اكتب الشروط والأحكام هنا..."
                    rows={4}
                    className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#00000099]">
                    الملاحظات الداخلية
                  </Label>
                  <Textarea
                    value={notes}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                      setNotes(e.target.value)
                    }
                    placeholder="اكتب الملاحظات الداخلية هنا..."
                    rows={4}
                    className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] [direction:rtl] resize-none"
                  />
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </Layout>
  );
};
