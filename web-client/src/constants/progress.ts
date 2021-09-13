export enum Direction {
  Up = "up",
  Down = "down",
}
export enum Scale {
  Followers = "Followers",
  PageViews = "Page View",
  Likes = "Likes",
  ProfileViews = "Profile Views",
  TotalViews = "Total Views",
  Retweets = "Retweets",
}
export interface Progress {
  number: number;
  scale?: Scale;
  direction: Direction;
}
