// User Management data for Settings module

export interface User {
  id: string;
  username: string;
  fullName: string;
  email: string;
  branch: string;
  department: string;
  jobTitle: string;
  isActive: boolean;
}

const usersData: User[] = [
  { id: '1', username: 'user_12345', fullName: 'أحمد العلي', email: 'ahmed.ali@example.com', branch: 'فرع 1', department: 'قسم 1', jobTitle: 'مصمم تجربة المستخدم', isActive: true },
  { id: '2', username: 'user_67890', fullName: 'سارة كف', email: 'sara.mohamed@example.com', branch: 'فرع 1', department: 'قسم 1', jobTitle: 'مشرف فرع', isActive: true },
  { id: '3', username: 'user_54321', fullName: 'علي حسين', email: 'ali.hassan@example.com', branch: 'فرع 1', department: 'قسم 1', jobTitle: 'مدير قسم', isActive: false },
  { id: '4', username: 'user_11111', fullName: 'فاطمة الزهراء', email: 'fatima.zahra@example.com', branch: 'فرع 1', department: 'قسم 1', jobTitle: 'مدير فرع', isActive: true },
  { id: '5', username: 'مشرف المستخدم', fullName: 'يوسف العبدالله', email: 'yousef.abdallah@example.com', branch: 'فرع 1', department: 'قسم 1', jobTitle: 'مصمم تجربة المستخدم', isActive: true },
  { id: '6', username: 'user_22222', fullName: 'ليلى النمر', email: 'layla.nemr@example.com', branch: 'فرع 1', department: 'قسم 1', jobTitle: 'مشرف فرع', isActive: true },
  { id: '7', username: 'user_33333', fullName: 'مريم سعيد', email: 'mariam.saeed@example.com', branch: 'فرع 1', department: 'قسم 1', jobTitle: 'مدير قسم', isActive: false },
  { id: '8', username: 'user_44444', fullName: 'خالد العتيبي', email: 'khalid.alotaibi@example.com', branch: 'فرع 1', department: 'قسم 1', jobTitle: 'مدير فرع', isActive: true },
  { id: '9', username: 'user_55555', fullName: 'نورة السالم', email: 'nora.alsalem@example.com', branch: 'فرع 1', department: 'قسم 1', jobTitle: 'مشرف فرع', isActive: false },
];

export const getUsersSampleData = (): User[] => [...usersData];
