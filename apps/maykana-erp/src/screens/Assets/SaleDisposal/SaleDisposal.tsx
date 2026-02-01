import { useState } from 'react';
import { Layout } from '../../../components/Layout';
import { useLanguage } from '../../../contexts/LanguageContext';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Search, Filter, Download, Settings } from 'lucide-react';
import { SaleDisposalModal } from './SaleDisposalModal';

interface SaleDisposal {
  id: string;
  operationNumber: string;
  assetName: string;
  type: string;
  bookValue: number;
  salePrice: number | null;
  profitLoss: number;
  date: string;
  user: string;
  status: string;
}

export function SaleDisposal() {
  const { dir } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOperation, setSelectedOperation] = useState<SaleDisposal | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample data
  const operations: SaleDisposal[] = [
    {
      id: '1',
      operationNumber: 'MS-25-01',
      assetName: 'Laptop Dell',
      type: 'بيع',
      bookValue: 1200,
      salePrice: 2000,
      profitLoss: 800,
      date: '2024-06-12',
      user: 'Admin',
      status: 'مكتملة',
    },
    {
      id: '2',
      operationNumber: 'MS-25-02',
      assetName: 'Toyota Hilux',
      type: 'تخريد',
      bookValue: 20000,
      salePrice: null,
      profitLoss: -20000,
      date: '2024-06-12',
      user: 'Finance',
      status: 'مكتملة',
    },
    {
      id: '3',
      operationNumber: 'MS-25-01',
      assetName: 'Laptop Dell',
      type: 'تبرع',
      bookValue: 400,
      salePrice: null,
      profitLoss: -400,
      date: '2024-06-12',
      user: 'IT Manager',
      status: 'مكتملة',
    },
  ];

  const handleAddNew = () => {
    setSelectedOperation(null);
    setIsModalOpen(true);
  };

  const handleEdit = (operation: SaleDisposal) => {
    setSelectedOperation(operation);
    setIsModalOpen(true);
  };

  const formatCurrency = (value: number) => {
    return (
      <span className="flex items-center gap-1">
        {value.toLocaleString('en-US')}
        <img
          src="/images/currency/saudi-riyal.svg"
          alt="ريال سعودي"
          className="w-3.5 h-3.5"
          style={{ filter: 'brightness(0)' }}
        />
      </span>
    );
  };

  const formatProfitLoss = (value: number) => {
    const sign = value >= 0 ? '+' : '-';
    const absValue = Math.abs(value);
    return (
      <span className="flex items-center gap-1">
        <span className="flex items-center gap-1">
          {absValue.toLocaleString('en-US')}
          <span>{sign}</span>
          <img
            src="/images/currency/saudi-riyal.svg"
            alt="ريال سعودي"
            className="w-3.5 h-3.5"
            style={{
              filter:
                value >= 0
                  ? 'brightness(0) sepia(1) hue-rotate(90deg) saturate(5)'
                  : 'brightness(0) sepia(1) hue-rotate(330deg) saturate(5)',
            }}
          />
        </span>
      </span>
    );
  };

  return (
    <Layout>
      <div
        className={`flex flex-col gap-4 ${dir === 'rtl' ? "font-['IBM_Plex_Sans_Arabic']" : ''}`}
        dir={dir}
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-[#e2e2e2]">
          {/* Search Bar */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="ابحث من هنا (رقم العملية، الأصل، النوع، ...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10 py-2 border border-gray-300 rounded-lg w-full"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2">
            <Button variant="outline" className="px-4 py-2 border border-gray-300 rounded-lg">
              <Filter className="w-4 h-4 ml-2" />
              فلتر
            </Button>
            <Button variant="outline" className="px-4 py-2 border border-gray-300 rounded-lg">
              <Download className="w-4 h-4 ml-2" />
              تحميل
            </Button>
            <Button variant="outline" className="px-4 py-2 border border-gray-300 rounded-lg">
              <Settings className="w-4 h-4 ml-2" />
              إظهار/إخفاء أعمدة
            </Button>
            <Button
              onClick={handleAddNew}
              className="bg-[#11383f] hover:bg-[#0f2f35] text-white px-6 py-2 rounded-lg"
            >
              عملية جديدة
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                    رقم العملية
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">الأصل</th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">النوع</th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                    القيمة الدفترية
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                    سعر البيع
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                    الربح/الخسارة
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">التاريخ</th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                    المستخدم
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">الحالة</th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-700"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {operations.map((operation) => (
                  <tr
                    key={operation.id}
                    onClick={() => handleEdit(operation)}
                    className="hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <td className="px-6 py-4 text-sm text-gray-900">{operation.operationNumber}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{operation.assetName}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{operation.type}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {formatCurrency(operation.bookValue)}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {operation.salePrice !== null ? formatCurrency(operation.salePrice) : '*****'}
                    </td>
                    <td
                      className={`px-6 py-4 text-sm font-medium ${
                        operation.profitLoss >= 0 ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {formatProfitLoss(operation.profitLoss)}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{operation.date}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{operation.user}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {operation.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-gray-400 hover:text-gray-600">⋮</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal */}
      <SaleDisposalModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        operation={selectedOperation}
      />
    </Layout>
  );
}
