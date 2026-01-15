import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { useLanguage } from "../../contexts/LanguageContext";

interface ComingSoonProps {
  pageName?: string;
}

export const ComingSoon = ({ pageName }: ComingSoonProps): JSX.Element => {
  const navigate = useNavigate();
  const { dir } = useLanguage();

  return (
    <div
      className="flex items-center justify-center min-h-screen w-full bg-[#f7f7f9]"
      dir={dir}
    >
      <div className="flex flex-col items-center gap-6 max-w-md text-center">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#093738] to-[#0b5456] flex items-center justify-center">
          <svg
            className="w-16 h-16 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <div>
          <h1 className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#093738] text-3xl mb-2">
            {dir === 'rtl' ? 'قيد الإنشاء' : 'Coming Soon'}
          </h1>
          {pageName && (
            <h2 className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#093738] text-xl mb-4">
              {pageName}
            </h2>
          )}
          <p className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-gray-600 text-lg">
            {dir === 'rtl' 
              ? 'هذه الصفحة قيد التطوير وستكون متاحة قريباً' 
              : 'This page is under development and will be available soon'}
          </p>
        </div>

        <Button
          onClick={() => navigate('/')}
          className="bg-[#093738] hover:bg-[#093738]/90 text-white rounded-lg h-auto px-8 py-3"
        >
          <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-base">
            {dir === 'rtl' ? 'العودة إلى الرئيسية' : 'Back to Home'}
          </span>
        </Button>
      </div>
    </div>
  );
};
