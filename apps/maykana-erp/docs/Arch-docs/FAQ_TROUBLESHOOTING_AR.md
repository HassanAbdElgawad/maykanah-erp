# Micro-Frontend Architecture - الأسئلة الشائعة و Troubleshooting

## 🤔 الأسئلة الشائعة (FAQ)

### 1. كيف أبدأ بتطوير MFE جديد؟

**الخطوات:**
1. تحديد Domain (مثل: HR, Sales, Finance)
2. تسجيل Module Manifest مع Shell
3. تنفيذ Mount function
4. بناء Pages تحت Base Route المخصص (/module/*)
5. تطبيق Clean Architecture الداخلية
6. اختبار Integration مع Shell

**مثال البدء:**
```typescript
// Step 1: Create Manifest
export const NewModuleManifest = {
  id: 'mfe-newmodule',
  name: 'New Module',
  baseRoute: '/newmodule',
  permissions: ['newmodule.view'],
  mount: (hostContext, container) => {
    // Mount logic هنا
  }
};

// Step 2: Register with Shell
shellContext.registerModule(NewModuleManifest);
```

---

### 2. كيف أتواصل بين MFEs؟

**الممنوع ❌:**
```typescript
// لا تستورد من MFE أخرى مباشرة
import { ServiceX } from '@mfe-other/application'; // Wrong!
```

**الصحيح ✅:**
```typescript
// Option 1: عبر Shell Shared Services
const someService = useShellService('some-service');

// Option 2: عبر API calls
const response = await fetch('/api/other-module/data');

// Option 3: عبر Events (if Shell provides event bus)
shellContext.emit('module-event', data);
```

---

### 3. أين أضع الكود المشترك؟

**الهيكل الصحيح:**
```
packages/
├── ui/                    # Shared UI Components (Atoms, Molecules)
├── utilities/             # Shared utilities (formatters, validators)
├── design-system/         # Theme tokens, design specifications
└── types/                 # Common TypeScript types

apps/
├── maykana-erp/          # Shell/Host Application
│   └── src/
│       ├── shell/        # Platform orchestration
│       ├── layout/       # Global layout components
│       └── providers/    # Global providers setup
└── mfe-inventory/        # Each MFE is independent
└── mfe-hr/
```

**ملاحظة:** لا تضع Domain Business Logic في Shared Layer

---

### 4. كيف أتعامل مع Form Validation عبر المجالات؟

**كل MFE يملك Validation الخاصة:**
```typescript
// Inside MFE-Inventory (Domain Layer)
export class ItemValidator {
  validateItemName(name: string): ValidationResult {
    if (name.length < 3) {
      return { isValid: false, message: 'Name too short' };
    }
    return { isValid: true };
  }
}

// Use في Application Layer
const useCase = new CreateItemUseCase(
  repository,
  itemValidator  // injected
);
```

**Backend يبقى مصدر الحقيقة:**
- Frontend validation = UX improvement فقط
- Backend validation = Security requirement

---

### 5. كيف أتابع Performance في الإنتاج؟

**استخدم Telemetry:**
```typescript
// Track MFE load time
telemetry.trackEvent('MFE.LoadTime', {
  moduleId: 'mfe-inventory',
  duration: 2500, // ms
  success: true
});

// Track API calls
telemetry.trackEvent('API.Call', {
  endpoint: '/api/items',
  duration: 450,
  status: 200
});

// Track errors
telemetry.trackError('MFE.Error', {
  moduleId: 'mfe-sales',
  error: 'ReferenceError',
  stack: '...'
});
```

---

### 6. أحتاج MFE يستخدم Library معينة، هل أضيفها كـ dependency؟

**الإجابة: يعتمد**

**اضفها locally إذا:**
- Domain-specific (مثل: Chart library خاص بـ Finance)
- منخفض الحجم
- لن تُستخدم من MFEs أخرى

**اضفها في Shared إذا:**
- مستخدمة من عدة MFEs (مثل: React Query, Redux)
- عالية الأهمية (مثل: Authentication libs)
- یتحتاج إلى Version Consistency

---

### 7. كيفية التعامل مع Tenant Context؟

```typescript
// Tenant context يأتي من Shell
const { useHostContext } = useShell();
const { tenant, user, locale } = useHostContext();

// استخدمه في API calls
const items = await fetch(
  `/api/inventory/items?tenantId=${tenant.id}`
);

// لا تخزن tenant context locally بدون حاجة
// Shell يكون مصدر الحقيقة
```

---

### 8. كيف أختبر MFE في عزلة عن Shell؟

```typescript
// Create Mock Host Context
const mockHostContext = {
  user: { id: '1', name: 'Test User' },
  tenant: { id: '1', name: 'Test Tenant' },
  theme: { mode: 'light' },
  telemetry: { trackEvent: jest.fn() }
};

// Mount MFE with mock context
await renderWithContext(<InventoryMFE />, mockHostContext);

// Test الـ MFE logic المستقل
expect(screen.getByText('Items')).toBeInTheDocument();
```

---

### 9. Shell الخاص بي بطيء، كيف أحسنه؟

**الحلول:**
1. **Lazy load MFEs:**
   ```typescript
   const MFE = React.lazy(() => import('./MFE-Inventory'));
   ```

2. **Parallel initialization:**
   ```typescript
   // لا تحمل sequentially
   await Promise.all([
     initAuth(),
     initTheme(),
     initProviders()
   ]);
   ```

3. **Cache MFE manifests:**
   ```typescript
   // Cache manifests for 1 hour
   cache.set('mfe-manifests', manifests, 3600000);
   ```

4. **Prefetch MFE bundles:**
   ```typescript
   // Prefetch when user hovers on menu
   onMenuItemHover(() => {
     prefetchMFEBundle(moduleId);
   });
   ```

---

### 10. كيف أضيف New Permission System؟

```typescript
// 1. Define permission في MFE Manifest
export const InventoryManifest = {
  permissions: ['inventory.view', 'inventory.edit', 'inventory.delete']
};

// 2. Shell يتحقق من permissions
if (!userHasPermission('inventory.edit')) {
  return <NoAccess />;
}

// 3. داخل MFE، استخدم permission context
const { hasPermission } = usePermissions();
return (
  <>
    <ItemList read={hasPermission('inventory.view')} />
    <EditButton enabled={hasPermission('inventory.edit')} />
  </>
);

// 4. Backend يفرض الأذونات (مهم جداً!)
@Authorized(['inventory.edit'])
@Post('/api/items')
async createItem(command: CreateItemCommand) {
  // ...
}
```

---

## 🔧 Troubleshooting

### Problem 1: MFE لا تحمل، Shell يعرض فارغ

**الأسباب المحتملة:**
1. MFE bundle path incorrect
2. Mount function crash
3. Host context missing

**الحل:**
```typescript
// استخدم Error Boundary
<ErrorBoundary 
  onError={(error) => {
    console.error('MFE Error:', error);
    telemetry.trackError('MFE.Mount.Failed', error);
  }}
>
  <MFEContainer />
</ErrorBoundary>

// تحقق من الـ console
// اختبر MFE بمعزل عن Shell
// Verify Network requests
```

---

### Problem 2: State تتغير في MFE واحد، MFEs الأخرى لا تنعكس التغييرات

**المشكلة:** محاولة مشاركة state بين MFEs

**الحل الصحيح:**
```typescript
// استخدم API calls بدل direct state sharing
// MFE-1 يحدث data
await updateItemAPI(item);

// MFE-2 تحصل على data update عبر:
// 1. Polling
// 2. WebSocket
// 3. Shell Event Bus
```

---

### Problem 3: Memory leak عند unmount MFE

**المشكلة:** Resources لم تُنظف عند unmount

**الحل:**
```typescript
// في MFE unmount function
export const unmount = () => {
  // Clear subscriptions
  subscriptions.forEach(sub => sub.unsubscribe());
  
  // Clear timers
  clearAllTimers();
  
  // Clear cached data
  cache.clear();
  
  // Unmount React root
  root.unmount();
};
```

---

### Problem 4: CORS errors عند MFE API calls

**المشكلة:** Cross-Origin request blocked

**الحل:**
```typescript
// Backend يجب يسمح CORS
app.use(cors({
  origin: ['https://erp-platform.com', 'https://erp-mfe.example.com'],
  credentials: true
}));

// أو استخدم API proxy في Shell
// Shell عندها Same Origin مع جميع APIs
```

---

### Problem 5: Telemetry events لا تظهر في Dashboard

**تحقق من:**
```typescript
// 1. Telemetry service initialized
if (!telemetry) {
  console.error('Telemetry not initialized');
}

// 2. Correct event format
telemetry.trackEvent('EventName', {
  moduleId: 'mfe-inventory',
  property: 'value'
});

// 3. Network request sent (check Network tab)
// 4. Backend receiving and storing events
```

---

### Problem 6: Theme changes لا تنطبق على MFE

**المشكلة:** MFE لم تشترك في theme provider updates

**الحل:**
```typescript
// استخدم theme provider من Shell
const { theme } = useHostContext();

// اشترك في theme changes
useEffect(() => {
  applyTheme(theme);
}, [theme]);

// استخدم CSS variables
const styles = css`
  background: var(--primary-color);
  color: var(--text-color);
`;
```

---

### Problem 7: Bundle size MFE كبير جداً

**تقليل الحجم:**

1. **Analyze bundle:**
   ```bash
   npm install -g webpack-bundle-analyzer
   webpack-bundle-analyzer dist/stats.json
   ```

2. **Remove unused dependencies:**
   ```bash
   npm prune
   npm audit
   ```

3. **Code splitting:**
   ```typescript
   const HeavyComponent = React.lazy(() => 
     import('./HeavyComponent')
   );
   ```

4. **Externalize shared libs:**
   ```javascript
   // webpack.config.js
   externals: {
     'react': 'React',
     'react-dom': 'ReactDOM'
   }
   ```

---

### Problem 8: Permission check في Frontend كافية؟

**الإجابة: لا! ❌**

**يجب تطبيق Permission checks على:**
1. ✅ Frontend (UX improvement)
2. ✅ Backend (Security enforcement)

```typescript
// Frontend hides button
if (!hasPermission('delete')) return null; // UX

// Backend enforces
@Authorize('delete')
async delete(id) { ... } // Security ✓
```

---

## 📞 معلومات إضافية

### أين أجد المراجع التفصيلية؟
- الملف الرئيسي: `Micro Frontend Architecture AR.html`
- الملخص: `ARCHITECTURE_SUMMARY_AR.md`

### كيف أساهم في تحسين المعمارية؟
1. Report issues في الوثيقة
2. اقترح Best Practices جديدة
3. شارك examples من الأنتاج

### أين أسأل عن مشاكل محددة؟
- فريق Architecture
- Documentation صفحة GitHub
- Internal Wiki

---

**آخر تحديث:** February 22, 2026
**الإصدار:** 1.0

