import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { useLanguage } from "../../contexts/LanguageContext";
import { AlertCircle } from "lucide-react";

export const ErrorPage = (): JSX.Element => {
  const navigate = useNavigate();
  const { dir } = useLanguage();

  return (
    <div
      className="flex items-center justify-center min-h-screen w-full bg-[#f7f7f9]"
      dir={dir}
    >
      <div className="flex flex-col items-center gap-6 max-w-md text-center">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
          <AlertCircle className="w-16 h-16 text-white" />
        </div>

        <div>
          <h1 className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#093738] text-3xl mb-2">
            {dir === 'rtl' ? 'خطأ 404' : 'Error 404'}
          </h1>
          <h2 className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#093738] text-xl mb-4">
            {dir === 'rtl' ? 'الصفحة غير موجودة' : 'Page Not Found'}
          </h2>
          <p className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-gray-600 text-lg">
            {dir === 'rtl' 
              ? 'عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها' 
              : 'Sorry, the page you are looking for does not exist or has been moved'}
          </p>
        </div>

        <Button
          onClick={() => navigate('/accounting')}
          className="bg-[#093738] hover:bg-[#093738]/90 text-white rounded-lg h-auto px-8 py-3"
        >
          <span className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-base">
            {dir === 'rtl' ? 'العودة إلى الصفحة الرئيسية' : 'Back to Home'}
          </span>
        </Button>
      </div>
    </div>
  );
};
