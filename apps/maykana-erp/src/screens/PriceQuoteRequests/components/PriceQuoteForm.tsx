import { useState } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../components/ui/select';
import { Plus, Trash2, ChevronDown, ChevronUp } from 'lucide-react';

interface SupplierItem {
  id: number;
  name: string;
}

interface InspectorItem {
  id: number;
  name: string;
}

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

interface PriceQuoteFormProps {
  mode: 'create' | 'edit';
  initialData?: any;
  onSubmit: (data: any) => void;
  onCancel: () => void;
}

export const PriceQuoteForm = ({
  mode,
  initialData,
  onSubmit,
  onCancel,
}: PriceQuoteFormProps): JSX.Element => {
  const { t, dir } = useLanguage();

  // Collapsible sections state
  const [openSections, setOpenSections] = useState({
    requestInfo: true,
    suppliers: true,
    inspectors: true,
    items: true,
  });

  // Form state
  const [formData, setFormData] = useState({
    sendDate: initialData?.sendDate || '',
    expiryDate: initialData?.expiryDate || '',
    deliveryLocation: initialData?.deliveryLocation || '',
  });

  // Suppliers state
  const [suppliers, setSuppliers] = useState<SupplierItem[]>(initialData?.suppliers || []);
  const [supplierName, setSupplierName] = useState('');

  // Inspectors state
  const [inspectors, setInspectors] = useState<InspectorItem[]>(initialData?.inspectors || []);
  const [inspectorName, setInspectorName] = useState('');

  // Quote items state
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>(initialData?.items || []);

  // Handle form field changes
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Toggle section visibility
  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // Supplier handlers
  const handleAddSupplier = () => {
    if (supplierName.trim()) {
      const supplier: SupplierItem = {
        id: Date.now(),
        name: supplierName,
      };
      setSuppliers([...suppliers, supplier]);
      setSupplierName('');
    }
  };

  const handleRemoveSupplier = (id: number) => {
    setSuppliers(suppliers.filter((s) => s.id !== id));
  };

  // Inspector handlers
  const handleAddInspector = () => {
    if (inspectorName.trim()) {
      const inspector: InspectorItem = {
        id: Date.now(),
        name: inspectorName,
      };
      setInspectors([...inspectors, inspector]);
      setInspectorName('');
    }
  };

  const handleRemoveInspector = (id: number) => {
    setInspectors(inspectors.filter((i) => i.id !== id));
  };

  // Quote items handlers
  const handleAddItem = () => {
    const newItem: QuoteItem = {
      id: Date.now(),
      itemCode: '',
      description: '',
      unit: 'كم',
      quantity: 1,
      unitPrice: 0,
      totalPrice: 0,
      taxIncludedPrice: 0,
    };
    setQuoteItems([...quoteItems, newItem]);
  };

  const handleRemoveItem = (id: number) => {
    setQuoteItems(quoteItems.filter((item) => item.id !== id));
  };

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

  // Submit handler
  const handleSubmit = () => {
    const submissionData = {
      ...formData,
      suppliers: suppliers.map((s) => s.name),
      inspectors: inspectors.map((i) => i.name),
      items: quoteItems,
    };
    onSubmit(submissionData);
  };

  return (
    <div className="space-y-4" dir={dir}>
      {/* Form Actions - Header */}
      <div className="bg-white border-b border-gray-200 p-4 flex gap-3 justify-end sticky top-0 z-40">
        <Button
          onClick={onCancel}
          className="px-6 h-[43px] bg-gray-100 hover:bg-gray-200 text-gray-800 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
        >
          {t('common.cancel')}
        </Button>
        <Button
          onClick={handleSubmit}
          className="px-6 h-[43px] bg-[#093738] hover:bg-[#093738]/90 text-white [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
        >
          {t('price_quote_requests.save_request')}
        </Button>
      </div>

      {/* Request Information Section */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <button
          onClick={() => toggleSection('requestInfo')}
          className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
        >
          <h3 className="text-base font-semibold text-gray-900 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
            {t('price_quote_requests.request_information')}
          </h3>
          {openSections.requestInfo ? (
            <ChevronUp className="w-5 h-5 text-gray-600" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-600" />
          )}
        </button>

        {openSections.requestInfo && (
          <div className="p-6 space-y-4">
            <div className="grid grid-cols-3 gap-4">
              {/* Request Date */}
              <div>
                <Label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2 block text-sm">
                  {t('price_quote_requests.request_date')}
                </Label>
                <Input
                  name="sendDate"
                  type="date"
                  value={formData.sendDate}
                  onChange={handleFormChange}
                  className="h-[43px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                />
              </div>

              {/* Expiry Date */}
              <div>
                <Label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2 block text-sm">
                  {t('price_quote_requests.expiry_date')}
                </Label>
                <Input
                  name="expiryDate"
                  type="date"
                  value={formData.expiryDate}
                  onChange={handleFormChange}
                  className="h-[43px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                />
              </div>

              {/* Delivery Location */}
              <div>
                <Label className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] mb-2 block text-sm">
                  {t('price_quote_requests.delivery_location')}
                </Label>
                <Input
                  name="deliveryLocation"
                  value={formData.deliveryLocation}
                  onChange={handleFormChange}
                  placeholder={t('price_quote_requests.enter_delivery_location')}
                  className="h-[43px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                  dir={dir}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Suppliers Section */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <button
          onClick={() => toggleSection('suppliers')}
          className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
        >
          <h3 className="text-base font-semibold text-gray-900 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
            {t('price_quote_requests.supplier_names')}
          </h3>
          {openSections.suppliers ? (
            <ChevronUp className="w-5 h-5 text-gray-600" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-600" />
          )}
        </button>

        {openSections.suppliers && (
          <div className="p-6">
            {/* Add Supplier Row */}
            <div className="flex items-end gap-3 mb-4">
              <div className="flex-1">
                <Input
                  value={supplierName}
                  onChange={(e) => setSupplierName(e.target.value)}
                  placeholder={t('price_quote_requests.enter_supplier_name')}
                  className="h-[43px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                  dir={dir}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleAddSupplier();
                    }
                  }}
                />
              </div>
              <Button
                onClick={handleAddSupplier}
                className="h-[43px] w-[43px] p-0 bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300"
              >
                <Plus className="w-5 h-5" />
              </Button>
            </div>

            {/* Suppliers List */}
            {suppliers.length > 0 && (
              <div className="space-y-2">
                {suppliers.map((supplier, index) => (
                  <div
                    key={supplier.id}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <div className="flex-1 flex items-center gap-3">
                      <span className="text-sm text-gray-500 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {index + 1}
                      </span>
                      <span className="text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {supplier.name}
                      </span>
                    </div>
                    <button
                      onClick={() => handleRemoveSupplier(supplier.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Inspectors Section */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <button
          onClick={() => toggleSection('inspectors')}
          className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
        >
          <h3 className="text-base font-semibold text-gray-900 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
            {t('price_quote_requests.inspector_names')}
          </h3>
          {openSections.inspectors ? (
            <ChevronUp className="w-5 h-5 text-gray-600" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-600" />
          )}
        </button>

        {openSections.inspectors && (
          <div className="p-6">
            {/* Add Inspector Row */}
            <div className="flex items-end gap-3 mb-4">
              <div className="flex-1">
                <Input
                  value={inspectorName}
                  onChange={(e) => setInspectorName(e.target.value)}
                  placeholder={t('price_quote_requests.enter_inspector_name')}
                  className="h-[43px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                  dir={dir}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleAddInspector();
                    }
                  }}
                />
              </div>
              <Button
                onClick={handleAddInspector}
                className="h-[43px] w-[43px] p-0 bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300"
              >
                <Plus className="w-5 h-5" />
              </Button>
            </div>

            {/* Inspectors List */}
            {inspectors.length > 0 && (
              <div className="space-y-2">
                {inspectors.map((inspector, index) => (
                  <div
                    key={inspector.id}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <div className="flex-1 flex items-center gap-3">
                      <span className="text-sm text-gray-500 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {index + 1}
                      </span>
                      <span className="text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {inspector.name}
                      </span>
                    </div>
                    <button
                      onClick={() => handleRemoveInspector(inspector.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Request Items Section */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <button
          onClick={() => toggleSection('items')}
          className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
        >
          <h3 className="text-base font-semibold text-gray-900 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
            {t('price_quote_requests.request_items')}
          </h3>
          {openSections.items ? (
            <ChevronUp className="w-5 h-5 text-gray-600" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-600" />
          )}
        </button>

        {openSections.items && (
          <div className="p-6">
            {/* Add Item Button */}
            <div className="mb-4">
              <Button
                onClick={handleAddItem}
                className="h-[43px] px-4 bg-[#093738] hover:bg-[#093738]/90 text-white [font-family:'IBM_Plex_Sans_Arabic',Helvetica] gap-2"
              >
                <Plus className="w-4 h-4" />
                {t('price_quote_requests.add_item')}
              </Button>
            </div>

            {/* Items Table */}
            {quoteItems.length > 0 && (
              <div className="overflow-x-auto border border-gray-200 rounded-lg">
                <table className="w-full" dir={dir}>
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="p-3 text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right whitespace-nowrap">
                        {t('price_quote_requests.item_code')}
                      </th>
                      <th className="p-3 text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right whitespace-nowrap min-w-[200px]">
                        {t('price_quote_requests.item_description')}
                      </th>
                      <th className="p-3 text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right whitespace-nowrap">
                        {t('price_quote_requests.unit')}
                      </th>
                      <th className="p-3 text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right whitespace-nowrap">
                        {t('price_quote_requests.quantity')}
                      </th>
                      <th className="p-3 text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right whitespace-nowrap">
                        {t('price_quote_requests.unit_price')}
                      </th>
                      <th className="p-3 text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right whitespace-nowrap">
                        {t('price_quote_requests.total_price')}
                      </th>
                      <th className="p-3 text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-right whitespace-nowrap">
                        {t('price_quote_requests.tax_included_price')}
                      </th>
                      <th className="p-3 text-sm font-medium text-gray-700 [font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-center whitespace-nowrap w-20">
                        {t('common.actions')}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {quoteItems.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="p-2">
                          <Input
                            value={item.itemCode}
                            onChange={(e) => handleItemChange(item.id, 'itemCode', e.target.value)}
                            className="h-[36px] text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] min-w-[100px]"
                            dir={dir}
                          />
                        </td>
                        <td className="p-2">
                          <Input
                            value={item.description}
                            onChange={(e) =>
                              handleItemChange(item.id, 'description', e.target.value)
                            }
                            className="h-[36px] text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] min-w-[200px]"
                            dir={dir}
                          />
                        </td>
                        <td className="p-2">
                          <Select
                            value={item.unit}
                            onValueChange={(value) => handleItemChange(item.id, 'unit', value)}
                          >
                            <SelectTrigger className="h-[36px] text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] min-w-[80px]">
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
                        </td>
                        <td className="p-2">
                          <Input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => handleItemChange(item.id, 'quantity', e.target.value)}
                            className="h-[36px] text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] min-w-[80px]"
                            min="0"
                          />
                        </td>
                        <td className="p-2">
                          <Input
                            type="number"
                            value={item.unitPrice}
                            onChange={(e) => handleItemChange(item.id, 'unitPrice', e.target.value)}
                            className="h-[36px] text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] min-w-[100px]"
                            min="0"
                            step="0.01"
                          />
                        </td>
                        <td className="p-2">
                          <div className="h-[36px] flex items-center px-3 bg-gray-50 rounded border border-gray-200">
                            <span className="text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                              {item.totalPrice.toFixed(2)}
                            </span>
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="h-[36px] flex items-center px-3 bg-gray-50 rounded border border-gray-200">
                            <span className="text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                              {item.taxIncludedPrice.toFixed(2)}
                            </span>
                          </div>
                        </td>
                        <td className="p-2 text-center">
                          <button
                            onClick={() => handleRemoveItem(item.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
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
    </div>
  );
};
