import { breadcrumbRoutes } from '../config/breadcrumbs.config';
import { useLocation } from 'react-router-dom';

interface Breadcrumb {
  label: string;
  href: string;
}

export function useBreadcrumbs(): Breadcrumb[] {
  const { pathname } = useLocation();

  const pathSegments = pathname
    .split('/')
    .filter(Boolean);

  if (pathSegments.length === 0 || pathname === '/') {
    return [
      {
        label: 'sidebar.home',
        href: '/home',
      },
    ];
  }

  const breadcrumbs = pathSegments
    .map((_, index) => {
      const currentPath = '/' + pathSegments.slice(0, index + 1).join('/');

      const match = breadcrumbRoutes.find((route) => {
        if (route.path.includes(':')) {
          const routeSegments = route.path.split('/').filter(Boolean);
          const pathSegmentsSlice = pathSegments.slice(0, index + 1);
          
          if (routeSegments.length !== pathSegmentsSlice.length) {
            return false;
          }

          return routeSegments.every((segment, i) => {
            if (segment.startsWith(':')) {
              return true;
            }
            return segment === pathSegmentsSlice[i];
          });
        }
        return route.path === currentPath;
      });

      return {
        label: match?.label || null,
        href: currentPath,
      };
    })
    .filter((breadcrumb): breadcrumb is Breadcrumb => breadcrumb.label !== null);

  return breadcrumbs;
}
