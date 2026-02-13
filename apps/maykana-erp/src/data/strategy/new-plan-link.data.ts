// New Plan Link form data for Strategy module

export interface NewPlanLinkGoal {
  id: string;
  number: string;
  name: string;
  isChecked: boolean;
}

export interface NewPlanLinkInitiative {
  id: string;
  number: string;
  name: string;
  isChecked: boolean;
}

export interface NewPlanLinkKPI {
  id: string;
  number: string;
  name: string;
  isChecked: boolean;
}

export const getNewPlanLinkInitialGoals = (): NewPlanLinkGoal[] => [
  { id: '1', number: '1', name: 'تحسين تجربة المستخدم', isChecked: true },
  { id: '2', number: '2', name: 'تعزيز الأمن السيبراني', isChecked: true },
  { id: '3', number: '3', name: 'تطوير البنيات الرقمية', isChecked: false },
];

export const getNewPlanLinkInitialInitiatives = (): NewPlanLinkInitiative[] => [
  { id: '1', number: '1', name: 'منصة الخدمات الموحدة', isChecked: true },
  { id: '2', number: '2', name: 'تطوير مراكز البيانات', isChecked: true },
  { id: '3', number: '3', name: 'برنامج تدريب الموظفين', isChecked: false },
];

export const getNewPlanLinkInitialKPIs = (): NewPlanLinkKPI[] => [
  { id: '1', number: '1', name: 'نسبة الخدمات الرقمية', isChecked: true },
  { id: '2', number: '2', name: 'عدد الأنظمة المدمجة', isChecked: false },
];
