import React from "react";
import { Platform } from "../../constants/platforms";
import { Progress } from "../../constants/progress";

interface MainCardProps {
  username: string;
  platform: Platform;
  followers: number;
  progress: Progress;
}
const MainCard = (props: any) => {
  return (
    <div className="cards__card cards__card--border-fb">
      <div className="cards__user-account">
        <img
          className="cards__sm-icon"
          src="./src/images/icon-facebook.svg"
          alt=""
        ></img>

        <span className="cards__username">@nathanf</span>
      </div>
      <div className="cards__subscribers">
        <div className="cards__subscribers-number">1987</div>
        <div className="cards__subscribers-label">followers</div>
      </div>
      <div className="cards__progress cards__progress--up">12 Today</div>
    </div>
  );
};

export default MainCard;
