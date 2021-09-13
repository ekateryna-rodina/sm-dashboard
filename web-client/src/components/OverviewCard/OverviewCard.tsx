import React from "react";
import Platforms, { Platform } from "../../constants/platforms";
import { Progress } from "../../constants/progress";
import { Card } from "../Card";

interface OverviewCardProps {
  platform: Platform;
  pageViews: number;
  progress: Progress;
}
const OverviewCard = (props: OverviewCardProps) => {
  const { platform, pageViews, progress } = props;
  const imageSrc = Platforms[platform].imageUrl;
  return (
    <Card className="cards__card cards__card--overview">
      <span className="cards__page-views-label">Page Views</span>
      <img className="cards__sm-icon ml-auto" src={imageSrc} alt=""></img>
      <span className="cards__page-views-number">{pageViews}</span>
      <span className="cards__progress cards__progress--up mt-auto ml-auto">
        {progress.number} Today
      </span>
    </Card>
  );
};

export default OverviewCard;
