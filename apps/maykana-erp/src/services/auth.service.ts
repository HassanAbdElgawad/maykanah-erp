import { STATIC_CREDENTIALS } from '@repo/utilities/constants';

interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginResponse {
  success: boolean;
  message: string;
  user?: {
    email: string;
    name: string;
    role: string;
  };
  token?: string;
}

/**
 * Static authentication service
 * In production, this will be replaced with actual API calls
 */
export const authService = {
  /**
   * Login with static credentials
   */
  login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    const { email, password } = credentials;

    // Validate credentials
    if (
      email === STATIC_CREDENTIALS.email &&
      password === STATIC_CREDENTIALS.password
    ) {
      return {
        success: true,
        message: 'تم تسجيل الدخول بنجاح',
        user: {
          email: STATIC_CREDENTIALS.email,
          name: 'مدير المتجر',
          role: 'admin',
        },
        token: 'static_token_' + Date.now(), // Generate a simple token
      };
    }

    return {
      success: false,
      message: 'البريد الإلكتروني أو كلمة المرور غير صحيحة',
    };
  },

  /**
   * Logout (clear session)
   */
  logout: async (): Promise<void> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 300));
  },
};
