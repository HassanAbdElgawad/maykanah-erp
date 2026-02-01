import { useState } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Layout } from '../../components/Layout/Layout';
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
import { ChevronDown, ChevronUp, Plus, Trash2, ArrowLeft } from 'lucide-react';

interface QuoteItem {
  id: number;
  itemCode: string;
  description: string;
  unit: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  taxIncludedPrice: number;
}

interface PriceQuoteDetailPageProps {
  mode?: 'view' | 'edit' | 'create';
  data?: any;
}

export const PriceQuoteDetailPage = ({
  mode: propMode = 'view',
  data: propData,
}: PriceQuoteDetailPageProps): JSX.Element => {
  const { t, dir } = useLanguage();
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const queryMode = searchParams.get('mode') as 'view' | 'edit' | 'create' | null;
  const mode = (queryMode || propMode) as 'view' | 'edit' | 'create';
  const data = propData || { id };

  // Collapsible sections state
  const [openSections, setOpenSections] = useState({
    information: true,
    items: true,
    summary: true,
    terms: false,
    seal: false,
  });

  // Form state
  const [formData, setFormData] = useState({
    receiptNumber: data?.receiptNumber || '1255223',
    receiptName: data?.receiptName || 'اسم الوارد',
    receiptTruckNumber: data?.receiptTruckNumber || '362146594421',
    deliveryLocation: data?.deliveryLocation || 'موقع التسليم',
    requestDate: data?.requestDate || '09:30 - 10/11/2025',
    matchDate: data?.matchDate || '10/11/2025',
  });

  // Quote items state
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>(
    data?.items || [
      {
        id: 1,
        itemCode: 'A5220-SD',
        description: 'تحديد خصائص الريق شيراها عن عرض',
        unit: 'كيلو',
        quantity: 1,
        unitPrice: 1000,
        totalPrice: 2000,
        taxIncludedPrice: 2300,
      },
    ]
  );

  const [newItem, setNewItem] = useState<Partial<QuoteItem>>({
    unit: 'كم',
    quantity: 1,
    unitPrice: 0,
  });

  const [termsAndConditions, setTermsAndConditions] = useState(data?.termsAndConditions || '');
  const [seal, setSeal] = useState(data?.seal || '');

  // Toggle section visibility
  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // Calculate totals
  const totalBasePrice = quoteItems.reduce((sum, item) => sum + item.totalPrice, 0);
  const discountValue = data?.discountValue || 20;
  const totalMarkup = quoteItems.reduce(
    (sum, item) => sum + (item.taxIncludedPrice - item.totalPrice),
    0
  );
  const totalWithMarkup = totalBasePrice + totalMarkup - discountValue;

  // Handle item changes
  const handleItemChange = (id: number, field: keyof QuoteItem, value: any) => {
    setQuoteItems(
      quoteItems.map((item) => {
        if (item.id === id) {
          const updatedItem = { ...item, [field]: value };

          // Calculate prices if quantity or unitPrice changes
          if (field === 'quantity' || field === 'unitPrice') {
            const qty = field === 'quantity' ? parseFloat(value) || 0 : item.quantity;
            const price = field === 'unitPrice' ? parseFloat(value) || 0 : item.unitPrice;
            updatedItem.totalPrice = qty * price;
            updatedItem.taxIncludedPrice = updatedItem.totalPrice * 1.15; // 15% tax
          }

          return updatedItem;
        }
        return item;
      })
    );
  };

  // Handle add item
  const handleAddItem = () => {
    if (newItem.itemCode && newItem.description) {
      const item: QuoteItem = {
        id: Date.now(),
        itemCode: newItem.itemCode || '',
        description: newItem.description || '',
        unit: newItem.unit || 'كم',
        quantity: newItem.quantity || 1,
        unitPrice: newItem.unitPrice || 0,
        totalPrice: (newItem.quantity || 1) * (newItem.unitPrice || 0),
        taxIncludedPrice: (newItem.quantity || 1) * (newItem.unitPrice || 0) * 1.15,
      };
      setQuoteItems([...quoteItems, item]);
      setNewItem({ unit: 'كم', quantity: 1, unitPrice: 0 });
    }
  };

  // Handle remove item
  const handleRemoveItem = (id: number) => {
    setQuoteItems(quoteItems.filter((item) => item.id !== id));
  };

  return (
    <Layout
      breadcrumbs={[
        { label: 'home', href: '/' },
        { label: 'purchases', href: '/purchases' },
        { label: 'price_quote_requests', href: '/purchases/price-quote-requests' },
        { label: 'price_quote_requests.view_request', href: '#' },
      ]}
    >
      <div className="space-y-4 pb-8" dir={dir}>
        {/* Header with Title and Actions */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/purchases/supplier-price-quotes')}
              className="p-2 hover:bg-gray-100 rounded transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <h1 className="text-xl font-semibold text-gray-900 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              {t('price_quote_requests.create_supplier_price_quote')}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            {mode === 'edit' || mode === 'create' ? (
              <>
                <Button
                  onClick={() => navigate('/purchases/supplier-price-quotes')}
                  className="px-6 h-[43px] bg-gray-100 hover:bg-gray-200 text-gray-800 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                >
                  {t('common.cancel')}
                </Button>
                <Button
                  onClick={() => navigate('/purchases/supplier-price-quotes')}
                  className="px-6 h-[43px] bg-[#093738] hover:bg-[#093738]/90 text-white [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                >
                  {t('price_quote_requests.save_request')}
                </Button>
              </>
            ) : null}
          </div>
        </div>

        {/* General Information Section */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <button
            onClick={() => toggleSection('information')}
            className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <h3 className="text-base font-semibold text-gray-900 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              {t('price_quote_requests.general_information')}
            </h3>
            {openSections.information ? (
              <ChevronUp className="w-5 h-5 text-gray-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-600" />
            )}
          </button>

          {openSections.information && (
            <div className="p-6 space-y-4">
              {/* First Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2 block text-sm font-medium text-gray-700">
                    {t('price_quote_requests.receipt_number')}
                  </Label>
                  {mode === 'view' ? (
                    <div className="p-3 bg-gray-50 rounded border border-gray-200 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {formData.receiptNumber}
                    </div>
                  ) : (
                    <Input
                      value={formData.receiptNumber}
                      onChange={(e) => setFormData({ ...formData, receiptNumber: e.target.value })}
                      className="h-[43px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      dir={dir}
                    />
                  )}
                </div>

                <div>
                  <Label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2 block text-sm font-medium text-gray-700">
                    {t('price_quote_requests.receipt_name')}
                  </Label>
                  {mode === 'view' ? (
                    <div className="p-3 bg-gray-50 rounded border border-gray-200 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {formData.receiptName}
                    </div>
                  ) : (
                    <Input
                      value={formData.receiptName}
                      onChange={(e) => setFormData({ ...formData, receiptName: e.target.value })}
                      className="h-[43px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      dir={dir}
                    />
                  )}
                </div>
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2 block text-sm font-medium text-gray-700">
                    {t('price_quote_requests.request_date')}
                  </Label>
                  {mode === 'view' ? (
                    <div className="p-3 bg-gray-50 rounded border border-gray-200 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {formData.requestDate}
                    </div>
                  ) : (
                    <Input
                      type="datetime-local"
                      value={formData.requestDate}
                      onChange={(e) => setFormData({ ...formData, requestDate: e.target.value })}
                      className="h-[43px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    />
                  )}
                </div>

                <div>
                  <Label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2 block text-sm font-medium text-gray-700">
                    {t('price_quote_requests.match_date')}
                  </Label>
                  {mode === 'view' ? (
                    <div className="p-3 bg-gray-50 rounded border border-gray-200 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {formData.matchDate}
                    </div>
                  ) : (
                    <Input
                      type="date"
                      value={formData.matchDate}
                      onChange={(e) => setFormData({ ...formData, matchDate: e.target.value })}
                      className="h-[43px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                    />
                  )}
                </div>
              </div>

              {/* Third Row */}
              <div>
                <Label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2 block text-sm font-medium text-gray-700">
                  {t('price_quote_requests.receipt_truck_number')}
                </Label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    {mode === 'view' ? (
                      <div className="p-3 bg-gray-50 rounded border border-gray-200 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {formData.receiptTruckNumber}
                      </div>
                    ) : (
                      <Input
                        value={formData.receiptTruckNumber}
                        onChange={(e) =>
                          setFormData({ ...formData, receiptTruckNumber: e.target.value })
                        }
                        className="h-[43px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                        dir={dir}
                      />
                    )}
                  </div>
                  <div>
                    <Label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2 block text-sm font-medium text-gray-700">
                      {t('price_quote_requests.delivery_location')}
                    </Label>
                    {mode === 'view' ? (
                      <div className="p-3 bg-gray-50 rounded border border-gray-200 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {formData.deliveryLocation}
                      </div>
                    ) : (
                      <Input
                        value={formData.deliveryLocation}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            deliveryLocation: e.target.value,
                          })
                        }
                        className="h-[43px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                        dir={dir}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Items Section */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <button
            onClick={() => toggleSection('items')}
            className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <h3 className="text-base font-semibold text-gray-900 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              {t('price_quote_requests.request_items_and_demands')}
            </h3>
            {openSections.items ? (
              <ChevronUp className="w-5 h-5 text-gray-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-600" />
            )}
          </button>

          {openSections.items && (
            <div className="p-6">
              {/* Add New Item - Only in edit/create mode */}
              {(mode === 'edit' || mode === 'create') && (
                <div className="mb-6 pb-6 border-b border-gray-200 space-y-3">
                  <div className="grid grid-cols-5 gap-3">
                    <Input
                      placeholder={t('price_quote_requests.item_code')}
                      value={newItem.itemCode || ''}
                      onChange={(e) => setNewItem({ ...newItem, itemCode: e.target.value })}
                      className="h-[43px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                      dir={dir}
                    />
                    <Input
                      placeholder={t('price_quote_requests.item_description')}
                      value={newItem.description || ''}
                      onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                      className="h-[43px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] col-span-2"
                      dir={dir}
                    />
                    <Select
                      value={newItem.unit || 'كم'}
                      onValueChange={(v) => setNewItem({ ...newItem, unit: v })}
                    >
                      <SelectTrigger className="h-[43px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="كم">كم</SelectItem>
                        <SelectItem value="قطعة">قطعة</SelectItem>
                        <SelectItem value="صندوق">صندوق</SelectItem>
                        <SelectItem value="كيس">كيس</SelectItem>
                        <SelectItem value="طن">طن</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button
                      onClick={handleAddItem}
                      className="h-[43px] bg-[#093738] hover:bg-[#093738]/90 text-white gap-2"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Items Table */}
              {quoteItems.length > 0 && (
                <div className="overflow-x-auto border border-gray-200 rounded-lg">
                  <table className="w-full" dir={dir}>
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="p-3 text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right">
                          {t('price_quote_requests.item_code')}
                        </th>
                        <th className="p-3 text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right min-w-[200px]">
                          {t('price_quote_requests.item_description')}
                        </th>
                        <th className="p-3 text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right">
                          {t('price_quote_requests.unit')}
                        </th>
                        <th className="p-3 text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right">
                          {t('price_quote_requests.quantity')}
                        </th>
                        <th className="p-3 text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right">
                          {t('price_quote_requests.unit_price')}
                        </th>
                        <th className="p-3 text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right">
                          {t('price_quote_requests.total_price')}
                        </th>
                        <th className="p-3 text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right">
                          {t('price_quote_requests.tax_included_price')}
                        </th>
                        <th className="p-3 text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-center">
                          {t('common.operations')}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {quoteItems.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-50">
                          <td className="p-2">
                            {mode === 'view' ? (
                              <div className="text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                                {item.itemCode}
                              </div>
                            ) : (
                              <Input
                                value={item.itemCode}
                                onChange={(e) =>
                                  handleItemChange(item.id, 'itemCode', e.target.value)
                                }
                                className="h-[36px] text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                                dir={dir}
                              />
                            )}
                          </td>
                          <td className="p-2">
                            {mode === 'view' ? (
                              <div className="text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                                {item.description}
                              </div>
                            ) : (
                              <Input
                                value={item.description}
                                onChange={(e) =>
                                  handleItemChange(item.id, 'description', e.target.value)
                                }
                                className="h-[36px] text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                                dir={dir}
                              />
                            )}
                          </td>
                          <td className="p-2">
                            {mode === 'view' ? (
                              <div className="text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                                {item.unit}
                              </div>
                            ) : (
                              <Select
                                value={item.unit}
                                onValueChange={(value) => handleItemChange(item.id, 'unit', value)}
                              >
                                <SelectTrigger className="h-[36px] text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="كم">كم</SelectItem>
                                  <SelectItem value="قطعة">قطعة</SelectItem>
                                  <SelectItem value="صندوق">صندوق</SelectItem>
                                  <SelectItem value="كيس">كيس</SelectItem>
                                  <SelectItem value="طن">طن</SelectItem>
                                </SelectContent>
                              </Select>
                            )}
                          </td>
                          <td className="p-2">
                            {mode === 'view' ? (
                              <div className="text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                                {item.quantity}
                              </div>
                            ) : (
                              <Input
                                type="number"
                                value={item.quantity}
                                onChange={(e) =>
                                  handleItemChange(item.id, 'quantity', e.target.value)
                                }
                                className="h-[36px] text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                                min="0"
                              />
                            )}
                          </td>
                          <td className="p-2">
                            {mode === 'view' ? (
                              <div className="text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                                {item.unitPrice.toFixed(1)}
                              </div>
                            ) : (
                              <Input
                                type="number"
                                value={item.unitPrice}
                                onChange={(e) =>
                                  handleItemChange(item.id, 'unitPrice', e.target.value)
                                }
                                className="h-[36px] text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                                min="0"
                                step="0.01"
                              />
                            )}
                          </td>
                          <td className="p-2">
                            <div className="p-2 bg-gray-50 rounded border border-gray-200 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-center">
                              {item.totalPrice}
                            </div>
                          </td>
                          <td className="p-2">
                            <div className="p-2 bg-gray-50 rounded border border-gray-200 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-center">
                              {item.taxIncludedPrice}
                            </div>
                          </td>
                          <td className="p-2 text-center">
                            {(mode === 'edit' || mode === 'create') && (
                              <button
                                onClick={() => handleRemoveItem(item.id)}
                                className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Summary Section */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <button
            onClick={() => toggleSection('summary')}
            className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <h3 className="text-base font-semibold text-gray-900 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              {t('price_quote_requests.summary')}
            </h3>
            {openSections.summary ? (
              <ChevronUp className="w-5 h-5 text-gray-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-600" />
            )}
          </button>

          {openSections.summary && (
            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded border border-gray-200">
                <span className="text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  {t('price_quote_requests.total_base_price')}
                </span>
                <span className="text-base font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  {totalBasePrice.toFixed(1)} ﷼
                </span>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded border border-gray-200">
                <span className="text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  {t('price_quote_requests.discount_value')}
                </span>
                <span className="text-base font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  {discountValue} ﷼
                </span>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded border border-gray-200">
                <span className="text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  {t('price_quote_requests.total_markup')}
                </span>
                <span className="text-base font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  {totalMarkup.toFixed(1)} ﷼
                </span>
              </div>

              <div className="flex items-center justify-between p-4 bg-[#093738] rounded border border-gray-200">
                <span className="text-sm font-medium text-white [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  {t('price_quote_requests.total_with_markup')}
                </span>
                <span className="text-lg font-bold text-white [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  {totalWithMarkup.toFixed(1)} ﷼
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Terms and Conditions Section */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <button
            onClick={() => toggleSection('terms')}
            className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <h3 className="text-base font-semibold text-gray-900 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              {t('price_quote_requests.terms_and_conditions')}
            </h3>
            {openSections.terms ? (
              <ChevronUp className="w-5 h-5 text-gray-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-600" />
            )}
          </button>

          {openSections.terms && (
            <div className="p-6">
              {mode === 'view' ? (
                <div className="p-3 bg-gray-50 rounded border border-gray-200 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] min-h-[150px]">
                  {termsAndConditions || t('price_quote_requests.no_terms')}
                </div>
              ) : (
                <Textarea
                  value={termsAndConditions}
                  onChange={(e) => setTermsAndConditions(e.target.value)}
                  placeholder={t('price_quote_requests.enter_terms')}
                  className="min-h-[150px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                  dir={dir}
                />
              )}
            </div>
          )}
        </div>

        {/* Seal Section */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <button
            onClick={() => toggleSection('seal')}
            className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <h3 className="text-base font-semibold text-gray-900 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
              {t('price_quote_requests.seal')}
            </h3>
            {openSections.seal ? (
              <ChevronUp className="w-5 h-5 text-gray-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-600" />
            )}
          </button>

          {openSections.seal && (
            <div className="p-6">
              {mode === 'view' ? (
                <div className="p-3 bg-gray-50 rounded border border-gray-200 text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] min-h-[150px]">
                  {seal || t('price_quote_requests.no_seal')}
                </div>
              ) : (
                <Textarea
                  value={seal}
                  onChange={(e) => setSeal(e.target.value)}
                  placeholder={t('price_quote_requests.enter_seal')}
                  className="min-h-[150px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                  dir={dir}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};
