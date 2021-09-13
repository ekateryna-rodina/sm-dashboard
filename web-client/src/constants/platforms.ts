import { PlatformsImageUrls } from "../../data/common";
import { EnumDictionary } from "../helpers/enumDictionary";

export type PlatformProps = {
  className: string;
  imageUrl: string;
};
export enum Platform {
  Instagram,
  Facebook,
  YouTube,
  Twitter,
}
const Platforms: EnumDictionary<Platform, PlatformProps> = {
  [Platform.Instagram]: {
    className: "instagram",
    imageUrl: PlatformsImageUrls.Instagram,
  },
  [Platform.Facebook]: {
    className: "fb",
    imageUrl: PlatformsImageUrls.Facebook,
  },
  [Platform.Twitter]: {
    className: "twitter",
    imageUrl: PlatformsImageUrls.Twitter,
  },
  [Platform.YouTube]: {
    className: "youtube",
    imageUrl: PlatformsImageUrls.YouTube,
  },
};

export default Platforms;
