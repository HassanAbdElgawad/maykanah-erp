import {
  HomeIcon,
  InboxIcon,
  WalletIcon,
  ShoppingCartIcon,
  ShoppingBagIcon,
  TrophyIcon,
  BuildingIcon,
  UsersIcon,
  FolderKanbanIcon,
  TrendingUpIcon,
  WarehouseIcon,
  WorkflowIcon,
  BarChart3Icon,
  SettingsIcon,
  MessageSquareIcon,
  LucideIcon
} from 'lucide-react';

export interface MenuItem {
  titleKey: string;
  icon: LucideIcon;
  hasDropdown?: boolean;
  badge?: string;
  path: string;
  status?: string;
}

export const sidebarMenuItems: MenuItem[] = [
  {
    titleKey: 'sidebar.home',
    icon: HomeIcon,
    hasDropdown: true,
    path: '/home',
    // badge: 'BETA',
    status: 'BETA',
  },
  {
    titleKey: 'sidebar.inbox',
    icon: InboxIcon,
    hasDropdown: true,
    badge: '10',
    path: '/inbox',
    status: 'BETA',
  },
  {
    titleKey: 'sidebar.accounting',
    icon: WalletIcon,
    hasDropdown: true,
    path: '/accounting',
  },
  {
    titleKey: 'sidebar.purchases',
    icon: ShoppingCartIcon,
    hasDropdown: true,
    path: '/purchases',
  },
  {
    titleKey: 'sidebar.sales',
    icon: ShoppingBagIcon,
    hasDropdown: true,
    path: '/sales',
  },
  {
    titleKey: 'sidebar.competitions',
    icon: TrophyIcon,
    hasDropdown: true,
    path: '/competitions',
  },
  {
    titleKey: 'sidebar.assets',
    icon: BuildingIcon,
    hasDropdown: true,
    path: '/assets',
  },
  {
    titleKey: 'sidebar.hr',
    icon: UsersIcon,
    hasDropdown: true,
    path: '/hr',
  },
  {
    titleKey: 'sidebar.projects',
    icon: FolderKanbanIcon,
    hasDropdown: true,
    path: '/projects',
  },
  {
    titleKey: 'sidebar.strategy',
    icon: TrendingUpIcon,
    hasDropdown: true,
    path: '/strategy',
  },
  {
    titleKey: 'sidebar.warehouses',
    icon: WarehouseIcon,
    hasDropdown: true,
    path: '/warehouses',
  },
  {
    titleKey: 'sidebar.workflow',
    icon: WorkflowIcon,
    hasDropdown: true,
    path: '/workflow',
  },
];

export const bottomMenuItems: MenuItem[] = [
  {
    titleKey: 'sidebar.reports',
    icon: BarChart3Icon,
    path: '/reports',
  },
  {
    titleKey: 'sidebar.settings',
    icon: SettingsIcon,
    path: '/settings',
  },
  {
    titleKey: 'sidebar.support',
    icon: MessageSquareIcon,
    status: 'sidebar.available',
    path: '/support',
  },
];
