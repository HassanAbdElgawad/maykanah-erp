// Plan Link Details data for Strategy module

export interface PlanLinkGoal {
  id: string;
  name: string;
  progress: number;
  source: string;
}

export interface PlanLinkInitiative {
  id: string;
  name: string;
  progress: number;
  source: string;
}

export interface PlanLinkKPI {
  id: string;
  name: string;
  progress: number;
  source: string;
}

export interface PlanLinkPlanData {
  planNumber: string;
  mainPlan: string;
  usedModel: string;
  linkType: string;
  linkDate: string;
  notes: string;
}

export const getPlanLinkDetailsPlanData = (): PlanLinkPlanData => ({
  planNumber: 'PL-001-2025',
  mainPlan: 'رؤية 2030',
  usedModel: 'خطة التحول الرقمي 2025',
  linkType: 'وزارة كاملة',
  linkDate: '5 فبراير 2025',
  notes: 'الخطة الثانية تساهم في التحول الوطني',
});

export const getPlanLinkDetailsGoals = (): PlanLinkGoal[] => [
  { id: '1', name: 'تحسين تجربة المستخدم', progress: 90, source: 'رئيسية' },
  { id: '2', name: 'تعزيز الأمن السيبراني', progress: 40, source: 'رئيسية' },
  { id: '3', name: 'تطوير البنيات الرقمية', progress: 90, source: 'رئيسية' },
];

export const getPlanLinkDetailsInitiatives = (): PlanLinkInitiative[] => [];

export const getPlanLinkDetailsKPIs = (): PlanLinkKPI[] => [];
