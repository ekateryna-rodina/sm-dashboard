import { Platform } from "../constants/platforms";
import { Direction, Scale } from "../constants/progress";

export const mainCards = [
  {
    username: "@nathanf",
    platform: Platform.Facebook,
    followers: 1987,
    progress: { number: 15, direction: Direction.Up },
  },
  {
    username: "@nathanf",
    platform: Platform.Twitter,
    followers: 1044,
    progress: { number: 99, direction: Direction.Up },
  },
  {
    username: "@realnathanf",
    platform: Platform.Instagram,
    followers: "11k",
    progress: { number: 1099, direction: Direction.Up },
  },
  {
    username: "Nathan F.",
    platform: Platform.YouTube,
    followers: 8239,
    progress: { number: 15, direction: Direction.Down },
  },
];

export const overviewCards = [
  {
    platform: Platform.Facebook,
    total: 87,
    progress: {
      number: 3,
      scale: Scale.PageViews,
      direction: Direction.Up,
    },
  },
  {
    platform: Platform.Facebook,
    total: 52,
    progress: {
      number: 2,
      scale: Scale.Likes,
      direction: Direction.Down,
    },
  },
  {
    platform: Platform.Instagram,
    total: 5462,
    progress: {
      number: 2257,
      scale: Scale.Likes,
      direction: Direction.Up,
    },
  },
  {
    platform: Platform.Instagram,
    total: "52k",
    progress: {
      number: 1375,
      scale: Scale.ProfileViews,
      direction: Direction.Up,
    },
  },
  {
    platform: Platform.Twitter,
    total: 117,
    progress: {
      number: 303,
      scale: Scale.Retweets,
      direction: Direction.Up,
    },
  },
  {
    platform: Platform.Twitter,
    total: 507,
    progress: {
      number: 553,
      scale: Scale.Likes,
      direction: Direction.Up,
    },
  },
  {
    platform: Platform.YouTube,
    total: 107,
    progress: {
      number: 19,
      scale: Scale.Likes,
      direction: Direction.Down,
    },
  },
  {
    platform: Platform.YouTube,
    total: 1407,
    progress: {
      number: 12,
      scale: Scale.TotalViews,
      direction: Direction.Down,
    },
  },
];
