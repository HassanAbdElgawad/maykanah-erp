// Support Page Data - Contact methods and quick links
import {
  PhoneIcon,
  MailIcon,
  MessageCircleIcon,
  FileTextIcon,
  BookOpenIcon,
  HeadphonesIcon,
} from 'lucide-react';

export interface ContactMethod {
  icon: React.ElementType;
  titleKey: string;
  valueKey: string;
  bgColor: string;
  iconColor: string;
}

export interface WorkingHour {
  dayKey: string;
  timeKey: string;
}

export interface QuickLink {
  icon: React.ElementType;
  titleKey: string;
  descKey: string;
  bgColor: string;
  iconColor: string;
}

export const SUPPORT_CONTACT_METHODS: ContactMethod[] = [
  {
    icon: PhoneIcon,
    titleKey: 'support.phone_support',
    valueKey: 'support.phone_number',
    bgColor: '#6366F11a',
    iconColor: '#6366F1',
  },
  {
    icon: MailIcon,
    titleKey: 'support.email_support',
    valueKey: 'support.email_address',
    bgColor: '#EC48991a',
    iconColor: '#EC4899',
  },
  {
    icon: MessageCircleIcon,
    titleKey: 'support.whatsapp_support',
    valueKey: 'support.whatsapp_number',
    bgColor: '#10B98114',
    iconColor: '#10B981',
  },
];

export const SUPPORT_WORKING_HOURS: WorkingHour[] = [
  {
    dayKey: 'support.working_days',
    timeKey: 'support.working_hours_time',
  },
  {
    dayKey: 'support.weekend',
    timeKey: 'support.weekend_note',
  },
];

export const SUPPORT_QUICK_LINKS: QuickLink[] = [
  {
    icon: FileTextIcon,
    titleKey: 'support.user_guide',
    descKey: 'support.user_guide_desc',
    bgColor: '#8B5CF61a',
    iconColor: '#8B5CF6',
  },
  {
    icon: BookOpenIcon,
    titleKey: 'support.training_materials',
    descKey: 'support.training_materials_desc',
    bgColor: '#F59E0B1a',
    iconColor: '#F59E0B',
  },
  {
    icon: HeadphonesIcon,
    titleKey: 'support.technical_consultation',
    descKey: 'support.technical_consultation_desc',
    bgColor: '#14B8A61a',
    iconColor: '#14B8A6',
  },
];
