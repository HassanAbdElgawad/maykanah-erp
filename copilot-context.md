# Maykana ERP - Project Context

## Project Overview
Maykana ERP is an Arabic-first enterprise resource planning system targeting Saudi Arabian and Middle Eastern markets. The system provides comprehensive modules for accounting, purchases, sales, assets, HR, strategy, competitions, warehouses, and workflow management.

## Domain & Purpose
- **Primary Market**: Saudi Arabia and Arabic-speaking regions
- **Language**: Arabic as primary interface language (RTL layout)
- **Target Users**: Medium to large enterprises requiring integrated business management
- **Key Modules**:
  - Accounting (entries, vouchers, custody)
  - Purchases (invoices, orders, suppliers)
  - Sales (customers, quotes, invoices)
  - Assets (management, movements, maintenance)
  - HR (employees, administration)
  - Strategy (projects, plans, meetings, documents)
  - Competitions (tenders, vendor management)
  - Warehouses (inventory, materials)
  - Workflow Engine

## Tech Stack

### Frontend
- **Framework**: React 18+ with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Font**: IBM Plex Sans Arabic

### Project Structure
- **Monorepo**: Turborepo with pnpm workspaces
- **Main App**: `apps/maykana-erp`
- **Shared Packages**:
  - `packages/ui` - Shared UI components
  - `packages/utilities` - Helper functions
  - `packages/eslint-config` - Linting configuration
  - `packages/typescript-config` - TypeScript configurations

### Environment & Tooling
- **Package Manager**: pnpm
- **Node Version**: TBD
- **Dev Server**: Vite dev server (default port 5173)
- **Deployment Platform**: Vercel (based on vercel.json presence)

## Key Directories
```
apps/maykana-erp/
├── src/
│   ├── screens/          # Feature modules (Accounting, Sales, Assets, etc.)
│   ├── components/       # Shared components (Layout, InitialFilters, Card, etc.)
│   ├── contexts/         # React contexts (LanguageContext, etc.)
│   ├── config/           # Configuration files (breadcrumbs, etc.)
│   ├── styles/           # Style definitions (buttons, etc.)
│   └── App.tsx           # Main routing configuration
├── public/               # Static assets
└── index.html           # Entry HTML
```

## Current Focus
Purchases module RTL standardization and UI consistency completed.
Settings module implementation with focus on:
- Asset Categories (completed)
- Asset Locations (completed)
- Maintenance Team (pending)
- Additional settings sub-modules (accounting, sales, etc.)

## Established Component Patterns

### Core Shared Components

1. **Layout** (`components/Layout.tsx`)
   - Main wrapper for all pages
   - Provides consistent structure with sidebar and header
   - Handles RTL direction context

2. **InitialFilters** (`components/InitialFilters.tsx`)
   - Header card component for pages with navigation
   - Contains: back button + title on left, action buttons on right
   - Usage: Report pages, list pages with breadcrumb navigation
   - Pattern:
     ```tsx
     <InitialFilters>
       <div className="flex items-center gap-3">{/* Back + Title */}</div>
       <div className="flex items-center gap-2">{/* Action Buttons */}</div>
     </InitialFilters>
     ```

3. **Card Components** (`components/ui/card.tsx`)
   - Reusable card wrapper with consistent styling
   - Used for: modal content, panel sections, empty states

4. **Button Classes** (`styles/components/buttons.ts`)
   - `buttonClasses.primary` - Primary action buttons
   - `buttonClasses.secondary` - Secondary action buttons
   - Import: `import { buttonClasses } from '../../styles';`

### UI Patterns

#### RTL Layout Standard (Purchases Module)
All list pages follow this structure:
- Container with `dir={dir}` or `dir="rtl"`
- Search bar positioned FIRST (appears right in RTL)
- Action buttons positioned SECOND (appears left in RTL)
- Button order: Show/Hide Columns → Filter → Export → Create New (always last)
- Consistent heights: `h-[43px]` or `h-[45px]`
- Icon sizes: `w-4 h-4` or `w-3.5 h-3.5`

#### Settings Module Pattern
- Card-based navigation from SettingsPage
- Dedicated screens folder for each sub-module
- Three-tier structure: List → Form (Create) → Edit
- Modal for view details (not separate page)
- Confirmation modals for important actions
- Toast notifications for status changes

#### Dropdown Positioning System
- Fixed positioning with viewport boundary detection
- Dynamic calculation based on button position
- High z-index (`z-[100]` or `z-20`) for overlays
- Outside-click handler to close dropdown

#### Empty States
- Centered illustration (SVG or icon)
- Descriptive message in Arabic
- Call-to-action button
- Full-width card container

### Navigation & Routing

#### Breadcrumb System
- Configuration: `config/breadcrumbs.config.ts`
- Pattern: `{ path: "/module/sub-page", label: "translation.key" }`
- Translation keys use dot notation
- Automatic breadcrumb generation from route

#### Route Structure
Typical module routes:
```typescript
<Route path="/module" element={<ModulePage />} />
<Route path="/module/sub-list" element={<SubList />} />
<Route path="/module/sub/create" element={<SubForm />} />
<Route path="/module/sub/edit/:id" element={<SubEdit />} />
```

### State Management Approach

Currently using **React local state** with hooks:
- `useState` for component state
- `useRef` for DOM references (dropdowns, modals)
- `useEffect` for side effects (outside click handlers)
- No global state library yet (may need later)

### Data Flow (Current - Mock Data)
- Mock data arrays defined in component files
- State managed locally with `useState`
- No API integration yet
- Actions simulate updates to local state

**Future**: Will replace with API calls and proper state management
