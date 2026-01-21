import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { FeatureCard } from '../../components/ui/FeatureCard';
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
  icon: React.ElementType;
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
      icon: Users,
      bgColor: 'bg-[#2f8fb21a]',
      iconColor: '#2f8fb2',
      path: '/sales/customers',
    },
    {
      id: 'price-quotes',
      title: t('sales.price_quotes') || 'عرض السعر',
      description: t('sales.price_quotes_desc') || 'عرض مبدئي يوضح الأسعار قبل تأكيد البيع.',
      icon: Receipt,
      bgColor: 'bg-[#7fa1eb1a]',
      iconColor: '#7fa1eb',
      path: '/sales/price-quotes',
    },
    {
      id: 'work-orders',
      title: t('sales.work_orders') || 'أمر العمل',
      description: t('sales.work_orders_desc') || 'تنفيذ الطلب وتحويله للتسليم أو الفاتورة',
      icon: ClipboardList,
      bgColor: 'bg-[#97c8091a]',
      iconColor: '#97c809',
      path: '/sales/work-orders',
    },
    {
      id: 'sales-invoices',
      title: t('sales.sales_invoices') || 'فاتورة مبيعات',
      description: t('sales.sales_invoices_desc') || 'المستند المالي لتحصيل المبلغ من العميل',
      icon: FileText,
      bgColor: 'bg-[#07b6641a]',
      iconColor: '#07b664',
      path: '/sales/sales-invoices',
    },
    {
      id: 'delivery-notes',
      title: t('sales.delivery_notes') || 'سند تسليم',
      description: t('sales.delivery_notes_desc') || 'تسليم البضاعة للعميل وخصمها من المخزون',
      icon: Package,
      bgColor: 'bg-[#ed9f1a1a]',
      iconColor: '#ed9f1a',
      path: '/sales/delivery-notes',
    },
    {
      id: 'sales-returns',
      title: t('sales.sales_returns') || 'مردودات مبيعات',
      description: t('sales.sales_returns_desc') || 'البضاعة المرتجعة وتحديث الحساب والمخزون',
      icon: RotateCcw,
      bgColor: 'bg-[#f4433d1a]',
      iconColor: '#f4433d',
      path: '/sales/sales-returns',
    },
    {
      id: 'price-lists',
      title: t('sales.price_lists') || 'قوائم الأسعار',
      description: t('sales.price_lists_desc') || 'تحديد أسعار البيع حسب النوع أو العميل.',
      icon: ListChecks,
      bgColor: 'bg-[#9b59b61a]',
      iconColor: '#9b59b6',
      path: '/sales/price-lists',
    },
    {
      id: 'sales-representatives',
      title: t('sales.sales_representatives') || 'مندوبي المبيعات',
      description: t('sales.sales_representatives_desc') || 'إدارة بيانات المندوبين وعمولاتهم.',
      icon: UserCircle,
      bgColor: 'bg-[#3498db1a]',
      iconColor: '#3498db',
      path: '/sales/sales-representatives',
    },
  ];

  return (
    <Layout>
      <div className="flex flex-wrap gap-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
        {cards.map((card) => (
          <FeatureCard
            key={card.id}
            title={card.title}
            description={card.description}
            icon={card.icon}
            bgColor={card.bgColor}
            iconColor={card.iconColor}
            onClick={() => navigate(card.path)}
            isActive={card.id === 'customers'}
            isClickable={card.id === 'customers'}
          />
        ))}
      </div>
    </Layout>
  );
};
