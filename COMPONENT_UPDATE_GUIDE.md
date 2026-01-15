# 📚 دليل تحديث المكونات - Components Update Guide

<div dir="rtl">

## 🎯 الهدف

هذا الدليل يشرح كيفية تحديث المكونات الحالية لاستخدام البيانات المنفصلة والـ packages الجديدة.

---

## 🔄 تحديث Imports

### قبل (Old Way)
```tsx
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
```

### بعد (New Way)
```tsx
import { Button } from '@repo/ui/components/button';
import { Input } from '@repo/ui/components/input';
// أو
import { Button, Input } from '@repo/ui';
```

---

## 📊 استخدام البيانات المنفصلة

### مثال 1: صفحة Accounting

#### قبل:
```tsx
// كل البيانات داخل المكون
const featureCards = [
  {
    title: "القيود المحاسبية",
    description: "تسجيل العمليات المالية في الدفاتر.",
    // ... المزيد
  },
];

export const Accounting = () => {
  return (
    <div>
      {featureCards.map((card) => (
        <Card key={card.title}>...</Card>
      ))}
    </div>
  );
};
```

#### بعد:
```tsx
// البيانات منفصلة في ملف data
import { accountingFeatureCards } from '../../data/accounting.data';

export const Accounting = () => {
  return (
    <div>
      {accountingFeatureCards.map((card) => (
        <Card key={card.id}>...</Card>
      ))}
    </div>
  );
};
```

**الفوائد:**
- ✅ سهولة التحديث
- ✅ قابلية استبدال البيانات بـ API
- ✅ كود أنظف

---

### مثال 2: استخدام الثوابت

#### قبل:
```tsx
const ADMIN_EMAIL = "storeAdmin@maykana.sa";
const ADMIN_PASSWORD = "Admin@123";

const handleLogin = () => {
  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    // ...
  }
};
```

#### بعد:
```tsx
import { STATIC_CREDENTIALS } from '@repo/utilities/constants';

const handleLogin = () => {
  if (email === STATIC_CREDENTIALS.email && 
      password === STATIC_CREDENTIALS.password) {
    // ...
  }
};
```

---

## 🔐 استخدام Redux للمصادقة

### مثال: تحديث LoginPage

```tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { loginSuccess } from '../../store/slices/authSlice';
import { authService } from '../../services/auth.service';

export const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
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
        // حفظ في Redux
        dispatch(loginSuccess({ 
          user: response.user, 
          token: response.token 
        }));
        
        // التوجيه للصفحة الرئيسية
        navigate('/accounting');
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError('حدث خطأ أثناء تسجيل الدخول');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      {/* Form fields */}
    </form>
  );
};
```

---

## 🛡️ Protected Routes

### إنشاء Route محمي

```tsx
// في App.tsx
import { ProtectedRoute } from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/login-page",
    element: <LoginPage />,
  },
  {
    path: "/accounting",
    element: (
      <ProtectedRoute>
        <Accounting />
      </ProtectedRoute>
    ),
  },
]);
```

### استخدام Redux في المكونات

```tsx
import { useAppSelector } from '../store/hooks';

export const Header = () => {
  const user = useAppSelector((state) => state.auth.user);
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  return (
    <header>
      {isAuthenticated && (
        <div>مرحباً، {user?.name}</div>
      )}
    </header>
  );
};
```

---

## 📦 استخدام Utilities

### دوال التنسيق

```tsx
import { formatCurrency, formatDate } from '@repo/utilities/helpers';

export const InvoiceCard = ({ amount, date }) => {
  return (
    <div>
      <span>{formatCurrency(amount)}</span>
      <span>{formatDate(date)}</span>
    </div>
  );
};
```

### التحقق من الصحة

```tsx
import { validateEmail } from '@repo/utilities/helpers';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    
    if (!validateEmail(value)) {
      setEmailError('البريد الإلكتروني غير صحيح');
    } else {
      setEmailError('');
    }
  };

  return <Input onChange={handleEmailChange} error={emailError} />;
};
```

---

## 🎨 استخدام UI Components

### Button Component

