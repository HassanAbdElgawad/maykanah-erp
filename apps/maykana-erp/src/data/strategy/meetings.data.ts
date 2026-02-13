// Meetings data for Strategy module

export interface Meeting {
  id: string;
  meetingNumber: string;
  title: string;
  date: string;
  type: string;
  facilitator: string;
  linkedTo: string;
  attendees: number;
  attachments: number;
  status: string;
}

const meetingsData: Meeting[] = [
  {
    id: '1',
    meetingNumber: 'MTG-004-2025',
    title: 'اجتماع متابعة المشروع الفصلية',
    date: '15/09/2025',
    type: 'متابعة تنفيذ',
    facilitator: 'خالد',
    linkedTo: 'مشروع: منصة الخدمات',
    attendees: 6,
    attachments: 2,
    status: 'مكتمل',
  },
];

export const getMeetingsSampleData = (): Meeting[] => [...meetingsData];
