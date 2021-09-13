import React from "react";
import { Platform } from "../../constants/platforms";
import { Progress } from "../../constants/progress";
import { Card } from "../Card";
import SocialMediaIcon from "../SocialMediaIcon/SocialMediaIcon";

interface OverviewCardProps {
  platform: Platform;
  total: number | string;
  progress: Progress;
}
const OverviewCard = (props: OverviewCardProps) => {
  const { platform, total, progress } = props;
  return (
    <Card className="cards__card cards__card--overview">
      <span className="cards__scale-label">{progress.scale?.toString()}</span>
      {/* <img className="cards__sm-icon ml-auto" src={imageSrc} alt=""></img> */}
      <SocialMediaIcon platform={platform} className="ml-auto" />
      <span className="cards__scale-number">{total}</span>
      <span
        className={`cards__progress cards__progress--${progress.direction} mt-auto ml-auto`}
      >
        {progress.number}% Today
      </span>
    </Card>
  );
};

export default OverviewCard;
