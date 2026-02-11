import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { MaykanaCard } from '../../components/ui/MaykanaCard';
import { useLanguage } from '../../contexts/LanguageContext';
import {
  Users,
  Calendar,
  Briefcase,
  DollarSign,
  TrendingUp,
  BookOpen,
  UserCheck,
  Bell,
  Shield,
  User,
  PlayCircle,
  FileText,
  LogOut,
  MapPin,
  Award,
} from 'lucide-react';

interface HRCard {
  id: string;
  titleKey: string;
  descriptionKey: string;
  icon: React.ElementType;
  bgColor: string;
  iconColor: string;
  path: string;
}

type ViewMode = 'admin' | 'employee';

export const HR: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();
  const [viewMode, setViewMode] = useState<ViewMode>('admin');
  const [lastVisitedCard, setLastVisitedCard] = useState<string | null>(null);

  const adminCards: HRCard[] = [
    {
      id: 'employee-center',
      titleKey: 'hr.employee_center',
      descriptionKey: 'hr.employee_center_desc',
      icon: Users,
      bgColor: '#f0f7ff',
      iconColor: '#1976d2',
      path: '/hr/employee-center',
    },
    {
      id: 'leaves-attendance',
      titleKey: 'hr.leaves_attendance',
      descriptionKey: 'hr.leaves_attendance_desc',
      icon: Calendar,
      bgColor: '#fff9f0',
      iconColor: '#f57c00',
      path: '/hr/leaves-attendance',
    },
    {
      id: 'remote-work',
      titleKey: 'hr.remote_work',
      descriptionKey: 'hr.remote_work_desc',
      icon: Briefcase,
      bgColor: '#fef5f8',
      iconColor: '#c2185b',
      path: '/hr/remote-work',
    },
    {
      id: 'salaries-rewards',
      titleKey: 'hr.salaries_rewards',
      descriptionKey: 'hr.salaries_rewards_desc',
      icon: DollarSign,
      bgColor: '#f5faf5',
      iconColor: '#388e3c',
      path: '/hr/salaries-rewards',
    },
    {
      id: 'performance-development',
      titleKey: 'hr.performance_development',
      descriptionKey: 'hr.performance_development_desc',
      icon: TrendingUp,
      bgColor: '#faf6fb',
      iconColor: '#7b1fa2',
      path: '/hr/performance-development',
    },
    {
      id: 'communication-library',
      titleKey: 'hr.communication_library',
      descriptionKey: 'hr.communication_library_desc',
      icon: BookOpen,
      bgColor: '#f0faf9',
      iconColor: '#00897b',
      path: '/hr/communication-library',
    },
    {
      id: 'recruitment',
      titleKey: 'hr.recruitment',
      descriptionKey: 'hr.recruitment_desc',
      icon: UserCheck,
      bgColor: '#fffef5',
      iconColor: '#f9a825',
      path: '/hr/recruitment',
    },
    {
      id: 'alerts-requests',
      titleKey: 'hr.alerts_requests',
      descriptionKey: 'hr.alerts_requests_desc',
      icon: Bell,
      bgColor: '#f8f6fa',
      iconColor: '#5e35b1',
      path: '/hr/alerts-requests',
    },
  ];

  const employeeCards: HRCard[] = [
    {
      id: 'my-requests',
      titleKey: 'hr.emp.my_requests',
      descriptionKey: 'hr.emp.my_requests_desc',
      icon: Bell,
      bgColor: '#f8f6fa',
      iconColor: '#5e35b1',
      path: '/hr/employee/my-requests',
    },
    {
      id: 'start-work',
      titleKey: 'hr.emp.start_work',
      descriptionKey: 'hr.emp.start_work_desc',
      icon: PlayCircle,
      bgColor: '#f0f7ff',
      iconColor: '#1976d2',
      path: '/hr/employee/start-work',
    },
    {
      id: 'contract-renewal',
      titleKey: 'hr.emp.contract_renewal',
      descriptionKey: 'hr.emp.contract_renewal_desc',
      icon: FileText,
      bgColor: '#fff9f0',
      iconColor: '#f57c00',
      path: '/hr/employee/contract-renewal',
    },
    {
      id: 'resignation',
      titleKey: 'hr.emp.resignation',
      descriptionKey: 'hr.emp.resignation_desc',
      icon: LogOut,
      bgColor: '#fef5f8',
      iconColor: '#c2185b',
      path: '/hr/employee/resignation',
    },
    {
      id: 'leaves-attendance',
      titleKey: 'hr.emp.leaves_attendance',
      descriptionKey: 'hr.emp.leaves_attendance_desc',
      icon: Calendar,
      bgColor: '#f5faf5',
      iconColor: '#388e3c',
      path: '/hr/employee/leaves-attendance?tab=leaves-attendance',
    },
    {
      id: 'compensatory-leave',
      titleKey: 'hr.emp.compensatory_leave',
      descriptionKey: 'hr.emp.compensatory_leave_desc',
      icon: Calendar,
      bgColor: '#e8f5e9',
      iconColor: '#2e7d32',
      path: '/hr/employee/leaves-attendance?tab=compensatory',
    },
    {
      id: 'permission-requests',
      titleKey: 'hr.emp.permission_requests',
      descriptionKey: 'hr.emp.permission_requests_desc',
      icon: Bell,
      bgColor: '#fff3e0',
      iconColor: '#e65100',
      path: '/hr/employee/leaves-attendance?tab=permission',
    },
    {
      id: 'attendance-correction',
      titleKey: 'hr.emp.attendance_correction',
      descriptionKey: 'hr.emp.attendance_correction_desc',
      icon: Calendar,
      bgColor: '#e3f2fd',
      iconColor: '#1565c0',
      path: '/hr/employee/leaves-attendance?tab=attendance-correction',
    },
    {
      id: 'remote-work-policies',
      titleKey: 'hr.emp.remote_work_policies',
      descriptionKey: 'hr.emp.remote_work_policies_desc',
      icon: BookOpen,
      bgColor: '#f0faf9',
      iconColor: '#00897b',
      path: '/hr/employee/remote-work-policies',
    },
    {
      id: 'remote-work-assignment',
      titleKey: 'hr.emp.remote_work_assignment',
      descriptionKey: 'hr.emp.remote_work_assignment_desc',
      icon: MapPin,
      bgColor: '#fffef5',
      iconColor: '#f9a825',
      path: '/hr/employee/remote-work-assignment',
    },
    {
      id: 'secondment-requests',
      titleKey: 'hr.emp.secondment_requests',
      descriptionKey: 'hr.emp.secondment_requests_desc',
      icon: Briefcase,
      bgColor: '#fce4ec',
      iconColor: '#ad1457',
      path: '/hr/employee/secondment-requests',
    },
    {
      id: 'salaries-compensations',
      titleKey: 'hr.emp.salaries_compensations',
      descriptionKey: 'hr.emp.salaries_compensations_desc',
      icon: DollarSign,
      bgColor: '#e8f5e9',
      iconColor: '#2e7d32',
      path: '/hr/employee/salaries-compensations?tab=salaries',
    },
    {
      id: 'advance-requests',
      titleKey: 'hr.emp.advance_requests',
      descriptionKey: 'hr.emp.advance_requests_desc',
      icon: DollarSign,
      bgColor: '#f1f8e9',
      iconColor: '#558b2f',
      path: '/hr/employee/salaries-compensations?tab=advances',
    },
    {
      id: 'promotion-requests',
      titleKey: 'hr.emp.promotion_requests',
      descriptionKey: 'hr.emp.promotion_requests_desc',
      icon: TrendingUp,
      bgColor: '#ede7f6',
      iconColor: '#512da8',
      path: '/hr/employee/salaries-compensations?tab=promotions',
    },
    {
      id: 'evaluations',
      titleKey: 'hr.emp.evaluations',
      descriptionKey: 'hr.emp.evaluations_desc',
      icon: Award,
      bgColor: '#faf6fb',
      iconColor: '#7b1fa2',
      path: '/hr/employee/evaluations-training?tab=evaluations',
    },
    {
      id: 'training',
      titleKey: 'hr.emp.training',
      descriptionKey: 'hr.emp.training_desc',
      icon: BookOpen,
      bgColor: '#e8eaf6',
      iconColor: '#3949ab',
      path: '/hr/employee/evaluations-training?tab=training',
    },
  ];

  const cards = viewMode === 'admin' ? adminCards : employeeCards;

  const currentFullPath = location.pathname + (location.search || '');

  // Track the last visited card based on current path
  useEffect(() => {
    if (location.pathname !== '/hr') {
      const currentCard = adminCards.find(card =>
        location.pathname === card.path || location.pathname.startsWith(card.path.split('?')[0] + '/')
      ) || employeeCards.find(card => {
        const cardPathBase = card.path.split('?')[0];
        const pathMatch = location.pathname === cardPathBase || location.pathname.startsWith(cardPathBase + '/');
        if (card.path.includes('?')) return pathMatch && currentFullPath === card.path;
        return pathMatch && !location.search;
      });
      if (currentCard) {
        setLastVisitedCard(currentCard.id);
      }
    }
  }, [location.pathname, location.search, currentFullPath, adminCards, employeeCards]);

  const isCardActive = (card: HRCard) => {
    if (location.pathname === '/hr') {
      if (lastVisitedCard) return card.id === lastVisitedCard;
      if (viewMode === 'admin') {
        return card.id === 'employee-center' || card.id === 'leaves-attendance' || card.id === 'remote-work' || card.id === 'salaries-rewards' || card.id === 'performance-development' || card.id === 'communication-library' || card.id === 'recruitment' || card.id === 'alerts-requests';
      }
      return card.id === 'my-requests';
    }
    const cardPathBase = card.path.split('?')[0];
    const pathMatch = location.pathname === cardPathBase || location.pathname.startsWith(cardPathBase + '/');
    if (card.path.includes('?')) {
      return pathMatch && currentFullPath === card.path;
    }
    return pathMatch && !location.search;
  };

  const isCardClickable = (card: HRCard) => {
    if (viewMode === 'admin') {
      return card.id === 'employee-center' || card.id === 'leaves-attendance' || card.id === 'remote-work' || card.id === 'salaries-rewards' || card.id === 'performance-development' || card.id === 'communication-library' || card.id === 'recruitment' || card.id === 'alerts-requests';
    }
    return true;
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex flex-wrap gap-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
          {cards.map((card) => (
            <MaykanaCard
              key={card.id}
              title={t(card.titleKey)}
              description={t(card.descriptionKey)}
              icon={card.icon}
              bgColor={card.bgColor}
              iconColor={card.iconColor}
              onClick={() => navigate(card.path)}
              isActive={isCardActive(card)}
              isClickable={isCardClickable(card)}
            />
          ))}
        </div>

        {/* Mode Toggler - Small and at the bottom */}
        <div className="flex justify-end mt-8">
          <div className="inline-flex rounded-md bg-gray-50 p-0.5 text-xs">
            <button
              onClick={() => setViewMode('admin')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-sm text-xs transition-all ${
                viewMode === 'admin'
                  ? 'bg-white text-[#093738] shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Shield className="w-3 h-3" />
              <span>{t('hr.admin_mode')}</span>
            </button>
            <button
              onClick={() => setViewMode('employee')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-sm text-xs transition-all ${
                viewMode === 'employee'
                  ? 'bg-white text-[#093738] shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <User className="w-3 h-3" />
              <span>{t('hr.employee_mode')}</span>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};
