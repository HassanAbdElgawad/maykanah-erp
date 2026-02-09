# Maykana ERP - Architecture Principles

## Architecture Patterns

### Page Structure Pattern
All feature pages follow a consistent structure:
1. **Listing Page**: Main table view with search, filters, and actions
2. **Create Form**: New entity creation with accordion sections
3. **Edit Form**: Entity modification (often restricted by status)
4. **Details Modal**: Read-only view in overlay modal (not separate page)

### Component Hierarchy
```
Layout (breadcrumbs, sidebar)
  └── Feature Screen
      ├── InitialFilters (search + action buttons)
      ├── Card (table container)
      │   └── Table (data display)
      │       └── Dropdown Menus (actions)
      └── Modals (details, confirmations)
```

### State Management
- **Local State**: `useState` for component-local data
- **URL State**: React Router params for IDs and navigation
- **Mock Data**: Temporary in-component data stores (will be replaced with API calls)
- **No Global State Library**: Not yet implemented (consider Context API or Zustand if needed)

## Key Design Decisions

### RTL-First Design
- All text alignment defaults to right
- Layout flows right-to-left
- Icons positioned appropriately for RTL
- `[direction:rtl]` utility classes where needed

### Arabic-Only UI
- All user-facing text in Arabic
- Translation keys used for system labels
- English only in code/comments
- IBM Plex Sans Arabic as primary font

### Modal vs Page Navigation
- **Details**: Modal overlay (quick view without navigation)
- **Edit/Create**: Dedicated page (complex forms)
- **Confirmations**: Modal overlay (destructive actions)

### Action Patterns
- **Delete**: Rarely used, prefer activate/deactivate
- **Status Toggle**: Activate/Deactivate with confirmation modals
- **Edit**: Only allowed for active/editable entities
- **View Details**: Always available regardless of status

### Dropdown Menu Positioning
- Smart positioning to stay within viewport bounds
- Checks right/left edges and adjusts
- Can position above button if no space below
- Uses `fixed` positioning with calculated coordinates
- High z-index (`z-[100]`) to overlay other content

## Styling System

### Color Palette
- **Primary**: `#093738` (dark teal green)
- **Primary Hover**: `#0a4849`
- **Success**: `#2cc28d` / `#07b664`
- **Danger/Red**: `#ff0000` / `#ef4444`
- **Background**: White with `#F1F5F980` for headers
- **Borders**: `#e2e2e2`
- **Status Active**: `bg-green-100 text-green-600`
- **Status Inactive**: `bg-red-100 text-red-600`

### Button System
Pre-defined button classes in `styles/components/buttons.ts`:
- `buttonClasses.primary` - Main actions
- `buttonClasses.secondary` - Secondary actions
- `buttonClasses.outline` - Outlined buttons
- `buttonClasses.danger` - Destructive actions
- `buttonClasses.success` - Positive actions
- `buttonClasses.ghost` - Minimal buttons
- Size variants: sm, md (default), lg

### Layout Constants
- Button height: `h-[38px]` or `h-[43px]`
- Border radius: `rounded-lg` (8px)
- Table padding: `px-4 py-3`
- Card shadows: `shadow-[0px_4px_4px_#0000001a]`
- Modal max width: `max-w-4xl` or `max-w-md` (confirmations)

## Form Patterns

### Accordion Sections
- Forms divided into logical sections
- Each section collapsible with chevron icon
- Header: `bg-[#F1F5F980]`
- Content: 4-column grid (`md:grid-cols-4`)
- First section expanded by default

### Field Layout
- 4 fields per row minimum (`md:grid-cols-4`)
- Labels: `text-sm font-medium text-[#093738]`
- Inputs: Full width with border `border-[#e2e2e2]`
- Focus ring: `focus:ring-2 focus:ring-[#093738]`

### Status Field
- Displayed as read-only badge
- Not editable checkbox
- Green badge for active: `bg-green-100 text-green-600`
- Fixed in place, always shows "نشط"

## Routing Configuration

### Pattern
```
/module → Listing page
/module/create → Create form
/module/edit/:id → Edit form  
/module/:id → Details (backup, modal preferred)
```

### Required Updates for New Feature
1. Create component files
2. Add imports in `App.tsx`
3. Add routes in `createBrowserRouter`
4. Add breadcrumb entries in `config/breadcrumbs.config.ts`
5. Add translations in `translations.json`
6. Update `completedCards` in `SettingsPage.tsx` (for settings modules)

## Data Flow (Current)
1. Mock data defined in component state
2. Operations (create, update, delete) update local state
3. Toast notifications confirm actions
4. No persistence (will be replaced with API layer)

## Constraints
- Must maintain RTL layout throughout
- All text must be Arabic in UI
- Desktop-first responsive design
- Browser support: Modern evergreen browsers
- No backend integration yet (use mock data)
