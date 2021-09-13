import React from "react";
import { Platform } from "../../constants/platforms";
import { ReactComponent as FbIcon } from "../../images/icon-facebook.svg";
import { ReactComponent as InstaIcon } from "../../images/icon-instagram.svg";
import { ReactComponent as TwitterIcon } from "../../images/icon-twitter.svg";
import { ReactComponent as YoutubeIcon } from "../../images/icon-youtube.svg";

interface SocialMediaIconProps {
  platform: Platform;
  className?: string;
}
const Icons = {
  [Platform.Instagram]: <InstaIcon />,
  [Platform.Facebook]: <FbIcon />,
  [Platform.Twitter]: <TwitterIcon />,
  [Platform.YouTube]: <YoutubeIcon />,
};
const SocialMediaIcon = (props: SocialMediaIconProps) => {
  const { platform, className } = props;
  return <div className={`cards__sm-icon ${className}`}>{Icons[platform]}</div>;
};

export default SocialMediaIcon;
