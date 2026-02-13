// Add Asset Form data for Assets module

import { FileText, TrendingDown, DollarSign, Package, Settings } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface AddAssetStepConfig {
  id: number;
  icon: LucideIcon;
  label: string;
  labelEn: string;
}

export interface DepreciationTableRow {
  month: string;
  depValue: string;
  bookValue: string;
  entry: string;
  status: 'pending' | 'completed';
}

export interface UploadedFileItem {
  id: number;
  name: string;
  type: string;
  size: string;
  date: string;
}

export const getAddAssetFormSteps = (): AddAssetStepConfig[] => [
  { id: 1, icon: FileText, label: 'معلومات أساسية', labelEn: 'Basic Info' },
  { id: 2, icon: Package, label: 'نوع الأصل', labelEn: 'Asset Type' },
  { id: 3, icon: TrendingDown, label: 'الإهلاك', labelEn: 'Depreciation' },
  { id: 4, icon: DollarSign, label: 'المعلومات المالية', labelEn: 'Financial Info' },
  { id: 5, icon: Settings, label: 'المعلومات المالية', labelEn: 'Financial Info' },
];

export const getAddAssetFormDepreciationTableData = (): DepreciationTableRow[] => [
  { month: '2026-05', depValue: 'ر.س 272', bookValue: 'ر.س 7,896', entry: '--------', status: 'pending' },
  { month: '2026-04', depValue: 'ر.س 272', bookValue: 'ر.س 8,168', entry: 'GV-004', status: 'completed' },
  { month: '2026-03', depValue: 'ر.س 272', bookValue: 'ر.س 8,440', entry: 'GV-003', status: 'completed' },
  { month: '2026-02', depValue: 'ر.س 272', bookValue: 'ر.س 8,712', entry: 'GV-002', status: 'completed' },
  { month: '2026-01', depValue: 'ر.س 272', bookValue: 'ر.س 8,984', entry: 'GV-001', status: 'completed' },
];

export const getAddAssetFormInitialUploadedFiles = (): UploadedFileItem[] => [
  { id: 1, name: 'فاتورة الشراء', type: 'PDF', size: '4.5 ميجابايت', date: '09:23 - 23 يناير 2025' },
  { id: 2, name: 'صور الأصل', type: 'JPEG', size: '4.5 ميجابايت', date: '09:23 - 23 يناير 2025' },
  { id: 3, name: 'صور الأصل', type: 'PNG', size: '4.5 ميجابايت', date: '09:23 - 23 يناير 2025' },
];
