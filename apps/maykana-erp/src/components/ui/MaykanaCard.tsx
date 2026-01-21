import * as React from "react";
import { Card } from "./card";
import { cn } from "../../lib/utils";

interface MaykanaCardProps extends React.HTMLAttributes<HTMLDivElement> {
  isActive?: boolean;
}

export const MaykanaCard = React.forwardRef<HTMLDivElement, MaykanaCardProps>(
  ({ className, isActive = false, ...props }, ref) => (
    <Card
      ref={ref}
      className={cn(
        "border-[#e2e2e2] bg-white w-[340px]",
        isActive && "border border-[#09373890]",
        className
      )}
      {...props}
    />
  )
);
MaykanaCard.displayName = "MaykanaCard";
