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
      id: 'my-profile',
      titleKey: 'hr.my_profile',
      descriptionKey: 'hr.my_profile_desc',
      icon: User,
      bgColor: '#f0f7ff',
      iconColor: '#1976d2',
      path: '/hr/my-profile',
    },
    {
      id: 'my-leaves',
      titleKey: 'hr.my_leaves',
      descriptionKey: 'hr.my_leaves_desc',
      icon: Calendar,
      bgColor: '#fff9f0',
      iconColor: '#f57c00',
      path: '/hr/my-leaves',
    },
    {
      id: 'my-attendance',
      titleKey: 'hr.my_attendance',
      descriptionKey: 'hr.my_attendance_desc',
      icon: UserCheck,
      bgColor: '#f5faf5',
      iconColor: '#388e3c',
      path: '/hr/my-attendance',
    },
    {
      id: 'my-salary',
      titleKey: 'hr.my_salary',
      descriptionKey: 'hr.my_salary_desc',
      icon: DollarSign,
      bgColor: '#fef5f8',
      iconColor: '#c2185b',
      path: '/hr/my-salary',
    },
    {
      id: 'my-requests',
      titleKey: 'hr.my_requests',
      descriptionKey: 'hr.my_requests_desc',
      icon: Bell,
      bgColor: '#f8f6fa',
      iconColor: '#5e35b1',
      path: '/hr/my-requests',
    },
    {
      id: 'my-documents',
      titleKey: 'hr.my_documents',
      descriptionKey: 'hr.my_documents_desc',
      icon: BookOpen,
      bgColor: '#f0faf9',
      iconColor: '#00897b',
      path: '/hr/my-documents',
    },
  ];

  const cards = viewMode === 'admin' ? adminCards : employeeCards;

  // Track the last visited card based on current path
  useEffect(() => {
    if (location.pathname !== '/hr') {
      const currentCard = adminCards.find(card => 
        location.pathname === card.path || location.pathname.startsWith(card.path + '/')
      ) || employeeCards.find(card => 
        location.pathname === card.path || location.pathname.startsWith(card.path + '/')
      );
      
      if (currentCard) {
        setLastVisitedCard(currentCard.id);
      }
    }
  }, [location.pathname, adminCards, employeeCards]);

  const isCardActive = (card: HRCard) => {
    // If on /hr main page, show the last visited card or default based on mode
    if (location.pathname === '/hr') {
      if (lastVisitedCard) {
        return card.id === lastVisitedCard;
      }
      // Default active cards if no previous visit
      if (viewMode === 'admin') {
        return card.id === 'employee-center' || card.id === 'leaves-attendance' || card.id === 'remote-work' || card.id === 'salaries-rewards' || card.id === 'performance-development' || card.id === 'communication-library' || card.id === 'recruitment';
      } else {
        return card.id === 'my-requests';
      }
    }
    // If on a sub-page, show that card as active
    // Check both exact match and path starts with (for sub-routes like /hr/leaves-attendance/new)
    return location.pathname === card.path || location.pathname.startsWith(card.path + '/');
  };

  const isCardClickable = (card: HRCard) => {
    if (viewMode === 'admin') {
      return card.id === 'employee-center' || card.id === 'leaves-attendance' || card.id === 'remote-work' || card.id === 'salaries-rewards' || card.id === 'performance-development' || card.id === 'communication-library' || card.id === 'recruitment';
    } else {
      return card.id === 'my-requests';
    }
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
