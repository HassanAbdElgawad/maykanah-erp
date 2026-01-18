import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { FeatureCard } from '../../components/ui/FeatureCard';
import {
  Frame,
  ReceiptText,
  FileText,
  DollarSign,
  ShoppingCart,
  Package,
  FileCheck,
  RefreshCcw,
} from 'lucide-react';

interface PurchaseCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  path: string;
}

export const Purchases = (): JSX.Element => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const cards: PurchaseCard[] = [
    {
      id: 'suppliers',
      title: t('purchases.suppliers'),
      description: t('purchases.suppliers_desc'),
      icon: <Frame className="w-6 h-6" />,
      bgColor: 'bg-[#07b6641a]',
      path: '/purchases/suppliers',
    },
    {
      id: 'purchase-requests',
      title: t('purchases.purchase_requests'),
      description: t('purchases.purchase_requests_desc'),
      icon: <ReceiptText className="w-6 h-6" />,
      bgColor: 'bg-[#97c8091a]',
      path: '/purchases/purchase-requests',
    },
    {
      id: 'price-quote-requests',
      title: t('purchases.price_quote_requests'),
      description: t('purchases.price_quote_requests_desc'),
      icon: <FileText className="w-6 h-6" />,
      bgColor: 'bg-[#7fa1eb1a]',
      path: '/purchases/price-quote-requests',
    },
    {
      id: 'supplier-price-quotes',
      title: t('purchases.supplier_price_quotes'),
      description: t('purchases.supplier_price_quotes_desc'),
      icon: <DollarSign className="w-6 h-6" />,
      bgColor: 'bg-[#10488f1a]',
      path: '/purchases/supplier-price-quotes',
    },
    {
      id: 'purchase-orders',
      title: t('purchases.purchase_orders'),
      description: t('purchases.purchase_orders_desc'),
      icon: <ShoppingCart className="w-6 h-6" />,
      bgColor: 'bg-[#fd7aa61a]',
      path: '/purchases/purchase-orders',
    },
    {
      id: 'material-receipts',
      title: t('purchases.material_receipts'),
      description: t('purchases.material_receipts_desc'),
      icon: <Package className="w-6 h-6" />,
      bgColor: 'bg-[#2f8fb21a]',
      path: '/purchases/material-receipts',
    },
    {
      id: 'purchase-invoices',
      title: t('purchases.purchase_invoices'),
      description: t('purchases.purchase_invoices_desc'),
      icon: <FileCheck className="w-6 h-6" />,
      bgColor: 'bg-[#7718691a]',
      path: '/purchases/purchase-invoices',
    },
    {
      id: 'purchase-returns',
      title: t('purchases.purchase_returns'),
      description: t('purchases.purchase_returns_desc'),
      icon: <RefreshCcw className="w-6 h-6" />,
      bgColor: 'bg-[#803d191a]',
      path: '/purchases/purchase-returns',
    },
  ];

  return (
    <Layout>
      <div className="grid grid-cols-4 gap-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
        {cards.map((card) => (
          <FeatureCard
            key={card.id}
            title={card.title}
            description={card.description}
            icon={() => <>{card.icon}</>}
            bgColor={card.bgColor}
            onClick={() => navigate(card.path)}
            isActive={card.id === 'suppliers'}
            isClickable={card.id === 'suppliers'}
          />
        ))}
      </div>
    </Layout>
  );
};
