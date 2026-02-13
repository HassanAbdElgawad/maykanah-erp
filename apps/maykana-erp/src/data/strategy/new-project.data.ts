// New Project form data for Strategy module

import { FileText, TrendingUp, DollarSign, AlertTriangle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface NewProjectStepConfig {
  id: number;
  icon: LucideIcon;
  label: string;
}

export interface NewProjectRisk {
  id: number;
  risk: string;
  severity: string;
  mitigation: string;
}

export interface NewProjectApprovalStage {
  id: number;
  stage: string;
  department: string;
  responsible: string;
  details: string;
}

export const getNewProjectSteps = (): NewProjectStepConfig[] => [
  { id: 1, icon: FileText, label: 'المعلومات الأساسية والجدول الزمني' },
  { id: 2, icon: DollarSign, label: 'الميزانية والمخرجات' },
  { id: 3, icon: TrendingUp, label: 'المخاطر' },
  { id: 4, icon: AlertTriangle, label: 'مرحلة الإعتماد' },
];

export const getNewProjectInitialRisks = (): NewProjectRisk[] => [
  { id: 1, risk: '', severity: '', mitigation: '' },
  { id: 2, risk: '', severity: '', mitigation: '' },
  { id: 3, risk: '', severity: '', mitigation: '' },
];

export const getNewProjectInitialApprovalStages = (): NewProjectApprovalStage[] => [
  { id: 1, stage: '', department: '', responsible: '', details: '' },
  { id: 2, stage: '', department: '', responsible: '', details: '' },
  { id: 3, stage: '', department: '', responsible: '', details: '' },
];
