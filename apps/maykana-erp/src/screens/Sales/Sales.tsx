import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { Card, CardContent } from '../../components/ui/card';
import {
  FileText,
  ClipboardList,
  Receipt,
  Package,
  RotateCcw,
  ListChecks,
  Users,
  UserCircle,
} from 'lucide-react';

interface SalesCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  iconColor: string;
  path: string;
}

export const Sales = (): JSX.Element => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const cards: SalesCard[] = [
    {
      id: 'customers',
      title: t('sales.customers') || 'العملاء',
      description: t('sales.customers_desc') || 'بيانات العملاء وتفاصيل التواصل والدفع.',
      icon: <Users className="w-6 h-6" />,
      bgColor: 'bg-[#2f8fb21a]',
      iconColor: 'text-[#2f8fb2]',
      path: '/sales/customers',
    },
    {
      id: 'price-quotes',
      title: t('sales.price_quotes') || 'عرض السعر',
      description: t('sales.price_quotes_desc') || 'عرض مبدئي يوضح الأسعار قبل تأكيد البيع.',
      icon: <Receipt className="w-6 h-6" />,
      bgColor: 'bg-[#7fa1eb1a]',
      iconColor: 'text-[#7fa1eb]',
      path: '/sales/price-quotes',
    },
    {
      id: 'work-orders',
      title: t('sales.work_orders') || 'أمر العمل',
      description: t('sales.work_orders_desc') || 'تنفيذ الطلب وتحويله للتسليم أو الفاتورة',
      icon: <ClipboardList className="w-6 h-6" />,
      bgColor: 'bg-[#97c8091a]',
      iconColor: 'text-[#97c809]',
      path: '/sales/work-orders',
    },
    {
      id: 'sales-invoices',
      title: t('sales.sales_invoices') || 'فاتورة مبيعات',
      description: t('sales.sales_invoices_desc') || 'المستند المالي لتحصيل المبلغ من العميل',
      icon: <FileText className="w-6 h-6" />,
      bgColor: 'bg-[#07b6641a]',
      iconColor: 'text-[#07b664]',
      path: '/sales/sales-invoices',
    },
    {
      id: 'delivery-notes',
      title: t('sales.delivery_notes') || 'سند تسليم',
      description: t('sales.delivery_notes_desc') || 'تسليم البضاعة للعميل وخصمها من المخزون',
      icon: <Package className="w-6 h-6" />,
      bgColor: 'bg-[#ed9f1a1a]',
      iconColor: 'text-[#ed9f1a]',
      path: '/sales/delivery-notes',
    },
    {
      id: 'sales-returns',
      title: t('sales.sales_returns') || 'مردودات مبيعات',
      description: t('sales.sales_returns_desc') || 'البضاعة المرتجعة وتحديث الحساب والمخزون',
      icon: <RotateCcw className="w-6 h-6" />,
      bgColor: 'bg-[#f4433d1a]',
      iconColor: 'text-[#f4433d]',
      path: '/sales/sales-returns',
    },
    {
      id: 'price-lists',
      title: t('sales.price_lists') || 'قوائم الأسعار',
      description: t('sales.price_lists_desc') || 'تحديد أسعار البيع حسب النوع أو العميل.',
      icon: <ListChecks className="w-6 h-6" />,
      bgColor: 'bg-[#9b59b61a]',
      iconColor: 'text-[#9b59b6]',
      path: '/sales/price-lists',
    },
    {
      id: 'sales-representatives',
      title: t('sales.sales_representatives') || 'مندوبي المبيعات',
      description: t('sales.sales_representatives_desc') || 'إدارة بيانات المندوبين وعمولاتهم.',
      icon: <UserCircle className="w-6 h-6" />,
      bgColor: 'bg-[#3498db1a]',
      iconColor: 'text-[#3498db]',
      path: '/sales/sales-representatives',
    },
  ];

  return (
    <Layout>
      <div className="grid grid-cols-4 gap-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
        {cards.map((card) => (
          <Card
            key={card.id}
            onClick={() => navigate(card.path)}
            className={`${card.id === 'customers' ? 'border-[#07b664] border-2' : 'border-[#e2e2e2]'} hover:shadow-lg transition-[transform,box-shadow] hover:-translate-y-1 cursor-pointer`}
          >
            <CardContent className="flex flex-col p-6 h-[92px]">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <p className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#092e32] text-base">
                    {card.title}
                  </p>
                  <p className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#5f6c72] text-xs">
                    {card.description}
                  </p>
                </div>
                <div className={`flex items-center justify-center w-[53px] h-[53px] rounded-full ${card.bgColor}`}>
                  <span className={card.iconColor}>{card.icon}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Layout>
  );
};
