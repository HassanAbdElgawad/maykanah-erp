'use client';

import { breadcrumbRoutes } from '@/domain/config/breadcrumbs';
import { useLocation } from 'react-router';

export function useBreadcrumbs() {
  const { pathname } = useLocation();

  const pathSegments = pathname
    .replace(/^\/admin/, '') // remove /admin prefix
    .split('/')
    .filter(Boolean); // remove empty strings

  if (pathSegments.length === 0) {
    return [
      {
        label: 'pages.dashboard',
        href: '/admin',
      },
    ];
  }

  const breadcrumbs = pathSegments
    .map((_, index) => {
      const currentPath =
        '/admin/' + pathSegments.slice(0, index + 1).join('/');

      const match = breadcrumbRoutes.find((route) => {
        if (route.path.includes(':slug')) {
          const slug = pathSegments[index];
          return (
            route.path.replace(':slug', slug?.toString() || '') === currentPath
          );
        }
        if (route.path.includes(':id')) {
          const id = pathSegments[index];
          return (
            route.path.replace(':id', id?.toString() || '') === currentPath
          );
        }
        return route.path === currentPath;
      });

      return {
        label: match?.label || null,
        href: currentPath,
      };
    })
    .filter((breadcrumb) => breadcrumb.label !== null);

  return breadcrumbs;
}
