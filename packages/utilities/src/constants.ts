// Application constants
export const APP_NAME = 'Maykana ERP';
export const APP_VERSION = '1.0.0';

// Static authentication credentials
export const STATIC_CREDENTIALS = {
  email: 'storeAdmin@maykana.sa',
  password: 'Admin@123',
} as const;

// Routes
export const ROUTES = {
  LOGIN: '/login-page',
  HOME: '/',
  ACCOUNTING: '/accounting',
  ACCOUNTING_ENTRIES: '/accounting4',
} as const;
