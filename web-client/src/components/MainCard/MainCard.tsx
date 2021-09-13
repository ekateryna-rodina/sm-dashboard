import React from "react";
import Platforms, { Platform } from "../../constants/platforms";
import { Progress } from "../../constants/progress";
import { Card } from "../Card/Card";
import SocialMediaIcon from "../SocialMediaIcon/SocialMediaIcon";

interface MainCardProps {
  username: string;
  platform: Platform;
  followers: number | string;
  progress: Progress;
}
const MainCard = (props: MainCardProps) => {
  const { username, platform, followers, progress } = props;
  const cardClassName = `cards__card cards__card--main cards__card--border-${Platforms[platform].className}`;
  const progressClass = `cards__progress cards__progress--${progress.direction}`;
  const imageSrc = Platforms[platform].imageUrl;

  console.log(imageSrc);
  return (
    <Card className={cardClassName}>
      <div className="cards__user-account">
        {/* <YourSvg /> */}
        <SocialMediaIcon platform={platform} />

        <span className="cards__username">{username}</span>
      </div>
      <div className="cards__subscribers">
        <div className="cards__subscribers-number">{followers}</div>
        <div className="cards__subscribers-label">followers</div>
      </div>
      <div className={progressClass}>{progress.number} Today</div>
      {platform === Platform.Instagram && (
        <div className="cards__card-bg"></div>
      )}
    </Card>
  );
};

export default MainCard;
