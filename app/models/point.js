import { Color } from "./color.js";

export class Point {
  x = 0;
  y = 0;
  color = new Color(0, 0, 0);
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }
}
