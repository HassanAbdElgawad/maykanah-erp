export interface TeamMember {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  isLeader: boolean;
  status: 'active' | 'inactive';
  role?: string;
}

export interface MaintenanceTeam {
  id: string;
  code: string;
  name: string;
  type: string;
  company: string;
  notes: string;
  isActive: boolean;
  createdDate?: string;
  lastModified?: string;
  status?: 'active' | 'inactive';
  members: TeamMember[];
}

const mockTeams: Record<string, MaintenanceTeam> = {
  '1': {
    id: '1',
    code: 'TEAM-MNT-01',
    name: 'صيانة السيارات',
    type: 'داخلي',
    company: 'مستودع الرياض',
    notes: 'فريق متخصص في صيانة السيارات والمعدات الثقيلة',
    isActive: false,
    createdDate: '23/12/2025',
    lastModified: '10/01/2026',
    status: 'inactive',
    members: [
      {
        id: 'member-1',
        fullName: 'سامي النعيمي',
        phone: '+1123456789',
        email: 'mike.brown@samplemail.com',
        isLeader: false,
        status: 'active',
        role: 'فني صيانة',
      },
      {
        id: 'member-2',
        fullName: 'علي السعيدي',
        phone: '+1234567890',
        email: 'alex.johnson@example.com',
        isLeader: false,
        status: 'active',
        role: 'فني صيانة',
      },
      {
        id: 'member-3',
        fullName: 'فريد الجوهري',
        phone: '+1987654321',
        email: 'sara.connor@fakemail.com',
        isLeader: true,
        status: 'inactive',
        role: 'مسؤول الفريق',
      },
      {
        id: 'member-4',
        fullName: 'عمر الفريق',
        phone: '+1678901234',
        email: 'emily.jones@fauxmail.com',
        isLeader: false,
        status: 'inactive',
      },
      {
        id: 'member-5',
        fullName: 'سامي الحميدي',
        phone: '+1456789012',
        email: 'mike.brown@samplemail.com',
        isLeader: false,
        status: 'active',
      },
      {
        id: 'member-6',
        fullName: 'عمر الفريق',
        phone: '+1234509876',
        email: 'emily.jones@fauxmail.com',
        isLeader: false,
        status: 'inactive',
      },
      {
        id: 'member-7',
        fullName: 'سامي النعيمي',
        phone: '+1098765432',
        email: 'mike.brown@samplemail.com',
        isLeader: false,
        status: 'active',
      },
      {
        id: 'member-8',
        fullName: 'طارق الحلو',
        phone: '+1345678901',
        email: 'john.doe@imaginarymail.com',
        isLeader: false,
        status: 'active',
      },
      {
        id: 'member-9',
        fullName: 'محمود الرحمن',
        phone: '+1456789013',
        email: 'david.smith@mockemail.com',
        isLeader: false,
        status: 'active',
      },
      {
        id: 'member-10',
        fullName: 'يوسف القحطاني',
        phone: '+1098765433',
        email: 'alex.johnson@example.com',
        isLeader: false,
        status: 'active',
      },
      {
        id: 'member-11',
        fullName: 'عبدالله المري',
        phone: '+1678901235',
        email: 'sara.connor@fakemail.com',
        isLeader: false,
        status: 'active',
      },
    ],
  },
  '2': {
    id: '2',
    code: 'TEAM-IT-02',
    name: 'تقنية المعلومات',
    type: 'داخلي',
    company: '',
    notes: 'فريق تقنية المعلومات',
    isActive: true,
    members: [],
  },
  '3': {
    id: '3',
    code: 'TEAM-EXT-03',
    name: 'صيانة الرياض',
    type: 'داخلي',
    company: '',
    notes: '',
    isActive: true,
    members: [],
  },
};

export const getMaintenanceTeamById = (id: string): MaintenanceTeam | null => mockTeams[id] ?? null;
export const getMaintenanceTeamsSampleData = (): MaintenanceTeam[] => Object.values(mockTeams);

export interface MaintenanceTeamListItem {
  id: string;
  code: string;
  name: string;
  type: string;
  leaderName: string;
  memberCount: number;
  isActive: boolean;
}
export const getMaintenanceTeamsListSampleData = (): MaintenanceTeamListItem[] =>
  Object.values(mockTeams).map((t) => {
    const leader = t.members.find((m) => m.isLeader);
    return {
      id: t.id,
      code: t.code,
      name: t.name,
      type: t.type,
      leaderName: leader?.fullName ?? '-',
      memberCount: t.members.length,
      isActive: t.isActive,
    };
  });
