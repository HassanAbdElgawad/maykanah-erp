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
Settings module implementation with focus on:
- Asset Categories (completed)
- Asset Locations (completed)
- Maintenance Team (pending)
- Additional settings sub-modules (accounting, sales, etc.)
