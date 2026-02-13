// Projects data for Strategy module

export interface Project {
  id: string;
  projectNumber: string;
  projectName: string;
  currentStage: string;
  projectManager: string;
  startDate: string;
  endDate: string;
  projectType: string;
  progress: number;
  isActive: boolean;
}

const projectsData: Project[] = [
  {
    id: '1',
    projectNumber: 'PRJ-001-2025',
    projectName: 'منصة الخدمات',
    currentStage: 'التنفيذ',
    projectManager: 'خالد الذبيحي',
    startDate: '01/03/2025',
    endDate: '30/12/2025',
    projectType: 'مشروع',
    progress: 40,
    isActive: true,
  },
];

export const getProjectsSampleData = (): Project[] => [...projectsData];
