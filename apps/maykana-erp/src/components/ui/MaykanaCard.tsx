import * as React from "react";
import { Card } from "./card";
import { cn } from "../../lib/utils";
import { useSidebar } from "../../contexts/SidebarContext";

interface MaykanaCardProps extends React.HTMLAttributes<HTMLDivElement> {
  isActive?: boolean;
}

export const MaykanaCard = React.forwardRef<HTMLDivElement, MaykanaCardProps>(
  ({ className, isActive = false, ...props }, ref) => {
    const { isSidebarOpen } = useSidebar();
    
    return (
      <Card
        ref={ref}
        className={cn(
          "border-[#e2e2e2] bg-white",
          isSidebarOpen ? "w-[320px]" : "w-[300px]",
          isActive && "border border-[#09373890]",
          className
        )}
        {...props}
      />
    );
  }
);
MaykanaCard.displayName = "MaykanaCard";
