import { Point } from "./point.js";
import { Color } from "./color.js";

export class Image {
  width = 0; // width of the image
  height = 0; // height of the image
  steps = 0; // color steps
  points = [[]]; // array of points

  constructor(width = 256, steps = 32) {
    this.width = width;
    this.steps = steps;
    this.totalColors = this.steps ** 3; // total colors in the image
    this.height = this.totalColors / this.width; // height of the image
    this.generate();
  }

  generate() {
    const colors = this.shuffleColors();
    this.setPoints(colors);
    this.display(this.points);
  }

  getColors() {
    let colors = [];
    const startStep = 256 / this.steps;
    for (let r = 0; r < this.steps; r++) {
      for (let g = 0; g < this.steps; g++) {
        for (let b = 0; b < this.steps; b++) {
          colors.push(
            new Color(
              startStep * (r + 1),
              startStep * (g + 1),
              startStep * (b + 1)
            )
          );
        }
      }
    }
    return colors;
  }

  setPoints(colors) {
    const newPoints = [[]];
    for (let i = 0; i < this.height; i++) {
      newPoints[i] = [];
      for (let j = 0; j < this.width; j++) {
        newPoints[i][j] = [];
        newPoints[i][j] = new Point(i, j, colors[i * this.width + j]);
      }
    }
    this.points = [...newPoints];
  }

  shuffleColors() {
    const colors = this.getColors();
    return colors.sort(() => Math.random() - 0.5);
  }

  display() {
    const canvas = document.getElementById("canvas");
    for (let i = 0; i < this.height; i++) {
      const ul = document.createElement("ul");

      for (let j = 0; j < this.width; j++) {
        const point = this.points[i][j];
        const { x, y, color } = point;

        const pixel = document.createElement("li");
        pixel.style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`;

        ul.insertAdjacentElement("beforeend", pixel);
        canvas.insertAdjacentElement("beforeend", ul);
      }
    }
  }
}
