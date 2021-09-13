import React from "react";
import { Platform } from "../../constants/platforms";
import { Progress } from "../../constants/progress";

interface OverviewCardProps {
  username: string;
  platform: Platform;
  followers: number;
  progress: Progress;
}
const OverviewCard = (props: OverviewCardProps) => {
  return <div></div>;
};

export default OverviewCard;
