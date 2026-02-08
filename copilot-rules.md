# Maykana ERP - Coding Rules & Assistant Guidelines

## Coding Style

### TypeScript
- Use explicit interfaces for all data models
- Prefer `type` for unions, `interface` for objects
- Enable strict mode checks
- Avoid `any` - use `unknown` if type is truly unknown
- Use descriptive variable names in Arabic context (e.g., `handleEdit`, `confirmDeactivate`)

### React Patterns
```typescript
// Prefer functional components with hooks
export const ComponentName = (): JSX.Element => {
  // State declarations
  const [state, setState] = useState<Type>(initialValue);
  
  // Event handlers
  const handleAction = () => {
    // Logic here
  };
  
  // Effects
  useEffect(() => {
    // Side effects
  }, [dependencies]);
  
  // Render
  return (
    <Layout>
      {/* Component JSX */}
    </Layout>
  );
};
```

### Component Organization
1. Imports (grouped: React, third-party, local)
2. Interfaces/Types
3. Component declaration
4. State declarations
5. Derived state/computed values
6. Event handlers
7. Effects
8. JSX return

### Naming Conventions
- **Components**: PascalCase (e.g., `AssetLocations`)
- **Files**: PascalCase for components (e.g., `AssetLocations.tsx`)
- **Functions**: camelCase (e.g., `handleViewDetails`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `MOCK_DATA`)
- **Interfaces**: PascalCase (e.g., `AssetLocation`)
- **State**: descriptive camelCase (e.g., `isDetailsModalOpen`)

## Do's ✅

1. **Always use Arabic for UI text**
   - Labels, buttons, placeholders, messages
   - Keep code comments and logic in English

2. **Follow established patterns**
   - Check existing similar components before creating new ones
   - Reuse layout, card, modal patterns
   - Maintain consistency in button styles and positioning

3. **Use design system values**
   - Colors from defined palette
   - Button classes from `buttonClasses`
   - Spacing and sizing from established patterns

4. **Handle edge cases**
   - Empty states with helpful messages
   - Loading states (when API integration comes)
   - Error boundaries for robustness

5. **Smart positioning for overlays**
   - Calculate viewport boundaries
   - Adjust position to stay on screen
   - Use high z-index for dropdown menus

6. **Implement confirmation modals**
   - For destructive/important actions
   - Clear messaging about consequences
   - Cancel + Confirm options

7. **Toast notifications**
   - Success messages for completed actions
   - Auto-dismiss after 3 seconds
   - Include close button

8. **Accessibility considerations**
   - Proper ARIA labels (when not conflicting with RTL)
   - Keyboard navigation support
   - Focus management for modals

## Don'ts ❌

1. **Never mix English in UI**
   - No English labels, buttons, or messages visible to users
   - Keep all user-facing text in Arabic

2. **Don't break RTL layout**
   - Test that icons, dropdowns, modals work correctly in RTL
   - Ensure text alignment is always right-aligned

3. **Don't use inline styles unless necessary**
   - Prefer Tailwind classes
   - Use inline only for dynamic positioning (modals, dropdowns)

4. **Don't create separate detail pages**
   - Use modal overlays for view details
   - Only edit/create get dedicated pages

5. **Don't hardcode dimensions unnecessarily**
   - Use established height/width patterns
   - Rely on Tailwind responsive classes

6. **Don't ignore TypeScript errors**
   - Fix type issues, don't suppress
   - Add proper type annotations

7. **Don't delete entities directly**
   - Prefer activate/deactivate pattern
   - Soft delete approach for data integrity

8. **Don't nest modals**
   - One modal at a time
   - Close previous before opening next

## Assistant Behavior Guidelines

### When Creating New Features

1. **Analyze existing patterns first**
   - Look at similar components (e.g., AssetCategories, AssetLocations)
   - Match design patterns precisely
   - Reuse established utilities and components

2. **Ask for clarification only when critical**
   - Missing business logic requirements
   - Ambiguous design specifications
   - Conflicting patterns in codebase

3. **Implement completely**
   - Don't create placeholder code
   - Include all CRUD operations
   - Add necessary routes, breadcrumbs, translations
   - Update settings cards if in settings module

4. **Check for errors immediately**
   - Use `get_errors` tool after file creation/edit
   - Fix TypeScript/import errors before moving on
   - Verify no broken references

### When Modifying Existing Code

1. **Read surrounding context**
   - Check current file structure
   - Understand existing state management
   - Note current patterns and follow them

2. **Use `multi_replace_string_in_file` for multiple edits**
   - More efficient than sequential replacements
   - Batch related changes together

3. **Include context in replacements**
   - 3-5 lines before and after target
   - Ensure unique match (no ambiguity)

4. **Test the change mentally**
   - Would this break existing functionality?
   - Does it maintain consistent patterns?
   - Is RTL layout preserved?

### Communication Style

1. **Be concise**
   - No unnecessary explanations
   - Skip "I will now..." preambles
   - Confirm completion briefly

2. **Use structured updates**
   - ✅ for completed items
   - 🔄 for in-progress
   - ⏳ for pending

3. **Respond in Arabic when user writes Arabic**
   - Match user's language preference
   - Keep technical terms in English when appropriate

4. **Don't ask permission**
   - Use tools as needed
   - Proceed with implementation
   - Report results after completion

### Error Handling

1. **Always check errors after edits**
   ```typescript
   get_errors(["path/to/edited/file.tsx"])
   ```

2. **Fix import issues immediately**
   - Verify correct import paths
   - Check component exports
   - Ensure buttonClasses imports from correct location

3. **Handle TypeScript errors**
   - Don't ignore warnings
   - Add proper type annotations
   - Remove unused imports/variables

## File Structure Best Practices

### New Feature Checklist
When adding new feature like "Asset Maintenance":

- [ ] Create `AssetMaintenance.tsx` (listing)
- [ ] Create `AssetMaintenanceForm.tsx` (create)
- [ ] Create `AssetMaintenanceEdit.tsx` (edit)
- [ ] Add imports in `App.tsx`
- [ ] Add 3 routes in `App.tsx`
- [ ] Add breadcrumb entries in `breadcrumbs.config.ts`
- [ ] Add translations in `translations.json`
- [ ] Update `completedCards` in `SettingsPage.tsx` (if settings)
- [ ] Check for errors
- [ ] Verify all pages load correctly

### Import Order
```typescript
// 1. React & Router
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// 2. Local components
import { Layout } from '../../components/Layout';
import { Card } from '../../components/ui/card';

// 3. Icons
import { Icon1, Icon2 } from 'lucide-react';

// 4. Utilities & Styles
import { buttonClasses } from '../../styles/components/buttons';
```

## Performance Considerations

- Minimize re-renders with proper useEffect dependencies
- Memoize expensive computations with useMemo (when needed)
- Lazy load routes for code splitting (future optimization)
- Debounce search inputs for better UX (when API connected)

## Future API Integration Notes

When backend is ready:
- Replace mock data with API calls
- Add loading states
- Add error handling with try/catch
- Implement proper error messages
- Add retry logic for failed requests
- Use React Query or SWR for data fetching (TBD)
