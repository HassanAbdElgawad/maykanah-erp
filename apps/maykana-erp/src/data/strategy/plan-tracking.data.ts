// Plan Tracking (شجرة ربط الخطط) data for Strategy module

export interface PlanTrackingPlan {
  id: string;
  planNumber: string;
  planName: string;
  mainPlan: string;
  linkType: string;
  linkDate: string;
  progress: number;
  isActive: boolean;
  level: number;
  parentId?: string;
  children?: PlanTrackingPlan[];
}

export const buildPlanTrackingTreeData = (): PlanTrackingPlan[] => [
  {
    id: '1',
    planNumber: 'PL-001-2025',
    planName: 'رؤية المملكة 2030',
    mainPlan: 'الخطة الأم',
    linkType: 'الخطة الأم',
    linkDate: '11/11/2025',
    progress: 40,
    isActive: true,
    level: 0,
    children: [
      {
        id: '2',
        planNumber: 'PL-001-2025-01',
        planName: 'خطة التحول الرقمي 2025',
        mainPlan: 'رؤية المملكة 2030',
        linkType: 'وزارة كاملة',
        linkDate: '11/11/2025',
        progress: 90,
        isActive: false,
        level: 1,
        parentId: '1',
        children: [
          {
            id: '3',
            planNumber: 'PL-001-2025-01-01',
            planName: 'خطة جودة البيانات 2025',
            mainPlan: 'خطة التحول الرقمي 2025',
            linkType: 'وزارة كاملة',
            linkDate: '11/11/2025',
            progress: 40,
            isActive: true,
            level: 2,
            parentId: '2',
          },
          {
            id: '4',
            planNumber: 'PL-001-2025-01-02',
            planName: 'خطة تجربة المستفيد 2025',
            mainPlan: 'خطة التحول الرقمي 2025',
            linkType: 'وزارة جزئية',
            linkDate: '11/11/2025',
            progress: 90,
            isActive: true,
            level: 2,
            parentId: '2',
          },
        ],
      },
      {
        id: '5',
        planNumber: 'PL-001-2025-02',
        planName: 'خطة الاستدامة 2027',
        mainPlan: 'رؤية المملكة 2030',
        linkType: 'وزارة كاملة',
        linkDate: '11/11/2025',
        progress: 90,
        isActive: true,
        level: 1,
        parentId: '1',
      },
      {
        id: '6',
        planNumber: 'PL-001-2025-03',
        planName: 'الخطة الاستراتيجية للأمن السيبراني 2026',
        mainPlan: 'رؤية المملكة 2030',
        linkType: 'وزارة جزئية',
        linkDate: '11/11/2025',
        progress: 90,
        isActive: true,
        level: 1,
        parentId: '1',
        children: [
          {
            id: '7',
            planNumber: 'PL-001-2025-03-01',
            planName: 'خطة الاستجابة للحوادث السيبرانية 2026',
            mainPlan: 'الخطة الاستراتيجية للأمن السيبراني 2026',
            linkType: 'وزارة جزئية',
            linkDate: '11/11/2025',
            progress: 40,
            isActive: true,
            level: 2,
            parentId: '6',
          },
        ],
      },
    ],
  },
];
