import React from "react";
import { Badge } from "./badge";


interface BadgeListProps {
  badgeNames: string[];
}

export const BadgeList: React.FC<BadgeListProps> = ({ badgeNames }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {badgeNames.map((name: string) => (
        <Badge key={name}>{name}</Badge>
      ))}
    </div>
  )
}