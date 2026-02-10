import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { ArrowRight, ChevronUp, ChevronDown, ClipboardList, FileText, ShoppingCart, CreditCard, Eye } from 'lucide-react';
import { buttonClasses } from '../../styles';

interface PurchaseReceiptItem {
  id: string;
  number: number;
  documentType: string;
  receiptDocument: string;
  supplier: string;
  totalAfterTax: string;
}

interface ReceiptPartItem {
  id: string;
  number: number;
  itemCode: string;
  description: string;
  quantity: number;
  value: string;
}

interface AccountDataItem {
  id: string;
  number: number;
  account: string;
  description: string;
  value: string;
}

export const WarehouseGoodsArrivalCostForm = (): JSX.Element => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);

  const [dataOpen, setDataOpen] = useState(true);
  const [purchaseReceiptOpen, setPurchaseReceiptOpen] = useState(true);
  const [receiptPartsOpen, setReceiptPartsOpen] = useState(true);
  const [accountDataOpen, setAccountDataOpen] = useState(true);

  // Form fields
  const [company, setCompany] = useState('');
  const [distributionBasis, setDistributionBasis] = useState('quantity');

  // Tables data
  const [purchaseReceipts] = useState<PurchaseReceiptItem[]>([
    { id: '1', number: 1, documentType: 'مادة لاصقة شديدة', receiptDocument: 'INV-0001 وصف هنا ال', supplier: 'وصف هنا', totalAfterTax: 'ر.س' },
  ]);

  const [receiptParts] = useState<ReceiptPartItem[]>([
    { id: '1', number: 1, itemCode: '2333255555', description: 'INV-0001 وصف هنا ال', quantity: 22, value: 'ر.س' },
  ]);

  const [accountData] = useState<AccountDataItem[]>([
    { id: '1', number: 1, account: 'مصاريف نقل', description: 'INV-0001 وصف هنا ال', value: '500 ر.س' },
  ]);

  const handleSubmit = () => {
    console.log('Form submitted:', {
      company,
      distributionBasis,
      purchaseReceipts,
      receiptParts,
      accountData,
    });
    navigate('/warehouses/goods-arrival-cost');
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
              onClick={() => navigate('/warehouses/goods-arrival-cost')}
            >
              <ArrowRight className="w-5 h-5" />
              <span className="text-lg font-medium">{isEdit ? 'تعديل قسيمة تكلفة وصول البضاعة' : 'قسيمة تكلفة وصول البضاعة جديدة'}</span>
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
            onClick={() => setDataOpen(!dataOpen)}
          >
            <div className="flex items-center gap-2">
              <ClipboardList className="w-5 h-5 text-[#093738]" />
              <span className="text-base font-medium text-[#093738]">بيانات</span>
            </div>
            {dataOpen ? (
              <ChevronUp className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            )}
          </div>

          {dataOpen && (
            <div className="p-6">
              <div className="grid grid-cols-4 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">الشركة</label>
                  <Input
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="الشركة"
                    className="h-[43px] bg-white border-[#e2e2e2] rounded-lg"
                  />
                </div>
              </div>
            </div>
          )}
        </Card>

        {/* إيصال الشراء Section */}
        <Card className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div
            className="flex items-center justify-between bg-[#F1F5F980] px-4 py-3 cursor-pointer"
            onClick={() => setPurchaseReceiptOpen(!purchaseReceiptOpen)}
          >
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#093738]" />
              <span className="text-base font-medium text-[#093738]">إيصال الشراء</span>
            </div>
            {purchaseReceiptOpen ? (
              <ChevronUp className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            )}
          </div>

          {purchaseReceiptOpen && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">رقم</th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">استلم نوع الوثيقة</th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">وثيقة استلام</th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">المورد</th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">الاجمالي بعد الضريبة</th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">عمليات</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {purchaseReceipts.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-900">{item.number}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{item.documentType}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{item.receiptDocument}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{item.supplier}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{item.totalAfterTax}</td>
                      <td className="px-4 py-3">
                        <button className="p-1 hover:bg-gray-100 rounded">
                          <Eye className="w-4 h-4 text-gray-600" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Card>

        {/* شراء قطع الإيصال Section */}
        <Card className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div
            className="flex items-center justify-between bg-[#F1F5F980] px-4 py-3 cursor-pointer"
            onClick={() => setReceiptPartsOpen(!receiptPartsOpen)}
          >
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-[#093738]" />
              <span className="text-base font-medium text-[#093738]">شراء قطع الإيصال</span>
            </div>
            {receiptPartsOpen ? (
              <ChevronUp className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            )}
          </div>

          {receiptPartsOpen && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">رقم</th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">كود الصنف</th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">وصف</th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">الكمية</th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">القيمة</th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">عمليات</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {receiptParts.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-900">{item.number}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{item.itemCode}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{item.description}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{item.quantity}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{item.value}</td>
                      <td className="px-4 py-3">
                        <button className="p-1 hover:bg-gray-100 rounded">
                          <Eye className="w-4 h-4 text-gray-600" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Card>

        {/* بيانات الحساب Section */}
        <Card className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div
            className="flex items-center justify-between bg-[#F1F5F980] px-4 py-3 cursor-pointer"
            onClick={() => setAccountDataOpen(!accountDataOpen)}
          >
            <div className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-[#093738]" />
              <span className="text-base font-medium text-[#093738]">بيانات الحساب</span>
            </div>
            {accountDataOpen ? (
              <ChevronUp className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            )}
          </div>

          {accountDataOpen && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">رقم</th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">الحساب</th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">وصف</th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">القيمة</th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-[#093738]">عمليات</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {accountData.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-900">{item.number}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{item.account}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{item.description}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{item.value}</td>
                      <td className="px-4 py-3">
                        <button className="p-1 hover:bg-gray-100 rounded">
                          <Eye className="w-4 h-4 text-gray-600" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Card>

        {/* التوزيع بناء علي */}
        <div className="flex items-center gap-4">
          <label className="text-sm font-medium text-gray-700">التوزيع بناء علي</label>
          <select
            value={distributionBasis}
            onChange={(e) => setDistributionBasis(e.target.value)}
            className="h-[43px] px-3 bg-white border border-[#e2e2e2] rounded-lg text-sm min-w-[200px]"
          >
            <option value="quantity">الكمية</option>
            <option value="value">القيمة</option>
            <option value="manual">يدوي</option>
          </select>
        </div>
      </div>
    </Layout>
  );
};
