import { Layout } from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import {
  PhoneIcon,
  MailIcon,
  MessageCircleIcon,
  ClockIcon,
  MapPinIcon,
  HeadphonesIcon,
  FileTextIcon,
  BookOpenIcon,
} from 'lucide-react';

export const SupportPage = (): JSX.Element => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const contactMethods = [
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

  const workingHours = [
    {
      dayKey: 'support.working_days',
      timeKey: 'support.working_hours_time',
    },
    {
      dayKey: 'support.weekend',
      timeKey: 'support.weekend_note',
    },
  ];

  const quickLinks = [
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

  return (
    <Layout>
      <div className="space-y-6 animate-fade-in opacity-0 [--animation-delay:200ms]">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-[#093738] to-[#104633] rounded-lg p-8 text-white">
          <div className={`flex items-center gap-3 mb-3 ${isRTL ? 'flex-row' : ''}`}>
            <HeadphonesIcon className="w-8 h-8" />
            <h1 className="text-2xl font-bold">{t('support.page_title')}</h1>
          </div>
          <p className="text-white/90 text-lg">{t('support.page_subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Contact Methods */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <h2 className="text-xl font-semibold text-[#093738] mb-4 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('support.contact_methods')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center p-4 rounded-lg border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-3"
                      style={{ backgroundColor: method.bgColor }}
                    >
                      <method.icon className="w-8 h-8" style={{ color: method.iconColor }} />
                    </div>
                    <h3 className="font-semibold text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {t(method.titleKey)}
                    </h3>
                    <p className="text-sm text-[#5f6c72] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium">
                      {t(method.valueKey)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Form */}
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <h2 className="text-xl font-semibold text-[#093738] mb-4 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('support.submit_request')}
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    {t('support.full_name')}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#093738] focus:border-transparent"
                    placeholder={t('support.full_name_placeholder')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    {t('support.email')}
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#093738] focus:border-transparent"
                    placeholder={t('support.email_placeholder')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    {t('support.subject')}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#093738] focus:border-transparent"
                    placeholder={t('support.subject_placeholder')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#093738] mb-2 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    {t('support.message')}
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#093738] focus:border-transparent resize-none"
                    placeholder={t('support.message_placeholder')}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#093738] text-white py-3 rounded-lg hover:bg-[#104633] transition-colors font-semibold [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
                >
                  {t('support.send_request')}
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Working Hours */}
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <div className={`flex items-center gap-2 mb-4 ${isRTL ? 'flex-row' : ''}`}>
                <ClockIcon className="w-5 h-5 text-[#093738]" />
                <h3 className="text-lg font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  {t('support.working_hours_title')}
                </h3>
              </div>
              <div className="space-y-3">
                {workingHours.map((item, index) => (
                  <div key={index} className="flex flex-col gap-1">
                    <p className="text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {t(item.dayKey)}
                    </p>
                    <p className="text-sm text-[#5f6c72] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {t(item.timeKey)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <div className={`flex items-center gap-2 mb-4 ${isRTL ? 'flex-row' : ''}`}>
                <MapPinIcon className="w-5 h-5 text-[#093738]" />
                <h3 className="text-lg font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                  {t('support.our_location')}
                </h3>
              </div>
              <p className="text-sm text-[#5f6c72] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] leading-relaxed">
                {t('support.address')}
              </p>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-[#093738] mb-4 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {t('support.quick_links')}
              </h3>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-start"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: link.bgColor }}
                    >
                      <link.icon className="w-5 h-5" style={{ color: link.iconColor }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-[#093738] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] truncate">
                        {t(link.titleKey)}
                      </p>
                      <p className="text-xs text-[#5f6c72] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] truncate">
                        {t(link.descKey)}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
