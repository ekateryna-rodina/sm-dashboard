import React from "react";

interface CardProps {
  className: string;
}
export const Card: React.FC<CardProps> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};
