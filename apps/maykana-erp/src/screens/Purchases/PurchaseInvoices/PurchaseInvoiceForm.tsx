import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ChevronDown, ChevronUp, ArrowLeft, Plus, Trash2 } from 'lucide-react';

interface PurchaseInvoiceFormProps {
  mode?: 'view' | 'edit' | 'create';
}

interface InvoiceItem {
  id: string;
  itemCode: string;
  itemDescription: string;
  unit: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  taxRate: number;
  taxAmount: number;
}

export function PurchaseInvoiceForm({ mode: propMode }: PurchaseInvoiceFormProps) {
  const [searchParams] = useSearchParams();
  const queryMode = searchParams.get('mode');
  const mode = (queryMode || propMode || 'create') as 'view' | 'edit' | 'create';
  const navigate = useNavigate();

  // Form state
  const [supplierName, setSupplierName] = useState('اسم الورد');
  const [invoiceNumber, setInvoiceNumber] = useState('63985412365');
  const [invoiceDate, setInvoiceDate] = useState('10/11/2025');
  const [invoiceTime, setInvoiceTime] = useState('09:30');
  const [paymentMethod, setPaymentMethod] = useState('اجل');

  // Items state
  const [invoiceItems, setInvoiceItems] = useState<InvoiceItem[]>([
    {
      id: '1',
      itemCode: 'AG220-SD',
      itemDescription: 'تجليد جلدتكس(زهري،عدني،زهري عن طرقه)',
      unit: 'كرتون',
      quantity: 1,
      unitPrice: 1000.0,
      totalPrice: 2000,
      taxRate: 1,
      taxAmount: 20,
    },
  ]);

  // Summary calculations
  const [discountValue, setDiscountValue] = useState(20);
  const totalInvoice = invoiceItems.reduce((sum, item) => sum + item.totalPrice, 0);
  const totalTax = invoiceItems.reduce((sum, item) => sum + item.taxAmount, 0);
  const totalWithTax = totalInvoice - discountValue + totalTax;

  // Terms and conditions
  const [fileName, setFileName] = useState('');
  const [deliveryTerms, setDeliveryTerms] = useState('');
  const [notes, setNotes] = useState('');
  const [comments, setComments] = useState('');
  const [seal, setSeal] = useState('');

  // Collapsible sections
  const [expandedSections, setExpandedSections] = useState({
    information: true,
    items: true,
    summary: false,
    terms: false,
    seal: false,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleItemChange = (index: number, field: keyof InvoiceItem, value: any) => {
    const updatedItems = [...invoiceItems];
    updatedItems[index] = {
      ...updatedItems[index],
      [field]: value,
    };

    // Recalculate totals
    if (field === 'quantity' || field === 'unitPrice') {
      const item = updatedItems[index];
      item.totalPrice = item.quantity * item.unitPrice;
      item.taxAmount = (item.totalPrice * item.taxRate) / 100;
    }

    setInvoiceItems(updatedItems);
  };

  const handleAddItem = () => {
    const newItem: InvoiceItem = {
      id: Date.now().toString(),
      itemCode: '',
      itemDescription: '',
      unit: '',
      quantity: 0,
      unitPrice: 0,
      totalPrice: 0,
      taxRate: 0,
      taxAmount: 0,
    };
    setInvoiceItems([...invoiceItems, newItem]);
  };

  const handleRemoveItem = (index: number) => {
    setInvoiceItems(invoiceItems.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    console.log('Form submitted');
    navigate('/purchases/purchase-invoices');
  };

  const isReadOnly = mode === 'view';

  return (
    <Layout>
      <div className="min-h-screen bg-[#f8faf9] font-['IBM_Plex_Sans_Arabic']">
        <div className="p-6">
          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/purchases/purchase-invoices')}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <ArrowLeft size={24} className="text-gray-600" />
              </button>
              <h1 className="text-2xl font-bold text-gray-900">
                {mode === 'create'
                  ? 'إنشاء فاتورة مشتريات'
                  : mode === 'edit'
                    ? 'تعديل فاتورة مشتريات'
                    : 'عرض فاتورة مشتريات'}
              </h1>
            </div>
            <div className="flex items-center gap-2">
              {!isReadOnly && (
                <>
                  <Button variant="outline" className="bg-white">
                    احفظ كمسودة
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    className="bg-[#093738] hover:bg-[#0a4647] text-white"
                  >
                    العمليات
                  </Button>
                </>
              )}
            </div>
          </div>

          {/* Supplier Information Section */}
          <div className="mb-4 bg-white rounded-lg shadow-sm">
            <button
              onClick={() => toggleSection('information')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50"
            >
              <span className="text-lg font-semibold text-gray-900">معلومات الوارد</span>
              {expandedSections.information ? (
                <ChevronUp size={20} className="text-gray-600" />
              ) : (
                <ChevronDown size={20} className="text-gray-600" />
              )}
            </button>

            {expandedSections.information && (
              <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label className="text-right block mb-2">اسم الورد</Label>
                  {isReadOnly ? (
                    <div className="p-2 bg-gray-50 rounded border">{supplierName}</div>
                  ) : (
                    <Input
                      value={supplierName}
                      onChange={(e) => setSupplierName(e.target.value)}
                      className="text-right"
                    />
                  )}
                </div>

                <div>
                  <Label className="text-right block mb-2">رقم فاتورة الورد</Label>
                  {isReadOnly ? (
                    <div className="p-2 bg-gray-50 rounded border">{invoiceNumber}</div>
                  ) : (
                    <Input
                      value={invoiceNumber}
                      onChange={(e) => setInvoiceNumber(e.target.value)}
                      className="text-right"
                    />
                  )}
                </div>

                <div>
                  <Label className="text-right block mb-2">تاريخ الطلب</Label>
                  {isReadOnly ? (
                    <div className="p-2 bg-gray-50 rounded border">{`${invoiceTime} - ${invoiceDate}`}</div>
                  ) : (
                    <div className="flex gap-2">
                      <Input
                        type="time"
                        value={invoiceTime}
                        onChange={(e) => setInvoiceTime(e.target.value)}
                        className="text-right"
                      />
                      <Input
                        type="date"
                        value={invoiceDate}
                        onChange={(e) => setInvoiceDate(e.target.value)}
                        className="text-right"
                      />
                    </div>
                  )}
                </div>

                <div>
                  <Label className="text-right block mb-2">طريق الدفع</Label>
                  {isReadOnly ? (
                    <div className="p-2 bg-gray-50 rounded border">{paymentMethod}</div>
                  ) : (
                    <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                      <SelectTrigger className="text-right">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="اجل">اجل</SelectItem>
                        <SelectItem value="نقدي">نقدي</SelectItem>
                        <SelectItem value="شيك">شيك</SelectItem>
                        <SelectItem value="بطاقة ائتمان">بطاقة ائتمان</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Items Section */}
          <div className="mb-4 bg-white rounded-lg shadow-sm">
            <button
              onClick={() => toggleSection('items')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50"
            >
              <span className="text-lg font-semibold text-gray-900">بنود الطلب والتعرايف</span>
              {expandedSections.items ? (
                <ChevronUp size={20} className="text-gray-600" />
              ) : (
                <ChevronDown size={20} className="text-gray-600" />
              )}
            </button>

            {expandedSections.items && (
              <div className="px-6 pb-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="px-4 py-3 text-right text-sm font-semibold">
                          كود المادة / الصنف
                        </th>
                        <th className="px-4 py-3 text-right text-sm font-semibold">وصف المادة</th>
                        <th className="px-4 py-3 text-right text-sm font-semibold">الوحدة</th>
                        <th className="px-4 py-3 text-right text-sm font-semibold">الكمية</th>
                        <th className="px-4 py-3 text-right text-sm font-semibold">السعر الفردي</th>
                        <th className="px-4 py-3 text-right text-sm font-semibold">
                          السعر الإجمالي
                        </th>
                        <th className="px-4 py-3 text-right text-sm font-semibold">
                          السعر شامل الضريبة
                        </th>
                        <th className="px-4 py-3 text-right text-sm font-semibold">
                          الضريبة المستلمة
                        </th>
                        {!isReadOnly && <th className="px-4 py-3"></th>}
                      </tr>
                    </thead>
                    <tbody>
                      {invoiceItems.map((item, index) => (
                        <tr key={item.id} className="border-b">
                          <td className="px-4 py-3">
                            {isReadOnly ? (
                              <div className="text-sm">{item.itemCode}</div>
                            ) : (
                              <Input
                                value={item.itemCode}
                                onChange={(e) =>
                                  handleItemChange(index, 'itemCode', e.target.value)
                                }
                                className="text-right text-sm"
                              />
                            )}
                          </td>
                          <td className="px-4 py-3">
                            {isReadOnly ? (
                              <div className="text-sm">{item.itemDescription}</div>
                            ) : (
                              <Input
                                value={item.itemDescription}
                                onChange={(e) =>
                                  handleItemChange(index, 'itemDescription', e.target.value)
                                }
                                className="text-right text-sm"
                              />
                            )}
                          </td>
                          <td className="px-4 py-3">
                            {isReadOnly ? (
                              <div className="text-sm">{item.unit}</div>
                            ) : (
                              <Input
                                value={item.unit}
                                onChange={(e) => handleItemChange(index, 'unit', e.target.value)}
                                className="text-right text-sm"
                              />
                            )}
                          </td>
                          <td className="px-4 py-3">
                            {isReadOnly ? (
                              <div className="text-sm">{item.quantity}</div>
                            ) : (
                              <Input
                                type="number"
                                value={item.quantity}
                                onChange={(e) =>
                                  handleItemChange(index, 'quantity', parseFloat(e.target.value))
                                }
                                className="text-right text-sm"
                              />
                            )}
                          </td>
                          <td className="px-4 py-3">
                            {isReadOnly ? (
                              <div className="text-sm">{item.unitPrice.toLocaleString()}</div>
                            ) : (
                              <Input
                                type="number"
                                value={item.unitPrice}
                                onChange={(e) =>
                                  handleItemChange(index, 'unitPrice', parseFloat(e.target.value))
                                }
                                className="text-right text-sm"
                              />
                            )}
                          </td>
                          <td className="px-4 py-3 text-sm">{item.totalPrice.toLocaleString()}</td>
                          <td className="px-4 py-3">
                            {isReadOnly ? (
                              <div className="text-sm">{item.taxRate}%</div>
                            ) : (
                              <Input
                                type="number"
                                value={item.taxRate}
                                onChange={(e) =>
                                  handleItemChange(index, 'taxRate', parseFloat(e.target.value))
                                }
                                className="text-right text-sm"
                              />
                            )}
                          </td>
                          <td className="px-4 py-3 text-sm">{item.taxAmount.toFixed(1)}</td>
                          {!isReadOnly && (
                            <td className="px-4 py-3">
                              <button
                                onClick={() => handleRemoveItem(index)}
                                className="p-1 text-red-600 hover:bg-red-50 rounded"
                              >
                                <Trash2 size={16} />
                              </button>
                            </td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {!isReadOnly && (
                  <Button
                    onClick={handleAddItem}
                    variant="outline"
                    className="mt-4 flex items-center gap-2"
                  >
                    <Plus size={16} />
                    <span>إضافة منتج</span>
                  </Button>
                )}

                {/* Summary */}
                <div className="mt-6 bg-gray-50 rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-4 max-w-md mr-auto">
                    <div className="text-right">
                      <span className="text-sm text-gray-600">إجمالي الفاتورة</span>
                    </div>
                    <div className="text-right font-semibold">
                      ر {totalInvoice.toLocaleString()}
                    </div>

                    <div className="text-right">
                      <span className="text-sm text-gray-600">قيمة الخصم</span>
                    </div>
                    <div className="text-right">
                      {isReadOnly ? (
                        <span className="font-semibold">ر {discountValue}</span>
                      ) : (
                        <Input
                          type="number"
                          value={discountValue}
                          onChange={(e) => setDiscountValue(parseFloat(e.target.value))}
                          className="text-right"
                        />
                      )}
                    </div>

                    <div className="text-right">
                      <span className="text-sm text-gray-600">إجمالي الضريبة</span>
                    </div>
                    <div className="text-right font-semibold">ر {totalTax.toFixed(1)}</div>

                    <div className="text-right">
                      <span className="text-sm text-gray-600">المبلغ شامل الضريبة</span>
                    </div>
                    <div className="text-right font-bold text-lg">
                      ر {totalWithTax.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Terms and Conditions Section */}
          <div className="mb-4 bg-white rounded-lg shadow-sm">
            <button
              onClick={() => toggleSection('terms')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50"
            >
              <span className="text-lg font-semibold text-gray-900">
                الشروط والأحكام - للإستخدام العامة
              </span>
              {expandedSections.terms ? (
                <ChevronUp size={20} className="text-gray-600" />
              ) : (
                <ChevronDown size={20} className="text-gray-600" />
              )}
            </button>

            {expandedSections.terms && (
              <div className="px-6 pb-6 space-y-4">
                <div>
                  <Label className="text-right block mb-2">اسم الملف</Label>
                  {isReadOnly ? (
                    <div className="p-2 bg-gray-50 rounded border">{fileName || '-'}</div>
                  ) : (
                    <Input
                      value={fileName}
                      onChange={(e) => setFileName(e.target.value)}
                      className="text-right"
                    />
                  )}
                </div>

                <div>
                  <Label className="text-right block mb-2">شروط الإرسال</Label>
                  {isReadOnly ? (
                    <div className="p-2 bg-gray-50 rounded border min-h-[80px]">
                      {deliveryTerms || '-'}
                    </div>
                  ) : (
                    <Textarea
                      value={deliveryTerms}
                      onChange={(e) => setDeliveryTerms(e.target.value)}
                      className="text-right"
                      rows={3}
                    />
                  )}
                </div>

                <div>
                  <Label className="text-right block mb-2">الملاحظات</Label>
                  {isReadOnly ? (
                    <div className="p-2 bg-gray-50 rounded border min-h-[80px]">{notes || '-'}</div>
                  ) : (
                    <Textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="text-right"
                      rows={3}
                    />
                  )}
                </div>

                <div>
                  <Label className="text-right block mb-2">التلعيقات</Label>
                  {isReadOnly ? (
                    <div className="p-2 bg-gray-50 rounded border min-h-[80px]">
                      {comments || '-'}
                    </div>
                  ) : (
                    <Textarea
                      value={comments}
                      onChange={(e) => setComments(e.target.value)}
                      className="text-right"
                      rows={3}
                    />
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Seal Section */}
          <div className="mb-4 bg-white rounded-lg shadow-sm">
            <button
              onClick={() => toggleSection('seal')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50"
            >
              <span className="text-lg font-semibold text-gray-900">الختم</span>
              {expandedSections.seal ? (
                <ChevronUp size={20} className="text-gray-600" />
              ) : (
                <ChevronDown size={20} className="text-gray-600" />
              )}
            </button>

            {expandedSections.seal && (
              <div className="px-6 pb-6">
                <Label className="text-right block mb-2">الختم</Label>
                {isReadOnly ? (
                  <div className="p-2 bg-gray-50 rounded border min-h-[100px]">{seal || '-'}</div>
                ) : (
                  <Textarea
                    value={seal}
                    onChange={(e) => setSeal(e.target.value)}
                    className="text-right"
                    rows={4}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
