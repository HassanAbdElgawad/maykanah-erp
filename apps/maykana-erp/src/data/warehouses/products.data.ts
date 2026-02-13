/**
 * Products List - Data layer
 * قائمة المنتجات
 */

export interface Product {
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

export const getProductsSampleData = (): Product[] => [
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
