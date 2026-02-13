export interface UnitOfMeasure {
  id: string;
  name: string;
  symbol: string;
  isActive: boolean;
}

const mockUnits: Record<string, UnitOfMeasure> = {
  '1': { id: '1', name: 'اسم الوحدة', symbol: 'كجم', isActive: true },
  '2': { id: '2', name: 'اسم الوحدة', symbol: 'م', isActive: true },
  '3': { id: '3', name: 'اسم الوحدة', symbol: 'ل', isActive: false },
};

export const getUnitById = (id: string): UnitOfMeasure | null => mockUnits[id] ?? null;
export const getUnitOfMeasuresSampleData = (): UnitOfMeasure[] => Object.values(mockUnits);
