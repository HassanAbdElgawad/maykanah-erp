import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, ChevronUp, ChevronDown, ClipboardList } from 'lucide-react';
import { buttonClasses } from '@/styles';

export const WarehouseSerialNumberForm = (): JSX.Element => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);

  const [dataOpen, setDataOpen] = useState(true);

  // Form fields
  const [serialNumber, setSerialNumber] = useState('');
  const [itemCode, setItemCode] = useState('');
  const [warrantyExpiryDate, setWarrantyExpiryDate] = useState('');
  const [subscriptionExpiryDate, setSubscriptionExpiryDate] = useState('');

  const handleSubmit = () => {
    console.log('Form submitted:', {
      serialNumber,
      itemCode,
      warrantyExpiryDate,
      subscriptionExpiryDate,
    });
    navigate('/warehouses/serial-number');
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
              onClick={() => navigate('/warehouses/serial-number')}
            >
              <ArrowRight className="w-5 h-5" />
              <span className="text-lg font-medium">{isEdit ? 'تعديل الرقم المتسلسل' : 'الرقم المتسلسل الجديد'}</span>
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
            <div className="p-6 space-y-6">
              {/* Row 1 */}
              <div className="grid grid-cols-4 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">الرقم المتسلسل</label>
                  <Input
                    value={serialNumber}
                    onChange={(e) => setSerialNumber(e.target.value)}
                    placeholder="الرقم المتسلسل"
                    className="h-[43px] bg-white border-[#e2e2e2] rounded-lg"
                  />
                </div>
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">تاريخ انتهاء الضمان</label>
                  <Input
                    type="date"
                    value={warrantyExpiryDate}
                    onChange={(e) => setWarrantyExpiryDate(e.target.value)}
                    placeholder="20 - 5 - 2025"
                    className="h-[43px] bg-white border-[#e2e2e2] rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">تاريخ انتهاء الاشتراك</label>
                  <Input
                    type="date"
                    value={subscriptionExpiryDate}
                    onChange={(e) => setSubscriptionExpiryDate(e.target.value)}
                    placeholder="20 - 5 - 2025"
                    className="h-[43px] bg-white border-[#e2e2e2] rounded-lg"
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
