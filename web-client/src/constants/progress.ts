export enum Direction {
  Up = "up",
  Down = "down",
}
export interface Progress {
  number: number;
  direction: Direction;
}