```tsx
import { Button } from '@repo/ui/components/button';

// Variants
<Button variant="default">زر عادي</Button>
<Button variant="destructive">حذف</Button>
<Button variant="outline">محدد</Button>
<Button variant="ghost">شفاف</Button>

// Sizes
<Button size="sm">صغير</Button>
<Button size="default">عادي</Button>
<Button size="lg">كبير</Button>

// Loading state
<Button disabled={isLoading}>
  {isLoading ? 'جاري التحميل...' : 'تسجيل الدخول'}
</Button>
```

### Input Component

```tsx
import { Input } from '@repo/ui/components/input';

<Input
  type="email"
  placeholder="البريد الإلكتروني"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="text-right [direction:rtl]"
/>
```

### Card Component

```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@repo/ui/components/card';

<Card>
  <CardHeader>
    <CardTitle>العنوان</CardTitle>
  </CardHeader>
  <CardContent>
    المحتوى هنا
  </CardContent>
</Card>
```

---

## 🔄 استبدال Static Data بـ API (مستقبلاً)

### الخطوة 1: تحديث Service

```tsx
// من:
export const authService = {
  login: async (credentials) => {
    // Static validation
    if (credentials.email === STATIC_CREDENTIALS.email) {
      return { success: true, ... };
    }
  }
};

// إلى:
import axios from '../lib/axios';

export const authService = {
  login: async (credentials) => {
    try {
      const response = await axios.post('/auth/login', credentials);
      return { success: true, ...response.data };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }
};
```

### الخطوة 2: تحديث Redux Slice

```tsx
import { createAsyncThunk } from '@reduxjs/toolkit';
import { authService } from '../../services/auth.service';

export const loginAsync = createAsyncThunk(
  'auth/login',
  async (credentials: LoginCredentials) => {
    const response = await authService.login(credentials);
    return response;
  }
);

// في الـ slice
extraReducers: (builder) => {
  builder
    .addCase(loginAsync.pending, (state) => {
      state.loading = true;
    })
    .addCase(loginAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    })
    .addCase(loginAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
}
```

### الخطوة 3: استخدام في Component

```tsx
import { useAppDispatch } from '../../store/hooks';
import { loginAsync } from '../../store/slices/authSlice';

export const LoginPage = () => {
  const dispatch = useAppDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await dispatch(loginAsync({ email, password }));
    
    if (loginAsync.fulfilled.match(result)) {
      navigate('/accounting');
    }
  };

  return <form onSubmit={handleLogin}>...</form>;
};
```

---

## 📋 Checklist للتحديث

عند تحديث أي مكون، تأكد من:

- [ ] ✅ استبدال imports المحلية بـ @repo/*
- [ ] ✅ نقل البيانات إلى ملفات data/
- [ ] ✅ استخدام Redux للـ Global State
- [ ] ✅ إضافة Loading States
- [ ] ✅ إضافة Error Handling
- [ ] ✅ استخدام TypeScript Types
- [ ] ✅ إضافة Protected Route إذا لزم
- [ ] ✅ التأكد من RTL Support
- [ ] ✅ اختبار على Mobile

---

## 🎓 أمثلة عملية

### مثال كامل: صفحة Dashboard

```tsx
// apps/maykana-erp/src/screens/Dashboard/Dashboard.tsx
import { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@repo/ui';
import { useAppSelector } from '../../store/hooks';
import { formatCurrency } from '@repo/utilities/helpers';
import { dashboardData } from '../../data/dashboard.data';

export const Dashboard = (): JSX.Element => {
  const user = useAppSelector((state) => state.auth.user);
  const [stats, setStats] = useState(dashboardData.stats);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // في المستقبل: fetch من API
    // fetchDashboardStats();
  }, []);

  if (isLoading) {
    return <div>جاري التحميل...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 [direction:rtl]">
        مرحباً، {user?.name}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <Card key={stat.id}>
            <CardHeader>
              <CardTitle>{stat.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {formatCurrency(stat.value)}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
```

---

<div align="center">

## ✨ نصائح للنجاح

1. **ابدأ صغيراً** - حدّث مكون واحد في المرة
2. **اختبر باستمرار** - تأكد من عمل كل تغيير
3. **اتبع الأنماط** - استخدم نفس الطريقة في كل مكان
4. **استخدم TypeScript** - دائماً أضف Types
5. **راجع التوثيق** - README و STRUCTURE_GUIDE

---

**جاهز للبدء؟ ابدأ بتحديث أبسط مكون أولاً!**

</div>

</div>
