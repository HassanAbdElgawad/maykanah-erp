export interface UnitOfMeasure {
  id: string;
  name: string;
  symbol: string;
  isActive: boolean;
}

export const mockUnits: Record<string, UnitOfMeasure> = {
  '1': {
    id: '1',
    name: 'اسم الوحدة',
    symbol: 'كجم',
    isActive: true,
  },
  '2': {
    id: '2',
    name: 'اسم الوحدة',
    symbol: 'م',
    isActive: true,
  },
  '3': {
    id: '3',
    name: 'اسم الوحدة',
    symbol: 'ل',
    isActive: false,
  },
};
