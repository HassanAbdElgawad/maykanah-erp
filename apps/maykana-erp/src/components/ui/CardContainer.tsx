import * as React from 'react';
import { Card } from './card';
import { cn } from '../../lib/utils';

interface CardContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  isActive?: boolean;
  children: React.ReactNode;
}

export const CardContainer = React.forwardRef<HTMLDivElement, CardContainerProps>(
  ({ className, isActive = false, children, ...props }, ref) => {
    return (
      <Card
        ref={ref}
        className={cn(
          'border-[#e2e2e2] bg-white w-full',
          isActive && 'border border-[#09373890]',
          className
        )}
        {...props}
      >
        {children}
      </Card>
    );
  }
);

CardContainer.displayName = 'CardContainer';
