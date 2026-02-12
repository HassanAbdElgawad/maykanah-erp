import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Input } from '@/components/ui/input';
import { CardContainer } from '@/components/ui/CardContainer';
import { useLanguage } from '@/contexts/LanguageContext';
import { AdvancedTable } from '@/components/ui/Table';
import { buttonClasses } from '@/styles';
import { Search, Plus, Edit2, Trash2, Eye } from 'lucide-react';

interface Product {
  id: string;
  productCode: string;
  productNameAr: string;
  productNameEn: string;
  categoryAr: string;
  categoryEn: string;
  type: string;
  price: number;
  quantity: number;
  status: 'active' | 'medium' | 'inactive' | 'hidden';
}

export const ProductsList = (): JSX.Element => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data
  const products: Product[] = [
    {
      id: '1',
      productCode: 'PRD-001',
      productNameAr: 'منتج تجريبي 1',
      productNameEn: 'Test Product 1',
      categoryAr: 'إلكترونيات',
      categoryEn: 'Electronics',
      type: 'خدمة',
      price: 1500,
      quantity: 50,
      status: 'active',
    },
    {
      id: '2',
      productCode: 'PRD-002',
      productNameAr: 'منتج تجريبي 2',
      productNameEn: 'Test Product 2',
      categoryAr: 'أثاث',
      categoryEn: 'Furniture',
      type: 'منتج',
      price: 2500,
      quantity: 30,
      status: 'medium',
    },
  ];

  const filteredProducts = products.filter((product) => {
    const name = language === 'ar' ? product.productNameAr : product.productNameEn;
    const category = language === 'ar' ? product.categoryAr : product.categoryEn;
    return (
      product.productCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const getStatusText = (status: string) => {
    const statusMap: { [key: string]: string } = {
      active: language === 'ar' ? 'نشط' : 'Active',
      medium: language === 'ar' ? 'متوسط' : 'Medium',
      inactive: language === 'ar' ? 'خامل' : 'Inactive',
      hidden: language === 'ar' ? 'مخفي' : 'Hidden',
    };
    return statusMap[status] || status;
  };

  const getStatusColor = (status: string) => {
    const colorMap: { [key: string]: string } = {
      active: 'text-green-600 bg-green-50',
      medium: 'text-yellow-600 bg-yellow-50',
      inactive: 'text-gray-600 bg-gray-50',
      hidden: 'text-red-600 bg-red-50',
    };
    return colorMap[status] || 'text-gray-600 bg-gray-50';
  };

  return (
    <Layout>
      <div className="space-y-4">
        {/* Header Section */}
        <CardContainer>
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder={t('warehouses.search_products')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pr-10 h-[45px] bg-slate-50"
                />
              </div>
            </div>
            <button
              onClick={() => navigate('/warehouses/products-list/add')}
              className={buttonClasses.primary}
            >
              <Plus className="w-5 h-5" />
              {t('warehouses.add_product')}
            </button>
          </div>
        </CardContainer>

        {/* Table Section */}
        <CardContainer>
          <AdvancedTable
            data={filteredProducts}
            columns={[
              {
                key: 'productCode',
                label: t('warehouses.product_code'),
              },
              {
                key: 'productName',
                label: t('warehouses.product_name'),
                render: (item) =>
                  language === 'ar' ? item.productNameAr : item.productNameEn,
              },
              {
                key: 'category',
                label: t('warehouses.category'),
                render: (item) => (language === 'ar' ? item.categoryAr : item.categoryEn),
              },
              {
                key: 'type',
                label: t('warehouses.type'),
              },
              {
                key: 'quantity',
                label: t('warehouses.quantity'),
              },
              {
                key: 'price',
                label: t('warehouses.price'),
                render: (item) => `${item.price.toFixed(2)} ${t('common.currency')}`,
              },
              {
                key: 'status',
                label: t('warehouses.status'),
                render: (item) => (
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                      item.status
                    )}`}
                  >
                    {getStatusText(item.status)}
                  </span>
                ),
              },
            ]}
            actions={[
              {
                icon: Eye,
                label: t('common.view'),
                onClick: (item) => navigate(`/warehouses/products-list/${item.id}`),
                color: 'green',
              },
              {
                icon: Edit2,
                label: t('common.edit'),
                onClick: (item) => navigate(`/warehouses/products-list/edit/${item.id}`),
                color: 'blue',
              },
              {
                icon: Trash2,
                label: t('common.delete'),
                onClick: (item) => console.log('Delete', item.id),
                color: 'red',
              },
            ]}
          />
        </CardContainer>
      </div>
    </Layout>
  );
};
