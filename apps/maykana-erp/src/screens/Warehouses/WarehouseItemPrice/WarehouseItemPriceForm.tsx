import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, ChevronUp, ChevronDown, ClipboardList, List } from 'lucide-react';
import { buttonClasses } from '@/styles';

export const WarehouseItemPriceForm = (): JSX.Element => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);

  const [itemDataOpen, setItemDataOpen] = useState(true);
  const [priceListOpen, setPriceListOpen] = useState(true);

  // Form fields - بيانات section
  const [itemCode, setItemCode] = useState('');
  const [itemName, setItemName] = useState('');
  const [measurementUnit, setMeasurementUnit] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [packagingUnit, setPackagingUnit] = useState('');

  // Form fields - قائمة الأسعار section
  const [priceList, setPriceList] = useState('');
  const [purchasesManagement, setPurchasesManagement] = useState(false);
  const [salesManagement, setSalesManagement] = useState(false);
  const [batchNumber, setBatchNumber] = useState('');
  const [currency, setCurrency] = useState('');
  const [price, setPrice] = useState('00.0');

  const handleSubmit = () => {
    console.log('Form submitted:', {
      itemCode,
      itemName,
      measurementUnit,
      itemDescription,
      packagingUnit,
      priceList,
      purchasesManagement,
      salesManagement,
      batchNumber,
      currency,
      price,
    });
    navigate('/warehouses/item-price');
  };

  return (
    <Layout>
      <div className="space-y-6" dir="rtl">
        {/* Header Card */}
        <Card>
          <div className="flex items-center justify-between p-4">
            <Button
              variant="ghost"
              className="flex items-center gap-2 text-[#093738] hover:bg-gray-100"
              onClick={() => navigate('/warehouses/item-price')}
            >
              <ArrowRight className="w-5 h-5" />
              <span className="text-lg font-medium">{isEdit ? 'تعديل سعر الصنف' : 'سعر الصرف جديد'}</span>
            </Button>
            <button onClick={handleSubmit} className={buttonClasses.primary}>
              حفظ
            </button>
          </div>
        </Card>

        {/* بيانات Section */}
        <Card className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div
            className="flex items-center justify-between bg-[#F1F5F980] px-4 py-3 cursor-pointer"
            onClick={() => setItemDataOpen(!itemDataOpen)}
          >
            <div className="flex items-center gap-2">
              <ClipboardList className="w-5 h-5 text-[#093738]" />
              <span className="text-base font-medium text-[#093738]">بيانات</span>
            </div>
            {itemDataOpen ? (
              <ChevronUp className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            )}
          </div>

          {itemDataOpen && (
            <div className="p-6 space-y-6">
              {/* Row 1 */}
              <div className="grid grid-cols-4 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">كود الصنف</label>
                  <Input
                    value={itemCode}
                    onChange={(e) => setItemCode(e.target.value)}
                    placeholder="كود الصنف"
                    className="h-[43px] bg-white border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">اسم الصنف</label>
                  <Input
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    placeholder="آيفون"
                    className="h-[43px] bg-white border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">وحدة قياس الصنف</label>
                  <select
                    value={measurementUnit}
                    onChange={(e) => setMeasurementUnit(e.target.value)}
                    className="w-full h-[43px] px-3 bg-white border border-[#e2e2e2] rounded-lg text-sm"
                  >
                    <option value="">العملة</option>
                    <option value="piece">قطعة</option>
                    <option value="kg">كيلوغرام</option>
                    <option value="meter">متر</option>
                    <option value="liter">لتر</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">وصف الصنف</label>
                  <Input
                    value={itemDescription}
                    onChange={(e) => setItemDescription(e.target.value)}
                    placeholder="وصف الصنف"
                    className="h-[43px] bg-white border-[#e2e2e2] rounded-lg"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-4 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">وحدة التعبئة</label>
                  <Input
                    value={packagingUnit}
                    onChange={(e) => setPackagingUnit(e.target.value)}
                    placeholder="وحدة التعبئة"
                    className="h-[43px] bg-white border-[#e2e2e2] rounded-lg"
                  />
                </div>
              </div>
            </div>
          )}
        </Card>

        {/* قائمة الأسعار Section */}
        <Card className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div
            className="flex items-center justify-between bg-[#F1F5F980] px-4 py-3 cursor-pointer"
            onClick={() => setPriceListOpen(!priceListOpen)}
          >
            <div className="flex items-center gap-2">
              <List className="w-5 h-5 text-[#093738]" />
              <span className="text-base font-medium text-[#093738]">قائمة الأسعار</span>
            </div>
            {priceListOpen ? (
              <ChevronUp className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            )}
          </div>

          {priceListOpen && (
            <div className="p-6 space-y-6">
              {/* Row 1 */}
              <div className="grid grid-cols-4 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">قائمة الأسعار</label>
                  <Input
                    value={priceList}
                    onChange={(e) => setPriceList(e.target.value)}
                    placeholder="قائمة الأسعار"
                    className="h-[43px] bg-white border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">ادارة المشتريات</label>
                  <div className="flex items-center h-[43px] px-3 bg-white border border-[#e2e2e2] rounded-lg">
                    <input
                      type="checkbox"
                      checked={purchasesManagement}
                      onChange={(e) => setPurchasesManagement(e.target.checked)}
                      className="w-4 h-4 text-[#0d6a3f] border-gray-300 rounded focus:ring-[#0d6a3f] ml-2"
                    />
                    <span className="text-sm text-gray-700">ادارة المشتريات</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">ادارة المبيعات</label>
                  <div className="flex items-center h-[43px] px-3 bg-white border border-[#e2e2e2] rounded-lg">
                    <input
                      type="checkbox"
                      checked={salesManagement}
                      onChange={(e) => setSalesManagement(e.target.checked)}
                      className="w-4 h-4 text-[#0d6a3f] border-gray-300 rounded focus:ring-[#0d6a3f] ml-2"
                    />
                    <span className="text-sm text-gray-700">ادارة المبيعات</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">رقم الباتش</label>
                  <Input
                    value={batchNumber}
                    onChange={(e) => setBatchNumber(e.target.value)}
                    placeholder="رقم الباتش"
                    className="h-[43px] bg-white border-[#e2e2e2] rounded-lg"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-4 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">العملة</label>
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="w-full h-[43px] px-3 bg-white border border-[#e2e2e2] rounded-lg text-sm"
                  >
                    <option value="">الريال السعودي</option>
                    <option value="SAR">ريال سعودي</option>
                    <option value="USD">دولار أمريكي</option>
                    <option value="EUR">يورو</option>
                    <option value="AED">درهم إماراتي</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">السعر</label>
                  <Input
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="السعر 00.0"
                    className="h-[43px] bg-white border-[#e2e2e2] rounded-lg text-left"
                    dir="ltr"
                  />
                </div>
              </div>
            </div>
          )}
        </Card>
      </div>
    </Layout>
  );
};
