import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@repo/ui/components/button';
import { Input } from '@repo/ui/components/input';
import { useAppDispatch } from '../../store/hooks';
import { loginSuccess } from '../../store/slices/authSlice';
import { authService } from '../../services/auth.service';
import { useLanguage } from '../../contexts/LanguageContext';

// Centralized font family control for Login Page
const LOGIN_PAGE_FONT = 'Cairo';

export const LoginPage = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { t, dir } = useLanguage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
      className="bg-slate-100 w-full h-screen flex items-center justify-center overflow-hidden"
      style={{ fontFamily: LOGIN_PAGE_FONT }}
      dir={dir}
      data-model-id="2816:5017"
    >
      <div className="w-full max-w-[1440px] h-full relative flex">
        <section
          className={`w-1/2 flex items-center justify-center p-8 translate-y-[-1rem] animate-fade-in opacity-0 ${dir === 'rtl' ? 'order-1' : 'order-2'}`}
        >
          <div className="w-full max-w-[405px] flex flex-col">
            <h1
              className={`font-medium text-black text-[45px] tracking-[0] leading-[normal] mb-[27px] ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
            >
              {t('login.title')}
            </h1>

            <p
              className={`font-normal text-[#000000b2] text-2xl tracking-[0] leading-[normal] mb-[39px] ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
            >
              {t('login.subtitle')}
            </p>

            {/* Login Credentials Info */}
            <div
              className={`mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
            >
              <p className="text-blue-800 text-xs font-medium mb-1">
                {dir === 'rtl' ? 'بيانات تسجيل الدخول التجريبية:' : 'Demo Login Credentials:'}
              </p>
              <p className="text-blue-700 text-xs">
                {dir === 'rtl' ? 'الإيميل:' : 'Email:'}{' '}
                <span className="font-mono">storeAdmin@maykana.sa</span>
              </p>
              <p className="text-blue-700 text-xs">
                {dir === 'rtl' ? 'كلمة المرور:' : 'Password:'}{' '}
                <span className="font-mono">Admin@123</span>
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className={`text-red-600 text-sm ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                  {error}
                </p>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-[22px]">
              <div className="relative">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('login.username_placeholder')}
                  required
                  disabled={isLoading}
                  className={`w-full h-[50px] bg-white rounded-lg border border-[#e3e3e3] font-medium text-[#0e0d24] placeholder:text-[#949494] text-lg ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
                />
              </div>

              <div className="relative">
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t('login.password_placeholder')}
                  required
                  disabled={isLoading}
                  className={`w-full h-[50px] bg-white rounded-lg border border-[#e3e3e3] font-medium text-[#0e0d24] placeholder:text-[#949494] text-lg ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
                />
              </div>

              <button
                type="button"
                className={`font-medium text-[#11383f] text-lg tracking-[0] leading-[normal] hover:underline transition-colors ${dir === 'rtl' ? 'text-right' : 'text-left'} block`}
              >
                {t('login.forgot_password')}
              </button>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-[50px] bg-[#88de7d] hover:bg-[#7acc6f] rounded-lg font-medium text-[#11383f] text-xl tracking-[0] leading-[normal] transition-colors disabled:opacity-50"
              >
                {isLoading ? t('login.login_loading') : t('login.login_button')}
              </Button>
            </form>

            <p className="text-center font-medium text-black text-[17px] tracking-[0] leading-[normal] mt-[60px] mb-[20px]">
              {t('login.login_with')}
            </p>

            <div className="space-y-[18px]">
              <Button
                variant="outline"
                className="w-full h-[49px] bg-white rounded-lg border border-[#11383f] flex items-center justify-center gap-2 px-[30px] py-2.5 hover:bg-gray-50 transition-colors"
              >
                <span
                  className={`font-medium text-black text-base tracking-[0] leading-[normal] ${dir === 'rtl' ? 'order-1' : 'order-2'}`}
                >
                  {t('login.login_nafath')}
                </span>
                <img
                  className={`w-[30.92px] h-[30.92px] rounded-[256px] object-cover ${dir === 'rtl' ? 'order-2' : 'order-1'}`}
                  alt="Nafath logo"
                  src="https://c.animaapp.com/mkd2vucjeF4nNd/img/image-7-1.png"
                />
              </Button>

              <Button
                variant="outline"
                className="w-full h-[49px] bg-white rounded-lg border border-[#11383f] flex items-center justify-center gap-2 px-[30px] py-2.5 hover:bg-gray-50 transition-colors"
              >
                <span
                  className={`font-medium text-black text-base tracking-[0] leading-[normal] ${dir === 'rtl' ? 'order-1' : 'order-2'}`}
                >
                  {t('login.login_nafath')}
                </span>
                <img
                  className={`w-[30.92px] h-[30.92px] rounded-[256px] object-cover ${dir === 'rtl' ? 'order-2' : 'order-1'}`}
                  alt="Nafath logo"
                  src="https://c.animaapp.com/mkd2vucjeF4nNd/img/image-7-1.png"
                />
              </Button>
            </div>
          </div>
        </section>

        <section
          className={`w-1/2 relative rounded-2xl overflow-hidden ${dir === 'rtl' ? 'order-2' : 'order-1'}`}
        >
          <img
            className="absolute inset-0 w-full h-full object-cover"
            alt="Background"
            src="https://c.animaapp.com/mkd2vucjeF4nNd/img/rectangle-84.png"
          />

          <div
            className="absolute inset-0 w-full h-full"
            style={{
              background: "url('https://c.animaapp.com/mkd2vucjeF4nNd/img/rectangle-85.png')",
            }}
          />

          <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <img
              className="w-[247px] h-[79px] mb-[40px]"
              alt="Maykna logo"
              src="/images/logo/Maykna_Horizintal_Version_4_1.svg"
            />

            <h2 className="font-medium text-white text-[39px] text-center tracking-[0] leading-[normal] mb-[16px]">
              {t('login.right_title')}
            </h2>

            <p className="max-w-[350px] font-normal text-[#ffffffb2] text-2xl text-center tracking-[0] leading-[normal]">
              {t('login.right_subtitle')}
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};
