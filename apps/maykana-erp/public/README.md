# Important Tools & Utilities

This directory contains important tools, utilities, and resources for the Maykana ERP system.

## Contents

- **tools.json** - Configuration and metadata for system tools and integrations
- Place additional public resources like icons, documents, or configuration files here

## Usage

Files in this directory are publicly accessible and will be served at runtime. Access them using:

```javascript
// In your React components
fetch('/tools.json').then(res => res.json())

// Or directly via URL
http://localhost:5173/tools.json
```

## Important Notes

- Do not store sensitive information in this directory
- Files here are accessible without authentication
- All files are copied to the build output during production build
