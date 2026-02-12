// Tab 1: طلبات الإجازة
export interface LeaveRequest {
  id: number;
  leaveType: string;
  remainingDays: number;
  date: string;
  status: 'approved' | 'rejected' | 'pending';
}

export const leaveRequestsData: LeaveRequest[] = [
  {
    id: 1,
    leaveType: 'نوع الإجازة',
    remainingDays: 5,
    date: '2023-12-09',
    status: 'approved',
  },
  {
    id: 2,
    leaveType: 'نوع الإجازة',
    remainingDays: 4,
    date: '2023-02-20',
    status: 'approved',
  },
  {
    id: 3,
    leaveType: 'نوع الإجازة',
    remainingDays: 16,
    date: '2023-02-15',
    status: 'rejected',
  },
  {
    id: 4,
    leaveType: 'نوع الإجازة',
    remainingDays: 2,
    date: '2020-02-10',
    status: 'approved',
  },
];

// Tab 2: إجازات تعويضية
export interface CompensatoryLeave {
  id: number;
  requestedDays: string;
  date: string;
  status: 'approved' | 'rejected' | 'pending';
}

export const compensatoryLeavesData: CompensatoryLeave[] = [
  { id: 1, requestedDays: '5 أيام', date: '9,3,4 - 12 - 2023', status: 'approved' },
  { id: 2, requestedDays: '5 أيام', date: '9,3,4 - 12 - 2023', status: 'approved' },
  { id: 3, requestedDays: '5 أيام', date: '9,3,4 - 12 - 2023', status: 'rejected' },
  { id: 4, requestedDays: '5 أيام', date: '9,3,4 - 12 - 2023', status: 'approved' },
];

// Tab 3: الحضور والاستئذان
export interface PermissionAttendance {
  id: number;
  date: string;
  time: string;
  reason: string;
  status: 'approved' | 'rejected' | 'pending';
}

export const permissionAttendanceData: PermissionAttendance[] = [
  { id: 1, date: '9 - 12 - 2023', time: '12:00', reason: 'الالكتروني', status: 'approved' },
  { id: 2, date: '20 - 2 - 2023', time: '12:00', reason: 'التقي', status: 'approved' },
  { id: 3, date: '15 - 2 - 2023', time: '12:00', reason: 'التقي', status: 'rejected' },
  { id: 4, date: '10 - 2 - 2020', time: '12:00', reason: 'التقي', status: 'approved' },
];

// Tab 4: طلبات تصحيح الحضور
export interface AttendanceCorrection {
  id: number;
  correctedTimes: string;
  reason: string;
  status: 'approved' | 'rejected' | 'pending';
}

export const attendanceCorrectionData: AttendanceCorrection[] = [
  { id: 1, correctedTimes: '9 - 12 - 2023', reason: 'الالكتروني', status: 'approved' },
  { id: 2, correctedTimes: '20 - 2 - 2023', reason: 'التقي', status: 'approved' },
  { id: 3, correctedTimes: '15 - 2 - 2023', reason: 'التقي', status: 'rejected' },
  { id: 4, correctedTimes: '10 - 2 - 2020', reason: 'التقي', status: 'approved' },
];
