import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../store/hooks';
import { loginSuccess } from '../../store/slices/authSlice';
import { authService } from '../../services/auth.service';
import { useLanguage } from '../../contexts/LanguageContext';
import { Eye, EyeOff } from 'lucide-react';
import { LanguageSelector } from '../../components/LanguageSelector';
import { buttonClasses } from '../../styles';
import { getAuthContentSlides } from '../../data/auth.data';

const LOGIN_PAGE_FONT = 'Cairo';

export const LoginPage = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { t, dir, language } = useLanguage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const contentSlides = getAuthContentSlides(language);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await authService.login({ email, password });

      if (response.success && response.user && response.token) {
        dispatch(loginSuccess({ user: response.user, token: response.token }));
        navigate('/');
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError(t('login.login_error'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main
      className={`bg-[#f7f7f9] w-screen h-screen overflow-hidden flex`}
      style={{ fontFamily: LOGIN_PAGE_FONT }}
      // dir={dir}
    >
      {/* Form Section - Right Side */}
      <div className="relative flex-1 flex items-center justify-center p-4 sm:p-5 lg:p-[1.4vw] h-full">
        {/* Form Container */}
        <div className="relative z-[6] flex flex-col w-full max-w-[440px] sm:max-w-[500px] lg:w-[690px] xl:w-[47.9vw] xl:max-w-[900px] h-auto min-h-[calc(100%-32px)] lg:h-[calc(100%-4vh)] items-center justify-center gap-2 sm:gap-2.5 lg:gap-[1vh] px-5 sm:px-8 lg:px-[98px] xl:px-[6.8vw] py-6 sm:py-8 lg:py-12 bg-white rounded-xl border border-solid border-[#e2e2e2]">
          <div className="relative w-full max-w-[494px] lg:w-[494px] xl:w-[34.3vw] xl:max-w-[600px]">
            <div className="flex flex-col w-full items-start gap-4 sm:gap-5 lg:gap-[2vh]">
              {/* Header Section */}
              <div className="flex flex-col items-start gap-4 sm:gap-6 lg:gap-[2.5vh] self-stretch w-full">
                <div
                  className={`flex flex-col gap-2 sm:gap-3 lg:gap-[1.2vh] self-stretch w-full ${dir === 'rtl' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`self-stretch font-normal text-slate-900 text-[28px] sm:text-[32px] lg:text-[32px] xl:text-[2.2vw] xl:max-text-[42px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] tracking-[0] leading-[normal] ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
                  >
                    {language === 'ar' ? 'حسابي' : 'My Account'}
                  </div>
                  <p
                    className={`self-stretch font-normal text-slate-800 text-[18px] sm:text-[22px] lg:text-[22px] xl:text-[1.5vw] xl:max-text-[28px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] tracking-[0] leading-[normal] ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
                  >
                    {language === 'ar'
                      ? 'إدارة حساباتك وتقاريرك بسهولة واطمئنان.'
                      : 'Manage your accounts and reports with ease and peace of mind.'}
                  </p>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="w-full p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-700 text-right">{error}</p>
                  </div>
                )}

                {/* Form Fields */}
                <div className="flex flex-col items-start gap-3 sm:gap-4 lg:gap-[1.6vh] self-stretch w-full">
                  {/* Email Input */}
                  <div className="flex w-full h-[48px] sm:h-[50px] lg:h-[50px] xl:h-[4.9vh] xl:max-h-[60px] items-center justify-between px-3 sm:px-4 lg:px-[1.1vw] py-2 lg:py-[0.7vh] bg-white rounded-lg border border-solid border-[#cfcfcf]">
                    <img
                      className="relative w-5 sm:w-6 lg:w-6 xl:w-[1.7vw] xl:max-w-[28px] h-5 sm:h-6 lg:h-6 xl:h-[2.3vh] xl:max-h-[28px]"
                      alt="Email"
                      src="https://c.animaapp.com/mkkv2uxm6zE2Dt/img/vuesax-outline-sms.svg"
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={
                        language === 'ar' ? 'اكتب اسم المستخدم هنا…' : 'Enter username here…'
                      }
                      required
                      disabled={isLoading}
                      className={`flex-1 font-normal text-[#949494] text-[15px] sm:text-base lg:text-base xl:text-[1.1vw] xl:max-text-[18px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] tracking-[0] leading-[normal] bg-transparent border-none outline-none ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
                    />
                  </div>

                  {/* Password Input */}
                  <div className="flex w-full h-[48px] sm:h-[50px] lg:h-[50px] xl:h-[4.9vh] xl:max-h-[60px] items-center justify-between px-3 sm:px-4 lg:px-[1.1vw] py-2 lg:py-[0.7vh] bg-white rounded-lg border border-solid border-[#cfcfcf]">
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="relative w-5 sm:w-6 lg:w-6 xl:w-[1.7vw] xl:max-w-[28px] h-5 sm:h-6 lg:h-6 xl:h-[2.3vh] xl:max-h-[28px]"
                    >
                      {showPassword ? (
                        <EyeOff className="w-full h-full" />
                      ) : (
                        <Eye className="w-full h-full" />
                      )}
                    </button>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder={
                        language === 'ar' ? 'أدخل كلمة المرور هنا…' : 'Enter password here…'
                      }
                      required
                      disabled={isLoading}
                      className={`flex-1 font-normal text-[#949494] text-[15px] sm:text-base lg:text-base xl:text-[1.1vw] xl:max-text-[18px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] tracking-[0] leading-[normal] bg-transparent border-none outline-none ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
                    />
                  </div>
                </div>

                {/* Forgot Password & Login Button */}
                <div className="flex flex-col items-end gap-2.5 sm:gap-3 lg:gap-[1.2vh] self-stretch w-full">
                  <p
                    onClick={() => navigate('/forgot-password')}
                    className={`self-stretch font-normal text-[#11383f] text-[15px] sm:text-base lg:text-base xl:text-[1.1vw] xl:max-text-[18px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] tracking-[0] leading-[normal] cursor-pointer hover:underline ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
                  >
                    {language === 'ar' ? 'هل نسيت كلمة مرورك ؟' : 'Forgot your password?'}
                  </p>

                  <button
                    type="submit"
                    onClick={handleLogin}
                    disabled={isLoading}
                    className={buttonClasses.primary + " w-full h-[48px] sm:h-[50px] lg:h-[50px] xl:h-[4.9vh] xl:max-h-[60px] disabled:opacity-50"}
                  >
                    <div className="font-normal text-slate-50 text-[18px] sm:text-xl lg:text-xl xl:text-[1.4vw] xl:max-text-[24px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] tracking-[0] leading-[normal]">
                      {isLoading
                        ? language === 'ar'
                          ? 'جاري التحميل...'
                          : 'Loading...'
                        : language === 'ar'
                          ? 'تسجيل الدخول'
                          : 'Login'}
                    </div>
                  </button>
                </div>
              </div>

              {/* Divider */}
              <div className="flex items-center justify-center gap-2.5 sm:gap-3 lg:gap-[1vw] self-stretch w-full">
                <img
                  className="flex-1 h-px lg:h-[0.1vh] object-cover"
                  alt="Line"
                  src="https://c.animaapp.com/mkkv2uxm6zE2Dt/img/vector-5.svg"
                />
                <div className="font-normal text-black text-[15px] sm:text-base lg:text-base xl:text-[1.1vw] xl:max-text-[18px] text-center [font-family:'IBM_Plex_Sans_Arabic',Helvetica] tracking-[0] leading-[normal] whitespace-nowrap">
                  {language === 'ar' ? 'يمكنك تسجيل الدخول ب:' : 'Or login with:'}
                </div>
                <img
                  className="flex-1 h-px lg:h-[0.1vh] object-cover"
                  alt="Line"
                  src="https://c.animaapp.com/mkkv2uxm6zE2Dt/img/vector-5.svg"
                />
              </div>

              {/* Google Login Button */}
              <button
                type="button"
                className="flex h-[46px] sm:h-[49px] lg:h-[49px] xl:h-[4.8vh] xl:max-h-[60px] items-center justify-center gap-2 sm:gap-2.5 lg:gap-[0.7vw] px-6 sm:px-8 lg:px-[2.2vw] py-3 sm:py-3.5 lg:py-[1.4vh] self-stretch w-full bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <img
                  className="relative w-[17px] sm:w-[19px] lg:w-[19px] xl:w-[1.3vw] xl:max-w-[24px] h-[17px] sm:h-[19px] lg:h-[19px] xl:h-[1.9vh] xl:max-h-[24px]"
                  alt="Google"
                  src="https://c.animaapp.com/mkkv2uxm6zE2Dt/img/devicon-google.svg"
                />
                <div className="font-normal text-black text-[15px] sm:text-base lg:text-base xl:text-[1.1vw] xl:max-text-[18px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] tracking-[0] leading-[normal]">
                  {language === 'ar' ? 'تسجيل الدخول عن طريق' : 'Login with Google'}
                </div>
              </button>

              {/* Language Selector */}
              <div className="flex items-center justify-center self-stretch w-full mt-4">
                <LanguageSelector size="md" variant="default" />
              </div>
            </div>
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

        {/* Text Card - Center */}
        <div
          dir={dir}
          className="absolute  bottom-8 left-1/2 -translate-x-1/2 z-[3] flex w-[670px] h-[220px] items-center justify-center gap-[150px] px-8 py-[33px] bg-[#7f7f7f63] rounded-xl border-[0.5px] border-solid border-[#ffffff75] overflow-hidden"
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
