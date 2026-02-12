import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSelector } from '@/components/LanguageSelector';
import { buttonClasses } from '@/styles';
import { getAuthContentSlides } from '@/data/common/auth.data';

export const ForgotPasswordPage = (): JSX.Element => {
  const navigate = useNavigate();
  const { dir, language } = useLanguage();
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const contentSlides = getAuthContentSlides(language);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    try {
      // TODO: Implement forgot password API call
      // const response = await authService.forgotPassword({ emailOrUsername });
      
      // Simulated success for now
      setTimeout(() => {
        setSuccess(
          language === 'ar'
            ? 'تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني.'
            : 'A password reset link has been sent to your email.'
        );
        setIsLoading(false);
      }, 1500);
    } catch (err) {
      setError(
        language === 'ar'
          ? 'حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.'
          : 'An error occurred while sending the request. Please try again.'
      );
      setIsLoading(false);
    }
  };

  return (
    <main
      className="bg-[#f7f7f9] w-screen h-screen overflow-hidden flex"
      dir={dir}
    >
      {/* Form Section - Right Side */}
      <div className="relative flex-1 flex items-center justify-center p-4 sm:p-5 lg:p-[1.4vw] h-full">
        {/* Form Container */}
        <div className="relative z-[6] flex flex-col w-full max-w-[440px] sm:max-w-[500px] lg:w-[690px] xl:w-[47.9vw] xl:max-w-[900px] h-auto min-h-[calc(100%-32px)] lg:h-[calc(100%-4vh)] items-center justify-center gap-2 sm:gap-2.5 lg:gap-[1vh] px-5 sm:px-8 lg:px-[98px] xl:px-[6.8vw] py-6 sm:py-8 lg:py-12 bg-white rounded-xl border border-solid border-[#e2e2e2]">
          <div className="relative w-full max-w-[494px] lg:w-[494px] xl:w-[34.3vw] xl:max-w-[600px]">
            <div className="flex flex-col w-full items-start gap-4 sm:gap-5 lg:gap-[2vh]">
              {/* Header Section */}
              <div className="flex flex-col items-start gap-4 sm:gap-6 lg:gap-[2.5vh] self-stretch w-full">
                <div className={`flex flex-col gap-2 sm:gap-3 lg:gap-[1.2vh] self-stretch w-full ${dir === 'rtl' ? 'items-end' : 'items-start'}`}>
                  <div className={`self-stretch font-normal text-slate-900 text-[28px] sm:text-[32px] lg:text-[32px] xl:text-[2.2vw] xl:max-text-[42px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] tracking-[0] leading-[normal] ${dir === 'rtl' ? '[direction:rtl]' : '[direction:ltr]'}`}>
                    {language === 'ar' ? 'نسيت كلمة المرور' : 'Forgot Password'}
                  </div>
                  <p className={`self-stretch font-normal text-slate-800 text-[18px] sm:text-[22px] lg:text-[22px] xl:text-[1.5vw] xl:max-text-[28px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] tracking-[0] leading-[normal] ${dir === 'rtl' ? '[direction:rtl]' : '[direction:ltr]'}`}>
                    {language === 'ar'
                      ? 'أدخل اسم المستخدم أو البريد الإلكتروني لإعادة تعيين كلمة المرور'
                      : 'Enter your username or email to reset your password'}
                  </p>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="w-full p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className={`text-red-700 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>{error}</p>
                  </div>
                )}

                {/* Success Message */}
                {success && (
                  <div className="w-full p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className={`text-green-700 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>{success}</p>
                  </div>
                )}

                {/* Form Fields */}
                <div className="flex flex-col items-start gap-3 sm:gap-4 lg:gap-[1.6vh] self-stretch w-full">
                  {/* Email/Username Input */}
                  <div className="flex w-full h-[48px] sm:h-[50px] lg:h-[50px] xl:h-[4.9vh] xl:max-h-[60px] items-center justify-between px-3 sm:px-4 lg:px-[1.1vw] py-2 lg:py-[0.7vh] bg-white rounded-lg border border-solid border-[#cfcfcf]">
                    <img
                      className="relative w-5 sm:w-6 lg:w-6 xl:w-[1.7vw] xl:max-w-[28px] h-5 sm:h-6 lg:h-6 xl:h-[2.3vh] xl:max-h-[28px]"
                      alt="Email"
                      src="https://c.animaapp.com/mkkv2uxm6zE2Dt/img/vuesax-outline-sms.svg"
                    />
                    <input
                      type="text"
                      value={emailOrUsername}
                      onChange={(e) => setEmailOrUsername(e.target.value)}
                      placeholder={
                        language === 'ar'
                          ? 'اكتب اسم المستخدم أو البريد الإلكتروني…'
                          : 'Enter username or email...'
                      }
                      required
                      disabled={isLoading || !!success}
                      className={`flex-1 font-normal text-[#949494] text-[15px] sm:text-base lg:text-base xl:text-[1.1vw] xl:max-text-[18px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] tracking-[0] leading-[normal] ${dir === 'rtl' ? '[direction:rtl] text-right' : '[direction:ltr] text-left'} bg-transparent border-none outline-none`}
                    />
                  </div>
                </div>

                {/* Submit Button & Back Link */}
                <div className={`flex flex-col gap-2.5 sm:gap-3 lg:gap-[1.2vh] self-stretch w-full ${dir === 'rtl' ? 'items-end' : 'items-start'}`}>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={isLoading || !!success}
                    className={buttonClasses.primary + " w-full h-[48px] sm:h-[50px] lg:h-[50px] xl:h-[4.9vh] xl:max-h-[60px] disabled:opacity-50"}
                  >
                    <div className={`font-normal text-slate-50 text-[18px] sm:text-xl lg:text-xl xl:text-[1.4vw] xl:max-text-[24px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] tracking-[0] leading-[normal] ${dir === 'rtl' ? '[direction:rtl]' : '[direction:ltr]'}`}>
                      {isLoading
                        ? language === 'ar'
                          ? 'جاري الإرسال...'
                          : 'Sending...'
                        : success
                          ? language === 'ar'
                            ? 'تم الإرسال'
                            : 'Sent'
                          : language === 'ar'
                            ? 'إرسال'
                            : 'Send'}
                    </div>
                  </button>

                  <p
                    onClick={() => navigate('/login')}
                    className={`self-stretch font-normal text-[#11383f] text-[15px] sm:text-base lg:text-base xl:text-[1.1vw] xl:max-text-[18px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] tracking-[0] leading-[normal] ${dir === 'rtl' ? '[direction:rtl]' : '[direction:ltr]'} cursor-pointer hover:underline`}
                  >
                    {language === 'ar' ? 'العودة إلى تسجيل الدخول' : 'Back to login'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Language Selector at bottom */}
          <div className="flex items-center justify-center self-stretch w-full mt-4">
            <LanguageSelector size="md" variant="default" />
          </div>
        </div>

        {/* Bottom Decoration SVG - Hidden on mobile */}
        <img
          className="hidden lg:block absolute bottom-5 lg:bottom-[1.4vw] right-5 lg:right-[1.4vw] w-[688px] xl:w-[47.8vw] xl:max-w-[850px] h-[331px] xl:h-[32.3vh] xl:max-h-[420px] z-[5] object-contain"
          alt="Decoration"
          src="https://c.animaapp.com/mkkv2uxm6zE2Dt/img/frame-1171276385.svg"
        />
      </div>
      {/* Image Section - Left in RTL (Arabic), Right in LTR (English) - Hidden on mobile/tablet */}
      <div className="hidden lg:block relative w-[710px] xl:w-[49.3vw] max-w-[900px] h-full flex-shrink-0">
        {/* Background Image */}
        <img
          className="absolute top-0 left-0 w-full h-full  z-[1]"
          alt="Background"
          src="/images/login-background.jpg"
        />

        {/* Overlay SVG */}
        <img
          className="absolute top-0 left-0 w-full h-[560px] z-[4]"
          alt="Overlay"
          src="https://c.animaapp.com/mkkv2uxm6zE2Dt/img/frame-1171276389.svg"
        />

        {/* Logo - Center */}
        <img
          className="absolute top-[calc(50%-36px)] left-[17.2vw] w-[225px] xl:w-[15.6vw] xl:max-w-[280px] h-[72px] xl:h-[7vh] xl:max-h-[100px] z-[2] object-contain"
          alt="Maykana Logo"
          src="/images/logo/Maykna_Horizintal_Version_4_1.svg"
        />

        {/* Text Content Card */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[3] flex w-[670px] h-[220px] items-center gap-[41px] px-7 py-6 bg-[#093738]/60 rounded-2xl backdrop-blur-xl border border-solid border-white/10 overflow-hidden"
          style={{
            boxShadow: '0px 4px 8px 4px rgba(0, 0, 0, 0.6)',
          }}
        >
          {/* Animated Text Content */}
          <div
            className={`flex flex-col w-[447px] gap-3.5 relative overflow-hidden h-full justify-center ${dir === 'rtl' ? 'items-end' : 'items-start'}`}
          >
            {contentSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex flex-col gap-3.5 transition-all duration-700 p-2 ${dir === 'rtl' ? 'items-end' : 'items-start'} ${
                  index === currentSlide
                    ? 'opacity-100 translate-x-0'
                    : index < currentSlide
                      ? 'opacity-0 -translate-x-full'
                      : 'opacity-0 translate-x-full'
                }`}
              >
                <div
                  className={`self-stretch font-medium text-white text-[1.75rem] leading-tight [font-family:'IBM_Plex_Sans_Arabic',Helvetica] tracking-[0] ${dir === 'rtl' ? '[direction:rtl]' : '[direction:ltr]'}`}
                >
                  {slide.title}
                </div>
                <p
                  className={`self-stretch font-normal text-white text-[1.25rem] leading-relaxed [font-family:'IBM_Plex_Sans_Arabic',Helvetica] tracking-[0] ${dir === 'rtl' ? '[direction:rtl]' : '[direction:ltr]'}`}
                >
                  {slide.description}
                </p>
              </div>
            ))}

            {/* Placeholder for height */}
            <div className="opacity-0 pointer-events-none">
              <div className="font-medium text-white text-[1.75rem] leading-tight [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {contentSlides[0].title}
              </div>
              <p className="font-normal text-white text-[1.25rem] leading-relaxed [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                {contentSlides[0].description}
              </p>
            </div>
          </div>
          {/* Vertical Lines Slider */}
          <div
            className={`inline-flex items-center gap-[7px] relative flex-[0_0_auto] rotate-90 ${dir === 'rtl' ? 'ml-[-71px]' : 'mr-[-71px]'}`}
          >
            {contentSlides.map((_, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => setCurrentSlide(slideIndex)}
                className="relative h-[5px] rounded transition-all duration-1000 ease-in-out cursor-pointer hover:opacity-80"
                style={{
                  width: slideIndex === currentSlide ? '81px' : '28px',
                  backgroundColor: slideIndex === currentSlide ? '#ffffff' : '#ffffff8a',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
